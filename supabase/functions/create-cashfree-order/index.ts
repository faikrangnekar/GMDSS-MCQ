import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
};

function json(body: unknown, status = 200) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { ...corsHeaders, "Content-Type": "application/json" },
  });
}

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }
  if (req.method !== "POST") {
    return json({ error: "Method not allowed" }, 405);
  }

  const supabaseUrl = Deno.env.get("SUPABASE_URL") || "";
  const anonKey = Deno.env.get("SUPABASE_ANON_KEY") || "";
  const serviceKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") || "";
  const appId = Deno.env.get("CASHFREE_APP_ID") || "";
  const secretKey = Deno.env.get("CASHFREE_SECRET_KEY") || "";
  const env = (Deno.env.get("CASHFREE_ENV") || "sandbox").toLowerCase();
  const apiVersion = Deno.env.get("CASHFREE_API_VERSION") || "2025-01-01";
  const amountPaise = Number(Deno.env.get("ACCESS_PRICE_PAISE") || "5000");
  const siteUrl = (Deno.env.get("SITE_URL") || "").trim().replace(/\/+$/, "");

  if (!supabaseUrl || !anonKey || !serviceKey || !appId || !secretKey) {
    return json({ error: "Payment is not configured on the server." }, 500);
  }
  if (!siteUrl) {
    return json({ error: "SITE_URL is not configured on the server." }, 500);
  }
  if (!Number.isInteger(amountPaise) || amountPaise < 100) {
    return json({ error: "Invalid ACCESS_PRICE_PAISE setting." }, 500);
  }

  const authHeader = req.headers.get("Authorization") || "";
  const token = authHeader.replace(/^Bearer\s+/i, "").trim();
  if (!token) {
    return json({ error: "Please log in before paying." }, 401);
  }

  const userClient = createClient(supabaseUrl, anonKey, {
    global: { headers: { Authorization: `Bearer ${token}` } },
    auth: { persistSession: false },
  });

  const { data: userData, error: userError } = await userClient.auth.getUser(token);
  const user = userData ? userData.user : null;
  if (userError || !user) {
    return json({ error: "Your session has expired. Please log in again." }, 401);
  }

  const admin = createClient(supabaseUrl, serviceKey, {
    auth: { persistSession: false },
  });

  const { data: profile } = await admin
    .from("profiles")
    .select("display_name, phone_number")
    .eq("id", user.id)
    .maybeSingle();

  const digits = String(profile?.phone_number || "").replace(/\D/g, "");
  const phone = digits.length >= 10 ? digits.slice(-10) : "";

  const orderId = `gmdss_${Date.now()}_${crypto.randomUUID().slice(0, 8)}`;

  const customer: Record<string, string> = { customer_id: user.id };
  if (user.email) customer.customer_email = user.email;
  if (phone) customer.customer_phone = phone;

  const orderBody: Record<string, unknown> = {
    order_id: orderId,
    order_amount: amountPaise / 100,
    order_currency: "INR",
    customer_details: customer,
    order_note: "GMDSS MCQ - 30 days access",
    order_tags: { user_id: user.id },
    order_meta: {
      notify_url: `${supabaseUrl}/functions/v1/cashfree-webhook`,
      return_url: `${siteUrl}?order_id={order_id}`,
    },
  };

  const { error: insertError } = await admin.from("payment_orders").insert({
    order_id: orderId,
    user_id: user.id,
    amount: amountPaise,
    currency: "INR",
    status: "created",
  });
  if (insertError) {
    return json({ error: "Could not save the order. Please try again." }, 500);
  }

  const baseUrl =
    env === "production"
      ? "https://api.cashfree.com/pg"
      : "https://sandbox.cashfree.com/pg";

  let cfResponse: Response;
  try {
    cfResponse = await fetch(`${baseUrl}/orders`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-client-id": appId,
        "x-client-secret": secretKey,
        "x-api-version": apiVersion,
      },
      body: JSON.stringify(orderBody),
    });
  } catch {
    await admin.from("payment_orders").update({ status: "failed" }).eq("order_id", orderId);
    return json({ error: "Could not reach Cashfree. Please try again." }, 502);
  }

  const cfBody = await cfResponse.json().catch(() => null);
  if (!cfResponse.ok || !cfBody || !cfBody.payment_session_id) {
    await admin.from("payment_orders").update({ status: "failed" }).eq("order_id", orderId);
    const message = cfBody && (cfBody.message || cfBody.error)
      ? String(cfBody.message || cfBody.error)
      : "Cashfree could not create the order.";
    return json({ error: message }, 502);
  }

  return json({
    order_id: orderId,
    payment_session_id: cfBody.payment_session_id,
    mode: env === "production" ? "production" : "sandbox",
  });
});
