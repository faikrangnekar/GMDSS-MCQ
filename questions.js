/*
============================================================
 GMDSS MCQ QUESTION DATABASE
============================================================
 All questions below are PLACEHOLDER / SAMPLE questions.
 They are ONLY meant so you can test the complete application.
 Replace them with your real GMDSS question bank before use.

 Format:
   answer: 0 = Option A, 1 = Option B, 2 = Option C, 3 = Option D
   If you add a 5th option "Option E", set answer 4 for it.
   The interface automatically supports 4 or 5 options.

 To add a new set, create questionSets.set2, set3, etc.
 Each set should contain exactly 30 questions for a full test.
 The home page Test Set dropdown is built automatically from
 the keys present in this object, so no other change is needed.
============================================================
*/

const questionSets = {
  set1: [
    {
      question: "[PLACEHOLDER 1] GMDSS stands for...",
      options: [
        "Global Maritime Distress and Safety System",
        "General Maritime Data and Safety System",
        "Global Maritime Data and Security System",
        "General Maritime Distress and Security System"
      ],
      answer: 0
    },
    {
      question: "[PLACEHOLDER 2] How many options should a correct answer index normally be?",
      options: [
        "0 = A",
        "1 = B",
        "2 = C",
        "3 = D"
      ],
      answer: 0
    },
    {
      question: "[PLACEHOLDER 3] The GMDSS is based on which principle?",
      options: [
        "Search and rescue authorities and shipping in the vicinity are alerted to a ship in distress",
        "Ships must carry a paper record of all communications",
        "Every ship must use voice radio only",
        "Coastal stations must broadcast weather only"
      ],
      answer: 0
    },
    {
      question: "[PLACEHOLDER 4] Which frequency is associated with distress and safety calling?",
      options: [
        "VHF Channel 16 (156.8 MHz)",
        "VHF Channel 9",
        "HF Channel 11",
        "UHF Channel 1"
      ],
      answer: 0
    },
    {
      question: "[PLACEHOLDER 5] A Digital Selective Calling (DSC) distress alert should include...",
      options: [
        "the ship's identity and position",
        "only the ship's name",
        "the captain's name only",
        "the destination port only"
      ],
      answer: 0
    },
    {
      question: "[PLACEHOLDER 6] What does SART stand for?",
      options: [
        "Search and Rescue Transponder",
        "Search and Rescue Telephone",
        "Signal and Rescue Transmitter",
        "Search and Rescue Tracker"
      ],
      answer: 0
    },
    {
      question: "[PLACEHOLDER 7] Which satellite system is used for GMDSS distress alerting?",
      options: [
        "INMARSAT",
        "GPS only",
        "AM radio",
        "FM broadcast"
      ],
      answer: 0
    },
    {
      question: "[PLACEHOLDER 8] A ship in distress in the GMDSS generally uses which global system?",
      options: [
        "COSPAS-SARSAT",
        "Loran-C",
        "Satellite TV",
        "Wi-Fi"
      ],
      answer: 0
    },
    {
      question: "[PLACEHOLDER 9] NAVTEX is used for...",
      options: [
        "transmitting navigational and meteorological warnings",
        "voice telephone calls",
        "entertainment broadcasts",
        "cargo monitoring"
      ],
      answer: 0
    },
    {
      question: "[PLACEHOLDER 10] What is the primary purpose of the GMDSS?",
      options: [
        "to ensure the safety of ships and persons at sea",
        "to control the speed of ships",
        "to collect passenger information",
        "to monitor fishing quotas"
      ],
      answer: 0
    },
    {
      question: "[PLACEHOLDER 11] VHF Channel 16 is monitored by...",
      options: [
        "ships and coast stations for distress and safety",
        "only private yachts",
        "only fishing vessels",
        "nobody after dark"
      ],
      answer: 0
    },
    {
      question: "[PLACEHOLDER 12] DSC messages are transmitted using...",
      options: [
        "digital selective calling coding on radio frequencies",
        "analogue voice only",
        "Morse code only",
        "signalling flags only"
      ],
      answer: 0
    },
    {
      question: "[PLACEHOLDER 13] The GMDSS was introduced to replace...",
      options: [
        "the old international distress frequency of 500 kHz with a modern digital system",
        "the compass system",
        "the engine telegraph",
        "the anchor windlass"
      ],
      answer: 0
    },
    {
      question: "[PLACEHOLDER 14] GMDSS carriage requirements depend on...",
      options: [
        "the sea areas the ship sails in",
        "the ship's paint colour",
        "the ship's age only",
        "the cargo value"
      ],
      answer: 0
    },
    {
      question: "[PLACEHOLDER 15] EPIRB stands for...",
      options: [
        "Emergency Position Indicating Radio Beacon",
        "Emergency Port Information Radio Beacon",
        "Electronic Position Indicating Radio Beacon",
        "Emergency Position Indicator Relay Beacon"
      ],
      answer: 0
    },
    {
      question: "[PLACEHOLDER 16] An EPIRB operates on which frequency?",
      options: [
        "406 MHz to satellites",
        "27 MHz CB",
        "1.6 GHz Wi-Fi",
        "50 Hz mains"
      ],
      answer: 0
    },
    {
      question: "[PLACEHOLDER 17] Which of the following is a GMDSS sea area?",
      options: [
        "Sea Area A1",
        "Sea Area Z9",
        "Sea Area M",
        "Sea Area X"
      ],
      answer: 0
    },
    {
      question: "[PLACEHOLDER 18] Sea Area A1 is covered by...",
      options: [
        "VHF coastal stations",
        "HF skywave only",
        "satellite television",
        "mobile phone towers"
      ],
      answer: 0
    },
    {
      question: "[PLACEHOLDER 19] The distress, urgency and safety calls are ranked in which order?",
      options: [
        "Distress, urgency, safety",
        "Safety, urgency, distress",
        "Urgency, distress, safety",
        "They all have the same rank"
      ],
      answer: 0
    },
    {
      question: "[PLACEHOLDER 20] What action is taken after receiving a distress alert?",
      options: [
        "Acknowledge it and assist if able",
        "Ignore it if far away",
        "Wait for the ship to repeat it",
        "Log it only at sunrise"
      ],
      answer: 0
    },
    {
      question: "[PLACEHOLDER 21] MF/HF DSC distress calls should be acknowledged by...",
      options: [
        "ships and coast stations receiving the call",
        "only the ship's owners",
        "only the port authority after 1 hour",
        "no one"
      ],
      answer: 0
    },
    {
      question: "[PLACEHOLDER 22] Which equipment provides short-range distress alerting in Sea Area A1?",
      options: [
        "VHF radio with DSC",
        "AM broadcast receiver",
        "GPS plotter",
        "echo sounder"
      ],
      answer: 0
    },
    {
      question: "[PLACEHOLDER 23] What is the purpose of a dual watch capability?",
      options: [
        "to watch two channels and receive distress alerts on each",
        "to watch television channel controls",
        "to watch the radar display",
        "to watch the cargo deck"
      ],
      answer: 0
    },
    {
      question: "[PLACEHOLDER 24] The automatic identification system mentioning two VHF channels relates to...",
      options: [
        "broadcasting ship identity and position to other vessels and shore",
        "music transmission only",
        "rigging checks",
        "garbage sorting"
      ],
      answer: 0
    },
    {
      question: "[PLACEHOLDER 25] A distress priority call on VHF should later move to...",
      options: [
        "the working channel for distress traffic",
        "weather channel",
        "port control",
        "the cargo hold channel"
      ],
      answer: 0
    },
    {
      question: "[PLACEHOLDER 26] GMDSS watchkeeping requires...",
      options: [
        "monitoring appropriate distress frequencies according to the equipment fitted",
        "constant television watching",
        "only checking at midnight",
        "no monitoring while at sea"
      ],
      answer: 0
    },
    {
      question: "[PLACEHOLDER 27] Which term describes cutting a signal by saying 'OUT'?",
      options: [
        "End of transmission, expecting a reply",
        "Begin of transmission",
        "I am lost",
        "Repeat the message twice"
      ],
      answer: 0
    },
    {
      question: "[PLACEHOLDER 28] A radio operator should always...",
      options: [
        "test equipment according to the maintenance schedule",
        "unplug the antenna in heavy weather",
        "leave equipment on at maximum volume",
        "never communicate with coast stations"
      ],
      answer: 0
    },
    {
      question: "[PLACEHOLDER 29] What should be carried out daily on GMDSS equipment?",
      options: [
        "A routine check / test call as required",
        "A complete disassembly",
        "Painting the equipment",
        "Changing the antenna height"
      ],
      answer: 0
    },
    {
      question: "[PLACEHOLDER 30] Which of these best defines a distress phase?",
      options: [
        "A person or ship is in grave and imminent danger and requires immediate assistance",
        "A ship is slightly behind schedule",
        "A crew member is feeling unwell",
        "The ship has run low on supplies"
      ],
      answer: 0
    }
  ]
};