import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

function json(body: unknown, status = 200) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { "Content-Type": "application/json" },
  });
}

function timingSafeEqual(a: string, b: string) {
  if (a.length !== b.length) return false;
  let diff = 0;
  for (let i = 0; i < a.length; i++) {
    diff |= a.charCodeAt(i) ^ b.charCodeAt(i);
  }
  return diff === 0;
}

async function sign(secret: string, payload: string) {
  const key = await crypto.subtle.importKey(
    "raw",
    new TextEncoder().encode(secret),
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["sign"],
  );
  const signature = await crypto.subtle.sign(
    "HMAC",
    key,
    new TextEncoder().encode(payload),
  );
  const bytes = new Uint8Array(signature);
  let binary = "";
  for (let i = 0; i < bytes.length; i++) {
    binary += String.fromCharCode(bytes[i]);
  }
  return btoa(binary);
}

Deno.serve(async (req) => {
  if (req.method !== "POST") {
    return json({ error: "Method not allowed" }, 405);
  }

  const supabaseUrl = Deno.env.get("SUPABASE_URL") || "";
  const serviceKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") || "";
  const secretKey = Deno.env.get("CASHFREE_SECRET_KEY") || "";
  if (!supabaseUrl || !serviceKey || !secretKey) {
    return json({ error: "Webhook is not configured." }, 500);
  }

  // Signature must be checked against the raw body, not parsed JSON.
  const rawBody = await req.text();
  const timestamp = req.headers.get("x-webhook-timestamp") || "";
  const receivedSignature = req.headers.get("x-webhook-signature") || "";
  if (!timestamp || !receivedSignature) {
    return json({ error: "Missing signature headers." }, 400);
  }

  const expectedSignature = await sign(secretKey, timestamp + rawBody);
  if (!timingSafeEqual(expectedSignature, receivedSignature)) {
    return json({ error: "Invalid signature." }, 401);
  }

  let payload: any;
  try {
    payload = JSON.parse(rawBody);
  } catch {
    return json({ error: "Invalid JSON." }, 400);
  }

  const eventType = String(payload.type || payload.event_type || "");
  const paymentStatus = String(payload.data?.payment?.payment_status || "").toUpperCase();
  if (
    !eventType.toUpperCase().includes("PAYMENT_SUCCESS") &&
    paymentStatus !== "SUCCESS"
  ) {
    return json({ ok: true, ignored: eventType || "unknown" });
  }

  const data = payload.data || {};
  const orderId = data.order?.order_id || data.order_id;
  const cfPaymentId =
    data.payment?.cf_payment_id ||
    data.payment?.payment_id ||
    data.cf_payment_id;
  const amount = Number(
    data.order?.order_amount ?? data.payment?.payment_amount,
  );
  const currency = String(
    data.order?.order_currency ||
      data.payment?.payment_currency ||
      "INR",
  ).toUpperCase();

  if (!orderId || !cfPaymentId) {
    return json({ error: "Missing order/payment id." }, 400);
  }
  if (currency !== "INR" || !Number.isFinite(amount)) {
    return json({ error: "Unexpected amount/currency." }, 400);
  }

  const admin = createClient(supabaseUrl, serviceKey, {
    auth: { persistSession: false },
  });

  const { data: applied, error } = await admin.rpc("apply_cashfree_payment", {
    p_order_id: String(orderId),
    p_cf_payment_id: String(cfPaymentId),
    p_amount_paise: Math.round(amount * 100),
  });

  if (error) {
    console.error("apply_cashfree_payment failed", error);
    return json({ error: "Could not apply payment." }, 500);
  }

  return json({ ok: true, applied: !!applied });
});
