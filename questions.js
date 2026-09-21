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
      question: "Concept of GMDSS is to:",
      options: [
        "Provide reliable ship-to-shore communications in addition to ship-to-ship alerting communications.",
        "GMDSS uses terrestrial and satellite radio paths for alerting and subsequent communications.",
        "GMDSS achieves a rapid coordinated response to distress alerting",
        "All above"
      ],
      answer: 3
    },
    {
      question: "In addition to distress communications, GMDSS system also provide for:",
      options: [
        "Urgency and Safety communications and promulgation of MSI and SAR-related information.",
        "Facsimile communications",
        "Data communications",
        "Internet enabled voice and text communications"
      ],
      answer: 0
    },
    {
      question: "GMDSS applies to:",
      options: [
        "All cargo Ships of 300 GRT and above and all passenger ships irrespective of size, on international trade",
        "Pilot vessels and VTS stations in port and harbour for safe navigation of all ships",
        "Ship sailing in international waters and is more than 500 GRT",
        "All ships sailing internationally"
      ],
      answer: 0
    },
    {
      question: "GMDSS is fully implemented with effect from:",
      options: ["01.01.1981", "01.01.1990", "01.02.1992", "01.02.1999"],
      answer: 3
    },
    {
      question: "Sea Area A1 is defined as:",
      options: [
        "An area within in 30 nautical miles from coastal area in which communication is possible",
        "An area within the radiotelephone coverage of at least one very high frequency (VHF) coast station in which continuous DSC alerting is available, as may be defined by the contracting government",
        "An area within the VHF coverage of at least one coast radio station",
        "An area outside the territorial limits, within the coverage of VHF coast radio station"
      ],
      answer: 1
    },
    {
      question: "Sea Area A2 is defined as:",
      options: [
        "An area, excluding Sea Area A1, within the radiotelephone coverage of at least one MF coast radio station in which continuous DSC alerting is available, as may be decided by the contracting government",
        "An area outside the VHF coverage area within the coverage of a MF coast radio station",
        "An area excluding the Sea Area A1, within the coverage of at least one MF coast radio station beyond 30 nautical miles",
        "An area within the coverage of a MF coast radio station up to a distance of 200-300 NM"
      ],
      answer: 0
    },
    {
      question: "Sea Area A3 is defined as:",
      options: [
        "An area, excluding Sea Area A1 and A2, within the coverage of satellite communications",
        "An area, outside the coverage area of VHF and MF, within the coverage of at least one HF coast radio station",
        "An area, excluding Sea Area A1 and A2, within the coverage of an Inmarsat geostationary satellite in which continuous alerting is available",
        "An area, excluding Sea Area A1 and A2, within the coverage of a recognised mobile satellite service supported by the ship earth station on board in which continuous alerting is available"
      ],
      answer: 3
    },
    {
      question: "Urgency and Safety Communications is one of the functional requirements under GMDSS:",
      options: ["FALSE", "MAYBE", "TRUE", "NO"],
      answer: 2
    },
    {
      question: "Under the revised modernisation of GMDSS, reliability methods maintenance requirements to ensure equipment availability is by following:",
      options: [
        "Duplication of equipment, Shore based maintenance contract, at sea maintenance options",
        "Duplication of equipment, at sea maintenance along with sufficient spares for repairs",
        "Duplication of equipment, electronics officer, and related manuals, spares and documents",
        "Radio equipment repair qualified crew to repair radio equipment at base"
      ],
      answer: 0
    },
    {
      question: "A ship sailing is Sea Areas other than Sea Area A1, must carry an operator:",
      options: [
        "Holding a first- or second-class Radio-Electronic Certificate or a General Operator's Certificate",
        "Holding a Restricted Operator's Certificate & Second-Class Radio Electronic Certificate",
        "Holding a Restricted Operator's Certificate & a First-Class Radio Electronic Certificate",
        "Holding a amateur certificate and qualified as trained radio operator",
        "Holding any certificate qualified to operate VHF radio"
      ],
      answer: 0
    },
    {
      question: "A ship sailing in Sea Area A1 must carry an operator:",
      options: [
        "Holding a radio operator certificate",
        "Holding qualifications to operate and service radio",
        "Holding a Restricted or a General Operator's Certificate or First- or Second- Class Radio Electronic Certificate",
        "Holding a qualification of electronics and telecommunications for radio operations"
      ],
      answer: 2
    },
    {
      question: "The international convention on STCW requires all deck officers to hold an appropriate certificate related to the GMDSS (generally GOC):",
      options: ["TRUE", "FALSE", "NO COMMENTS", "MAYBE"],
      answer: 0
    },
    {
      question: "GMDSS ship of GRT 300 to GRT 499 requires following life-saving safety radios:",
      options: [
        "One EPIRB, One SART/AIS-SART, and Two two-way VHF GMDSS handheld radiotelephone walkie talkies",
        "One EPIRB, One SART, and One two-way VHF GMDSS handheld radiotelephone walkie talkies",
        "One EPIRB and Two two-way VHF GMDSS handheld radiotelephone walkie talkies",
        "One EPIRB and One SART/AIS-SART"
      ],
      answer: 0
    },
    {
      question: "GMDSS ship above 500 GRT requires following life-saving safety radios:",
      options: [
        "One EPIRB, One SART/AIS-SART, and Three two-way VHF GMDSS handheld radiotelephone walkie talkies",
        "One EPIRB, Two SART/AIS-SARTs, and Three two-way VHF GMDSS handheld radiotelephone walkie talkies",
        "One EPIRB One SART/AIS-SART and Two two-way VHF GMDSS handheld radiotelephone walkie talkies",
        "One EPIRB and One SART/AIS-SART and One two-way VHF GMDSS handheld radiotelephone walkie talkies"
      ],
      answer: 1
    },
    {
      question: "Additional radio equipment for a passenger ship is:",
      options: [
        "A remote distress alarm panel for transmitting as well as receiving indication of distress alerts from the position of conning, generally from where the ship is navigated",
        "A remote VHF radio operations control to allow ship to communicate with other ships",
        "A remote radiocommunications access for operating all the equipment for any emergency",
        "A remote radio control device to control VHF, MF, HF and all satellite radio equipment"
      ],
      answer: 0
    },
    {
      question: "Power supply source for a GMDSS radio station is:",
      options: [
        "Main's ship power supply and Ship's Emergency Generator",
        "Main's ship power supply, Ship's Emergency Generator and a dedicated radio battery bank called the Reserve Source of Energy",
        "Main's ship power supply and a dedicated battery invertor emergency generator",
        "Main's ship power supply and an uninterrupted power supply generator source"
      ],
      answer: 1
    },
    {
      question: "General and operation radio communications is outside the domain of functional requirement under the revised modernisation of GMDSS:",
      options: ["TRUE", "FALSE", "NO COMMENTS", "MAYBE"],
      answer: 0
    },
    {
      question: "GMDSS Radio Regulations requires that all rules during distress must be strictly followed, specifically pertaining to the obtaining of help for saving life and asset:",
      options: ["YES", "NO", "MAYBE", "NO COMMENTS"],
      answer: 0
    },
    {
      question: "Recognised mobile satellite service under GMDSS for internationally trading ships is:",
      options: [
        "Inmarsat C",
        "Inmarsat FBB -- MST (Marine Safety Terminal) also called FST (Fleet Safety Terminal)",
        "Iridium",
        "All Above"
      ],
      answer: 3
    },
    {
      question: "Life safety radio equipment to be carried along with in lifeboat during abandoning of a vessel",
      options: [
        "SART/AIS-SART and EPIRB",
        "Two-way GMDSS VHF radiotelephone walkie talkie along with sealed battery, EPIRB and SART/AIS-SART",
        "EPIRB and VHF radiotelephone walkie talkie",
        "SART/AIS-SART and two-way GMDSS VHF radiotelephone walkie talkie along with sealed battery"
      ],
      answer: 3
    },
    {
      question: "Safety Radio Certificate is issued by:",
      options: ["IMO", "DG Shipping -- MMD", "WPC -- DOT", "ITU"],
      answer: 1
    },
    {
      question: "Maritime Mobile Station License is issued by:",
      options: ["DG Shipping -- MMD", "WPC -- DOT", "ITU", "IMO"],
      answer: 1
    },
    {
      question: "During distress following mode of communications may be used to draw attention:",
      options: [
        "VHF and MF",
        "MF/HF and satellite",
        "Any",
        "Satellite, VHF, MF/HF, mobile telephone"
      ],
      answer: 2
    },
    {
      question: "When abandoning a vessel a GMDSS operator should:",
      options: [
        "take safe custody of ship station license, SRT certificate, cash & documents",
        "switch off all radio equipment",
        "put off the mains switch to avoid fire",
        "keep all the equipment in distress transmitting mode."
      ],
      answer: 3
    },
    {
      question: "Under GMDSS a vessel in Distress should:",
      options: [
        "strictly follow the IMO guidelines when calling for assistance",
        "observe all GMDSS regulations",
        "use any means at its disposal to attract attention & get the necessary help",
        "use Inmarsat / Iridium users guide to call for assistance"
      ],
      answer: 2
    },
    {
      question: "The line-of-sight propagation is mainly associated with:",
      options: ["HF", "LF", "VHF/UHF", "MF"],
      answer: 2
    },
    {
      question: "The line-of-sight distance can be increased by:",
      options: [
        "Increasing the antenna heights at RX and TX",
        "Reducing the antenna heights at RX / TX",
        "Increasing the gain of the Antenna",
        "None of the above"
      ],
      answer: 0
    },
    {
      question: "MUF is defined as:",
      options: [
        "the maximum usable frequency during day.",
        "The max freq which can be reflected by an ionosphere over a particular path for communications.",
        "Is the wanted frequency plus twice IF",
        "The minimum usable frequency during night that can be used for communication"
      ],
      answer: 1
    },
    {
      question: "The skip distance in communication is:",
      options: [
        "direct waves",
        "the distance from the Tx to where the first sky wave returns.",
        "The distance along the ground",
        "where the ground wave ends and the first sky wave returns."
      ],
      answer: 1
    },
    {
      question: "Squelch control is used to eliminate",
      options: ["static interference", "electrical disturbances", "receiver noise", "unwanted carrier"],
      answer: 2
    }
  ],

  set2: [
    {
      question: "Fading is an phenomenon associated mainly with:",
      options: ["HF communications", "MF communications during daytime", "Microwave communications", "VHF communications"],
      answer: 0
    },
    {
      question: "The main mode of propagation of HF is:",
      options: ["sky waves", "ground waves", "direct waves", "all"],
      answer: 0
    },
    {
      question: "The OTF is",
      options: [
        "The maximum usable frequency during day",
        "The critical frequency at night",
        "85% of the maximum usable freq.",
        "The lowest usable freq for. Communication."
      ],
      answer: 2
    },
    {
      question: "In the frequency band 500 to 3000 KHz the communication is by the way of:",
      options: ["ground waves", "sky waves", "space waves", "all of the above"],
      answer: 0
    },
    {
      question: "The frequency range 300 to 3000 KHz is called:",
      options: ["Low frequency", "High frequency", "Medium frequency", "Ultra- high frequency"],
      answer: 2
    },
    {
      question: "In a HF communication link the following is employed to reduce the effect of fading:",
      options: ["Automatic Gain control", "Audio Gain control", "Clarifier", "Squelch control"],
      answer: 0
    },
    {
      question: "The critical frequency is",
      options: [
        "The MUF during day for communication",
        "The optimum working freq for communication",
        "The frequency which penetrates the ionosphere",
        "For a given layer the maximum frequency that can be propagated at vertical incidence"
      ],
      answer: 3
    },
    {
      question: "In Receivers squelch is used to:",
      options: [
        "Cut-off the speaker when there is no transmission on selected freq.",
        "Improve Sensitivity",
        "Reduce the noise and effects of fading",
        "Improve Selectivity"
      ],
      answer: 0
    },
    {
      question: "In MF/HF receiver AGC is being used to:",
      options: ["Improve Selectivity", "Improve Sensitivity", "Reduce effects of Fading", "Tune Antenna"],
      answer: 2
    },
    {
      question: "In a receiver Volume control varies the:",
      options: [
        "RF Voltage received by receiving Antenna",
        "AF Voltage applied to AF Amplifier",
        "RF Voltage applied to de-modulator",
        "All the above"
      ],
      answer: 1
    },
    {
      question: "Top loading of an antenna will",
      options: [
        "increase the electrical length",
        "increase the bandwidth",
        "decrease the electrical length",
        "decrease the bandwidth"
      ],
      answer: 0
    },
    {
      question: "A half wave dipole antenna operating on 150 MHz will have a length of",
      options: ["2.0 mtrs", "0.2 mtrs", "20 mtrs", "0.02 mtrs"],
      answer: 0
    },
    {
      question: "The freq is inversely proportional to",
      options: ["amplitude", "Phase", "Speed", "Time of one cycle"],
      answer: 3
    },
    {
      question: "Critical freq during the day time is",
      options: [
        "More than that of night time",
        "Less than that of night time",
        "Same as during the night time",
        "80% of MUF"
      ],
      answer: 0
    },
    {
      question: "An attenuator is used to avoid",
      options: [
        "Interference from a nearby station",
        "Fading",
        "To prevent damage of the receiver from a station nearby",
        "Static"
      ],
      answer: 2
    },
    {
      question: "To receive the weak signal the Squelch control will be turned to",
      options: ["Maximum", "Minimum", "No Effect squelch has", "Midway"],
      answer: 1
    },
    {
      question: "Ionospheric propagation is used for the following frequencies",
      options: ["300 - 3000 KHz", "3000 - 30000 KHz", "30000 - 300000 KHz", "30 - 300 KHz"],
      answer: 1
    },
    {
      question: "The sensitivity of a receiving system is:",
      options: [
        "its ability to handle high signal strengths",
        "its capability to receive the weakest signal",
        "its characteristic to respond to distress alerts",
        "its ability to produce original signal"
      ],
      answer: 1
    },
    {
      question: "M.U.F. is higher in summer than in winter because:",
      options: [
        "the density of ionisation is less in summer.",
        "the density of Ionisation is more in summer",
        "the D layer disappears in summer",
        "OTF is less in summer."
      ],
      answer: 1
    },
    {
      question: "Type of VHF antenna used:",
      options: ["Omni-directional", "Parabolic antenna", "half wavelength dipole antenna", "Yagi Uda antenna"],
      answer: 0
    },
    {
      question: "The skip distance in communication is:",
      options: [
        "where the ground wave reaches",
        "where the ground wave ends",
        "where the sky wave ends",
        "where the first sky wave returns"
      ],
      answer: 3
    },
    {
      question: "Modulation is the process of:",
      options: [
        "mixing of Audio signal with RF carrier",
        "mixing of RF carrier with Audio carrier",
        "mixing of two RF carriers to get side bands",
        "none of the above"
      ],
      answer: 0
    },
    {
      question: "The main advantage of frequency modulation other than amplitude modulation is :",
      options: [
        "at the receiver large increase in noise",
        "at the receiver no noise at all",
        "at the receiver large decrease in noise",
        "none of the above"
      ],
      answer: 2
    },
    {
      question: "If RF is 4 MHz and the IF is 100 kHz then oscillator frequency should be",
      options: ["4000 kHz", "104 kHz", "96 kHz", "4100 kHz"],
      answer: 3
    },
    {
      question: "J3E emission are SSB transmission with",
      options: ["Full carrier", "Suppressed carrier", "Reduced carrier", "None of the above"],
      answer: 1
    },
    {
      question: "In frequency modulation the frequency of the carrier varies with:",
      options: [
        "The amplitude of the audio",
        "The frequency of the audio",
        "The amplitude of the carrier",
        "The frequency of the carrier"
      ],
      answer: 0
    },
    {
      question: "The frequency to which the incoming signal is changed in super heterodyne reception is called:",
      options: ["amplitude frequency", "radio frequency", "intermediate frequency", "modulated frequency"],
      answer: 2
    },
    {
      question: "Critical frequency during the day time is",
      options: [
        "More than that of night time",
        "Less than that of night time",
        "Same as during the night time",
        "80% of MUF"
      ],
      answer: 0
    },
    {
      question: "One of the advantages of using J3E",
      options: [
        "Less current is drawn from the batteries then H3E",
        "The signal is less efficient than R3E",
        "The received signal is clearer than H3E",
        "The signal contains less power than H3E"
      ],
      answer: 0
    },
    {
      question: "On an MF transceiver, DUPLEX operation is the use of one",
      options: [
        "Handset for MF RT and another handset for HF/RT",
        "Frequency to transmit and another frequency to receive simultaneously",
        "Control to change RF gain and another control to the AF gain",
        "Battery bank to power the transmitter and another battery bank for the receiver"
      ],
      answer: 1
    }
  ],

  set3: [
    {
      question: "Which to the following emission occupies less Radio Spectrum",
      options: ["J3E", "FIB", "F3E", "A3E"],
      answer: 0
    },
    {
      question: "The standard IF value for amplitude modulated super heterodyne receivers is:",
      options: ["550 KHz", "455 KHz", "660 KHz", "720 KHz"],
      answer: 1
    },
    {
      question: "The RF receiver's ability to reject unwanted signal is called:",
      options: ["Selectivity", "Sensitivity", "Signal to Noise Ratio", "Efficiency"],
      answer: 0
    },
    {
      question: "The radio transmitters are categorized into types based on the type of modulation?",
      options: ["One", "Two", "Three", "Four"],
      answer: 1
    },
    {
      question: "In which one of the following broadcasting the stereophonic transmission is not possible?",
      options: ["Amplitude modulation", "Frequency modulation", "Both A and B", "None of the above"],
      answer: 0
    },
    {
      question: "Marine VHF DSC communications use G2B emission, the modulation bandwidth is",
      options: ["100 Hz", "304 Hz", "2.16 KHz", "134 Hz"],
      answer: 2
    },
    {
      question: "The modulation and bandwidth used in MF/HF DSC communications is",
      options: ["J2B 134 Hz", "J3E 2.7 KHz", "G2B 2.16 KHz", "H3E 3.0 KHz"],
      answer: 0
    },
    {
      question: "Skip distance is",
      options: [
        "Distance between transmitter and the first point at which sky wave returns",
        "Distance between transmitter and ATU",
        "Safe Distance at which satellite equipment antenna is placed from radar antenna",
        "Safe Distance between radar and other installed antenna on the antenna deck"
      ],
      answer: 0
    },
    {
      question: "Critical frequency is",
      options: [
        "Frequency used to communicate between two points in a given ionospheric layer",
        "Frequency which does not return to earth for a given ionospheric layer",
        "Frequency which returns vertically to earth for a given ionospheric layer",
        "Frequency used in transmitter and receiver to modulate and demodulate signals"
      ],
      answer: 2
    },
    {
      question: "Space wave using line of sight communications is used in following communications",
      options: ["Satellite communications", "MF communications", "HF communications", "VHF communications"],
      answer: 3
    },
    {
      question: "Surface wave also called as ground wave is used for",
      options: ["VHF communications", "HF communications", "MF communications", "Satellite communications"],
      answer: 2
    },
    {
      question: "Sky wave also called as ionospheric wave is used for",
      options: ["HF communications", "Satellite communications", "VHF communications", "Submarine communications"],
      answer: 0
    },
    {
      question: "Capture effect is present in",
      options: ["VHF communication", "HF transmissions", "MF receivers", "Satellite communications"],
      answer: 0
    },
    {
      question: "MF may use sky wave and ground wave during night communications",
      options: ["TRUE", "FALSE", "NOT POSSIBLE", "NO COMMENTS"],
      answer: 0
    },
    {
      question: "Which one of the following radio wave transmitters are used in radar and satellite communication?",
      options: ["Long wave", "Medium wave", "Short wave", "Super high frequency"],
      answer: 3
    },
    {
      question: "Which one of the following radio wave transmitters are used in AM broadcasting?",
      options: ["Long wave", "Medium wave", "Short wave", "Very high frequency"],
      answer: 1
    },
    {
      question: "Which one of the following broadcastings requires larger transmission bandwidth?",
      options: ["Amplitude modulation", "Frequency modulation", "Both a and b", "None of the above"],
      answer: 1
    },
    {
      question: "IF values of AM receivers lie between",
      options: ["50 KHz to 250 KHz", "5 KHz to 25 KHz", "10 KHz to 25 KHz", "430 KHz to 25 MHz"],
      answer: 0
    },
    {
      question: "The number of amplification stages of a radio receiver is",
      options: ["Two", "Three", "Less than three", "More than three"],
      answer: 3
    },
    {
      question: "In simplex channel, the flow of data is",
      options: ["In both directions, but one at a time", "Always in both direction", "Always in one direction", "None of the above"],
      answer: 0
    },
    {
      question: "The main source of energy for a satellite is",
      options: ["Solar cell", "Fuel cell", "Magneto hydrodynamic generator", "Battery"],
      answer: 0
    },
    {
      question: "An example of a receiver is",
      options: ["NAVTEX", "EPIRB", "Marine VHF Radio", "SART"],
      answer: 0
    },
    {
      question: "An example of a transmitter is",
      options: ["MF/HF Radio", "SART", "EPIRB", "NAVTEX"],
      answer: 2
    },
    {
      question: "Receiver clarifier is used for",
      options: [
        "Fine tuning",
        "Frequency selection",
        "Selection of the frequency mode of emission",
        "Choosing the subsequent mode of communication"
      ],
      answer: 0
    },
    {
      question: "Sensitivity is a function described as",
      options: [
        "Ability of a receiver to receive weak signals",
        "Ability of a receiver to select the correct frequency chosen",
        "Ability of a receiver to produce a stereophonic sound at speaker",
        "Ability of a receiver to accept or reject wanted or unwanted frequency"
      ],
      answer: 0
    },
    {
      question: "Selectivity is described as a function used to",
      options: [
        "Accept wanted signal and reject unwanted signal",
        "Select subsequent voice distress frequency in the Marine VHF Band",
        "Select distress priority and pre-empt urgency, safety and routine communication",
        "Select voice communication option subsequent to sending of an alert"
      ],
      answer: 0
    },
    {
      question: "Fading is described as",
      options: [
        "Noise in reception due to inherent noise generated",
        "Weakening of received signals due to changes in ionospheric activity",
        "Loss of signals due to less power radiation by communicating station",
        "Signal loss due to mistuned off frequency arising out of technical receiver fault"
      ],
      answer: 1
    },
    {
      question: "MF power for a ship transmitter should not be more than",
      options: ["800 Watts", "1200 Watts", "1500 Watts", "400 Watts"],
      answer: 3
    },
    {
      question: "HF power for a ship transmitter should not exceed",
      options: ["600 Watts", "800 Watts", "400 Watts", "1500 Watts"],
      answer: 3
    },
    {
      question: "Marine VHF used on board ship has a maximum power output of",
      options: ["2 Watts", "5 Watts", "50 Watts", "25 Watts"],
      answer: 3
    }
  ],

  set4: [
    {
      question: "Marine VHF communication distance can be increased by",
      options: [
        "Using a wire antenna for transmitting and receiving",
        "Using a directional antenna",
        "Using a Yagi horizontal antenna",
        "Increasing the height of the antenna"
      ],
      answer: 3
    },
    {
      question: "Detector / demodulator is used in",
      options: ["Transmitter", "Transponder", "ATU", "Receiver"],
      answer: 3
    },
    {
      question: "What equipment is associated with the land or terrestrial systems?",
      options: ["EPIRB", "VHF", "Inmarsat-C", "EPFS"],
      answer: 1
    },
    {
      question: "Antennas use which type of energy wave to communicate information.",
      options: ["Electromagnetic wave energy", "UV energy wave", "White wave energy", "Radio wave energy"],
      answer: 0
    },
    {
      question: "An electromagnetic wave has how many fields ______.",
      options: ["2", "3", "4", "5"],
      answer: 0
    },
    {
      question: "What should be the length of transmitting antenna for radiating radio waves of 900 MHz",
      options: ["16.7 cm", "1.67 cm", "8.3 cm", "None of the above"],
      answer: 0
    },
    {
      question: "What is the length of antenna needed to a signal of 500 KHz?",
      options: ["6 km", "150 m", "600 m", "1 km"],
      answer: 0
    },
    {
      question: "The antenna employed in television receivers",
      options: ["Half wave dipole", "Yagi antenna", "Rhombic antenna", "Horn antenna"],
      answer: 1
    },
    {
      question: "What is the main advantage of the parabolic antenna?",
      options: ["High directivity", "Wide bandwidth", "Small wavelength", "Low directivity"],
      answer: 0
    },
    {
      question: "Antenna Tunning means:",
      options: [
        "Visual inspection of equipment, including the antenna and associated components.",
        "Perform on-the-air verification checks.",
        "Perform scheduled testing of the battery's charged condition.",
        "Aligning the power output stage for maximum power."
      ],
      answer: 3
    },
    {
      question: "A vertical (whip) antenna has a radiation pattern best described by?",
      options: ["A figure eight", "A cardioid", "A circle", "An ellipse"],
      answer: 2
    },
    {
      question: "When testing a transmitter, ship's operator must:",
      options: [
        "use full power with an artificial aerial",
        "use low power with the main aerial",
        "use the least power available along with a dummy load or an artificial aerial",
        "use the emergency aerial on medium power"
      ],
      answer: 2
    },
    {
      question: "What is the most common type of antenna for GMDSS VHF?",
      options: [
        "Horizontally polarized circular antenna",
        "Long wire antenna",
        "Both of the above",
        "None of the above"
      ],
      answer: 3
    },
    {
      question: "Testing of a compulsory radiotelephone station should be done?",
      options: [
        "Into an artificial antenna.",
        "May be accomplished by using the radiotelephone for normal business.",
        "On 2182 kHz and must be heard clearly under normal conditions at a range of 150 NM.",
        "Either a) or b)"
      ],
      answer: 3
    },
    {
      question: "NAVTEX uses a:",
      options: ["A marine VHF whip antenna", "A long wire antenna", "Directional parabolic antenna", "An active whip antenna"],
      answer: 3
    },
    {
      question: "Inmarsat C antenna uses",
      options: [
        "Directional parabolic antenna",
        "Omnidirectional whip antenna",
        "Omnidirectional solid-state antenna",
        "Satellite directional microwave antenna"
      ],
      answer: 2
    },
    {
      question: "Highly directional parabolic 11 to 14 metres Cassegrain antenna is used by",
      options: [
        "Coast Earth Station",
        "Onboard large passenger/tankers/container ships",
        "In mobile phone microwave networks",
        "Ship Earth Station"
      ],
      answer: 0
    },
    {
      question: "Antenna grounding is generally done in order to",
      options: [
        "Save personnel working on radio from electric/high currents burns injury and shocks",
        "Achieve good optimised transmission of radio waves",
        "Save equipment input electronic circuits from damage by thunderstorms and lightening",
        "Achieve optimisation of antenna impedance with the ATU before radiation"
      ],
      answer: 2
    },
    {
      question: "Use of antenna tuning unit (ATU) in MF/HF allows",
      options: [
        "Required power output for transmission using the antenna",
        "Selecting equivalent electrical length for impedance matching with a standard antenna length for optimum radiation output",
        "Choosing of correct frequency band on selection of the frequency for transmission",
        "Choosing of the antenna during transmission and reception of DSC alerts"
      ],
      answer: 1
    },
    {
      question: "The directional characteristics of the Inmarsat C SES antenna is:",
      options: ["Highly directional", "Yagi antenna", "Dependent on ship location in Sea Area A4", "Omni-directional"],
      answer: 3
    },
    {
      question: "AIS uses two antenna inputs",
      options: ["FALSE", "TRUE", "MAYBE", "NO COMMENTS"],
      answer: 1
    },
    {
      question: "The weak link is included on a wire antenna to provide a",
      options: [
        "High resistance path to electromagnetic energy",
        "High breaking strain in event of collision or grounding etc.",
        "Low resistance path to electromagnetic energy",
        "Low breaking strain in event of collision/grounding etc."
      ],
      answer: 3
    },
    {
      question: "Insulators are included in an antenna system in order to provide a",
      options: ["Low breaking strain", "Low resistance path to earth", "High resistance path to earth", "High breaking strain"],
      answer: 2
    },
    {
      question: "Inmarsat FBB MST use",
      options: ["An omnidirectional antenna", "A 1-meter dipole antenna", "A long wire antenna", "A Uni-directional dish antenna"],
      answer: 3
    },
    {
      question: "A safety precaution when working on antenna system is to",
      options: [
        "Ensure the transmitter is in the standby position only",
        "Disable the transmitter by removing the supply fuses",
        "Lock the frequency on 2182 KHz with transmitter on low power and J3E",
        "Ensure the transmission is at J3E"
      ],
      answer: 1
    },
    {
      question: "What is the most common type of antenna for GMDSS MF-HF?",
      options: [
        "Horizontally polarised long wire antenna",
        "Horizontally polarised vertical whip antenna",
        "Satellite radome with vertical polarisation",
        "Vertically polarised whip antenna"
      ],
      answer: 3
    },
    {
      question: "The advantage of vertical whip over long wire antenna is",
      options: [
        "It radiates directionally for better propagation",
        "It radiates equally well in all directions",
        "It radiates a strong signal vertically",
        "It radiates strong signal horizontally"
      ],
      answer: 1
    },
    {
      question: "The satellite COSPAS EPIRB must always point to satellite when testing is carried out",
      options: ["TRUE", "FALSE", "NO COMMENTS", "ONLY DURING SURVEY AND SERVICING"],
      answer: 0
    },
    {
      question: "Iridium operates in its own constellation in the L band using frequencies",
      options: ["1.5 GHz -- 1.6 GHz", "9.0 GHz -- 9.3 GHz", "4 GHz -- 6 GHz", "1610 MHz -- 1625.5 MHz"],
      answer: 3
    },
    {
      question: "Type of modulation used in iridium communications is",
      options: ["BPSK", "QPSK", "DEQPSK", "SOTDMA"],
      answer: 2
    }
  ],

  set5: [
    {
      question: "Bandwidth used in Iridium DEQPSK modulation is",
      options: ["23 KHz", "16 KHz", "26 KHz", "31.5 KHz"],
      answer: 3
    },
    {
      question: "Iridium satellites constellation uses",
      options: ["66 satellites", "26 satellites", "46 satellites", "21 satellites"],
      answer: 0
    },
    {
      question: "Iridium satellite is positioned in low earth orbit at a distance of",
      options: ["781 kms", "1000 kms", "850 kms", "2100 kms"],
      answer: 0
    },
    {
      question: "Iridium GMDSS can be used in",
      options: [
        "Sea Area A1 and Sea Area A2 only",
        "Sea Area A2 and A3 only",
        "Across the world",
        "Outside the Inmarsat satellite coverage above 76-degree N and below 76 S (Polar Region)"
      ],
      answer: 2
    },
    {
      question: "Primary Iridium gateway is situated in",
      options: ["Fucino, Italy", "Oahu, US", "Punta Arenas, Chile", "Tempe, Arizona"],
      answer: 3
    },
    {
      question: "Iridium satellites is placed in",
      options: [
        "Geo Earth Orbit at 36000 kms approximately",
        "Medium Earth Orbit at 16000 kms approximately",
        "Low Earth Orbit at 1000 kms approximately",
        "Low Earth Orbit at 781 kms"
      ],
      answer: 3
    },
    {
      question: "Iridium EGC broadcast for MSI and SAR uses",
      options: ["SafetyNET", "FleetNET", "RescueNET", "SafetyCast"],
      answer: 3
    },
    {
      question: "Iridium mobile-satellite system covering the entire globe using how many satellites?",
      options: ["110", "56", "66", "4"],
      answer: 2
    },
    {
      question: "Iridium mobile-satellite system has 66 Low Earth Orbiting (LEO) cross-linked satellites operating in 6 orbital planes each with ....... satellites",
      options: ["9", "6", "11", "24"],
      answer: 2
    },
    {
      question: "Which service is not provided by Iridium SafetyCast?",
      options: [
        "Maritime Safety Information (MSI)",
        "SAR related information.",
        "Other urgent safety related message to ships.",
        "Routine communication."
      ],
      answer: 3
    },
    {
      question: "Iridium mobile-satellite system uses frequency bands?",
      options: ["L-Band & X-Band", "C- Band & Ka Band", "Ka- Band & L-Band", "X-Band & S- Band"],
      answer: 2
    },
    {
      question: "In Iridium mobile-satellite system \"SNOC\" stand for?",
      options: [
        "Satellite Network Operations Centre.",
        "Ship Network Operation Center.",
        "Satellite Non operation Category.",
        "Systematic Network Organisation Center."
      ],
      answer: 0
    },
    {
      question: "In Iridium mobile-satellite system provides following Services ...",
      options: [
        "Global Coverage (sea area A1 to A4)",
        "Distress Alert & Safety Voice",
        "Ship Security Alert System & LRIT",
        "All the Above."
      ],
      answer: 3
    },
    {
      question: "Coverage Of Iridium mobile-satellite system",
      options: ["76N -- 76S", "Sea Area A1+A2+A3", "Sea Area A1+A2+A3+A4", "Polar Regions Only"],
      answer: 2
    },
    {
      question: "Frequency band used by Iridium mobile-satellite system between SES and satellites.",
      options: ["X-- band", "S band", "L band", "Ka band"],
      answer: 2
    },
    {
      question: "Which service is provided by Iridium mobile-satellite system.",
      options: [
        "Maritime Safety Information (MSI)",
        "SAR related information.",
        "Other urgent safety related message to ships.",
        "All the above."
      ],
      answer: 3
    },
    {
      question: "In GMDSS system GNSS stand for:",
      options: [
        "Global Navigational Satellite system",
        "Global Network satellite system",
        "Global Notification Safety System",
        "Global Navigational Safety Service."
      ],
      answer: 0
    },
    {
      question: "Example of IRIDIUM SES ID",
      options: ["580094332789", "168894332789", "881694332789", "870094332789"],
      answer: 2
    },
    {
      question: "When the lead acid cell is fully charged, the specific gravity of the cell:",
      options: ["Increases to 1140", "Decreases", "No change", "Becomes 1260"],
      answer: 3
    },
    {
      question: "The instrument used to measure specific gravity of the electrolyte in battery is:",
      options: ["Barometer", "Lactometer", "Hydrometer", "Thermometer"],
      answer: 2
    },
    {
      question: "Cells connected in series to:",
      options: [
        "Decreases the amount of charging voltage required.",
        "Increases the voltage output",
        "Increases the voltage and current capacity",
        "Decreases the internal resistance"
      ],
      answer: 1
    },
    {
      question: "The lead acid cell is:",
      options: ["primary cell", "Secondary cell", "Storage cell", "Both (B) & (C)"],
      answer: 3
    },
    {
      question: "The fully charged lead acid battery has the following average voltage per cell:",
      options: ["1.2 v", "2.4 v", "2 4 v", "2. 1v"],
      answer: 3
    },
    {
      question: "Voltage check of Batteries providing source of energy for GMDSS should be checked",
      options: ["once a month.", "at the beginning of each voyage", "once a week", "once a day"],
      answer: 3
    },
    {
      question: "Electrolyte in the Lead Acid Battery is:",
      options: ["Nitric Acid", "Dilute Sulphuric Acid", "Hydrochloric Acid", "Distilled Water"],
      answer: 1
    },
    {
      question: "An on-load test of the radio batteries can be done by operating the transmitter on full power and with the battery Charger:",
      options: [
        "off while observing the battery voltmeter",
        "off while observing the discharge current",
        "on while observing the discharge current.",
        "on while observing the battery voltmeter"
      ],
      answer: 0
    },
    {
      question: "Corroded battery terminals may cause:",
      options: [
        "excessive gassing",
        "a decrease in the discharge current when off load.",
        "a decrease in the voltage on the battery when on load",
        "an increase in charging voltage"
      ],
      answer: 2
    },
    {
      question: "When carrying out batter maintenance petroleum jelly is recommended for protect",
      options: [
        "against acid leakage through cell top caps",
        "the battery casing from corrosion",
        "exposed terminals and connectors",
        "hand from acid splashes"
      ],
      answer: 2
    },
    {
      question: "Batteries are rated",
      options: [
        "No. of cells per battery",
        "Voltage",
        "Current delivered for a specific period (AHC)",
        "Specific Gravity"
      ],
      answer: 2
    },
    {
      question: "Ni-cad cells have a voltage of",
      options: ["2.1V", "1.2V", "1.5V", "12 V"],
      answer: 1
    }
  ],

  set6: [
    {
      question: "Typical problems associated with lead acid battery are",
      options: ["buckling", "ionisation", "vibration", "spilling of electrolyte"],
      answer: 0
    },
    {
      question: "The power supply in India is 220V AC 50 Hz. The supply frequency is:",
      options: ["40 cycles", "50 cycles", "60 cycles", "None of the above."],
      answer: 1
    },
    {
      question: "The positive plate of a lead acid cell is:",
      options: ["lead peroxide", "spongy lead", "copper peroxide", "hydrochloric acid"],
      answer: 0
    },
    {
      question: "In the event of failure of the main and emergency sources of electrical power -- what is the term for the source required to supply the GMDSS console with power for conducting distress and other radio-communications?",
      options: [
        "Emergency power",
        "Reserve source of energy",
        "Ship's emergency diesel generator",
        "Ship's standby generator"
      ],
      answer: 1
    },
    {
      question: "What is the requirement for emergency and reserve power in GMDSS radio installations?",
      options: [
        "An emergency power source for radio communications is not required if a vessel has proper reserve power (batteries).",
        "A reserve power source is not required for radio communications.",
        "Only one of the above is required if a vessel is equipped with a second 406 EPIRB as a backup means of sending a Distress alert.",
        "All newly constructed ships under GMDSS must have both emergency and reserve power sources for radio communications."
      ],
      answer: 3
    },
    {
      question: "A 250V/100W bulb is connected to 250V supply for 10 his energy consumed is:",
      options: ["100W", "1 unit", "250W", "100 W Hour"],
      answer: 1
    },
    {
      question: "Fuses are rated as",
      options: ["Volts", "Ohms", "Farads", "Amps"],
      answer: 3
    },
    {
      question: "The rating of the electrical fuses used in the circuits are based on the maximum:",
      options: ["The supply voltage", "The load connected.", "Duration of operation", "No. of the switches in the circuits"],
      answer: 1
    },
    {
      question: "Fuses are made of",
      options: ["Silver-Nickel alloy", "Gold-copper alloy", "Aluminum-Tungsten alloy", "Tin-lead alloy"],
      answer: 3
    },
    {
      question: "The voltage across a resistor of 10 ohms when a current of 2 amps is passed through will be:",
      options: ["0.5V", "10V", "5V", "20V"],
      answer: 3
    },
    {
      question: "If a fuse of 10 amps blows and it has to be replaced with another fuse, which would you use:",
      options: ["8 amps", "12 amps", "15 amps", "20 amps"],
      answer: 0
    },
    {
      question: "What is the purpose of the SART's audible tone alarm?",
      options: [
        "It informs that assistance may be nearby",
        "It informs survivors when the battery's charge condition has weakened",
        "It informs survivors when the SART switches to \"standby\" mode",
        "It informs survivors when the SART switches to \"active\" mode"
      ],
      answer: 0
    },
    {
      question: "What indication is given to the personnel of survival craft of the approach of another vessel?",
      options: [
        "The SART will provide a visual or audible indication of interrogation by a 3-cm radar",
        "The satellite EPIRB will emit an audible signal",
        "The VHF portable radio will emit audible alarm signal on channel 70",
        "The satellite EPIRB will give a flashing stroboscopic light indication"
      ],
      answer: 0
    },
    {
      question: "How can a SART's effective range be maximised?",
      options: [
        "The SART should be placed in water immediately upon activation",
        "The SART should be held as high as possible",
        "Switch the into the \"High\" power",
        "Activate the SART inside the lifeboat immediately"
      ],
      answer: 1
    },
    {
      question: "When does the SART begin transmitting?",
      options: [
        "It immediately begins radiating when placed in the \"ON\" position",
        "It must be manually activated",
        "If it has been placed in the \"ON\" position, it will respond when it has been interrogated by a 9-GHz radar signal",
        "If it is placed in the open sky as high as possible, it will begin transmitting"
      ],
      answer: 2
    },
    {
      question: "What causes the SART to begin a transmission?",
      options: [
        "When activated manually",
        "When placed manually in open air visible to satellite",
        "When it is put in water, it starts radiating",
        "After being activated, the SART responds to radar interrogation, and starts transmission"
      ],
      answer: 3
    },
    {
      question: "What indication does a SART signal display on interrogation by a radar when within 6 NM of approaching SAR ship?",
      options: [
        "The SART transmits \"SOS\" and the vessel's name and MMSI",
        "The SAR radar unit's PPI displays a line of dots radiating outward, with the innermost dot indicating the SART's position",
        "A line of dots radiating outward with the outermost dot indicating the SART's position is displayed on approaching SAR ship radar.",
        "Concentric circles are displayed on SAR ship radar"
      ],
      answer: 2
    },
    {
      question: "SART operates on which frequency band?",
      options: ["1.5 GHz", "3 GHz", "S-band", "9 GHz"],
      answer: 3
    },
    {
      question: "A SART signal cannot be detected",
      options: [
        "In poor visibility, or at night",
        "In heavy sea swell and rough weather conditions",
        "By a 10 cm vessel radar",
        "During high ionospheric solar activity"
      ],
      answer: 2
    },
    {
      question: "The SART is required to have sufficient battery capacity to operate in standby mode for",
      options: ["Eight hours", "Three days", "Four days", "48 hours"],
      answer: 0
    },
    {
      question: "The Search and Rescue Radar transponder is used for",
      options: [
        "locating the position of the ship in distress",
        "urgent cyclone/navigational warnings",
        "locating the position of the ship coordinating the rescue operations",
        "All the above"
      ],
      answer: 0
    },
    {
      question: "The max power radiated by a COSPAS/SARSAT (406 MHz) satellite EPIRB is:",
      options: ["100 mw", "5 w", "100 w", "50w"],
      answer: 1
    },
    {
      question: "The function of the Local User Terminal (LUT) is:",
      options: [
        "to receive the Distress Alert directly",
        "to transmit TDM carrier",
        "to process the EPIRB signals received from COSPAS-SARSAT satellites",
        "to receive SART signals from SES"
      ],
      answer: 2
    },
    {
      question: "The Radar display when it detects a SART signal at 1nm or less appears as",
      options: [
        "concentric circles",
        "line of 14 blips appearing as arc of a circle",
        "line of 12 blips appearing as arc of a circle",
        "line of 20 blips along the line of bearing"
      ],
      answer: 0
    },
    {
      question: "The frequency range of operation of the SART is:",
      options: ["3.0 - 3.5 GHz", "156 - 174 MHz", "9.2 - 9.5 GHz", "300- 3000 KHz"],
      answer: 2
    },
    {
      question: "A Cospas Sarsat EPIRB can be used by ships sailing in the Area:",
      options: ["Al, A2, A3, A4", "Al, A2, A4", "A2, A3, A4", "A1, A2, A3"],
      answer: 0
    },
    {
      question: "As per IMO requirement a SART on a life raft should be held high above the sea Level at least",
      options: ["1.5 m above", "2.5 m above", "0.5 m above", "1.0 m above"],
      answer: 0
    },
    {
      question: "The source of energy for EPIRB and SART is:",
      options: ["Lithium Battery", "Lead-acid cells", "Nickel Cadmium", "None"],
      answer: 0
    },
    {
      question: "Locating Signals are transmitted",
      options: [
        "By Navtex stations",
        "Coast radio stations",
        "Mobile unit in distress",
        "By Coast Earth Stns"
      ],
      answer: 2
    },
    {
      question: "EPIRB battery life is",
      options: ["1 year", "2 years", "3 -- 5 years or as per manufacturer's instructions", "10 years"],
      answer: 2
    }
  ],

  set7: [
    {
      question: "AIS -- SART is a transmitter",
      options: ["FALSE", "TRUE", "No", "Maybe"],
      answer: 1
    },
    {
      question: "AIS-SART uses free form MMSI special equipment identity starting with",
      options: ["974XXYYYY", "972XXYYYY", "111XXYYYY", "970XXYYYY"],
      answer: 0
    },
    {
      question: "AIS-SART has its own built-in GPS",
      options: ["NO", "TRUE", "MAY BE", "FALSE"],
      answer: 1
    },
    {
      question: "AIS-SART works on",
      options: [
        "161.975 MHz channel 87B",
        "162.025 MHz channel 88B",
        "156.525 MHz channel 70",
        "A) and B) above"
      ],
      answer: 3
    },
    {
      question: "Which statement is NOT true regarding the COSPAS-SARSAT system?",
      options: [
        "Doppler shift is used to locate the beacons.",
        "EPIRBs are used as satellite beacons aboard lifeboats as alerting devices.",
        "May be used to transmit public correspondence.",
        "Locates distress beacons transmitting on 406 MHz."
      ],
      answer: 2
    },
    {
      question: "Which statement is NOT true regarding the requirements of survival craft portable two-way VHF radiotelephone equipment?",
      options: [
        "Effective radiated power should be a minimum of 2.0 Watts.",
        "Operation on Ch-16.",
        "Simplex (single frequency) voice communications only.",
        "All of these."
      ],
      answer: 3
    },
    {
      question: "Which statement is NOT true regarding the requirements of survival craft portable two-way VHF radiotelephone equipment?",
      options: [
        "Operation on Ch-13.",
        "Operation on Ch-16.",
        "Effective radiated power should be a minimum of 0.25 Watts.",
        "Simplex (single frequency) voice communications only."
      ],
      answer: 0
    },
    {
      question: "With what other stations may portable survival craft transceivers communicate?",
      options: [
        "Communications is permitted between survival craft and ship.",
        "Communications is permitted between survival craft and rescue unit.",
        "All of the above.",
        "Communications is permitted between survival crafts."
      ],
      answer: 2
    },
    {
      question: "Which action should the GMDSS radio operator take in a distress situation when embarking in survival craft?",
      options: [
        "Communicate via Inmarsat-C from the survival craft.",
        "Switch on EPIRB and SART immediately and leave onboard vessel in distress.",
        "Notify RCC (Rescue Coordination Center) through VHF DSC in portable equipment.",
        "Carry EPIRB and SART to life-raft and switch it on"
      ],
      answer: 3
    },
    {
      question: "Equipment for radiotelephony use in survival craft stations under GMDSS must have what capability?",
      options: ["Any one of these.", "Operation on 121.5 MHz.", "Operation on 457.525 MHz.", "Operation on Ch-16."],
      answer: 3
    },
    {
      question: "Which is the key part of the search and rescue system under GMDSS?",
      options: ["Indian Space Agency satellites.", "AMSAT satellites.", "NASA satellites.", "COSPAS/SARSAT satellites."],
      answer: 3
    },
    {
      question: "Equipment for radiotelephony use in survival craft stations under GMDSS must have what characteristic(s)?",
      options: ["All of these.", "Watertight.", "Operation on Ch-16.", "Permanently-affixed antenna."],
      answer: 0
    },
    {
      question: "Satellite system which is of particular importance to SAR mission under GMDSS is",
      options: ["AMSAT", "NASA", "INTELSAT", "COSPAS-SARSAT"],
      answer: 3
    },
    {
      question: "Which statement is NOT true regarding the requirements of survival craft portable two-way VHF radiotelephone equipment?",
      options: [
        "C) and D)",
        "Operates simplex on Ch-70 and at least one other channel.",
        "Effective radiated power should be a minimum of 0.25 Watts.",
        "Watertight at a depth of 1 meter for 5 minutes."
      ],
      answer: 0
    },
    {
      question: "Which statement is true regarding the COSPAS-SARSAT system?",
      options: [
        "Signals received by low altitude near-polar orbiting satellites are relayed to a ground receiving station, called a Local User Terminal.",
        "All of these.",
        "Doppler shift is used to locate the beacons.",
        "EPIRBs are used as satellite beacons aboard vessels as alerting devices."
      ],
      answer: 1
    },
    {
      question: "EPIRB -- AIS uses more than one frequency to help finding position of survivors/distress unit",
      options: [
        "FALSE",
        "Uses only one frequency 121.5 MHz for locating position",
        "TRUE",
        "Uses COSPAS-SARSAT frequency 406.025 MHz only"
      ],
      answer: 2
    },
    {
      question: "EPIRB-AIS uses frequency 406.025 MHz, 121.5 MHz, 161.975 MHz, 162.025 MHz and EPFS frequency in its transmission when activated during distress",
      options: ["MAYBE", "FALSE", "NO", "TRUE"],
      answer: 3
    },
    {
      question: "EPIRB-AIS uses a Return Link Service (RLS) to confirm the signal has been received by the SAR services of the EPIRB-AIS distress alert transmitted",
      options: ["TRUE", "FALSE", "NO COMMENTS", "MAYBE"],
      answer: 0
    },
    {
      question: "NAVTEX transmission is made using:",
      options: ["R3E", "FEC", "ARQ", "CRS"],
      answer: 1
    },
    {
      question: "NAVTEX receiver is used for:",
      options: [
        "Distress alerts from the same group of ships",
        "Transmission of Urgency messages and MSI",
        "Receiving marine safety information and SAR related messages",
        "All the above"
      ],
      answer: 2
    },
    {
      question: "The meteorological and navigational warnings / information are available to ship station outside the coverage area of Navtex through:",
      options: ["Inmarsat Safety NET", "MSI (HF)", "Broadcast on 2187.5 kHz", "(A)and (B) above"],
      answer: 3
    },
    {
      question: "The following messages cannot be rejected in Navtex receiver:",
      options: ["A, B, C, D", "A, B, D, L", "F, E, L", "F, E, C, G"],
      answer: 0
    },
    {
      question: "In the Navtex message type \"D\" means:",
      options: ["Meteorological information", "Meteorological warning", "Navigational warning", "Search and rescue information"],
      answer: 0
    },
    {
      question: "MSI information is found in the following",
      options: [
        "ITU List of Coast Stations and Special Service Stations",
        "ITU List of Ship Stations and Maritime Mobile Station Identities",
        "IAMSAR Manual",
        "ITU Manual for Maritime Mobile and Maritime Mobile Satellite Services"
      ],
      answer: 0
    },
    {
      question: "The Pre -- fix codes 'B1' at the beginning of each Navtex message stands for:",
      options: ["Identity of the transmitting station", "Serial number of the message", "Nature of message", "Distress message."],
      answer: 0
    },
    {
      question: "HF NAVTEX frequency is:",
      options: ["4207.5 kHz", "6314.0 kHz", "4209.5 kHz", "518 kHz"],
      answer: 0
    },
    {
      question: "How is mutual interference among NAVTEX stations avoided?",
      options: [
        "Stations are limited to daytime operation only.",
        "Transmitter power is limited to that necessary for coverage of assigned area.",
        "Transmissions by stations in each NAVAREA are arranged in a time-sharing basis.",
        "Both B) and c)."
      ],
      answer: 3
    },
    {
      question: "When do NAVTEX broadcasts typically achieve maximum transmitting range?",
      options: ["Local noontime", "Middle of the night", "Sunset", "Post sunrise"],
      answer: 1
    },
    {
      question: "What should a GMDSS Radio Operator do if a NAVTEX warning message is received but it contains too many errors to be usable?",
      options: [
        "Do nothing. Vital NAVTEX messages will be repeated on the next scheduled broadcast.",
        "Contact the NAVAREA coordinator and request a repeat broadcast.",
        "The hurricane will be upon the vessel; they're in big trouble.",
        "Listen to appropriate VHF weather channel for repeat warnings."
      ],
      answer: 0
    },
    {
      question: "What does a NAVTEX receiver do when it runs out of paper?",
      options: [
        "The unit cannot operate, and all subsequent MSI broadcasts are missed until the paper is replaced.",
        "It will give off either an audible and/or visual alarm.",
        "The system will automatically change from receiving MSI by NAVTEX to receiving it by SafetyNET so that no messages will be lost.",
        "All of the above"
      ],
      answer: 1
    }
  ],

  set8: [
    {
      question: "Which of the following is the primary frequency that is used exclusively for NAVTEX broadcasts internationally?",
      options: [
        "518 kHz",
        "2187.5 kHz",
        "4209.5 kHz",
        "VHF channel 16 when the vessel is sailing in Sea Area A1, and 2187.5 kHz when in Sea Area A2."
      ],
      answer: 0
    },
    {
      question: "What is the transmitting range of most NAVTEX stations?",
      options: [
        "Typically, 50-100 nautical miles (90-180 km) from shore.",
        "Typically, upwards of 1000 nautical miles (1800 km) during the daytime.",
        "It is limited to line-of-sight or about 30 nautical miles (54 km).",
        "Typically, 200-400 nautical miles (360-720 km)."
      ],
      answer: 3
    },
    {
      question: "Frequency 16806.5 kHz is used for",
      options: ["DSC distress", "DSC routine", "NBDP MSI", "Voice"],
      answer: 2
    },
    {
      question: "AIS abbreviation full form is",
      options: [
        "Aids in Search and Rescue",
        "Automation International Society",
        "Aviation Identity System",
        "Automatic Identification System"
      ],
      answer: 3
    },
    {
      question: "AIS uses Marine VHF Band for the purpose of tracking of various vessels",
      options: ["TRUE", "FALSE", "Uses digital DSC signals for tracking", "Uses 300 MHz frequency"],
      answer: 0
    },
    {
      question: "Marine VHF channel 87B and channel 88B is used for the purpose of AIS",
      options: [
        "FALSE",
        "Uses available any free channel in the Marine VHF band 156 MHz -- 174 MHz",
        "TRUE",
        "Depending on the targets, it may use Marine VHF, MF, or HF frequencies and channels"
      ],
      answer: 2
    },
    {
      question: "Marine VHF channel frequency used for AIS is",
      options: [
        "Channel 87B -- 161.975 MHz and Channel 88B -- 162.025 MHz",
        "Channel 70 -- 156.525 MHz and Channel 16 -- 156.800 MHz",
        "Channel 06 -- 156.300 MHz and Channel 13 -- 156.650 MHz",
        "Channel 08 -- 156.400 MHz and Channel 12 -- 156.600 MHz"
      ],
      answer: 0
    },
    {
      question: "Advantage of AIS over Radar is",
      options: [
        "It does not need a straight clear line of sight of object / ship in view to be tracked.",
        "It needs no pulse signal to be activated similar to radar pulse reflection for identification",
        "It is independent of weather, climate and sea conditions",
        "All above"
      ],
      answer: 3
    },
    {
      question: "AIS is affected by",
      options: [
        "Fading",
        "Propagation due to ionospheric conditions in the D, E, and F1, F2 layers",
        "Capture effect",
        "Solar activity and thunderstorms"
      ],
      answer: 2
    },
    {
      question: "Range of AIS on a GMDSS vessel is approximately",
      options: ["5 -- 10 NM", "10 -- 15 NM", "25 -- 35 NM", "50 -- 75 NM"],
      answer: 2
    },
    {
      question: "Power output of Class A AIS is",
      options: ["25 Watts", "50 Watts", "5 Watts", "12.5 Watts"],
      answer: 3
    },
    {
      question: "GMDSS Vessels use",
      options: ["Class B AIS", "Class A AIS", "Class D AIS", "Class C AIS"],
      answer: 1
    },
    {
      question: "Marine AIS used on board GMDSS vessels class A type uses",
      options: ["CSTDMA", "FSTDMA", "SOTDMA", "None of the above"],
      answer: 2
    },
    {
      question: "GMDSS vessels may be tracked by other vessels in vicinity even if",
      options: [
        "AIS is in switched OFF mode by Master for safety purpose",
        "AIS is in standby mode",
        "The equipment input and output data feeds fail",
        "None of the above"
      ],
      answer: 3
    },
    {
      question: "AIS provides for following output data as information exchange within range",
      options: [
        "Dynamic data like position, course and speed or at anchor",
        "Static data like name, MMSI, or IMO number of vessel",
        "Additional other information as may be fed by Master like voyage details, its carriage details etc as decided by the Master or authority",
        "All above"
      ],
      answer: 3
    },
    {
      question: "Passenger ships require to have additional equipment for communicating with SAR aircraft",
      options: [
        "Channel 16, 06, and 13 marine VHF portable radio",
        "2182 KHz MF Band transceiver",
        "HF band aeronautical transceiver",
        "Aero VHF portable or fixed type radio having frequency 121.5 MHz and 123.1 MHz"
      ],
      answer: 3
    },
    {
      question: "2-way portable marine VHF required by a GMDSS SOLAS ship between 300 to 499 GRT",
      options: [
        "2 numbers of portable 2-way GMDSS marine VHF handheld radio having dedicated two numbers of sealed batteries for distress use only with at least 2 channels (channel 16 and 06)",
        "4 Marine VHF portable handheld radios for all communications onboard",
        "UHF portable handheld or fixed type radios for onboard communications",
        "Marine VHF remote operating handheld VHF and controlled by main VHF radios"
      ],
      answer: 0
    },
    {
      question: "Which statement is true regarding the requirements of survival craft portable two-way VHF radiotelephone equipment?",
      options: [
        "Effective radiated power should be a minimum of 2.0 Watts.",
        "Operation on Ch-16.",
        "Simplex (single frequency) voice communications only.",
        "All of these."
      ],
      answer: 2
    },
    {
      question: "Which statement is true regarding the requirements of survival craft portable two-way VHF radiotelephone equipment?",
      options: [
        "Operation on Ch-13.",
        "Operation on Ch-16.",
        "Effective radiated power should be a minimum of 0.25 Watts.",
        "Simplex (single frequency) voice communications only."
      ],
      answer: 1
    },
    {
      question: "With what other stations may portable survival craft transceivers communicate?",
      options: [
        "Communications is permitted between survival craft and ship.",
        "Communications is permitted between survival craft and rescue unit.",
        "All of the above.",
        "Communications is permitted between survival crafts."
      ],
      answer: 2
    },
    {
      question: "Equipment for radiotelephony use in survival craft stations under GMDSS must have what capability?",
      options: ["Any one of these.", "Operation on 121.5 MHz.", "Operation on 457.525 MHz.", "Operation on Ch-16."],
      answer: 3
    },
    {
      question: "Equipment for radiotelephony use in survival craft stations under GMDSS must have what characteristic(s)?",
      options: ["All of these.", "Watertight.", "Operation on Ch-16.", "Permanently-affixed antenna."],
      answer: 0
    },
    {
      question: "Geostationary satellite orbits in the plane of equator in space at a distance of",
      options: ["1000 Kms", "850 Kms", "20000 Kms", "36000 Kms"],
      answer: 3
    },
    {
      question: "Inmarsat uses satellite orbiting in",
      options: ["Low Earth Orbit", "Medium Earth Orbit", "Geo Earth Orbit", "Circular Very Low Earth Orbit"],
      answer: 2
    },
    {
      question: "Uplink frequency in L Band between mobile earth station (SES) and Inmarsat satellite is",
      options: ["2 GHz", "1.6 GHz", "3 GHz", "1.5 GHz"],
      answer: 1
    },
    {
      question: "Downlink frequency in C band between satellite and Land earth Station (LES/CES) is",
      options: ["12 GHz", "6 GHz", "4 GHz", "406 MHz"],
      answer: 2
    },
    {
      question: "Space segments of Inmarsat system placed in geostationary orbit completes one cycle",
      options: ["In 24 hours approximately", "In 90 minutes to 110 minutes approximately", "In 6 hours approximately", "In 16 hours approximately"],
      answer: 0
    },
    {
      question: "What is full form of ADE?",
      options: ["Above Deck Equipment", "Approximate Depth Equivalent", "Antenna Digital Equipment", "Azimuth Digital Equivalent"],
      answer: 0
    },
    {
      question: "Inmarsat C main feature is",
      options: [
        "Store and Forward text message services only",
        "Text message (Telex) and Voice services",
        "Real time priority voice and telex services",
        "Telex (Text) message with online real-time confirmations for urgency, safety and routine"
      ],
      answer: 0
    },
    {
      question: "What is full form of NCS?",
      options: ["No Confirmation Services", "Network Coordination Station", "Network Control Services", "No Carrier Signal"],
      answer: 1
    }
  ],

  set9: [
    {
      question: "What is full form of SCC?",
      options: ["Section Command Center", "Satellite Command Center", "Signals and Carrier Codes", "Signature and Carrier Codes"],
      answer: 1
    },
    {
      question: "Which equipment has store and forward?",
      options: ["Fleet Broad Band", "FBB -- MST", "FBB -- FST", "Inmarsat C"],
      answer: 3
    },
    {
      question: "Which satellite equipment can you use for PVT?",
      options: [
        "Inmarsat Fleet Broad Band",
        "Inmarsat Fleet Broad Band Marine Safety Terminal (MST)",
        "Inmarsat C Terminal",
        "VSAT"
      ],
      answer: 2
    },
    {
      question: "Inmarsat services cover the entire globe:",
      options: ["MAY BE", "FALSE", "TRUE", "CANNOT COMMENT"],
      answer: 1
    },
    {
      question: "Section A of the GMDSS Radio Log Book consists of:",
      options: [
        "Particulars of the ship",
        "List of batteries",
        "Master's name and address",
        "Radio Operator's name and address"
      ],
      answer: 0
    },
    {
      question: "The GMDSS log book Section A contains",
      options: [
        "particulars of the Qualified personnel",
        "particulars of the ship",
        "particulars of batteries",
        "Summary of the distress, urgency &safety traffic"
      ],
      answer: 1
    },
    {
      question: "The GMDSS Log book is signed by the Master of the ship",
      options: ["After completion of the voyage", "On entering port", "Before sending it to authority", "Daily"],
      answer: 3
    },
    {
      question: "Section C of the GMDSS Log book having details of important communications is",
      options: [
        "Duplicate",
        "To be retained for a period of 2 years if no distress communications log entries",
        "To be retained for a period of 3 years if it has distress communications log entries",
        "All Above"
      ],
      answer: 3
    },
    {
      question: "Log book entries and its updating responsibility is normally the duty of",
      options: ["Every officer on ship", "Master of the ship", "Dedicated Distress Communication Officer (DDCO)", "Chief Officer"],
      answer: 1
    },
    {
      question: "Section B of the radio log book contains details related to",
      options: [
        "Ship owner",
        "Company manning the ship details",
        "Flag State details",
        "GMDSS -- GOC details of all the officer crew onboard"
      ],
      answer: 3
    },
    {
      question: "The entries in the GMDSS log book are always made in:",
      options: ["Local time.", "Ship's time", "Zonal time", "Coordinated Universal Time"],
      answer: 3
    },
    {
      question: "Position of the ship is to be recorded daily in the radio log book",
      options: ["True", "False", "Not necessary", "As may be decided by the Master"],
      answer: 0
    },
    {
      question: "Distress Relay using DSC should be sent by a Ship Station:",
      options: [
        "if received a distress alert which has not been acknowledged",
        "If received a distress alert on its HF DSC and not been acknowledged by a Coast station within 3 minutes",
        "if received a distress relay alert from a Coast Station and not been acknowledged by anybody.",
        "Both A) and B) above"
      ],
      answer: 3
    },
    {
      question: "A DSC Distress alert can be transmitted as",
      options: ["Single freq call", "Multiple freq call", "Dual Freq call", "All of the above"],
      answer: 3
    },
    {
      question: "The Distress Alert should be sent:",
      options: ["Ship to Ship", "Shore to Ship", "Ship to Shore", "both A) and C) above"],
      answer: 3
    },
    {
      question: "If a ship in Distress does not receive a DSC acknowledgement to a Distress alert, then:",
      options: [
        "the alert repeats every 1.5 seconds",
        "she should listen on a DSC frequency for a period of 0.5 min.",
        "the alert repeats after a lapse, of 3.5 to 4.5 min. from the starting time of the original call",
        "the alert repeats every 5 min."
      ],
      answer: 2
    },
    {
      question: "Your ship is in Distress in Area A3. The DSC freq. used to alert shore stations is :",
      options: ["2187.5 kHz", "8414.5 kHz", "Channel 70", "2182 kHz"],
      answer: 1
    },
    {
      question: "When you are required to repeat a Safety message a second time, which of the following times will you prefer:",
      options: [
        "to repeat after half an hour",
        "to repeat at the end of next silence period",
        "to repeat at an interval of 2 min.",
        "to repeat immediately"
      ],
      answer: 3
    },
    {
      question: "Urgency signal takes priority over",
      options: [
        "All communications except Distress",
        "All communications except Safety",
        "All communication except Distress &Safety",
        "All communications"
      ],
      answer: 0
    },
    {
      question: "When a vessel is in distress he will",
      options: [
        "Use only distress equipment",
        "Use any means at his disposal to attract attention",
        "Strictly follow ITU guidelines",
        "Observe all silence periods"
      ],
      answer: 1
    },
    {
      question: "Distress relay from the shore is sent to",
      options: [
        "Vessel in Distress",
        "On-Scene commander",
        "Controlling vessel",
        "To all vessels, To vessels in a particular geographical area, To an individual"
      ],
      answer: 3
    },
    {
      question: "If there is a reliable coast station nearby and you receive a Distress Signal you will",
      options: [
        "Acknowledge the alert immediately",
        "You will relay the alert to all ships",
        "You will wait for the coast station before acknowledging",
        "No action"
      ],
      answer: 2
    },
    {
      question: "The transmission speed of MF/HF DSC call is",
      options: ["1200 bauds", "100 bauds", "150 bauds", "200 bauds"],
      answer: 1
    },
    {
      question: "Normally for On-scene communication the mode used will be",
      options: ["Duplex", "Simplex", "Satcom", "Semi-Duplex"],
      answer: 1
    },
    {
      question: "DSC distress alert stops repeating:",
      options: [
        "when acknowledged by coast station",
        "when acknowledged by ship station",
        "for 24 hours",
        "when acknowledged either by a ship or a coast station using DSC"
      ],
      answer: 3
    },
    {
      question: "When abandoning a vessel a GMDSS operator should:",
      options: [
        "take safe custody of ship station license, SRT certificate, cash & documents",
        "switch off all radio equipment",
        "put off the mains switch to avoid fire",
        "keep all the equipment in distress transmitting mode."
      ],
      answer: 3
    },
    {
      question: "Under GMDSS a vessel in Distress should:",
      options: [
        "strictly follow the IMO guidelines when calling for assistance",
        "observe all GMDSS regulations",
        "use any means at its disposal to attract attention & get the necessary help",
        "use Inmarsat / Iridium users guide to call for assistance"
      ],
      answer: 2
    },
    {
      question: "With respect to Distress communications the Main function of the On-scene Coordinator (OSC) is to",
      options: [
        "Maintain communications with all Search and Rescue (SAR) facilities",
        "Deploy SART to assist in homing",
        "Fix the position of the casualty using an EPIRB",
        "Recover and switch off the EPRIB"
      ],
      answer: 0
    },
    {
      question: "When distress working is in force on 2182 kHz, ships may make routine R/T Calls to coast stations on",
      options: ["2191.0 kHz", "2189.5 kHz", "2177.0 kHz", "2187.5 kHz"],
      answer: 0
    },
    {
      question: "The correct RT (Voice) signal in call to be used when sending a Distress Message on behalf of another vessel is",
      options: ["MAYDAY RELAY", "PANPAN", "DISTRESS RELAY", "MAYDAY"],
      answer: 0
    }
  ],

  set10: [
    {
      question: "Signal transmitted by control station to indicate normal working to be resumed at end of distress",
      options: ["SEELONCE DISTRESS", "SEELONCE MAYDAY", "SEELONCE FEENEE", "PRUDONCE"],
      answer: 2
    },
    {
      question: "Signal transmitted asking an interfering station to stop transmissions during ongoing distress communications by any other station, other than control station is:",
      options: ["SEELONCE DISTRESS", "SEELONCE MAYDAY", "PRUDONCE", "DISTRESS MAYDAY"],
      answer: 2
    },
    {
      question: "Urgency signal takes priority over",
      options: [
        "All communications except Distress",
        "All communications except Safety",
        "All communication except Distress &Safety",
        "All communications"
      ],
      answer: 0
    },
    {
      question: "If you hear an Urgency Signal not followed by a message you will",
      options: [
        "Switch off equipment",
        "Inform nearest land station and resume normal working",
        "Send a Relay to all vessels",
        "Ignore the signal"
      ],
      answer: 1
    },
    {
      question: "Urgency message is generally addressed to all stations and not to an individual station",
      options: ["FALSE", "MAY BE", "NO COMMENTS", "TRUE"],
      answer: 3
    },
    {
      question: "The 2-digit code used for a medical evacuation by a ship station to a CES is",
      options: ["41", "42", "32", "39"],
      answer: 3
    },
    {
      question: "The urgency signal is",
      options: ["MEDICO", "MEDIVAC", "MEDICAL", "PAN PAN"],
      answer: 3
    },
    {
      question: "The radiotelephone urgency is",
      options: ["MAYDAY", "MAYDAY RELAY", "PAN PAN", "SECURITE"],
      answer: 2
    },
    {
      question: "Which of the following situations may use the urgency priority?",
      options: [
        "A crew member working dangerously on the deck",
        "A serious medical situation involving a crew member",
        "Cargo shifting in bad weather situation considered to be a hazard",
        "Engine spares for the emergency generator ordered by the Master"
      ],
      answer: 1
    },
    {
      question: "Which of the following situations would normally use the urgency priority?",
      options: [
        "Crew member needs urgent medical attention due breaking a leg in cargo hold",
        "A fire in the generator room and adjacent spaces",
        "Leaking oil from a minor tank valve needing change from available spares",
        "Vessel working at the jetty, and a labour on jetty has been injured seriously"
      ],
      answer: 0
    },
    {
      question: "The officer on watch hears the signal \"PAN PAN\" spoken thrice, it means",
      options: [
        "An important navigational warning is about to follow",
        "An important meteorological warning is about to follow",
        "An urgency message concerning safety of a mobile unit or person is about to follow",
        "Station making the call is in need of immediate assistance"
      ],
      answer: 2
    },
    {
      question: "Ship engine and steering failure requires Master to ask for towing help",
      options: [
        "Master may seek towing help by sending a message using 2-digit code 39",
        "Master may send a routine message to owners asking for advice",
        "Master may ask for experts to be arranged from nearby vicinity vessels",
        "Master may seek advice from shore-based agency for repairs"
      ],
      answer: 0
    },
    {
      question: "Ship has sighted oil pollution from a leaking oil pipeline in oilfield and marine life is endangered, Master will send a alert asking for action by coast guard using priority",
      options: ["Urgency", "Distress", "Safety", "Routine"],
      answer: 0
    },
    {
      question: "A long medical advice message is to be sent by a ship in area of heavy traffic, it will use",
      options: [
        "2182 KHz",
        "2191 KHz",
        "Working channel as informed by a coast radio station",
        "2177 KHz"
      ],
      answer: 2
    },
    {
      question: "Urgency alert in the MF band is always required to be sent between ship and coast station on",
      options: ["2187.5 KHz", "2177 KHz", "2189.5 KHz / 2177 KHz", "2191 KHz"],
      answer: 2
    },
    {
      question: "When a priority signal \"SECURITE\" is heard, it means",
      options: [
        "Message concerning safety of person or vessel is about to follow",
        "Message concerning an important navigation or meteorological warning is to follow",
        "Message asking for immediate assistance is about to follow",
        "Coast Radio Station is going to announce the traffic list on hand for vessels in the area"
      ],
      answer: 1
    },
    {
      question: "The radiotelephone signal used to indicate loss of few containers with lashing gear over side",
      options: ["SECURITE", "PAN PAN", "MAYDAY", "URGENCY"],
      answer: 0
    },
    {
      question: "Following situation requires use of safety alert and message",
      options: [
        "Man over board",
        "An important navigational warning by a ship",
        "Information concerning the safety of a person or a mobile unit",
        "Information concerning on-scene communications"
      ],
      answer: 1
    },
    {
      question: "Radiotelephone safety signal is",
      options: [
        "SECURITE repeated thrice",
        "SAFETY repeated thrice",
        "PAN PAN repeated thrice",
        "SECURITE SECURITE repeated thrice"
      ],
      answer: 0
    },
    {
      question: "Safety message to all stations is broadcast generally ending with",
      options: [
        "Request asking for acknowledgment",
        "Request to relay to stations within the vicinity",
        "Request to confirm the situation if is in affected area",
        "No request as it does not require any acknowledgment"
      ],
      answer: 3
    },
    {
      question: "Ship has to carry out an external weekly DSC test with coast station, it will use",
      options: [
        "Routine frequency 2189.5 KHz / 2177 KHz",
        "National working frequency",
        "International working frequency",
        "Frequency selected automatically for the external weekly tests by equipment"
      ],
      answer: 0
    },
    {
      question: "Under GMDSS, it is mandatory for ship to carry out",
      options: [
        "Monthly distress test on MF-HF radio equipment",
        "Annual distress test on MF-HF radio equipment",
        "Weekly external test on the MF-HF equipment with a coast radio station",
        "Weekly internal distress test on the MF-HF equipment"
      ],
      answer: 2
    },
    {
      question: "Ship can use distress and safety VHF DSC channel for sending a routine alert to ship/CRS",
      options: ["FALSE", "TRUE", "MAYBE", "NO COMMENTS"],
      answer: 0
    },
    {
      question: "VHF DSC testing is normally carried out by",
      options: [
        "Daily making a call to a coast radio station when within range",
        "Daily making a radiotelephone call onboard ship using a portable VHF handheld radio",
        "Daily testing with a ship in vicinity or making a DSC call to its own second VHF DSC",
        "Carrying out a weekly test with a coast radio station or with a nearby ship"
      ],
      answer: 3
    },
    {
      question: "For a ship to be in GMDSS Sea Area A1",
      options: [
        "Ship must be within VHF range of a coast station open to public correspondence",
        "Ship must be within range of coast station equipped with continuous VHF DSC alerting",
        "Ship must be within range of coast guard ship",
        "Ship must be sailing within a range of 20 to 30 nautical miles from any coast"
      ],
      answer: 1
    },
    {
      question: "What is the equipment carriage requirement for survival craft under GMDSS?",
      options: [
        "Two GMDSS portable handheld VHF radios for all passenger ships irrespective of tonnage and cargo ships above 300 GRT and below 500 GRT sailing internationally",
        "Three GMDSS portable handheld VHF radios for all passenger ships irrespective of tonnage and cargo ships above 500 GRT sailing internationally",
        "All of the above",
        "GMDSS portable handheld VHF radios must have at least VHF channel 16 and 06"
      ],
      answer: 2
    },
    {
      question: "Maritime VHF band operation used by maritime communications is",
      options: ["3 -- 30 MHz", "88 -- 108 MHz", "300 -- 3000 MHz", "156 -- 164 MHz"],
      answer: 3
    },
    {
      question: "A GMDSS vessel is required to keep a watch on radiotelephone VHF channel 16:",
      options: ["TRUE", "FALSE", "Only if it is sailing in Sea Area A2 and A3/A4", "Only if it is sailing in Sea Area A1"],
      answer: 0
    },
    {
      question: "When the Distress button is activated on the DSC VHF radio, the alert is sent on",
      options: [
        "VHF Channel 70",
        "VHF Channel 16",
        "VHF Channel as may be selected by the officer",
        "VHF Channel 06"
      ],
      answer: 0
    },
    {
      question: "Subsequent VHF channel to be used following a safety alert should be",
      options: ["Channel 16", "Channel 06", "Channel 08", "Channel 13"],
      answer: 1
    }
  ],

  set11: [
    {
      question: "VHF Channel used for bridge-to-bridge communication during voyage is",
      options: ["Channel 10", "Channel 15", "Channel 17", "Channel 13"],
      answer: 3
    },
    {
      question: "Ship in receipt of a VHF DSC Distress alert will monitor for further information on",
      options: ["Channel 16", "Channel 06", "Channel 70", "Channel 08"],
      answer: 0
    },
    {
      question: "Homing is used when",
      options: [
        "Entering or leaving port",
        "To get a bearing of a vessel in distress",
        "To receive message",
        "To transmit message"
      ],
      answer: 1
    },
    {
      question: "What time is kept in the ship's radio logbook?",
      options: ["Zone time", "Ship's time", "UTC", "Local time"],
      answer: 2
    },
    {
      question: "The correct form of calling with regard to onboard communications is:",
      options: [
        "Bridge this is Forward",
        "Ben Loyal Bridge this is Forward",
        "Ben Loyal Control this is Forward",
        "Ben Loyal Control this is Ben Loyal Alpha"
      ],
      answer: 2
    },
    {
      question: "When station receives a call which is intended for it, but is uncertain of the identity of the calling station:",
      options: [
        "It should ask for the call to be repeated",
        "It should ask the calling station to increase power",
        "It should not reply until the call has been repeated",
        "Reply using \"all stations\""
      ],
      answer: 0
    },
    {
      question: "A TR transmitted by Ship station should contain:",
      options: [
        "Local weather situation",
        "traffic on hand for the coast station",
        "owner's name &address",
        "Position, where bound &ETA"
      ],
      answer: 1
    },
    {
      question: "Communications on the port operations channel consist of:",
      options: [
        "Public correspondence with the nearest CRS",
        "receiving weather forecasts",
        "operational handling, movements of ships, safety navigation &safety of a person",
        "Intership communications"
      ],
      answer: 2
    },
    {
      question: "When testing a transmitter, ship's operator must:",
      options: [
        "use full power with an artificial aerial",
        "use low power with the main aerial",
        "use the least power available along with a dummy load or an artificial aerial",
        "use the emergency aerial on medium power"
      ],
      answer: 2
    },
    {
      question: "In areas where reliable comms is practicable in the VHF band, the method of calling is:",
      options: [
        "VTZX x 2 this is VTBZ x 2",
        "VTZX this is VTBZ x 2",
        "VTZX x 3 this is VTBZ x 3",
        "VTZX this is VTBZ"
      ],
      answer: 0
    },
    {
      question: "Section A of the GMDSS Radio Log Book consists of:",
      options: [
        "Particulars of the ship",
        "List of batteries",
        "Master's name and address",
        "Radio Operator's name and address"
      ],
      answer: 0
    },
    {
      question: "Between 2 ships & a coast station, if necessary, who controls the working",
      options: ["the coast station", "the ship station called", "the ship station calling", "none of the above"],
      answer: 0
    },
    {
      question: "Which of the following would be the call sign of a ship station",
      options: ["9HD", "D3HD", "14325", "ELBOW"],
      answer: 1
    },
    {
      question: "Which one of the following is a Coast Station Call Sign:",
      options: ["9V6", "A23", "9VG", "VTP1234"],
      answer: 2
    },
    {
      question: "If you call a Coast Station on a working frequency, it will normally reply on:",
      options: ["The Distress Channel", "DSC Channel", "Suitable RTT frequency", "On the same Channel Paired Channel"],
      answer: 3
    },
    {
      question: "Details of Weather broadcasting stations can be found in:",
      options: [
        "ITU List of Coast Stations",
        "ITU Radio Determination and Special Service Stations",
        "ALRS Vol 1",
        "ALRS Vol 6"
      ],
      answer: 0
    },
    {
      question: "The monthly tests carried out on board should include:",
      options: [
        "DSC Test Call to a Coast Station",
        "DSC internal test",
        "Survival Craft VHF Ch 16 checks",
        "EPIRB without use of Satellite System"
      ],
      answer: 3
    },
    {
      question: "The entries in the GMDSS log book is always made in:",
      options: ["Local time", "Ship's time", "Zonal time", "Co-ordinated Universal Time"],
      answer: 3
    },
    {
      question: "Identify the MMSI number of Coast Station:",
      options: ["041902341", "004192301", "419299720", "39899"],
      answer: 1
    },
    {
      question: "The Maximum Power (Mean Value) permitted in case of MF DSC is:",
      options: ["100 Watts", "50 Watts", "50Watts", "400 Watts"],
      answer: 3
    },
    {
      question: "A ship makes a routine call to Coast Station on MF DSC. No reply is received, Further action should be:",
      options: [
        "repeat the call at 2 min intervals",
        "repeat the call after 5 min. with the next call 15 min. later",
        "after 3 min. interval",
        "after 2 min. with the next call 3 min. later"
      ],
      answer: 1
    },
    {
      question: "Test signals in the Terrestrial system should not exceed:",
      options: ["10 seconds", "1 minute", "30 seconds", "3 minutes"],
      answer: 0
    },
    {
      question: "Who controls the working between a ship & a coast station",
      options: ["the coast station", "the ship station called", "the ship station calling", "none of the above"],
      answer: 0
    },
    {
      question: "Hearing a call addressed to you on 2182 KHz but unsure who called. Your further action would be",
      options: [
        "continue watching the channel for its repetition",
        "wait until the next silence period",
        "ask a local coast station if it knows who was calling",
        "broadcast a call for repetition"
      ],
      answer: 0
    },
    {
      question: "When distress working is in force on 2182 KHz, ships may make routine R/T Calls to coast stations on",
      options: ["2191.0 KHz", "2189.5 KHz", "2177.0 KHz", "2187.5 KHz"],
      answer: 0
    },
    {
      question: "You are in sea area A2. The frequency used for compulsory weekly testing with radiation is:",
      options: ["2187.5 KHz", "2189.5 KHz", "2174.5 KHz", "2191.0 KHz"],
      answer: 1
    },
    {
      question: "Routine VHF DSC business call may be made on:",
      options: ["Channel 08", "Channel 06", "Channel 70", "Channel 13"],
      answer: 2
    },
    {
      question: "The following is to be recorded in Section \"B\" of GMDSS Log Book",
      options: ["summary of communications", "Particulars of ship", "details of DDCO on board", "Equipment test results"],
      answer: 3
    },
    {
      question: "Which of the following types of messages has the highest priority",
      options: ["OBS", "Navigational warning", "Medical service", "Service message"],
      answer: 2
    },
    {
      question: "GMDSS Walkie-talkies are to be tested",
      options: ["every day", "every month", "every week", "not to be tested"],
      answer: 2
    }
  ],

  set12: [
    {
      question: "The equipment which should be tested every week by radiating signals to coast Station is:",
      options: ["EPIRB", "SART", "VHF DSC", "MF/HF DSC"],
      answer: 3
    },
    {
      question: "Survival craft VHF equipment shall be tested on",
      options: ["Ch 16", "Ch 70", "156.8 MHz", "Channel other than 16"],
      answer: 3
    },
    {
      question: "During R/T communications when is the term \"OUT\" used",
      options: ["After sending out a message", "End of Work", "Off Watch", "After entering port"],
      answer: 1
    },
    {
      question: "Details of Radio DF stations and Radio Beacons will be found in",
      options: [
        "ITU Radio Regulations Manual",
        "ITU List of Coast Stations and Special Service Stations",
        "International Code of Signals",
        "ITU List of Ship Stations and Maritime Mobile Service Identity Assignments"
      ],
      answer: 1
    },
    {
      question: "Master must inspect &sign GMDSS logbook:",
      options: ["each day", "on voyage completion", "once a week", "prior to SRT survey"],
      answer: 0
    },
    {
      question: "When a ship is called on 2182KHz, the ship should reply on:",
      options: ["2182 KHz", "M/F R/T work frequency", "2182 KHz unless otherwise instructed", "2048 KHz"],
      answer: 0
    },
    {
      question: "Monthly test will be carried out on:",
      options: ["VHF DSC", "MF/HF DSC", "UHF sets", "EPIRB, SART, Survival craft Sets"],
      answer: 3
    },
    {
      question: "DSC Distress call, unless stopped or acknowledged by DSC, continues at a random period of:",
      options: ["5 minutes", "3 minutes", "3.5 to 4.5 minutes", "1 to 2.75 minutes"],
      answer: 2
    },
    {
      question: "A Coast Radio Station should acknowledge a MF/HF DSC Distress alert between",
      options: ["15 to 30 seconds", "3 to 5 minutes", "5 to 8 minutes", "1 to 2.75 minutes"],
      answer: 1
    },
    {
      question: "Class of emission on MF/HF of DSC calls is",
      options: ["J3E", "H3E", "G3E/F3E", "F1B/J2B"],
      answer: 3
    },
    {
      question: "Speed of transmission of MF/HF DSC call is",
      options: ["20 bauds", "10 bauds", "100 bauds", "1200 bauds"],
      answer: 2
    },
    {
      question: "Duration of a single MF/HF DSC call is between",
      options: ["1 to 2 seconds", "6.2 to 7.2 seconds", "3 to 5 seconds", "0.5 to 1 second"],
      answer: 1
    },
    {
      question: "At the beginning of MF/HF DSC Call, a DOT pattern used is of duration",
      options: ["10-bit", "20-bit", "200-bit", "7-bit"],
      answer: 2
    },
    {
      question: "Symbol 104 used as 1st telecommand in DSC techniques refers to",
      options: ["End of Transmission", "End of Message", "Reply requested", "Unable to comply"],
      answer: 1
    },
    {
      question: "Symbol 112 used in telecommand in format specifier in DSC techniques means",
      options: ["Urgency", "Safety", "Distress", "Routine"],
      answer: 2
    },
    {
      question: "What action you will take if a false alert was sent on EPIRB?",
      options: [
        "Switch off EPIRB immediately and inform RCC",
        "Do nothing",
        "Wait for RCC to call",
        "Send a routine message"
      ],
      answer: 0
    },
    {
      question: "What action you will take if a false alert was sent on VHF/MF/HF DSC?",
      options: [
        "Switch off the equipment",
        "Transmit a false alert cancellation message on the same frequency",
        "Wait for acknowledgement",
        "Do nothing"
      ],
      answer: 1
    },
    {
      question: "What signal is used by a station transmitting Distress Relay?",
      options: ["MAYDAY", "PAN PAN", "MAYDAY RELAY", "SECURITE"],
      answer: 2
    },
    {
      question: "What information is contained in a Distress Relay Alert?",
      options: [
        "Ship's name only",
        "Distress vessel's identity, position, nature of distress and any other useful information",
        "Captain's name only",
        "Weather conditions only"
      ],
      answer: 1
    },
    {
      question: "What is the Distress signal and what does it indicate?",
      options: [
        "MAYDAY - indicates a ship or person is in grave and imminent danger and requires immediate assistance",
        "PAN PAN - indicates urgency",
        "SECURITE - indicates safety",
        "None of the above"
      ],
      answer: 0
    },
    {
      question: "What is the Urgency signal and what does it indicate?",
      options: [
        "MAYDAY - immediate danger",
        "PAN PAN - indicates a station has a very urgent message concerning safety of a ship or person",
        "SECURITE - safety message",
        "None of the above"
      ],
      answer: 1
    },
    {
      question: "What is the Safety signal and what does it indicate?",
      options: [
        "MAYDAY - distress",
        "PAN PAN - urgency",
        "SECURITE - indicates a station is about to transmit a message concerning safety of navigation or important meteorological warning",
        "None of the above"
      ],
      answer: 2
    },
    {
      question: "What is the purpose of CH-06 in GMDSS?",
      options: [
        "Distress and safety communications",
        "Intership safety communications and ship-to-aircraft",
        "Port operations",
        "Public correspondence"
      ],
      answer: 1
    },
    {
      question: "What is the purpose of 2189.5 KHz in GMDSS?",
      options: [
        "DSC distress frequency",
        "MF R/T distress and safety frequency",
        "MF R/T working frequency for ship-to-shore",
        "HF DSC frequency"
      ],
      answer: 2
    },
    {
      question: "What is the purpose of 3023 KHz in GMDSS?",
      options: [
        "DSC distress frequency",
        "HF R/T distress and safety frequency",
        "MF R/T working frequency",
        "NAVTEX frequency"
      ],
      answer: 1
    },
    {
      question: "What is the purpose of 4209.5 KHz in GMDSS?",
      options: [
        "MF DSC distress frequency",
        "HF DSC distress frequency",
        "NAVTEX international frequency",
        "HF R/T distress frequency"
      ],
      answer: 2
    },
    {
      question: "What is the purpose of 121.5 MHz in GMDSS?",
      options: [
        "Marine VHF distress frequency",
        "Aeronautical emergency frequency for distress and SAR aircraft communications",
        "Satellite EPIRB frequency",
        "NAVTEX frequency"
      ],
      answer: 1
    },
    {
      question: "What is the purpose of 2177 KHz in GMDSS?",
      options: [
        "MF DSC distress frequency",
        "MF R/T distress and safety frequency",
        "MF R/T working frequency for ship-to-shore",
        "HF DSC distress frequency"
      ],
      answer: 2
    },
    {
      question: "Under what circumstances will a ship transmit MAYDAY RELAY?",
      options: [
        "When the ship is in distress",
        "When relaying a distress alert on behalf of another vessel in distress",
        "When sending an urgency message",
        "When sending a safety message"
      ],
      answer: 1
    },
    {
      question: "Under what circumstances will a ship transmit SEELONCE FEENEE?",
      options: [
        "When distress traffic is in progress",
        "When distress traffic has ended and normal working can resume",
        "When requesting silence during distress",
        "When acknowledging a distress alert"
      ],
      answer: 1
    }
  ],

  set13: [
    {
      question: "State the Radio Telephone Urgency Signal?",
      options: ["MAYDAY", "PAN PAN", "SECURITE", "SOS"],
      answer: 1
    },
    {
      question: "What does the Urgency signal indicate?",
      options: [
        "A ship is in grave and imminent danger",
        "A station has a very urgent message concerning safety of a ship or person",
        "A station is about to transmit a safety message",
        "Routine communication"
      ],
      answer: 1
    },
    {
      question: "The procedure to be followed by a vessel who has received a DSC Urgency Alert addressed to all stations on MF.",
      options: [
        "Acknowledge immediately",
        "Monitor the distress frequency for the urgency message",
        "Relay the alert to all ships",
        "Ignore the alert"
      ],
      answer: 1
    },
    {
      question: "What procedure to be followed if no Urgency message is heard after the Urgency Alert/Signal?",
      options: [
        "Wait indefinitely",
        "Inform nearest coast station and resume normal working",
        "Send a relay to all vessels",
        "Switch off equipment"
      ],
      answer: 1
    },
    {
      question: "When the term PRUDONCE is used?",
      options: [
        "When distress traffic has ended",
        "When requesting silence from interfering stations during distress",
        "When acknowledging a distress alert",
        "When sending a safety message"
      ],
      answer: 1
    },
    {
      question: "When is the term SEELONCE MAYDAY used?",
      options: [
        "When distress traffic has ended",
        "When requesting silence from interfering stations during distress",
        "By the station controlling distress traffic to impose silence",
        "When sending a safety message"
      ],
      answer: 2
    },
    {
      question: "What is the NAVTEX international broadcast Freq.?",
      options: ["518 kHz", "2187.5 kHz", "4209.5 kHz", "8414.5 kHz"],
      answer: 0
    },
    {
      question: "When you are controlling Distress traffic, state under what circumstances you will send MAYDAY RELAY message?",
      options: [
        "When you are in distress",
        "When relaying a distress alert on behalf of another vessel in distress",
        "When sending an urgency message",
        "When sending a safety message"
      ],
      answer: 1
    },
    {
      question: "What is the primary intership working frequency?",
      options: ["Channel 06", "Channel 16", "Channel 13", "Channel 70"],
      answer: 2
    },
    {
      question: "What is COSPAS-SARSAT uplink frequency",
      options: ["121.5 MHz", "406 MHz", "243 MHz", "1.6 GHz"],
      answer: 1
    },
    {
      question: "What is the purpose of EPIRB?",
      options: [
        "To transmit distress alert via satellite to SAR authorities",
        "To communicate with other ships",
        "To receive weather forecasts",
        "To navigate"
      ],
      answer: 0
    },
    {
      question: "What does the EPIRB signal indicates?",
      options: [
        "Ship's identity and position in distress",
        "Weather conditions",
        "Navigation warnings",
        "Routine traffic"
      ],
      answer: 0
    },
    {
      question: "On what frequencies does COSPAS-SARSAT EPIRB operate?",
      options: ["121.5 MHz and 406 MHz", "156.8 MHz and 156.525 MHz", "2182 kHz and 2187.5 kHz", "1.6 GHz and 4 GHz"],
      answer: 0
    },
    {
      question: "On what frequencies does AIS-SART operate?",
      options: [
        "161.975 MHz and 162.025 MHz",
        "156.525 MHz and 156.8 MHz",
        "406 MHz and 121.5 MHz",
        "2182 kHz and 2187.5 kHz"
      ],
      answer: 0
    },
    {
      question: "State the R/T safety signal.",
      options: ["MAYDAY", "PAN PAN", "SECURITE", "SOS"],
      answer: 2
    },
    {
      question: "What does the Urgency Signal indicate?",
      options: [
        "A ship is in grave and imminent danger",
        "A station has a very urgent message concerning safety of a ship or person",
        "A station is about to transmit a safety message",
        "Routine communication"
      ],
      answer: 1
    },
    {
      question: "Give an example of Urgency R/T call on VHF CH-16",
      options: [
        "MAYDAY MAYDAY MAYDAY",
        "PAN PAN PAN PAN PAN PAN",
        "SECURITE SECURITE SECURITE",
        "SOS SOS SOS"
      ],
      answer: 1
    },
    {
      question: "Can a urgency call be addressed to a particular station?",
      options: ["Yes", "No", "Only to coast stations", "Only to ships"],
      answer: 0
    },
    {
      question: "What is the Distress signal & what does it indicate?",
      options: [
        "MAYDAY - indicates a ship or person is in grave and imminent danger and requires immediate assistance",
        "PAN PAN - indicates urgency",
        "SECURITE - indicates safety",
        "None of the above"
      ],
      answer: 0
    },
    {
      question: "What is the Safety signal and what does it indicate?",
      options: [
        "MAYDAY - distress",
        "PAN PAN - urgency",
        "SECURITE - indicates a station is about to transmit a message concerning safety of navigation or important meteorological warning",
        "None of the above"
      ],
      answer: 2
    },
    {
      question: "When abandoning a ship, state the 2 radio equipment to be activated for locating purpose?",
      options: [
        "EPIRB and SART",
        "VHF radio and MF radio",
        "NAVTEX and AIS",
        "Inmarsat and Iridium"
      ],
      answer: 0
    },
    {
      question: "Under what circumstances the signal 'SEELONCE DISTRESS' is used?",
      options: [
        "When distress traffic has ended",
        "When requesting silence from interfering stations during distress",
        "When acknowledging a distress alert",
        "When sending a safety message"
      ],
      answer: 1
    },
    {
      question: "What is the purpose of the GMDSS Radio Log Book?",
      options: [
        "To record all communications and equipment tests",
        "To record crew names",
        "To record cargo details",
        "To record fuel consumption"
      ],
      answer: 0
    },
    {
      question: "Who is responsible for maintaining the GMDSS Radio Log Book?",
      options: ["Every officer on ship", "Master of the ship", "Radio Operator", "Chief Officer"],
      answer: 1
    },
    {
      question: "What is the retention period for the GMDSS Radio Log Book if it contains distress communications?",
      options: ["1 year", "2 years", "3 years", "5 years"],
      answer: 2
    },
    {
      question: "What is the retention period for the GMDSS Radio Log Book if it does not contain distress communications?",
      options: ["1 year", "2 years", "3 years", "5 years"],
      answer: 1
    },
    {
      question: "What is the purpose of the SART?",
      options: [
        "To transmit a distress alert via satellite",
        "To locate the position of a ship in distress using radar",
        "To communicate with other ships",
        "To receive weather forecasts"
      ],
      answer: 1
    },
    {
      question: "What is the purpose of the EPIRB?",
      options: [
        "To transmit a distress alert via satellite to SAR authorities",
        "To communicate with other ships",
        "To receive weather forecasts",
        "To navigate"
      ],
      answer: 0
    },
    {
      question: "What is the purpose of NAVTEX?",
      options: [
        "To transmit distress alerts",
        "To receive maritime safety information and navigational warnings",
        "To communicate with other ships",
        "To navigate"
      ],
      answer: 1
    },
    {
      question: "What is the purpose of the AIS?",
      options: [
        "To transmit distress alerts",
        "To automatically identify and track vessels",
        "To receive weather forecasts",
        "To navigate"
      ],
      answer: 1
    }
  ],

  set14: [
    {
      question: "What is the purpose of the DSC?",
      options: [
        "To transmit distress alerts digitally",
        "To communicate with other ships",
        "To receive weather forecasts",
        "To navigate"
      ],
      answer: 0
    },
    {
      question: "What is the purpose of the Inmarsat C?",
      options: [
        "To transmit distress alerts and store and forward messages",
        "To communicate with other ships via voice",
        "To receive weather forecasts",
        "To navigate"
      ],
      answer: 0
    },
    {
      question: "What is the purpose of the Inmarsat FBB?",
      options: [
        "To provide voice and data communication services",
        "To transmit distress alerts only",
        "To receive weather forecasts only",
        "To navigate"
      ],
      answer: 0
    },
    {
      question: "What is the purpose of the Iridium?",
      options: [
        "To provide global voice and data communication services including distress alerting",
        "To provide local VHF communication",
        "To receive weather forecasts only",
        "To navigate"
      ],
      answer: 0
    },
    {
      question: "What is the purpose of the VHF radio?",
      options: [
        "To provide short-range communication including distress alerting",
        "To provide long-range communication only",
        "To receive weather forecasts only",
        "To navigate"
      ],
      answer: 0
    },
    {
      question: "What is the purpose of the MF/HF radio?",
      options: [
        "To provide medium and long-range communication including distress alerting",
        "To provide short-range communication only",
        "To receive weather forecasts only",
        "To navigate"
      ],
      answer: 0
    },
    {
      question: "What is the purpose of the two-way VHF handheld radio?",
      options: [
        "To provide communication between survival craft and rescue units",
        "To provide long-range communication",
        "To receive weather forecasts",
        "To navigate"
      ],
      answer: 0
    },
    {
      question: "What is the purpose of the aeronautical VHF radio?",
      options: [
        "To communicate with SAR aircraft",
        "To communicate with other ships",
        "To receive weather forecasts",
        "To navigate"
      ],
      answer: 0
    },
    {
      question: "What is the purpose of the reserve source of energy?",
      options: [
        "To provide power to GMDSS equipment in case of main and emergency power failure",
        "To provide power to navigation equipment only",
        "To provide power to lighting only",
        "To provide power to propulsion only"
      ],
      answer: 0
    },
    {
      question: "What is the purpose of the antenna tuning unit (ATU)?",
      options: [
        "To match the antenna impedance for optimum radiation",
        "To amplify the signal",
        "To demodulate the signal",
        "To modulate the signal"
      ],
      answer: 0
    },
    {
      question: "What is the purpose of the battery hydrometer?",
      options: [
        "To measure the specific gravity of the electrolyte",
        "To measure voltage",
        "To measure current",
        "To measure temperature"
      ],
      answer: 0
    },
    {
      question: "What is the purpose of the squelch control?",
      options: [
        "To eliminate receiver noise when no signal is present",
        "To increase sensitivity",
        "To improve selectivity",
        "To reduce fading"
      ],
      answer: 0
    },
    {
      question: "What is the purpose of the AGC?",
      options: [
        "To reduce the effects of fading",
        "To increase sensitivity",
        "To improve selectivity",
        "To eliminate noise"
      ],
      answer: 0
    },
    {
      question: "What is the purpose of the clarifier?",
      options: [
        "To provide fine tuning",
        "To select frequency",
        "To select emission mode",
        "To choose communication mode"
      ],
      answer: 0
    },
    {
      question: "What is the purpose of the volume control?",
      options: [
        "To vary the AF voltage applied to the AF amplifier",
        "To vary the RF voltage",
        "To vary the IF voltage",
        "To vary the carrier frequency"
      ],
      answer: 0
    },
    {
      question: "What is the purpose of the attenuator?",
      options: [
        "To prevent damage to the receiver from a nearby strong station",
        "To increase sensitivity",
        "To improve selectivity",
        "To reduce fading"
      ],
      answer: 0
    },
    {
      question: "What is the purpose of the dummy load?",
      options: [
        "To test the transmitter without radiating signals",
        "To increase transmitter power",
        "To improve antenna efficiency",
        "To reduce interference"
      ],
      answer: 0
    },
    {
      question: "What is the purpose of the weak link in an antenna?",
      options: [
        "To break under strain and prevent damage to the antenna system",
        "To increase signal strength",
        "To improve antenna efficiency",
        "To reduce interference"
      ],
      answer: 0
    },
    {
      question: "What is the purpose of insulators in an antenna system?",
      options: [
        "To provide a high resistance path to earth",
        "To provide a low resistance path to earth",
        "To increase signal strength",
        "To reduce interference"
      ],
      answer: 0
    },
    {
      question: "What is the purpose of antenna grounding?",
      options: [
        "To protect personnel and equipment from lightning and static",
        "To increase signal strength",
        "To improve antenna efficiency",
        "To reduce interference"
      ],
      answer: 0
    },
    {
      question: "What is the purpose of the GMDSS?",
      options: [
        "To ensure the safety of ships and persons at sea",
        "To control the speed of ships",
        "To collect passenger information",
        "To monitor fishing quotas"
      ],
      answer: 0
    },
    {
      question: "What is the purpose of the Sea Area A1?",
      options: [
        "To define the area covered by VHF coastal stations",
        "To define the area covered by MF coastal stations",
        "To define the area covered by HF coastal stations",
        "To define the area covered by satellite"
      ],
      answer: 0
    },
    {
      question: "What is the purpose of the Sea Area A2?",
      options: [
        "To define the area covered by MF coastal stations",
        "To define the area covered by VHF coastal stations",
        "To define the area covered by HF coastal stations",
        "To define the area covered by satellite"
      ],
      answer: 0
    },
    {
      question: "What is the purpose of the Sea Area A3?",
      options: [
        "To define the area covered by Inmarsat geostationary satellite",
        "To define the area covered by VHF coastal stations",
        "To define the area covered by MF coastal stations",
        "To define the area covered by HF coastal stations"
      ],
      answer: 0
    },
    {
      question: "What is the purpose of the Sea Area A4?",
      options: [
        "To define the area outside Inmarsat coverage (polar regions)",
        "To define the area covered by VHF coastal stations",
        "To define the area covered by MF coastal stations",
        "To define the area covered by HF coastal stations"
      ],
      answer: 0
    },
    {
      question: "What is the purpose of the DSC?",
      options: [
        "To transmit distress alerts digitally",
        "To communicate with other ships via voice",
        "To receive weather forecasts",
        "To navigate"
      ],
      answer: 0
    },
    {
      question: "What is the purpose of the NAVTEX?",
      options: [
        "To receive maritime safety information and navigational warnings",
        "To transmit distress alerts",
        "To communicate with other ships",
        "To navigate"
      ],
      answer: 0
    },
    {
      question: "What is the purpose of the AIS?",
      options: [
        "To automatically identify and track vessels",
        "To transmit distress alerts",
        "To receive weather forecasts",
        "To navigate"
      ],
      answer: 0
    },
    {
      question: "What is the purpose of the SART?",
      options: [
        "To locate the position of a ship in distress using radar",
        "To transmit a distress alert via satellite",
        "To communicate with other ships",
        "To receive weather forecasts"
      ],
      answer: 0
    },
    {
      question: "What is the purpose of the EPIRB?",
      options: [
        "To transmit a distress alert via satellite to SAR authorities",
        "To communicate with other ships",
        "To receive weather forecasts",
        "To navigate"
      ],
      answer: 0
    }
  ]
};