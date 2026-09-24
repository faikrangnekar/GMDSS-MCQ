/*
============================================================
 GMDSS MCQ QUESTION DATABASE
============================================================
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
        "All above",
      ],
      answer: 3
    },
    {
      question: "In addition to distress communications, GMDSS system also provide for:",
      options: [
        "Urgency and Safety communications and promulgation of MSI and SAR-related information.",
        "Facsimile communications Data communications",
        "Internet enabled voice and text communications",
      ],
      answer: 0
    },
    {
      question: "GMDSS applies to:",
      options: [
        "All cargo Ships of 300 GRT and above and all passenger ships irrespective of size, on international trade",
        "Pilot vessels and VTS stations in port and harbour for safe navigation of all ships",
        "Ship sailing in international waters and is more than 500 GRT",
        "All ships sailing internationally",
      ],
      answer: 0
    },
    {
      question: "GMDSS is fully implemented with effect from:",
      options: [
        "01.01.1981 01.01.1990",
        "01.02.1992 01.02.1999",
      ],
      answer: 1
    },
    {
      question: "Sea Area A1 is defined as:",
      options: [
        "An area within in 30 nautical miles from coastal area in which communication is possible",
        "An area within the radiotelephone coverage of at least one very high frequency (VHF) coast station in which continuous DSC alerting is available, as may be defined by the contracting government",
        "An area within the VHF coverage of at least one coast radio station",
        "An area outside the territorial limits, within the coverage of VHF coast radio station",
      ],
      answer: 1
    },
    {
      question: "Sea Area A2 is defined as:",
      options: [
        "An area, excluding Sea Area A1, within the radiotelephone coverage of at least one MF coast radio station in which continuous DSC alerting is available, as may be decided by the contracting government",
        "An area outside the VHF coverage area within the coverage of a MF coast radio station",
        "An area excluding the Sea Area A1, within the coverage of at least one MF coast radio station beyond 30 nautical miles",
        "An area within the coverage of a MF coast radio station up to a distance of 200-300 NM",
      ],
      answer: 0
    },
    {
      question: "Sea Area A3 is defined as:",
      options: [
        "An area, excluding Sea Area A1 and A2, within the coverage of satellite communications",
        "An area, outside the coverage area of VHF and MF, within the coverage of at least one HF coast radio station",
        "An area, excluding Sea Area A1 and A2, within the coverage of an Inmarsat geostationary satellite in which continuous alerting is available",
        "An area, excluding Sea Area A1 and A2, within the coverage of a recognised mobile satellite service supported by the ship earth station on board in which continuous alerting is available",
      ],
      answer: 3
    },
    {
      question: "Urgency and Safety Communications is one of the functional requirements under GMDSS:",
      options: [
        "FALSE MAYBE",
        "TRUE NO",
      ],
      answer: 1
    },
    {
      question: "Under the revised modernisation of GMDSS, reliability methods maintenance requirements to ensure equipment availability is by following:",
      options: [
        "Duplication of equipment, Shore based maintenance contract, at sea maintenance options",
        "Duplication of equipment, at sea maintenance along with sufficient spares for repairs",
        "Duplication of equipment, electronics officer, and related manuals, spares and documents",
        "Radio equipment repair qualified crew to repair radio equipment at base",
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
        "Holding any certificate qualified to operate VHF radio",
      ],
      answer: 0
    },
    {
      question: "A ship sailing in Sea Area A1 must carry an operator:",
      options: [
        "Holding a radio operator certificate",
        "Holding qualifications to operate and service radio",
        "Holding a Restricted or a General Operator's Certificate or First- or Second- Class Radio Electronic Certificate",
        "Holding a qualification of electronics and telecommunications for radio operations",
      ],
      answer: 2
    },
    {
      question: "The international convention on STCW requires all deck officers to hold an appropriate certificate related to the GMDSS (generally GOC):",
      options: [
        "TRUE FALSE",
        "NO COMMENTS MAYBE",
      ],
      answer: 0
    },
    {
      question: "GMDSS ship of GRT 300 to GRT 499 requires following life-saving safety radios:",
      options: [
        "One EPIRB, One SART/AIS-SART, and Two two-way VHF GMDSS handheld radiotelephone walkie talkies",
        "One EPIRB, One SART, and One two-way VHF GMDSS handheld radiotelephone walkie talkies",
        "One EPIRB and Two two-way VHF GMDSS handheld radiotelephone walkie talkies",
        "One EPIRB and One SART/AIS-SART",
      ],
      answer: 0
    },
    {
      question: "GMDSS ship above 500 GRT requires following life-saving safety radios:",
      options: [
        "One EPIRB, One SART/AIS-SART, and Three two-way VHF GMDSS handheld radiotelephone walkie talkies",
        "One EPIRB, Two SART/AIS-SARTs, and Three two-way VHF GMDSS handheld radiotelephone walkie talkies",
        "One EPIRB One SART/AIS-SART and Two two-way VHF GMDSS handheld radiotelephone walkie talkies",
        "One EPIRB and One SART/AIS-SART and One two-way VHF GMDSS handheld radiotelephone walkie talkies",
      ],
      answer: 1
    },
    {
      question: "Additional radio equipment for a passenger ship is:",
      options: [
        "A remote distress alarm panel for transmitting as well as receiving indication of distress alerts from the position of conning, generally from where the ship is navigated",
        "A remote VHF radio operations control to allow ship to communicate with other ships",
        "A remote radiocommunications access for operating all the equipment for any emergency",
        "A remote radio control device to control VHF, MF, HF and all satellite radio equipment",
      ],
      answer: 0
    },
    {
      question: "Power supply source for a GMDSS radio station is:",
      options: [
        "Main's ship power supply and Ship's Emergency Generator",
        "Main's ship power supply, Ship's Emergency Generator and a dedicated radio battery bank called the Reserve Source of Energy",
        "Main's ship power supply and a dedicated battery invertor emergency generator",
        "Main's ship power supply and an uninterrupted power supply generator source",
      ],
      answer: 1
    },
    {
      question: "General and operation radio communications is outside the domain of functional requirement under the revised modernisation of GMDSS:",
      options: [
        "TRUE FALSE",
        "NO COMMENTS MAYBE",
      ],
      answer: 0
    },
    {
      question: "GMDSS Radio Regulations requires that all rules during distress must be strictly followed, specifically pertaining to the obtaining of help for saving life and asset:",
      options: [
        "YES NO",
        "MAYBE NO COMMENTS",
      ],
      answer: 0
    },
    {
      question: "Recognised mobile satellite service under GMDSS for internationally trading ships is:",
      options: [
        "Inmarsat C Inmarsat FBB -- MST (Marine Safety Terminal) also called FST (Fleet Safety Terminal)",
        "Iridium All Above",
      ],
      answer: 1
    },
    {
      question: "Life safety radio equipment to be carried along with in lifeboat during abandoning of a vessel",
      options: [
        "SART/AIS-SART and EPIRB Two-way GMDSS VHF radiotelephone walkie talkie along with sealed battery, EPIRB and SART/AIS-SART",
        "EPIRB and VHF radiotelephone walkie talkie",
        "SART/AIS-SART and two-way GMDSS VHF radiotelephone walkie talkie along with sealed battery",
      ],
      answer: 0
    },
    {
      question: "Safety Radio Certificate is issued by:",
      options: [
        "IMO DG Shipping -- MMD",
        "WPC -- DOT ITU",
      ],
      answer: 0
    },
    {
      question: "Maritime Mobile Station License is issued by:",
      options: [
        "DG Shipping -- MMD WPC -- DOT",
        "ITU IMO",
      ],
      answer: 0
    },
    {
      question: "During distress following mode of communications may be used to draw attention:",
      options: [
        "VHF and MF MF/HF and satellite",
        "Any Satellite, VHF, MF/HF, mobile telephone",
      ],
      answer: 1
    },
    {
      question: "When abandoning a vessel a GMDSS operator should:",
      options: [
        "take safe custody of ship station license, SRT certificate, cash & documents switch off all radio equipment",
        "put off the mains switch to avoid fire keep all the equipment in distress transmitting mode.",
      ],
      answer: 1
    },
    {
      question: "Under GMDSS a vessel in Distress should:",
      options: [
        "strictly follow the IMO guidelines when calling for assistance observe all GMDSS regulations",
        "use any means at its disposal to attract attention & get the necessary help use Inmarsat / Iridium users guide to call for assistance",
      ],
      answer: 1
    },
    {
      question: "The line-of-sight propagation is mainly associated with:",
      options: [
        "HF LF",
        "VHF/UHF MF",
      ],
      answer: 1
    },
    {
      question: "The line-of-sight distance can be increased by:",
      options: [
        "Increasing the antenna heights at RX and TX",
        "Reducing the antenna heights at RX / TX",
        "Increasing the gain of the Antenna",
        "None of the above",
      ],
      answer: 0
    },
    {
      question: "MUF is defined as:",
      options: [
        "the maximum usable frequency during day.",
        "The max freq which can be reflected by an ionosphere over a particular path for communications.",
        "Is the wanted frequency plus twice IF",
        "The minimum usable frequency during night that can be used for communication",
      ],
      answer: 1
    },
    {
      question: "The skip distance in communication is:",
      options: [
        "direct waves the distance from the Tx to where the first sky wave returns.",
        "The distance along the ground where the ground wave ends and the first sky wave returns.",
      ],
      answer: 0
    },
    {
      question: "Squelch control is used to eliminate",
      options: [
        "static interference electrical disturbances",
        "receiver noise unwanted carrier",
      ],
      answer: 1
    },
  ],

  set2: [
    {
      question: "Fading is an phenomenon associated mainly with:",
      options: [
        "HF communications MF communications during daytime",
        "Microwave communications VHF communications",
      ],
      answer: 0
    },
    {
      question: "The main mode of propagation of HF is:",
      options: [
        "sky waves ground waves",
        "direct waves all",
      ],
      answer: 0
    },
    {
      question: "The OTF is",
      options: [
        "The maximum usable frequency during day",
        "The critical frequency at night",
        "85% of the maximum usable freq.",
        "The lowest usable freq for. Communication.",
      ],
      answer: 2
    },
    {
      question: "In the frequency band 500 to 3000 KHz the communication is by the way of:",
      options: [
        "ground waves sky waves",
        "space waves all of the above",
      ],
      answer: 0
    },
    {
      question: "The frequency range 300 to 3000 KHz is called:",
      options: [
        "Low frequency High frequency",
        "Medium frequency Ultra- high frequency",
      ],
      answer: 1
    },
    {
      question: "In a HF communication link the following is employed to reduce the effect of fading:",
      options: [
        "Automatic Gain control Audio Gain control",
        "Clarifier Squelch control",
      ],
      answer: 0
    },
    {
      question: "The critical frequency is",
      options: [
        "The MUF during day for communication",
        "The optimum working freq for communication",
        "The frequency which penetrates the ionosphere",
        "For a given layer the maximum frequency that can be propagated at vertical incidence",
      ],
      answer: 3
    },
    {
      question: "In Receivers squelch is used to:",
      options: [
        "Cut-off the speaker when there is no transmission on selected freq.",
        "Improve Sensitivity Reduce the noise and effects of fading",
        "Improve Selectivity",
      ],
      answer: 0
    },
    {
      question: "In MF/HF receiver AGC is being used to:",
      options: [
        "Improve Selectivity Improve Sensitivity",
        "Reduce effects of Fading Tune Antenna",
      ],
      answer: 1
    },
    {
      question: "In a receiver Volume control varies the:",
      options: [
        "RF Voltage received by receiving Antenna",
        "AF Voltage applied to AF Amplifier",
        "RF Voltage applied to de-modulator",
        "All the above",
      ],
      answer: 1
    },
    {
      question: "Top loading of an antenna will",
      options: [
        "increase the electrical length increase the bandwidth",
        "decrease the electrical length decrease the bandwidth",
      ],
      answer: 0
    },
    {
      question: "A half wave dipole antenna operating on 150 MHz will have a length of",
      options: [
        "2.0 mtrs 0.2 mtrs",
        "20 mtrs 0.02 mtrs",
      ],
      answer: 0
    },
    {
      question: "The freq is inversely proportional to",
      options: [
        "amplitude Phase",
        "Speed Time of one cycle",
      ],
      answer: 1
    },
    {
      question: "Critical freq during the day time is",
      options: [
        "More than that of night time Less than that of night time",
        "Same as during the night time 80% of MUF",
      ],
      answer: 0
    },
    {
      question: "An attenuator is used to avoid",
      options: [
        "Interference from a nearby station",
        "Fading To prevent damage of the receiver from a station nearby",
        "Static",
      ],
      answer: 1
    },
    {
      question: "To receive the weak signal the Squelch control will be turned to",
      options: [
        "Maximum Minimum",
        "No Effect squelch has Midway",
      ],
      answer: 0
    },
    {
      question: "Ionospheric propagation is used for the following frequencies",
      options: [
        "300 - 3000 KHz 3000 - 30000 KHz",
        "30000 - 300000 KHz 30 - 300 KHz",
      ],
      answer: 0
    },
    {
      question: "The sensitivity of a receiving system is:",
      options: [
        "its ability to handle high signal strengths its capability to receive the weakest signal",
        "its characteristic to respond to distress alerts its ability to produce original signal",
      ],
      answer: 0
    },
    {
      question: "M.U.F. is higher in summer than in winter because:",
      options: [
        "the density of ionisation is less in summer.",
        "the density of Ionisation is more in summer the D layer disappears in summer",
        "OTF is less in summer.",
      ],
      answer: 1
    },
    {
      question: "Type of VHF antenna used:",
      options: [
        "Omni-directional Parabolic antenna",
        "half wavelength dipole antenna",
        "Yagi Uda antenna",
      ],
      answer: 2
    },
    {
      question: "Modulation is the process of:",
      options: [
        "mixing of Audio signal with RF carrier mixing of RF carrier with Audio carrier",
        "mixing of two RF carriers to get side bands none of the above",
      ],
      answer: 0
    },
    {
      question: "The main advantage of frequency modulation other than amplitude modulation is :",
      options: [
        "at the receiver large increase in noise at the receiver no noise at all",
        "at the receiver large decrease in noise none of the above",
      ],
      answer: 0
    },
    {
      question: "If RF is 4 MHz and the IF is 100 kHz then oscillator frequency should be",
      options: [
        "4000 kHz 104 kHz",
        "96 kHz 4100 kHz",
      ],
      answer: 1
    },
    {
      question: "J3E emission are SSB transmission with",
      options: [
        "Full carrier Suppressed carrier",
        "Reduced carrier None of the above",
      ],
      answer: 0
    },
    {
      question: "In frequency modulation the frequency of the carrier varies with:",
      options: [
        "The amplitude of the audio The frequency of the audio",
        "The amplitude of the carrier The frequency of the carrier",
      ],
      answer: 0
    },
    {
      question: "The frequency to which the incoming signal is changed in super heterodyne reception is called:",
      options: [
        "amplitude frequency radio frequency",
        "intermediate frequency modulated frequency",
      ],
      answer: 1
    },
    {
      question: "Critical frequency during the day time is",
      options: [
        "More than that of night time Less than that of night time",
        "Same as during the night time 80% of MUF",
      ],
      answer: 0
    },
    {
      question: "One of the advantages of using J3E",
      options: [
        "Less current is drawn from the batteries then H3E",
        "The signal is less efficient than R3E",
        "The received signal is clearer than H3E",
        "The signal contains less power than H3E",
      ],
      answer: 0
    },
    {
      question: "On an MF transceiver, DUPLEX operation is the use of one",
      options: [
        "Handset for MF RT and another handset for HF/RT",
        "Frequency to transmit and another frequency to receive simultaneously",
        "Control to change RF gain and another control to the AF gain",
        "Battery bank to power the transmitter and another battery bank for the receiver",
      ],
      answer: 1
    },
    {
      question: "Which to the following emission occupies less Radio Spectrum",
      options: [
        "J3E FIB",
        "F3E A3E",
      ],
      answer: 0
    },
  ],

  set3: [
    {
      question: "The standard IF value for amplitude modulated super heterodyne receivers is:",
      options: [
        "550 KHz 455 KHz",
        "660 KHz 720 KHz",
      ],
      answer: 0
    },
    {
      question: "The RF receiver's ability to reject unwanted signal is called:",
      options: [
        "Selectivity Sensitivity",
        "Signal to Noise Ratio Efficiency",
      ],
      answer: 0
    },
    {
      question: "The radio transmitters are categorized into types based on the type of modulation?",
      options: [
        "One Two",
        "Three Four",
      ],
      answer: 1
    },
    {
      question: "In which one of the following broadcasting the stereophonic transmission is not possible?",
      options: [
        "Amplitude modulation Frequency modulation",
        "Both A and B None of the above",
      ],
      answer: 0
    },
    {
      question: "Marine VHF DSC communications use G2B emission, the modulation bandwidth is",
      options: [
        "100 Hz 304 Hz",
        "2.16 KHz 134 Hz",
      ],
      answer: 1
    },
    {
      question: "The modulation and bandwidth used in MF/HF DSC communications is",
      options: [
        "J2B 134 Hz J3E 2.7 KHz",
        "G2B 2.16 KHz H3E 3.0 KHz",
      ],
      answer: 0
    },
    {
      question: "Skip distance is",
      options: [
        "Distance between transmitter and the first point at which sky wave returns",
        "Distance between transmitter and ATU",
        "Safe Distance at which satellite equipment antenna is placed from radar antenna",
        "Safe Distance between radar and other installed antenna on the antenna deck",
      ],
      answer: 0
    },
    {
      question: "Critical frequency is",
      options: [
        "Frequency used to communicate between two points in a given ionospheric layer",
        "Frequency which does not return to earth for a given ionospheric layer",
        "Frequency which returns vertically to earth for a given ionospheric layer",
        "Frequency used in transmitter and receiver to modulate and demodulate signals",
      ],
      answer: 2
    },
    {
      question: "Space wave using line of sight communications is used in following communications",
      options: [
        "Satellite communications MF communications",
        "HF communications VHF communications",
      ],
      answer: 0
    },
    {
      question: "Surface wave also called as ground wave is used for",
      options: [
        "VHF communications HF communications",
        "MF communications Satellite communications",
      ],
      answer: 1
    },
    {
      question: "Sky wave also called as ionospheric wave is used for",
      options: [
        "HF communications Satellite communications",
        "VHF communications Submarine communications",
      ],
      answer: 0
    },
    {
      question: "Capture effect is present in",
      options: [
        "VHF communication HF transmissions",
        "MF receivers Satellite communications",
      ],
      answer: 0
    },
    {
      question: "MF may use sky wave and ground wave during night communications",
      options: [
        "TRUE FALSE",
        "NOT POSSIBLE NO COMMENTS",
      ],
      answer: 0
    },
    {
      question: "Which one of the following radio wave transmitters are used in radar and satellite communication?",
      options: [
        "Long wave Medium wave",
        "Short wave Super high frequency",
      ],
      answer: 1
    },
    {
      question: "Which one of the following radio wave transmitters are used in AM broadcasting?",
      options: [
        "Long wave Medium wave",
        "Short wave Very high frequency",
      ],
      answer: 0
    },
    {
      question: "Which one of the following broadcastings requires larger transmission bandwidth?",
      options: [
        "Amplitude modulation Frequency modulation",
        "Both a and b None of the above",
      ],
      answer: 0
    },
    {
      question: "IF values of AM receivers lie between",
      options: [
        "50 KHz to 250 KHz 5 KHz to 25 KHz",
        "10 KHz to 25 KHz 430 KHz to 25 MHz",
      ],
      answer: 1
    },
    {
      question: "The number of amplification stages of a radio receiver is",
      options: [
        "Two Three",
        "Less than three More than three",
      ],
      answer: 0
    },
    {
      question: "In simplex channel, the flow of data is",
      options: [
        "In both directions, but one at a time",
        "Always in both direction Always in one direction",
        "None of the above",
      ],
      answer: 0
    },
    {
      question: "The main source of energy for a satellite is",
      options: [
        "Solar cell Fuel cell",
        "Magneto hydrodynamic generator",
        "Battery",
      ],
      answer: 0
    },
    {
      question: "An example of a receiver is",
      options: [
        "NAVTEX EPIRB",
        "Marine VHF Radio SART",
      ],
      answer: 0
    },
    {
      question: "An example of a transmitter is",
      options: [
        "MF/HF Radio SART",
        "EPIRB NAVTEX",
      ],
      answer: 1
    },
    {
      question: "Receiver clarifier is used for",
      options: [
        "Fine tuning Frequency selection",
        "Selection of the frequency mode of emission",
        "Choosing the subsequent mode of communication",
      ],
      answer: 0
    },
    {
      question: "Sensitivity is a function described as",
      options: [
        "Ability of a receiver to receive weak signals",
        "Ability of a receiver to select the correct frequency chosen",
        "Ability of a receiver to produce a stereophonic sound at speaker",
        "Ability of a receiver to accept or reject wanted or unwanted frequency",
      ],
      answer: 0
    },
    {
      question: "Selectivity is described as a function used to",
      options: [
        "Accept wanted signal and reject unwanted signal",
        "Select subsequent voice distress frequency in the Marine VHF Band",
        "Select distress priority and pre-empt urgency, safety and routine communication",
        "Select voice communication option subsequent to sending of an alert",
      ],
      answer: 0
    },
    {
      question: "Fading is described as",
      options: [
        "Noise in reception due to inherent noise generated",
        "Weakening of received signals due to changes in ionospheric activity",
        "Loss of signals due to less power radiation by communicating station",
        "Signal loss due to mistuned off frequency arising out of technical receiver fault",
      ],
      answer: 1
    },
    {
      question: "MF power for a ship transmitter should not be more than",
      options: [
        "800 Watts 1200 Watts",
        "1500 Watts 400 Watts",
      ],
      answer: 1
    },
    {
      question: "HF power for a ship transmitter should not exceed",
      options: [
        "600 Watts 800 Watts",
        "400 Watts 1500 Watts",
      ],
      answer: 1
    },
    {
      question: "Marine VHF used on board ship has a maximum power output of",
      options: [
        "2 Watts 5 Watts",
        "50 Watts 25 Watts",
      ],
      answer: 1
    },
    {
      question: "Marine VHF communication distance can be increased by",
      options: [
        "Using a wire antenna for transmitting and receiving",
        "Using a directional antenna Using a Yagi horizontal antenna",
        "Increasing the height of the antenna",
      ],
      answer: 2
    },
  ],

  set4: [
    {
      question: "Detector / demodulator is used in",
      options: [
        "Transmitter Transponder",
        "ATU Receiver",
      ],
      answer: 1
    },
    {
      question: "What equipment is associated with the land or terrestrial systems?",
      options: [
        "EPIRB VHF",
        "Inmarsat-C EPFS",
      ],
      answer: 0
    },
    {
      question: "Antennas use which type of energy wave to communicate information.",
      options: [
        "Electromagnetic wave energy UV energy wave",
        "White wave energy Radio wave energy",
      ],
      answer: 0
    },
    {
      question: "An electromagnetic wave has how many fields ______.",
      options: [
        "2 3",
        "4 5",
      ],
      answer: 0
    },
    {
      question: "What should be the length of transmitting antenna for radiating radio waves of 900 MHz",
      options: [
        "16.7 cm 1.67 cm",
        "8.3 cm None of the above",
      ],
      answer: 0
    },
    {
      question: "What is the length of antenna needed to a signal of 500 KHz?",
      options: [
        "6 km 150 m",
        "600 m 1 km",
      ],
      answer: 0
    },
    {
      question: "The antenna employed in television receivers",
      options: [
        "Half wave dipole Yagi antenna",
        "Rhombic antenna Horn antenna",
      ],
      answer: 0
    },
    {
      question: "What is the main advantage of the parabolic antenna?",
      options: [
        "High directivity Wide bandwidth",
        "Small wavelength Low directivity",
      ],
      answer: 0
    },
    {
      question: "Antenna Tunning means:",
      options: [
        "Visual inspection of equipment, including the antenna and associated components.",
        "Perform on-the-air verification checks.",
        "Perform scheduled testing of the battery's charged condition.",
        "Aligning the power output stage for maximum power.",
      ],
      answer: 3
    },
    {
      question: "A vertical (whip) antenna has a radiation pattern best described by?",
      options: [
        "A figure eight A cardioid",
        "A circle An ellipse",
      ],
      answer: 1
    },
    {
      question: "When testing a transmitter, ship's operator must:",
      options: [
        "use full power with an artificial aerial use low power with the main aerial",
        "use the least power available along with a dummy load or an artificial aerial use the emergency aerial on medium power",
      ],
      answer: 0
    },
    {
      question: "What is the most common type of antenna for GMDSS VHF?",
      options: [
        "Horizontally polarized circular antenna",
        "Long wire antenna Both of the above",
        "None of the above",
      ],
      answer: 2
    },
    {
      question: "Testing of a compulsory radiotelephone station should be done?",
      options: [
        "Into an artificial antenna.",
        "May be accomplished by using the radiotelephone for normal business.",
        "On 2182 kHz and must be heard clearly under normal conditions at a range of 150 NM.",
        "Either a) or b)",
      ],
      answer: 3
    },
    {
      question: "NAVTEX uses a:",
      options: [
        "A marine VHF whip antenna A long wire antenna",
        "Directional parabolic antenna An active whip antenna",
      ],
      answer: 1
    },
    {
      question: "Inmarsat C antenna uses",
      options: [
        "Directional parabolic antenna Omnidirectional whip antenna",
        "Omnidirectional solid-state antenna",
        "Satellite directional microwave antenna",
      ],
      answer: 1
    },
    {
      question: "Highly directional parabolic 11 to 14 metres Cassegrain antenna is used by",
      options: [
        "Coast Earth Station Onboard large passenger/tankers/container ships",
        "In mobile phone microwave networks",
        "Ship Earth Station",
      ],
      answer: 0
    },
    {
      question: "Antenna grounding is generally done in order to",
      options: [
        "Save personnel working on radio from electric/high currents burns injury and shocks",
        "Achieve good optimised transmission of radio waves",
        "Save equipment input electronic circuits from damage by thunderstorms and lightening",
        "Achieve optimisation of antenna impedance with the ATU before radiation",
      ],
      answer: 2
    },
    {
      question: "Use of antenna tuning unit (ATU) in MF/HF allows",
      options: [
        "Required power output for transmission using the antenna",
        "Selecting equivalent electrical length for impedance matching with a standard antenna length for optimum radiation output",
        "Choosing of correct frequency band on selection of the frequency for transmission",
        "Choosing of the antenna during transmission and reception of DSC alerts",
      ],
      answer: 1
    },
    {
      question: "The directional characteristics of the Inmarsat C SES antenna is:",
      options: [
        "Highly directional Yagi antenna",
        "Dependent on ship location in Sea Area A4",
        "Omni-directional",
      ],
      answer: 2
    },
    {
      question: "AIS uses two antenna inputs",
      options: [
        "FALSE TRUE",
        "MAYBE NO COMMENTS",
      ],
      answer: 0
    },
    {
      question: "The weak link is included on a wire antenna to provide a",
      options: [
        "High resistance path to electromagnetic energy",
        "High breaking strain in event of collision or grounding etc.",
        "Low resistance path to electromagnetic energy",
        "Low breaking strain in event of collision/grounding etc.",
      ],
      answer: 3
    },
    {
      question: "Insulators are included in an antenna system in order to provide a",
      options: [
        "Low breaking strain Low resistance path to earth",
        "High resistance path to earth High breaking strain",
      ],
      answer: 1
    },
    {
      question: "Inmarsat FBB MST use",
      options: [
        "An omnidirectional antenna A 1-meter dipole antenna",
        "A long wire antenna A Uni-directional dish antenna",
      ],
      answer: 1
    },
    {
      question: "A safety precaution when working on antenna system is to",
      options: [
        "Ensure the transmitter is in the standby position only",
        "Disable the transmitter by removing the supply fuses",
        "Lock the frequency on 2182 KHz with transmitter on low power and J3E",
        "Ensure the transmission is at J3E",
      ],
      answer: 1
    },
    {
      question: "What is the most common type of antenna for GMDSS MF-HF?",
      options: [
        "Horizontally polarised long wire antenna",
        "Horizontally polarised vertical whip antenna",
        "Satellite radome with vertical polarisation",
        "Vertically polarised whip antenna",
      ],
      answer: 3
    },
    {
      question: "The advantage of vertical whip over long wire antenna is",
      options: [
        "It radiates directionally for better propagation",
        "It radiates equally well in all directions",
        "It radiates a strong signal vertically",
        "It radiates strong signal horizontally",
      ],
      answer: 1
    },
    {
      question: "The satellite COSPAS EPIRB must always point to satellite when testing is carried out",
      options: [
        "TRUE FALSE",
        "NO COMMENTS ONLY DURING SURVEY AND SERVICING",
      ],
      answer: 0
    },
    {
      question: "Iridium operates in its own constellation in the L band using frequencies",
      options: [
        "1.5 GHz -- 1.6 GHz 9.0 GHz -- 9.3 GHz",
        "4 GHz -- 6 GHz 1610 MHz -- 1625.5 MHz",
      ],
      answer: 1
    },
    {
      question: "Type of modulation used in iridium communications is",
      options: [
        "BPSK QPSK",
        "DEQPSK SOTDMA",
      ],
      answer: 1
    },
    {
      question: "Bandwidth used in Iridium DEQPSK modulation is",
      options: [
        "23 KHz 16 KHz",
        "26 KHz 31.5 KHz",
      ],
      answer: 1
    },
  ],

  set5: [
    {
      question: "Iridium satellites constellation uses",
      options: [
        "66 satellites 26 satellites",
        "46 satellites 21 satellites",
      ],
      answer: 0
    },
    {
      question: "Iridium satellite is positioned in low earth orbit at a distance of",
      options: [
        "781 kms 1000 kms",
        "850 kms 2100 kms",
      ],
      answer: 0
    },
    {
      question: "Iridium GMDSS can be used in",
      options: [
        "Sea Area A1 and Sea Area A2 only",
        "Sea Area A2 and A3 only Across the world",
        "Outside the Inmarsat satellite coverage above 76-degree N and below 76 S (Polar Region)",
      ],
      answer: 1
    },
    {
      question: "Primary Iridium gateway is situated in",
      options: [
        "Fucino, Italy Oahu, US",
        "Punta Arenas, Chile Tempe, Arizona",
      ],
      answer: 1
    },
    {
      question: "Iridium satellites is placed in",
      options: [
        "Geo Earth Orbit at 36000 kms approximately",
        "Medium Earth Orbit at 16000 kms approximately",
        "Low Earth Orbit at 1000 kms approximately",
        "Low Earth Orbit at 781 kms",
      ],
      answer: 3
    },
    {
      question: "Iridium EGC broadcast for MSI and SAR uses",
      options: [
        "SafetyNET FleetNET",
        "RescueNET SafetyCast",
      ],
      answer: 1
    },
    {
      question: "Iridium mobile-satellite system covering the entire globe using how many satellites?",
      options: [
        "110 56",
        "66 4",
      ],
      answer: 1
    },
    {
      question: "Iridium mobile-satellite system has 66 Low Earth Orbiting (LEO) cross-linked satellites operating in 6 orbital planes each with ....... satellites",
      options: [
        "9 6",
        "11 24",
      ],
      answer: 1
    },
    {
      question: "Which service is not provided by Iridium SafetyCast?",
      options: [
        "Maritime Safety Information (MSI)",
        "SAR related information.",
        "Other urgent safety related message to ships.",
        "Routine communication.",
      ],
      answer: 3
    },
    {
      question: "Iridium mobile-satellite system uses frequency bands?",
      options: [
        "L-Band & X-Band C- Band & Ka Band",
        "Ka- Band & L-Band X-Band & S- Band",
      ],
      answer: 1
    },
    {
      question: "In Iridium mobile-satellite system \"SNOC\" stand for?",
      options: [
        "Satellite Network Operations Centre.",
        "Ship Network Operation Center.",
        "Satellite Non operation Category.",
        "Systematic Network Organisation Center.",
      ],
      answer: 0
    },
    {
      question: "In Iridium mobile-satellite system provides following Services ...",
      options: [
        "Global Coverage (sea area A1 to A4)",
        "Distress Alert & Safety Voice Ship Security Alert System & LRIT",
        "All the Above.",
      ],
      answer: 2
    },
    {
      question: "Coverage Of Iridium mobile-satellite system",
      options: [
        "76N -- 76S Sea Area A1+A2+A3",
        "Sea Area A1+A2+A3+A4 Polar Regions Only",
      ],
      answer: 1
    },
    {
      question: "Frequency band used by Iridium mobile-satellite system between SES and satellites.",
      options: [
        "X-- band S band",
        "L band Ka band",
      ],
      answer: 1
    },
    {
      question: "Which service is provided by Iridium mobile-satellite system.",
      options: [
        "Maritime Safety Information (MSI)",
        "SAR related information.",
        "Other urgent safety related message to ships.",
        "All the above.",
      ],
      answer: 3
    },
    {
      question: "In GMDSS system GNSS stand for:",
      options: [
        "Global Navigational Satellite system",
        "Global Network satellite system",
        "Global Notification Safety System",
        "Global Navigational Safety Service.",
      ],
      answer: 0
    },
    {
      question: "Example of IRIDIUM SES ID",
      options: [
        "580094332789 168894332789",
        "881694332789 870094332789",
      ],
      answer: 1
    },
    {
      question: "When the lead acid cell is fully charged, the specific gravity of the cell:",
      options: [
        "Increases to 1140 Decreases",
        "No change Becomes 1260",
      ],
      answer: 1
    },
    {
      question: "The instrument used to measure specific gravity of the electrolyte in battery is:",
      options: [
        "Barometer Lactometer",
        "Hydrometer Thermometer",
      ],
      answer: 1
    },
    {
      question: "Cells connected in series to:",
      options: [
        "Decreases the amount of charging voltage required.",
        "Increases the voltage output Increases the voltage and current capacity",
        "Decreases the internal resistance",
      ],
      answer: 1
    },
    {
      question: "The lead acid cell is:",
      options: [
        "primary cell Secondary cell",
        "Storage cell Both (B) & (C)",
      ],
      answer: 1
    },
    {
      question: "The fully charged lead acid battery has the following average voltage per cell:",
      options: [
        "1.2 v 2.4 v",
        "2 4 v 2. 1v",
      ],
      answer: 1
    },
    {
      question: "Voltage check of Batteries providing source of energy for GMDSS should be checked",
      options: [
        "once a month.",
        "at the beginning of each voyage once a week",
        "once a day",
      ],
      answer: 2
    },
    {
      question: "Electrolyte in the Lead Acid Battery is:",
      options: [
        "Nitric Acid Dilute Sulphuric Acid",
        "Hydrochloric Acid Distilled Water",
      ],
      answer: 0
    },
    {
      question: "An on-load test of the radio batteries can be done by operating the transmitter on full power and with the battery Charger:",
      options: [
        "off while observing the battery voltmeter off while observing the discharge current",
        "on while observing the discharge current.",
        "on while observing the battery voltmeter",
      ],
      answer: 0
    },
    {
      question: "Corroded battery terminals may cause:",
      options: [
        "excessive gassing a decrease in the discharge current when off load.",
        "a decrease in the voltage on the battery when on load an increase in charging voltage",
      ],
      answer: 1
    },
    {
      question: "When carrying out batter maintenance petroleum jelly is recommended for protect",
      options: [
        "against acid leakage through cell top caps the battery casing from corrosion",
        "exposed terminals and connectors hand from acid splashes",
      ],
      answer: 1
    },
    {
      question: "Batteries are rated",
      options: [
        "No. of cells per battery Voltage",
        "Current delivered for a specific period (AHC)",
        "Specific Gravity",
      ],
      answer: 1
    },
    {
      question: "Ni-cad cells have a voltage of",
      options: [
        "2.1V 1.2V",
        "1.5V 12 V",
      ],
      answer: 0
    },
    {
      question: "Typical problems associated with lead acid battery are",
      options: [
        "buckling ionisation",
        "vibration spilling of electrolyte",
      ],
      answer: 0
    },
  ],

  set6: [
    {
      question: "The power supply in India is 220V AC 50 Hz. The supply frequency is:",
      options: [
        "40 cycles 50 cycles",
        "60 cycles None of the above.",
      ],
      answer: 0
    },
    {
      question: "The positive plate of a lead acid cell is:",
      options: [
        "lead peroxide spongy lead",
        "copper peroxide hydrochloric acid",
      ],
      answer: 0
    },
    {
      question: "In the event of failure of the main and emergency sources of electrical power -- what is the term for the source required to supply the GMDSS console with power for conducting distress and other radio-communications?",
      options: [
        "Emergency power Reserve source of energy",
        "Ship's emergency diesel generator",
        "Ship's standby generator",
      ],
      answer: 0
    },
    {
      question: "What is the requirement for emergency and reserve power in GMDSS radio installations?",
      options: [
        "An emergency power source for radio communications is not required if a vessel has proper reserve power (batteries).",
        "A reserve power source is not required for radio communications.",
        "Only one of the above is required if a vessel is equipped with a second 406 EPIRB as a backup means of sending a Distress alert.",
        "All newly constructed ships under GMDSS must have both emergency and reserve power sources for radio communications.",
      ],
      answer: 3
    },
    {
      question: "A 250V/100W bulb is connected to 250V supply for 10 his energy consumed is:",
      options: [
        "100W 1 unit",
        "250W 100 W Hour",
      ],
      answer: 0
    },
    {
      question: "Fuses are rated as",
      options: [
        "Volts Ohms",
        "Farads Amps",
      ],
      answer: 1
    },
    {
      question: "The rating of the electrical fuses used in the circuits are based on the maximum:",
      options: [
        "The supply voltage The load connected.",
        "Duration of operation No. of the switches in the circuits",
      ],
      answer: 0
    },
    {
      question: "Fuses are made of",
      options: [
        "Silver-Nickel alloy Gold-copper alloy",
        "Aluminum-Tungsten alloy Tin-lead alloy",
      ],
      answer: 1
    },
    {
      question: "The voltage across a resistor of 10 ohms when a current of 2 amps is passed through will be:",
      options: [
        "0.5V 10V",
        "5V 20V",
      ],
      answer: 1
    },
    {
      question: "If a fuse of 10 amps blows and it has to be replaced with another fuse, which would you use:",
      options: [
        "8 amps 12 amps",
        "15 amps 20 amps",
      ],
      answer: 0
    },
    {
      question: "What is the purpose of the SART's audible tone alarm?",
      options: [
        "It informs that assistance may be nearby",
        "It informs survivors when the battery's charge condition has weakened",
        "It informs survivors when the SART switches to \"standby\" mode",
        "It informs survivors when the SART switches to \"active\" mode",
      ],
      answer: 0
    },
    {
      question: "What indication is given to the personnel of survival craft of the approach of another vessel?",
      options: [
        "The SART will provide a visual or audible indication of interrogation by a 3-cm radar",
        "The satellite EPIRB will emit an audible signal",
        "The VHF portable radio will emit audible alarm signal on channel 70",
        "The satellite EPIRB will give a flashing stroboscopic light indication",
      ],
      answer: 0
    },
    {
      question: "How can a SART's effective range be maximised?",
      options: [
        "The SART should be placed in water immediately upon activation",
        "The SART should be held as high as possible",
        "Switch the into the \"High\" power",
        "Activate the SART inside the lifeboat immediately",
      ],
      answer: 1
    },
    {
      question: "When does the SART begin transmitting?",
      options: [
        "It immediately begins radiating when placed in the \"ON\" position",
        "It must be manually activated If it has been placed in the \"ON\" position, it will respond when it has been interrogated by a 9-GHz radar signal",
        "If it is placed in the open sky as high as possible, it will begin transmitting",
      ],
      answer: 1
    },
    {
      question: "What causes the SART to begin a transmission?",
      options: [
        "When activated manually When placed manually in open air visible to satellite",
        "When it is put in water, it starts radiating",
        "After being activated, the SART responds to radar interrogation, and starts transmission",
      ],
      answer: 2
    },
    {
      question: "What indication does a SART signal display on interrogation by a radar when within 6 NM of approaching SAR ship?",
      options: [
        "The SART transmits \"SOS\" and the vessel's name and MMSI",
        "The SAR radar unit's PPI displays a line of dots radiating outward, with the innermost dot indicating the SART's position",
        "A line of dots radiating outward with the outermost dot indicating the SART's position is displayed on approaching SAR ship radar.",
        "Concentric circles are displayed on SAR ship radar",
      ],
      answer: 1
    },
    {
      question: "SART operates on which frequency band?",
      options: [
        "1.5 GHz 3 GHz",
        "S-band 9 GHz",
      ],
      answer: 1
    },
    {
      question: "A SART signal cannot be detected",
      options: [
        "In poor visibility, or at night",
        "In heavy sea swell and rough weather conditions",
        "By a 10 cm vessel radar During high ionospheric solar activity",
      ],
      answer: 2
    },
    {
      question: "The SART is required to have sufficient battery capacity to operate in standby mode for",
      options: [
        "Eight hours Three days",
        "Four days 48 hours",
      ],
      answer: 1
    },
    {
      question: "The Search and Rescue Radar transponder is used for",
      options: [
        "locating the position of the ship in distress urgent cyclone/navigational warnings",
        "locating the position of the ship coordinating the rescue operations",
        "All the above",
      ],
      answer: 0
    },
    {
      question: "The max power radiated by a COSPAS/SARSAT (406 MHz) satellite EPIRB is:",
      options: [
        "100 mw 5 w",
        "100 w 50w",
      ],
      answer: 0
    },
    {
      question: "The function of the Local User Terminal (LUT) is:",
      options: [
        "to receive the Distress Alert directly to transmit TDM carrier",
        "to process the EPIRB signals received from COSPAS-SARSAT satellites to receive SART signals from SES",
      ],
      answer: 1
    },
    {
      question: "The Radar display when it detects a SART signal at 1nm or less appears as",
      options: [
        "concentric circles line of 14 blips appearing as arc of a circle",
        "line of 12 blips appearing as arc of a circle line of 20 blips along the line of bearing",
      ],
      answer: 0
    },
    {
      question: "The frequency range of operation of the SART is:",
      options: [
        "3.0 - 3.5 GHz 156 - 174 MHz",
        "9.2 - 9.5 GHz 300- 3000 KHz",
      ],
      answer: 1
    },
    {
      question: "A Cospas Sarsat EPIRB can be used by ships sailing in the Area:",
      options: [
        "Al, A2, A3, A4 Al, A2, A4",
        "A2, A3, A4 A1, A2, A3",
      ],
      answer: 0
    },
    {
      question: "As per IMO requirement a SART on a life raft should be held high above the sea Level at least",
      options: [
        "1.5 m above 2.5 m above",
        "0.5 m above 1.0 m above",
      ],
      answer: 1
    },
    {
      question: "The source of energy for EPIRB and SART is:",
      options: [
        "Lithium Battery Lead-acid cells",
        "Nickel Cadmium None",
      ],
      answer: 0
    },
    {
      question: "Locating Signals are transmitted",
      options: [
        "By Navtex stations Coast radio stations",
        "Mobile unit in distress By Coast Earth Stns",
      ],
      answer: 1
    },
    {
      question: "EPIRB battery life is",
      options: [
        "1 year 2 years",
        "3 -- 5 years or as per manufacturer's instructions",
        "10 years",
      ],
      answer: 1
    },
    {
      question: "AIS -- SART is a transmitter",
      options: [
        "FALSE TRUE",
        "No Maybe",
      ],
      answer: 0
    },
  ],

  set7: [
    {
      question: "AIS-SART uses free form MMSI special equipment identity starting with",
      options: [
        "974XXYYYY 972XXYYYY",
        "111XXYYYY 970XXYYYY",
      ],
      answer: 1
    },
    {
      question: "AIS-SART has its own built-in GPS",
      options: [
        "NO TRUE",
        "MAY BE FALSE",
      ],
      answer: 0
    },
    {
      question: "AIS-SART works on",
      options: [
        "161.975 MHz channel 87B 162.025 MHz channel 88B",
        "156.525 MHz channel 70 A) and B) above",
      ],
      answer: 1
    },
    {
      question: "Which statement is NOT true regarding the COSPAS-SARSAT system?",
      options: [
        "Doppler shift is used to locate the beacons.",
        "EPIRBs are used as satellite beacons aboard lifeboats as alerting devices.",
        "May be used to transmit public correspondence.",
        "Locates distress beacons transmitting on 406 MHz.",
      ],
      answer: 2
    },
    {
      question: "Which statement is NOT true regarding the requirements of survival craft portable two-way VHF radiotelephone equipment?",
      options: [
        "Effective radiated power should be a minimum of 2.0 Watts.",
        "Operation on Ch-16.",
        "Simplex (single frequency) voice communications only.",
        "All of these.",
      ],
      answer: 3
    },
    {
      question: "With what other stations may portable survival craft transceivers communicate?",
      options: [
        "Communications is permitted between survival craft and ship.",
        "Communications is permitted between survival craft and rescue unit.",
        "All of the above.",
        "Communications is permitted between survival crafts.",
      ],
      answer: 2
    },
    {
      question: "Which action should the GMDSS radio operator take in a distress situation when embarking in survival craft?",
      options: [
        "Communicate via Inmarsat-C from the survival craft.",
        "Switch on EPIRB and SART immediately and leave onboard vessel in distress.",
        "Notify RCC (Rescue Coordination Center) through VHF DSC in portable equipment.",
        "Carry EPIRB and SART to life-raft and switch it on",
      ],
      answer: 3
    },
    {
      question: "Equipment for radiotelephony use in survival craft stations under GMDSS must have what capability?",
      options: [
        "Any one of these.",
        "Operation on 121.5 MHz.",
        "Operation on 457.525 MHz.",
        "Operation on Ch-16.",
      ],
      answer: 3
    },
    {
      question: "Which is the key part of the search and rescue system under GMDSS?",
      options: [
        "Indian Space Agency satellites.",
        "AMSAT satellites.",
        "NASA satellites.",
        "COSPAS/SARSAT satellites.",
      ],
      answer: 3
    },
    {
      question: "Equipment for radiotelephony use in survival craft stations under GMDSS must have what characteristic(s)?",
      options: [
        "All of these.",
        "Watertight.",
        "Operation on Ch-16.",
        "Permanently-affixed antenna.",
      ],
      answer: 0
    },
    {
      question: "Satellite system which is of particular importance to SAR mission under GMDSS is",
      options: [
        "AMSAT NASA",
        "INTELSAT COSPAS-SARSAT",
      ],
      answer: 1
    },
    {
      question: "Which statement is true regarding the COSPAS-SARSAT system?",
      options: [
        "Signals received by low altitude near-polar orbiting satellites are relayed to a ground receiving station, called a Local User Terminal.",
        "All of these.",
        "Doppler shift is used to locate the beacons.",
        "EPIRBs are used as satellite beacons aboard vessels as alerting devices.",
      ],
      answer: 1
    },
    {
      question: "EPIRB -- AIS uses more than one frequency to help finding position of survivors/distress unit",
      options: [
        "FALSE Uses only one frequency 121.5 MHz for locating position",
        "TRUE Uses COSPAS-SARSAT frequency 406.025 MHz only",
      ],
      answer: 1
    },
    {
      question: "EPIRB-AIS uses frequency 406.025 MHz, 121.5 MHz, 161.975 MHz, 162.025 MHz and EPFS frequency in its transmission when activated during distress",
      options: [
        "MAYBE FALSE",
        "NO TRUE",
      ],
      answer: 1
    },
    {
      question: "EPIRB-AIS uses a Return Link Service (RLS) to confirm the signal has been received by the SAR services of the EPIRB-AIS distress alert transmitted",
      options: [
        "TRUE FALSE",
        "NO COMMENTS MAYBE",
      ],
      answer: 0
    },
    {
      question: "NAVTEX transmission is made using:",
      options: [
        "R3E FEC",
        "ARQ CRS",
      ],
      answer: 0
    },
    {
      question: "NAVTEX receiver is used for:",
      options: [
        "Distress alerts from the same group of ships",
        "Transmission of Urgency messages and MSI",
        "Receiving marine safety information and SAR related messages",
        "All the above",
      ],
      answer: 2
    },
    {
      question: "The meteorological and navigational warnings / information are available to ship station outside the coverage area of Navtex through:",
      options: [
        "Inmarsat Safety NET MSI (HF)",
        "Broadcast on 2187.5 kHz (A)and (B) above",
      ],
      answer: 1
    },
    {
      question: "The following messages cannot be rejected in Navtex receiver:",
      options: [
        "A, B, C, D A, B, D, L",
        "F, E, L F, E, C, G",
      ],
      answer: 0
    },
    {
      question: "In the Navtex message type \"D\" means:",
      options: [
        "Meteorological information Meteorological warning",
        "Navigational warning Search and rescue information",
      ],
      answer: 1
    },
    {
      question: "MSI information is found in the following",
      options: [
        "ITU List of Coast Stations and Special Service Stations",
        "ITU List of Ship Stations and Maritime Mobile Station Identities",
        "IAMSAR Manual ITU Manual for Maritime Mobile and Maritime Mobile Satellite Services",
      ],
      answer: 0
    },
    {
      question: "The Pre -- fix codes 'B1' at the beginning of each Navtex message stands for:",
      options: [
        "Identity of the transmitting station",
        "Serial number of the message Nature of message",
        "Distress message.",
      ],
      answer: 0
    },
    {
      question: "HF NAVTEX frequency is:",
      options: [
        "4207.5 kHz 6314.0 kHz",
        "4209.5 kHz 518 kHz",
      ],
      answer: 1
    },
    {
      question: "How is mutual interference among NAVTEX stations avoided?",
      options: [
        "Stations are limited to daytime operation only.",
        "Transmitter power is limited to that necessary for coverage of assigned area.",
        "Transmissions by stations in each NAVAREA are arranged in a time-sharing basis.",
        "Both B) and c).",
      ],
      answer: 3
    },
    {
      question: "When do NAVTEX broadcasts typically achieve maximum transmitting range?",
      options: [
        "Local noontime Middle of the night",
        "Sunset Post sunrise",
      ],
      answer: 0
    },
    {
      question: "What should a GMDSS Radio Operator do if a NAVTEX warning message is received but it contains too many errors to be usable?",
      options: [
        "Do nothing. Vital NAVTEX messages will be repeated on the next scheduled broadcast.",
        "Contact the NAVAREA coordinator and request a repeat broadcast.",
        "The hurricane will be upon the vessel; they're in big trouble.",
        "Listen to appropriate VHF weather channel for repeat warnings.",
      ],
      answer: 0
    },
    {
      question: "What does a NAVTEX receiver do when it runs out of paper?",
      options: [
        "The unit cannot operate, and all subsequent MSI broadcasts are missed until the paper is replaced.",
        "It will give off either an audible and/or visual alarm.",
        "The system will automatically change from receiving MSI by NAVTEX to receiving it by SafetyNET so that no messages will be lost.",
        "All of the above",
      ],
      answer: 1
    },
    {
      question: "Which of the following is the primary frequency that is used exclusively for NAVTEX broadcasts internationally?",
      options: [
        "518 kHz 2187.5 kHz",
        "4209.5 kHz VHF channel 16 when the vessel is sailing in Sea Area A1, and 2187.5 kHz when in Sea Area A2.",
      ],
      answer: 0
    },
    {
      question: "What is the transmitting range of most NAVTEX stations?",
      options: [
        "Typically, 50-100 nautical miles (90-180 km) from shore.",
        "Typically, upwards of 1000 nautical miles (1800 km) during the daytime.",
        "It is limited to line-of-sight or about 30 nautical miles (54 km).",
        "Typically, 200-400 nautical miles (360-720 km).",
      ],
      answer: 3
    },
    {
      question: "Frequency 16806.5 kHz is used for",
      options: [
        "DSC distress DSC routine",
        "NBDP MSI Voice",
      ],
      answer: 1
    },
  ],

  set8: [
    {
      question: "AIS abbreviation full form is",
      options: [
        "Aids in Search and Rescue Automation International Society",
        "Aviation Identity System Automatic Identification System",
      ],
      answer: 1
    },
    {
      question: "AIS uses Marine VHF Band for the purpose of tracking of various vessels",
      options: [
        "TRUE FALSE",
        "Uses digital DSC signals for tracking",
        "Uses 300 MHz frequency",
      ],
      answer: 0
    },
    {
      question: "Marine VHF channel 87B and channel 88B is used for the purpose of AIS",
      options: [
        "FALSE Uses available any free channel in the Marine VHF band 156 MHz -- 174 MHz",
        "TRUE Depending on the targets, it may use Marine VHF, MF, or HF frequencies and channels",
      ],
      answer: 1
    },
    {
      question: "Marine VHF channel frequency used for AIS is",
      options: [
        "Channel 87B -- 161.975 MHz and Channel 88B -- 162.025 MHz",
        "Channel 70 -- 156.525 MHz and Channel 16 -- 156.800 MHz",
        "Channel 06 -- 156.300 MHz and Channel 13 -- 156.650 MHz",
        "Channel 08 -- 156.400 MHz and Channel 12 -- 156.600 MHz",
      ],
      answer: 0
    },
    {
      question: "Advantage of AIS over Radar is",
      options: [
        "It does not need a straight clear line of sight of object / ship in view to be tracked.",
        "It needs no pulse signal to be activated similar to radar pulse reflection for identification",
        "It is independent of weather, climate and sea conditions",
        "All above",
      ],
      answer: 3
    },
    {
      question: "AIS is affected by",
      options: [
        "Fading Propagation due to ionospheric conditions in the D, E, and F1, F2 layers",
        "Capture effect Solar activity and thunderstorms",
      ],
      answer: 1
    },
    {
      question: "Range of AIS on a GMDSS vessel is approximately",
      options: [
        "5 -- 10 NM 10 -- 15 NM",
        "25 -- 35 NM 50 -- 75 NM",
      ],
      answer: 0
    },
    {
      question: "Power output of Class A AIS is",
      options: [
        "25 Watts 50 Watts",
        "5 Watts 12.5 Watts",
      ],
      answer: 1
    },
    {
      question: "GMDSS Vessels use",
      options: [
        "Class B AIS Class A AIS",
        "Class D AIS Class C AIS",
      ],
      answer: 0
    },
    {
      question: "Marine AIS used on board GMDSS vessels class A type uses",
      options: [
        "CSTDMA FSTDMA",
        "SOTDMA None of the above",
      ],
      answer: 1
    },
    {
      question: "GMDSS vessels may be tracked by other vessels in vicinity even if",
      options: [
        "AIS is in switched OFF mode by Master for safety purpose",
        "AIS is in standby mode The equipment input and output data feeds fail",
        "None of the above",
      ],
      answer: 2
    },
    {
      question: "AIS provides for following output data as information exchange within range",
      options: [
        "Dynamic data like position, course and speed or at anchor",
        "Static data like name, MMSI, or IMO number of vessel",
        "Additional other information as may be fed by Master like voyage details, its carriage details etc as decided by the Master or authority",
        "All above",
      ],
      answer: 3
    },
    {
      question: "Passenger ships require to have additional equipment for communicating with SAR aircraft",
      options: [
        "Channel 16, 06, and 13 marine VHF portable radio",
        "2182 KHz MF Band transceiver HF band aeronautical transceiver",
        "Aero VHF portable or fixed type radio having frequency 121.5 MHz and 123.1 MHz",
      ],
      answer: 2
    },
    {
      question: "2-way portable marine VHF required by a GMDSS SOLAS ship between 300 to 499 GRT",
      options: [
        "2 numbers of portable 2-way GMDSS marine VHF handheld radio having dedicated two numbers of sealed batteries for distress use only with at least 2 channels (channel 16 and 06)",
        "4 Marine VHF portable handheld radios for all communications onboard",
        "UHF portable handheld or fixed type radios for onboard communications",
        "Marine VHF remote operating handheld VHF and controlled by main VHF radios",
      ],
      answer: 0
    },
    {
      question: "Which statement is true regarding the requirements of survival craft portable two-way VHF radiotelephone equipment?",
      options: [
        "Effective radiated power should be a minimum of 2.0 Watts.",
        "Operation on Ch-16.",
        "Simplex (single frequency) voice communications only.",
        "All of these.",
      ],
      answer: 3
    },
    {
      question: "Geostationary satellite orbits in the plane of equator in space at a distance of",
      options: [
        "1000 Kms 850 Kms",
        "20000 Kms 36000 Kms",
      ],
      answer: 1
    },
    {
      question: "Inmarsat uses satellite orbiting in",
      options: [
        "Low Earth Orbit Medium Earth Orbit",
        "Geo Earth Orbit Circular Very Low Earth Orbit",
      ],
      answer: 0
    },
    {
      question: "Uplink frequency in L Band between mobile earth station (SES) and Inmarsat satellite is",
      options: [
        "2 GHz 1.6 GHz",
        "3 GHz 1.5 GHz",
      ],
      answer: 0
    },
    {
      question: "Downlink frequency in C band between satellite and Land earth Station (LES/CES) is",
      options: [
        "12 GHz 6 GHz",
        "4 GHz 406 MHz",
      ],
      answer: 1
    },
    {
      question: "Space segments of Inmarsat system placed in geostationary orbit completes one cycle",
      options: [
        "In 24 hours approximately In 90 minutes to 110 minutes approximately",
        "In 6 hours approximately In 16 hours approximately",
      ],
      answer: 0
    },
    {
      question: "What is full form of ADE?",
      options: [
        "Above Deck Equipment Approximate Depth Equivalent",
        "Antenna Digital Equipment Azimuth Digital Equivalent",
      ],
      answer: 0
    },
    {
      question: "Inmarsat C main feature is",
      options: [
        "Store and Forward text message services only",
        "Text message (Telex) and Voice services",
        "Real time priority voice and telex services",
        "Telex (Text) message with online real-time confirmations for urgency, safety and routine",
      ],
      answer: 0
    },
    {
      question: "What is full form of NCS?",
      options: [
        "No Confirmation Services Network Coordination Station",
        "Network Control Services No Carrier Signal",
      ],
      answer: 0
    },
    {
      question: "What is full form of SCC?",
      options: [
        "Section Command Center Satellite Command Center",
        "Signals and Carrier Codes Signature and Carrier Codes",
      ],
      answer: 0
    },
    {
      question: "Which equipment has store and forward?",
      options: [
        "Fleet Broad Band FBB -- MST",
        "FBB -- FST Inmarsat C",
      ],
      answer: 1
    },
    {
      question: "Which satellite equipment can you use for PVT?",
      options: [
        "Inmarsat Fleet Broad Band Inmarsat Fleet Broad Band Marine Safety Terminal (MST)",
        "Inmarsat C Terminal VSAT",
      ],
      answer: 1
    },
    {
      question: "Inmarsat services cover the entire globe:",
      options: [
        "MAY BE FALSE",
        "TRUE CANNOT COMMENT",
      ],
      answer: 0
    },
    {
      question: "Section A of the GMDSS Radio Log Book consists of:",
      options: [
        "Particulars of the ship List of batteries",
        "Master's name and address Radio Operator's name and address",
      ],
      answer: 0
    },
    {
      question: "The GMDSS log book Section A contains",
      options: [
        "particulars of the Qualified personnel particulars of the ship",
        "particulars of batteries Summary of the distress, urgency &safety traffic",
      ],
      answer: 0
    },
    {
      question: "The GMDSS Log book is signed by the Master of the ship",
      options: [
        "After completion of the voyage",
        "On entering port Before sending it to authority",
        "Daily",
      ],
      answer: 2
    },
  ],

  set9: [
    {
      question: "Section C of the GMDSS Log book having details of important communications is",
      options: [
        "Duplicate To be retained for a period of 2 years if no distress communications log entries",
        "To be retained for a period of 3 years if it has distress communications log entries",
        "All Above",
      ],
      answer: 2
    },
    {
      question: "Log book entries and its updating responsibility is normally the duty of",
      options: [
        "Every officer on ship Master of the ship",
        "Dedicated Distress Communication Officer (DDCO)",
        "Chief Officer",
      ],
      answer: 1
    },
    {
      question: "Section B of the radio log book contains details related to",
      options: [
        "Ship owner Company manning the ship details",
        "Flag State details GMDSS -- GOC details of all the officer crew onboard",
      ],
      answer: 1
    },
    {
      question: "The entries in the GMDSS log book are always made in:",
      options: [
        "Local time.",
        "Ship's time Zonal time",
        "Coordinated Universal Time",
      ],
      answer: 2
    },
    {
      question: "Position of the ship is to be recorded daily in the radio log book",
      options: [
        "True False",
        "Not necessary As may be decided by the Master",
      ],
      answer: 0
    },
    {
      question: "Distress Relay using DSC should be sent by a Ship Station:",
      options: [
        "if received a distress alert which has not been acknowledged",
        "If received a distress alert on its HF DSC and not been acknowledged by a Coast station within 3 minutes if received a distress relay alert from a Coast Station and not been acknowledged by anybody.",
        "Both A) and B) above",
      ],
      answer: 2
    },
    {
      question: "A DSC Distress alert can be transmitted as",
      options: [
        "Single freq call Multiple freq call",
        "Dual Freq call All of the above",
      ],
      answer: 1
    },
    {
      question: "The Distress Alert should be sent:",
      options: [
        "Ship to Ship Shore to Ship",
        "Ship to Shore both A) and C) above",
      ],
      answer: 1
    },
    {
      question: "If a ship in Distress does not receive a DSC acknowledgement to a Distress alert, then:",
      options: [
        "the alert repeats every 1.5 seconds she should listen on a DSC frequency for a period of 0.5 min.",
        "the alert repeats after a lapse, of 3.5 to 4.5 min. from the starting time of the original call the alert repeats every 5 min.",
      ],
      answer: 1
    },
    {
      question: "Your ship is in Distress in Area A3. The DSC freq. used to alert shore stations is :",
      options: [
        "2187.5 kHz 8414.5 kHz",
        "Channel 70 2182 kHz",
      ],
      answer: 0
    },
    {
      question: "When you are required to repeat a Safety message a second time, which of the following times will you prefer:",
      options: [
        "to repeat after half an hour to repeat at the end of next silence period",
        "to repeat at an interval of 2 min.",
        "to repeat immediately",
      ],
      answer: 0
    },
    {
      question: "Urgency signal takes priority over",
      options: [
        "All communications except Distress",
        "All communications except Safety",
        "All communication except Distress &Safety",
        "All communications",
      ],
      answer: 0
    },
    {
      question: "When a vessel is in distress he will",
      options: [
        "Use only distress equipment Use any means at his disposal to attract attention",
        "Strictly follow ITU guidelines",
        "Observe all silence periods",
      ],
      answer: 0
    },
    {
      question: "Distress relay from the shore is sent to",
      options: [
        "Vessel in Distress On-Scene commander",
        "Controlling vessel To all vessels, To vessels in a particular geographical area, To an individual",
      ],
      answer: 1
    },
    {
      question: "If there is a reliable coast station nearby and you receive a Distress Signal you will",
      options: [
        "Acknowledge the alert immediately",
        "You will relay the alert to all ships",
        "You will wait for the coast station before acknowledging",
        "No action",
      ],
      answer: 2
    },
    {
      question: "The transmission speed of MF/HF DSC call is",
      options: [
        "1200 bauds 100 bauds",
        "150 bauds 200 bauds",
      ],
      answer: 1
    },
    {
      question: "Normally for On-scene communication the mode used will be",
      options: [
        "Duplex Simplex",
        "Satcom Semi-Duplex",
      ],
      answer: 0
    },
    {
      question: "DSC distress alert stops repeating:",
      options: [
        "when acknowledged by coast station when acknowledged by ship station",
        "for 24 hours when acknowledged either by a ship or a coast station using DSC",
      ],
      answer: 1
    },
    {
      question: "With respect to Distress communications the Main function of the On-scene Coordinator (OSC) is to",
      options: [
        "Maintain communications with all Search and Rescue (SAR) facilities",
        "Deploy SART to assist in homing",
        "Fix the position of the casualty using an EPIRB",
        "Recover and switch off the EPRIB",
      ],
      answer: 0
    },
    {
      question: "When distress working is in force on 2182 kHz, ships may make routine R/T Calls to coast stations on",
      options: [
        "2191.0 kHz 2189.5 kHz",
        "2177.0 kHz 2187.5 kHz",
      ],
      answer: 0
    },
    {
      question: "The correct RT (Voice) signal in call to be used when sending a Distress Message on behalf of another vessel is",
      options: [
        "MAYDAY RELAY PANPAN",
        "DISTRESS RELAY MAYDAY",
      ],
      answer: 0
    },
    {
      question: "Signal transmitted by control station to indicate normal working to be resumed at end of distress",
      options: [
        "SEELONCE DISTRESS SEELONCE MAYDAY",
        "SEELONCE FEENEE PRUDONCE",
      ],
      answer: 1
    },
    {
      question: "Signal transmitted asking an interfering station to stop transmissions during ongoing distress communications by any other station, other than control station is:",
      options: [
        "SEELONCE DISTRESS SEELONCE MAYDAY",
        "PRUDONCE DISTRESS MAYDAY",
      ],
      answer: 0
    },
    {
      question: "If you hear an Urgency Signal not followed by a message you will",
      options: [
        "Switch off equipment Inform nearest land station and resume normal working",
        "Send a Relay to all vessels Ignore the signal",
      ],
      answer: 0
    },
    {
      question: "Urgency message is generally addressed to all stations and not to an individual station",
      options: [
        "FALSE MAY BE",
        "NO COMMENTS TRUE",
      ],
      answer: 0
    },
    {
      question: "The 2-digit code used for a medical evacuation by a ship station to a CES is",
      options: [
        "41 42",
        "32 39",
      ],
      answer: 1
    },
    {
      question: "The urgency signal is",
      options: [
        "MEDICO MEDIVAC",
        "MEDICAL PAN PAN",
      ],
      answer: 1
    },
    {
      question: "The radiotelephone urgency is",
      options: [
        "MAYDAY MAYDAY RELAY",
        "PAN PAN SECURITE",
      ],
      answer: 1
    },
    {
      question: "Which of the following situations may use the urgency priority?",
      options: [
        "A crew member working dangerously on the deck",
        "A serious medical situation involving a crew member",
        "Cargo shifting in bad weather situation considered to be a hazard",
        "Engine spares for the emergency generator ordered by the Master",
      ],
      answer: 1
    },
    {
      question: "Which of the following situations would normally use the urgency priority?",
      options: [
        "Crew member needs urgent medical attention due breaking a leg in cargo hold",
        "A fire in the generator room and adjacent spaces",
        "Leaking oil from a minor tank valve needing change from available spares",
        "Vessel working at the jetty, and a labour on jetty has been injured seriously",
      ],
      answer: 0
    },
  ],

  set10: [
    {
      question: "The officer on watch hears the signal \"PAN PAN\" spoken thrice, it means",
      options: [
        "An important navigational warning is about to follow",
        "An important meteorological warning is about to follow",
        "An urgency message concerning safety of a mobile unit or person is about to follow",
        "Station making the call is in need of immediate assistance",
      ],
      answer: 2
    },
    {
      question: "Ship engine and steering failure requires Master to ask for towing help",
      options: [
        "Master may seek towing help by sending a message using 2-digit code 39",
        "Master may send a routine message to owners asking for advice",
        "Master may ask for experts to be arranged from nearby vicinity vessels",
        "Master may seek advice from shore-based agency for repairs",
      ],
      answer: 0
    },
    {
      question: "Ship has sighted oil pollution from a leaking oil pipeline in oilfield and marine life is endangered, Master will send a alert asking for action by coast guard using priority",
      options: [
        "Urgency Distress",
        "Safety Routine",
      ],
      answer: 0
    },
    {
      question: "A long medical advice message is to be sent by a ship in area of heavy traffic, it will use",
      options: [
        "2182 KHz 2191 KHz",
        "Working channel as informed by a coast radio station",
        "2177 KHz",
      ],
      answer: 1
    },
    {
      question: "Urgency alert in the MF band is always required to be sent between ship and coast station on",
      options: [
        "2187.5 KHz 2177 KHz",
        "2189.5 KHz / 2177 KHz 2191 KHz",
      ],
      answer: 0
    },
    {
      question: "When a priority signal \"SECURITE\" is heard, it means",
      options: [
        "Message concerning safety of person or vessel is about to follow",
        "Message concerning an important navigation or meteorological warning is to follow",
        "Message asking for immediate assistance is about to follow",
        "Coast Radio Station is going to announce the traffic list on hand for vessels in the area",
      ],
      answer: 1
    },
    {
      question: "The radiotelephone signal used to indicate loss of few containers with lashing gear over side",
      options: [
        "SECURITE PAN PAN",
        "MAYDAY URGENCY",
      ],
      answer: 0
    },
    {
      question: "Following situation requires use of safety alert and message",
      options: [
        "Man over board An important navigational warning by a ship",
        "Information concerning the safety of a person or a mobile unit",
        "Information concerning on-scene communications",
      ],
      answer: 0
    },
    {
      question: "Radiotelephone safety signal is",
      options: [
        "SECURITE repeated thrice SAFETY repeated thrice",
        "PAN PAN repeated thrice SECURITE SECURITE repeated thrice",
      ],
      answer: 0
    },
    {
      question: "Safety message to all stations is broadcast generally ending with",
      options: [
        "Request asking for acknowledgment",
        "Request to relay to stations within the vicinity",
        "Request to confirm the situation if is in affected area",
        "No request as it does not require any acknowledgment",
      ],
      answer: 3
    },
    {
      question: "Ship has to carry out an external weekly DSC test with coast station, it will use",
      options: [
        "Routine frequency 2189.5 KHz / 2177 KHz",
        "National working frequency International working frequency",
        "Frequency selected automatically for the external weekly tests by equipment",
      ],
      answer: 2
    },
    {
      question: "Under GMDSS, it is mandatory for ship to carry out",
      options: [
        "Monthly distress test on MF-HF radio equipment",
        "Annual distress test on MF-HF radio equipment",
        "Weekly external test on the MF-HF equipment with a coast radio station",
        "Weekly internal distress test on the MF-HF equipment",
      ],
      answer: 2
    },
    {
      question: "Ship can use distress and safety VHF DSC channel for sending a routine alert to ship/CRS",
      options: [
        "FALSE TRUE",
        "MAYBE NO COMMENTS",
      ],
      answer: 0
    },
    {
      question: "VHF DSC testing is normally carried out by",
      options: [
        "Daily making a call to a coast radio station when within range",
        "Daily making a radiotelephone call onboard ship using a portable VHF handheld radio",
        "Daily testing with a ship in vicinity or making a DSC call to its own second VHF DSC",
        "Carrying out a weekly test with a coast radio station or with a nearby ship",
      ],
      answer: 2
    },
    {
      question: "For a ship to be in GMDSS Sea Area A1",
      options: [
        "Ship must be within VHF range of a coast station open to public correspondence",
        "Ship must be within range of coast station equipped with continuous VHF DSC alerting",
        "Ship must be within range of coast guard ship",
        "Ship must be sailing within a range of 20 to 30 nautical miles from any coast",
      ],
      answer: 1
    },
    {
      question: "What is the equipment carriage requirement for survival craft under GMDSS?",
      options: [
        "Two GMDSS portable handheld VHF radios for all passenger ships irrespective of tonnage and cargo ships above 300 GRT and below 500 GRT sailing internationally",
        "Three GMDSS portable handheld VHF radios for all passenger ships irrespective of tonnage and cargo ships above 500 GRT sailing internationally",
        "All of the above GMDSS portable handheld VHF radios must have at least VHF channel 16 and 06",
      ],
      answer: 2
    },
    {
      question: "Maritime VHF band operation used by maritime communications is",
      options: [
        "3 -- 30 MHz 88 -- 108 MHz",
        "300 -- 3000 MHz 156 -- 164 MHz",
      ],
      answer: 1
    },
    {
      question: "A GMDSS vessel is required to keep a watch on radiotelephone VHF channel 16:",
      options: [
        "TRUE FALSE",
        "Only if it is sailing in Sea Area A2 and A3/A4",
        "Only if it is sailing in Sea Area A1",
      ],
      answer: 0
    },
    {
      question: "When the Distress button is activated on the DSC VHF radio, the alert is sent on",
      options: [
        "VHF Channel 70 VHF Channel 16",
        "VHF Channel as may be selected by the officer",
        "VHF Channel 06",
      ],
      answer: 0
    },
    {
      question: "Subsequent VHF channel to be used following a safety alert should be",
      options: [
        "Channel 16 Channel 06",
        "Channel 08 Channel 13",
      ],
      answer: 0
    },
    {
      question: "VHF Channel used for bridge-to-bridge communication during voyage is",
      options: [
        "Channel 10 Channel 15",
        "Channel 17 Channel 13",
      ],
      answer: 1
    },
    {
      question: "Ship in receipt of a VHF DSC Distress alert will monitor for further information on",
      options: [
        "Channel 16 Channel 06",
        "Channel 70 Channel 08",
      ],
      answer: 0
    },
    {
      question: "Homing is used when",
      options: [
        "Entering or leaving port To get a bearing of a vessel in distress",
        "To receive message To transmit message",
      ],
      answer: 0
    },
    {
      question: "What time is kept in the ship's radio logbook?",
      options: [
        "Zone time Ship's time",
        "UTC Local time",
      ],
      answer: 1
    },
    {
      question: "The correct form of calling with regard to onboard communications is:",
      options: [
        "Bridge this is Forward Ben Loyal Bridge this is Forward",
        "Ben Loyal Control this is Forward",
        "Ben Loyal Control this is Ben Loyal Alpha",
      ],
      answer: 2
    },
    {
      question: "When station receives a call which is intended for it, but is uncertain of the identity of the calling station:",
      options: [
        "It should ask for the call to be repeated",
        "It should ask the calling station to increase power",
        "It should not reply until the call has been repeated",
        "Reply using \"all stations\"",
      ],
      answer: 0
    },
    {
      question: "A TR transmitted by Ship station should contain:",
      options: [
        "Local weather situation traffic on hand for the coast station",
        "owner's name &address Position, where bound &ETA",
      ],
      answer: 1
    },
    {
      question: "Communications on the port operations channel consist of:",
      options: [
        "Public correspondence with the nearest CRS receiving weather forecasts",
        "operational handling, movements of ships, safety navigation &safety of a person",
        "Intership communications",
      ],
      answer: 1
    },
    {
      question: "In areas where reliable comms is practicable in the VHF band, the method of calling is:",
      options: [
        "VTZX x 2 this is VTBZ x 2 VTZX this is VTBZ x 2",
        "VTZX x 3 this is VTBZ x 3 VTZX this is VTBZ",
      ],
      answer: 0
    },
    {
      question: "Between 2 ships & a coast station, if necessary, who controls the working",
      options: [
        "the coast station the ship station called",
        "the ship station calling none of the above",
      ],
      answer: 0
    },
  ],

  set11: [
    {
      question: "Which of the following would be the call sign of a ship station",
      options: [
        "9HD D3HD",
        "14325 ELBOW",
      ],
      answer: 0
    },
    {
      question: "Which one of the following is a Coast Station Call Sign:",
      options: [
        "9V6 A23",
        "9VG VTP1234",
      ],
      answer: 1
    },
    {
      question: "If you call a Coast Station on a working frequency, it will normally reply on:",
      options: [
        "The Distress Channel DSC Channel",
        "Suitable RTT frequency On the same Channel Paired Channel",
      ],
      answer: 1
    },
    {
      question: "Details of Weather broadcasting stations can be found in:",
      options: [
        "ITU List of Coast Stations ITU Radio Determination and Special Service Stations",
        "ALRS Vol 1 ALRS Vol 6",
      ],
      answer: 0
    },
    {
      question: "The monthly tests carried out on board should include:",
      options: [
        "DSC Test Call to a Coast Station",
        "DSC internal test Survival Craft VHF Ch 16 checks",
        "EPIRB without use of Satellite System",
      ],
      answer: 2
    },
    {
      question: "The entries in the GMDSS log book is always made in:",
      options: [
        "Local time Ship's time",
        "Zonal time Co-ordinated Universal Time",
      ],
      answer: 1
    },
    {
      question: "Identify the MMSI number of Coast Station:",
      options: [
        "041902341 004192301",
        "419299720 39899",
      ],
      answer: 0
    },
    {
      question: "The Maximum Power (Mean Value) permitted in case of MF DSC is:",
      options: [
        "100 Watts 50 Watts",
        "50Watts 400 Watts",
      ],
      answer: 1
    },
    {
      question: "A ship makes a routine call to Coast Station on MF DSC. No reply is received, Further action should be:",
      options: [
        "repeat the call at 2 min intervals repeat the call after 5 min. with the next call 15 min. later",
        "after 3 min. interval after 2 min. with the next call 3 min. later",
      ],
      answer: 0
    },
    {
      question: "Test signals in the Terrestrial system should not exceed:",
      options: [
        "10 seconds 1 minute",
        "30 seconds 3 minutes",
      ],
      answer: 0
    },
    {
      question: "Who controls the working between a ship & a coast station",
      options: [
        "the coast station the ship station called",
        "the ship station calling none of the above",
      ],
      answer: 0
    },
    {
      question: "Hearing a call addressed to you on 2182 KHz but unsure who called. Your further action would be",
      options: [
        "continue watching the channel for its repetition wait until the next silence period",
        "ask a local coast station if it knows who was calling broadcast a call for repetition",
      ],
      answer: 0
    },
    {
      question: "You are in sea area A2. The frequency used for compulsory weekly testing with radiation is:",
      options: [
        "2187.5 KHz 2189.5 KHz",
        "2174.5 KHz 2191.0 KHz",
      ],
      answer: 0
    },
    {
      question: "Routine VHF DSC business call may be made on:",
      options: [
        "Channel 08 Channel 06",
        "Channel 70 Channel 13",
      ],
      answer: 1
    },
    {
      question: "The following is to be recorded in Section \"B\" of GMDSS Log Book",
      options: [
        "summary of communications Particulars of ship",
        "details of DDCO on board Equipment test results",
      ],
      answer: 1
    },
    {
      question: "Which of the following types of messages has the highest priority",
      options: [
        "OBS Navigational warning",
        "Medical service Service message",
      ],
      answer: 1
    },
    {
      question: "GMDSS Walkie-talkies are to be tested",
      options: [
        "every day every month",
        "every week not to be tested",
      ],
      answer: 0
    },
    {
      question: "The equipment which should be tested every week by radiating signals to coast Station is:",
      options: [
        "EPIRB SART",
        "VHF DSC MF/HF DSC",
      ],
      answer: 1
    },
    {
      question: "Survival craft VHF equipment shall be tested on",
      options: [
        "Ch 16 Ch 70",
        "156.8 MHz Channel other than 16",
      ],
      answer: 1
    },
    {
      question: "During R/T communications when is the term \"OUT\" used",
      options: [
        "After sending out a message End of Work",
        "Off Watch After entering port",
      ],
      answer: 0
    },
    {
      question: "Details of Radio DF stations and Radio Beacons will be found in",
      options: [
        "ITU Radio Regulations Manual ITU List of Coast Stations and Special Service Stations",
        "International Code of Signals ITU List of Ship Stations and Maritime Mobile Service Identity Assignments",
      ],
      answer: 0
    },
    {
      question: "Master must inspect &sign GMDSS logbook:",
      options: [
        "each day on voyage completion",
        "once a week prior to SRT survey",
      ],
      answer: 0
    },
    {
      question: "When a ship is called on 2182KHz, the ship should reply on:",
      options: [
        "2182 KHz M/F R/T work frequency",
        "2182 KHz unless otherwise instructed",
        "2048 KHz",
      ],
      answer: 1
    },
    {
      question: "Monthly test will be carried out on:",
      options: [
        "VHF DSC MF/HF DSC",
        "UHF sets EPIRB, SART, Survival craft Sets",
      ],
      answer: 1
    },
    {
      question: "DSC Distress call, unless stopped or acknowledged by DSC, continues at a random period of:",
      options: [
        "5 minutes 3 minutes",
        "3.5 to 4.5 minutes 1 to 2.75 minutes",
      ],
      answer: 1
    },
    {
      question: "A Coast Radio Station should acknowledge a MF/HF DSC Distress alert between",
      options: [
        "15 to 30 seconds 3 to 5 minutes",
        "5 to 8 minutes 1 to 2.75 minutes",
      ],
      answer: 1
    },
    {
      question: "Class of emission on MF/HF of DSC calls is",
      options: [
        "J3E H3E",
        "G3E/F3E F1B/J2B",
      ],
      answer: 1
    },
    {
      question: "Speed of transmission of MF/HF DSC call is",
      options: [
        "20 bauds 10 bauds",
        "100 bauds 1200 bauds",
      ],
      answer: 0
    },
    {
      question: "Duration of a single MF/HF DSC call is between",
      options: [
        "1 to 2 seconds 6.2 to 7.2 seconds",
        "3 to 5 seconds 0.5 to 1 second",
      ],
      answer: 1
    },
    {
      question: "At the beginning of MF/HF DSC Call, a DOT pattern used is of duration",
      options: [
        "10-bit 20-bit",
        "200-bit 7-bit",
      ],
      answer: 1
    },
  ],

  set12: [
    {
      question: "Symbol 104 used as 1st telecommand in DSC techniques refers to",
      options: [
        "End of Transmission End of Message",
        "Reply requested Unable to comply",
      ],
      answer: 1
    },
    {
      question: "Symbol 112 used in telecommand in format specifier in DSC techniques means",
      options: [
        "Urgency Safety",
        "Distress Routine",
      ],
      answer: 1
    },
    {
      question: "What is the fundamental concept of the GMDSS?",
      options: [
        "It is intended to automate and improve emergency communications in the maritime industry.",
        "It is intended to automate and improve existing digital selective calling procedures and techniques.",
        "It is intended to provide more effective but lower cost commercial communications.",
        "It is intended to provide compulsory vessels with a collision avoidance system when they are operating in waters that are also occupied by non-compulsory vessels.",
      ],
      answer: 0
    },
    {
      question: "The primary purpose of the GMDSS is?",
      options: [
        "Allow more effective control of SAR situations by vessels.",
        "Provide additional shipboard systems for more effective company communications.",
        "Automate and improve emergency communications for the world's shipping industry.",
        "Effective and inexpensive communications.",
      ],
      answer: 2
    },
    {
      question: "What is the basic concept of GMDSS?",
      options: [
        "Search and rescue authorities ashore can be alerted to a distress situation.",
        "Shipping in the immediate vicinity of a ship in distress will be rapidly alerted.",
        "Shoreside authorities and vessels can assist in a coordinated SAR operation with minimum delay.",
        "All of these.",
      ],
      answer: 3
    },
    {
      question: "GMDSS is primarily a system based on?",
      options: [
        "Ship-to-ship distress communications using MF or HF radiotelephony.",
        "VHF digital selective calling from ship to shore.",
        "Distress, urgency and safety communications carried out by the use of narrow-band direct printing telegraphy.",
        "The linking of search and rescue authorities ashore with shipping in the immediate vicinity of a ship in distress or in need of assistance.",
      ],
      answer: 3
    },
    {
      question: "What is the responsibility of vessels under GMDSS?",
      options: [
        "Vessels over 300 gross tons may be required to render assistance if such assistance does not adversely affect their port schedule.",
        "Only that vessel, regardless of size, closest to a vessel in distress, is required to render assistance.",
        "Every ship is able to perform those communications functions that are essential for the safety of the ship itself and of other ships.",
        "Vessels operating under GMDSS, outside of areas effectively serviced by shoreside authorities, operating in sea areas A2, and A4 may be required to render assistance in distress situations.",
      ],
      answer: 2
    },
    {
      question: "GMDSS is required for which of the following?",
      options: [
        "All vessels capable of international voyages.",
        "Vessels operating outside of the range of VHF coastal radio stations.",
        "SOLAS Convention ships of 300 gross tonnage or more.",
        "Coastal vessels of less than 300 gross tons.",
      ],
      answer: 2
    },
    {
      question: "What equipment is associated with the space systems?",
      options: [
        "VHF-MF-HF.",
        "Inmarsat-C.",
        "Navtex.",
        "SART.",
      ],
      answer: 1
    },
    {
      question: "What equipment is used in or near the survival craft?",
      options: [
        "Navtex.",
        "Fathometer.",
        "Cospas-Sarsat.",
        "EPIRB.",
      ],
      answer: 3
    },
    {
      question: "What equipment is programmed to initiate transmission of distress alerts and calls to individual stations?",
      options: [
        "Navtex.",
        "GPS.",
        "DSC controller.",
        "Scanning Watch Receiver.",
      ],
      answer: 2
    },
    {
      question: "What system provides accurate vessel position information to the GMDSS equipment?",
      options: [
        "GPS.",
        "Cospas-Sarsat.",
        "EPIRB.",
        "Inmarsat-A.",
      ],
      answer: 0
    },
    {
      question: "What is the primary equipment for receiving MSI.",
      options: [
        "SART.",
        "EPIRB.",
        "Navtex.",
        "Inmarsat-A.",
      ],
      answer: 2
    },
    {
      question: "Which of the following region lies outside Sea Areas A1, A2, and A3?",
      options: [
        "Sea Areas only apply to Inmarsat footprint areas.",
        "Sea Area A3-I (Inmarsat coverage) and Sea Area A3-S (HF SITOR coverage).",
        "There are no additional Sea Areas.",
        "Sea Area A4.",
      ],
      answer: 3
    },
    {
      question: "What sea area is defined as being within range of a shore-based MF station that provides for continuous DSC alerting?",
      options: [
        "Sea area A2.",
        "Coastal waters.",
        "Sea area A3.",
        "Sea area A1.",
      ],
      answer: 0
    },
    {
      question: "If a vessel is engaged in local trade and at no point in its voyage travels outside of the range of a VHF shore station with continuous DSC alerting then the vessel is operating in what area?",
      options: [
        "Coastal and international zones.",
        "Inland and coastal waters.",
        "Sea areas A1 and A2.",
        "Sea area A1.",
      ],
      answer: 3
    },
    {
      question: "What is defined as an area, excluding sea areas A1 and A2, within the coverage of an Inmarsat geostationary satellite in which continuous alerting is available?",
      options: [
        "Ocean Area Regions AOR-E, AOR-W, POR or IOR.",
        "Sea Area A4.",
        "Sea Area A3.",
        "Coastal and Inland Waters.",
      ],
      answer: 2
    },
    {
      question: "SITOR equipment is a full, partial or alternate carriage requirement under GMDSS for vessels operating in which sea area(s)?",
      options: [
        "A1.",
        "A1 and A2.",
        "A3 and A4.",
        "A1, A2, A3 and A4.",
      ],
      answer: 2
    },
    {
      question: "What is defined as the area within the radiotelephone coverage area of at least one VHF coast station in which continuous DSC alerting is available as defined by the IMO regulation for GMDSS?",
      options: [
        "Sea Area A1.",
        "Ocean Area Regions AOR-E, AOR-W, POR or IOR.",
        "Sea Area A2.",
        "Coastal and Inland Waters.",
      ],
      answer: 0
    },
    {
      question: "Which of the following is a functional or carriage requirement for compulsory vessels?",
      options: [
        "A compulsory vessel must carry at least two (2) licensed GMDSS Radio Operators.",
        "A compulsory vessel must satisfy certain equipment carriage requirements that are determined by where the vessel sails.",
        "A compulsory vessel must be able to transmit and respond to distress alerts.",
        "All of the above.",
      ],
      answer: 3
    },
    {
      question: "Which communications functions must all vessels be capable of performing under GMDSS as defined by the International Maritime Organization?",
      options: [
        "Radio Direction Finding.",
        "Distress alerting to and from vessels, search and rescue coordination, on-scene communications, signals for locating, maritime safety information, general and bridge-to-bridge communications.",
        "Communications in each of the operational ocean areas.",
        "All communications possible within the International Safety-Net service.",
      ],
      answer: 1
    },
    {
      question: "GMDSS-equipped ships will be required to perform which of the following communications functions?",
      options: [
        "Distress alerting and maritime safety information.",
        "Search and Rescue coordination and on-scene communications.",
        "Bridge-to-bridge and general radio communications.",
        "All of these.",
      ],
      answer: 3
    },
    {
      question: "What equipment can be used to receive Maritime Safety Information?",
      options: [
        "Navtex.",
        "EGC receiver.",
        "HF NBDP.",
        "All of the above.",
      ],
      answer: 3
    },
    {
      question: "Which of the following is a required GMDSS function?",
      options: [
        "Bridge-to-Bridge communications.",
        "Reception of weather map facsimile broadcasts.",
        "Both of the above.",
        "None of the above.",
      ],
      answer: 0
    },
    {
      question: "Which statement is true regarding a vessel equipped with GMDSS equipment that will remain in Sea Area A1 at all times?",
      options: [
        "The vessel must be provided with a radio installation capable of initiating the transmission of ship-to-shore distress alerting from the position from which the ship is normally navigated.",
        "VHF DSC alerting may be the sole means of distress alerting.",
        "HF or MF DSC may satisfy the equipment requirement.",
        "HF SSB with 2182 kHz automatic alarm generator may satisfy the equipment requirement.",
      ],
      answer: 0
    },
    {
      question: "What statement is true regarding the additional equipment carriage requirement imposed for the survival craft of vessels over 500 gross tons?",
      options: [
        "Additional carriage of two radio equipped lifeboats aft.",
        "A second radar transponder is required.",
        "Four additional portable VHF radios are required.",
        "The ability to communicate in all modes with any shore station.",
      ],
      answer: 1
    },
    {
      question: "Vessels operating in which sea area(s) are required to carry either Inmarsat or HF equipment or a combination thereof under GMDSS?",
      options: [
        "All sea areas.",
        "A3 A4",
        "A1",
      ],
      answer: 1
    },
    {
      question: "Within a single sea area, what is the primary reason GMDSS imposes carriage requirements for different radio subsystems?",
      options: [
        "Redundancy in duplicating all operational functions in the event of a system failure.",
        "Each subsystem has a specific purpose and capabilities that generally cannot be duplicated by other subsystems.",
        "Different radio systems may be used by the various authorities.",
        "The ability to communicate in all modes with any of the shore stations.",
      ],
      answer: 1
    },
    {
      question: "If operating within Ocean Area A1, and outside of NAVTEX coverage, a GMDSS-equipped vessel must carry?",
      options: [
        "An Inmarsat-A terminal.",
        "A GPS receiver.",
        "Equipment capable of maintaining a continuous DSC watch on 2187.5 kHz.",
        "Equipment capable of reception of maritime safety information by the Inmarsat enhanced group call system, or HF NBDP.",
      ],
      answer: 3
    },
    {
      question: "Which of the following statements concerning maintenance requirements is false?",
      options: [
        "Compulsory vessels sailing in Sea Areas A1 and A2 must provide any one of the three maintenance options which are duplication of equipment, shore-based, or at-sea maintenance capability.",
        "Compulsory vessels sailing in Sea Areas A3 and A4 must provide any two of the three maintenance options which are duplication of equipment, shore-based, or at-sea maintenance capability.",
        "If shore-based maintenance is used, maintenance services do not have to be completed or performance verified unless the vessel will be sailing to a non-US port.",
        "Equipment warranties do not satisfy GMDSS maintenance requirements.",
      ],
      answer: 2
    },
  ],

  set13: [
    {
      question: "Which of the following statements concerning maintenance requirements is true?",
      options: [
        "The options are duplication of equipment, at-sea maintenance, and shore-based maintenance.",
        "Compulsory vessels between 300-500 gross tons are required only to provide one maintenance option, while compulsory vessels larger than 500 gross tons and all passenger vessels are required to provide any two of the three maintenance options.",
        "The maintenance may be waived if the compulsory vessel carries at least three licensed GMDSS Radio Operators.",
        "Compulsory vessels operating in Sea Area A4 are required to carry at least one licensed GMDSS Radio Maintainer.",
      ],
      answer: 0
    },
    {
      question: "Which of the following is a requirement, under GMDSS, for all vessels over 300 gross tons operating within range of a MF-DSC equipped shore station?",
      options: [
        "Ship's Master or radio officer must be on duty at all times.",
        "At least 2nd class Telegraphy license or GMDSS Element 9 is required for the radio officer.",
        "Spare parts and maintenance kit for repairs.",
        "Only one of the three maintenance options is required.",
      ],
      answer: 3
    },
    {
      question: "What statement is generally correct regarding the maintenance requirements for ships under GMDSS?",
      options: [
        "Redundancy of functions of certain equipment will partially meet this requirement.",
        "On-board maintenance provided by a person holding a GMDSS Maintainer's license will partially meet the requirements.",
        "Shoreside maintenance and scheduled tests and inspections will partially meet this requirement.",
        "All of the above.",
      ],
      answer: 3
    },
    {
      question: "A ship operating in sea area A-3 must have the following provisions for maintenance:",
      options: [
        "Duplication of Equipment.",
        "Shore Maintenance.",
        "At Sea Maintenance.",
        "Any two of the above.",
      ],
      answer: 3
    },
    {
      question: "A ship operating in sea area A-1 must have the following provisions for maintenance:",
      options: [
        "Shore maintenance.",
        "Duplication of equipment.",
        "At Sea Maintenance.",
        "Any one of the above.",
      ],
      answer: 3
    },
    {
      question: "What is the frequency range for Medium Frequency?",
      options: [
        "30-300 kHz 300-3,000 kHz",
        "1,000-10,000 kHz 10-30 MHz",
      ],
      answer: 0
    },
    {
      question: "What is the frequency range for High Frequency?",
      options: [
        "3-30 MHz 300-3,000 kHz",
        "30-300 MHz 10-30 MHz",
      ],
      answer: 0
    },
    {
      question: "What is the frequency range for Very High Frequency?",
      options: [
        "3-30 MHz 300-3,000 kHz",
        "30-300 MHz 10-30 MHz",
      ],
      answer: 1
    },
    {
      question: "What is the frequency range for Ultra High Frequency?",
      options: [
        "3-30 MHz 300-3,000 MHz",
        "30-300 MHz 10-30 MHz",
      ],
      answer: 0
    },
    {
      question: "What is the frequency range for Super High Frequency?",
      options: [
        "30-300 GHz 300-3,000 MHz",
        "30-300 MHz 3-30 GHz",
      ],
      answer: 1
    },
    {
      question: "What is the primary frequency range for long distance skywave communications?",
      options: [
        "3-30 MHz 300-3,000 kHz",
        "30-300 MHz 10-30 MHz",
      ],
      answer: 0
    },
    {
      question: "Which of the following systems is most likely to be subject to fading or static interference?",
      options: [
        "HF SITOR.",
        "Inmarsat.",
        "Digital Selective Calling on channel 70.",
        "VHF ARQ.",
      ],
      answer: 0
    },
    {
      question: "Which system is most likely to be affected by atmospheric disturbances?",
      options: [
        "MF/HF radiotelephony.",
        "VHF DSC.",
        "Inmarsat.",
        "SafetyNET.",
      ],
      answer: 0
    },
    {
      question: "Which of the following systems is least likely to be subject to fading or static interference?",
      options: [
        "HF SITOR.",
        "Inmarsat.",
        "MF-HF DSC Controller.",
        "VHF ARQ.",
      ],
      answer: 1
    },
    {
      question: "Which system is least likely to be affected by atmospheric disturbances?",
      options: [
        "NAVTEX.",
        "Inmarsat.",
        "MF NBDP.",
        "HF NBDP.",
      ],
      answer: 1
    },
    {
      question: "Which of the following frequency bands would most likely provide reliable communications between two stations that are 100 miles (160 km) apart?",
      options: [
        "The Low Frequency (LF) band.",
        "The Medium Frequency (MF) band.",
        "The High Frequency (HF) band.",
        "The Very High Frequency (VHF) band.",
      ],
      answer: 1
    },
    {
      question: "Which system has the least effective radius of operation?",
      options: [
        "HF SITOR.",
        "MF NBDP.",
        "VHF DSC.",
        "NAVTEX.",
      ],
      answer: 2
    },
    {
      question: "What statement best describes modulation?",
      options: [
        "Imposing intelligence onto a radio carrier signal.",
        "Changing mark-space to 1 and 0.",
        "Adjusting the frequency to the optimum band for long distance communications.",
        "Converting the carrier from a low frequency to a higher frequency.",
      ],
      answer: 0
    },
    {
      question: "What statement best describes demodulation?",
      options: [
        "Detuning the receiver to remove interfering signals.",
        "Removing atmospheric noise from the signal.",
        "Removing the information signal from the carrier.",
        "Separating the telex signals from the voice signals.",
      ],
      answer: 2
    },
    {
      question: "Which statement best describes amplitude modulation?",
      options: [
        "The character data from the terminal is changed to audio tones.",
        "The frequency is varied in synchronization with the modulating signal.",
        "The information signal changes the amplitude but does not change the carrier frequency.",
        "The amplitude of the carrier is changed but there is still only a single frequency being transmitted.",
      ],
      answer: 2
    },
    {
      question: "What is the emission designation for MF-HF voice signals?",
      options: [
        "F1B J3E",
        "J2B F3E",
      ],
      answer: 0
    },
    {
      question: "Which statement best describes frequency modulation?",
      options: [
        "Both the amplitude and frequency are changed by the modulating signal.",
        "The frequency is changed by the information signal and the amplitude remains unchanged.",
        "Frequency modulation is subject to interference by atmospheric noise.",
        "High level mixing of the final amplifier signal and the information signal.",
      ],
      answer: 1
    },
    {
      question: "What is the emission designation for VHF-FM?",
      options: [
        "F3C J2B",
        "F3E AME",
      ],
      answer: 1
    },
    {
      question: "Which of the following statements describes the carrier?",
      options: [
        "The carrier consists of at least 3 separate but closely spaced frequencies.",
        "The carrier is a Radio Frequency (RF) signal that is modified to carry intelligence.",
        "The carrier is used to modulate the information signal.",
        "There are always sidebands on either side of the carrier.",
      ],
      answer: 1
    },
    {
      question: "How many sidebands are present in a standard A.M. signal?",
      options: [
        "One Four",
        "Two Three",
      ],
      answer: 1
    },
    {
      question: "How many sidebands are present in the J3E mode?",
      options: [
        "Two sidebands and a carrier.",
        "One upper sideband.",
        "One lower sideband.",
        "Two carriers and one sideband.",
      ],
      answer: 1
    },
    {
      question: "What is the signal transmitted in H3E mode?",
      options: [
        "Two sidebands, upper and lower.",
        "A reduced carrier and the lower sideband.",
        "A full carrier and the upper sideband.",
        "A full carrier and both upper and lower sidebands.",
      ],
      answer: 2
    },
    {
      question: "What is the signal transmitted in J2B mode?",
      options: [
        "A full carrier and one sideband.",
        "A full carrier and two sidebands.",
        "An upper sideband of 2 alternating tones.",
        "An upper sideband of a single tone switched on and off.",
      ],
      answer: 2
    },
    {
      question: "Which of the following statements is true?",
      options: [
        "An RF carrier is always required to carry the information.",
        "There is only a single tone used in J2B mode.",
        "Both of the above.",
        "None of the above.",
      ],
      answer: 3
    },
    {
      question: "What is the channel spacing for MF-HF voice frequencies?",
      options: [
        "2.8 kHz 500 Hz",
        "3.5 kHz 3 kHz",
      ],
      answer: 1
    },
  ],

  set14: [
    {
      question: "What is the channel spacing for SITOR frequencies?",
      options: [
        "500 Hz 170 Hz",
        "300 Hz 3 kHz",
      ],
      answer: 0
    },
    {
      question: "You look up a frequency table and all the listings end in either .0 or .5 kHz. What kind of emission is used with these frequencies?",
      options: [
        "NBDP/SITOR.",
        "SSB Voice.",
        "Both of the above.",
        "None of the above.",
      ],
      answer: 0
    },
    {
      question: "How many SITOR signals can occupy the space of one voice signal?",
      options: [
        "2 4",
        "6 10",
      ],
      answer: 1
    },
    {
      question: "Which emission mode occupies the most bandwidth?",
      options: [
        "J2B J3E",
        "F1B F3E",
      ],
      answer: 1
    },
    {
      question: "Which mode occupies the least bandwidth?",
      options: [
        "H3E J2B",
        "AME F3E",
      ],
      answer: 0
    },
    {
      question: "A half wave horizontal dipole antenna has a radiation pattern best described by?",
      options: [
        "A figure eight.",
        "A cardioid.",
        "A circle.",
        "An ellipse.",
      ],
      answer: 0
    },
    {
      question: "A vertical quarter wave antenna with a good ground connection will:",
      options: [
        "Act like a half wave antenna.",
        "Not function due to being grounded.",
        "Only be used in Satellite communications.",
        "None of these.",
      ],
      answer: 0
    },
    {
      question: "What advantage does a vertical whip have over a long wire?",
      options: [
        "It radiates more signal fore and aft.",
        "It radiates equally well in all directions.",
        "It radiates a strong signal vertically.",
        "None of the above.",
      ],
      answer: 1
    },
    {
      question: "How often must a compulsory vessel's GMDSS radio station be inspected?",
      options: [
        "Annually, by the U.S. Coast Guard.",
        "Annually, by the FCC or designated authority.",
        "Annually, by the FCC, and every six months if the vessel sails outside of Sea Areas A1 and A2.",
        "The FCC's annual inspection may be waived if and only if monthly inspections are performed by the vessel's on-board GMDSS Radio Maintainer.",
      ],
      answer: 1
    },
    {
      question: "What periodic inspection is required in order to remain in compliance with the regulations regarding GMDSS ship radio station inspections?",
      options: [
        "U.S. Coast Guard annual inspection.",
        "F.C.C. annual inspection.",
        "F.C.C. inspection every five years.",
        "Periodic inspections not required if on board maintainers perform routine preventive maintenance.",
      ],
      answer: 1
    },
    {
      question: "Which statement is false regarding a GMDSS-equipped ship?",
      options: [
        "A conditional or partial exemption may be granted, in exceptional circumstances, for a single voyage outside the sea area for which the vessel is equipped.",
        "Ships must have the required equipment inspected at least once every five years.",
        "The regulations apply to all passenger ships regardless of size and cargo ships of 300 gross tons and upwards.",
        "Ships must carry at least two persons holding a GMDSS Radio Operator's license for distress and safety radio-communications purposes.",
      ],
      answer: 1
    },
    {
      question: "Which statement is false regarding a GMDSS equipped ship?",
      options: [
        "A conditional or partial exemption may not be granted, in exceptional circumstances, for a single voyage outside the sea area for which the ship is equipped.",
        "Ships must have the required equipment inspected at least once every 12 months.",
        "The regulations apply to all passenger ships regardless of size and cargo ships of 300 gross tons and upwards.",
        "Ships must carry at least two persons holding a GMDSS Radio Operator's license for distress and safety radio-communications purposes.",
      ],
      answer: 0
    },
    {
      question: "During an annual FCC inspection:",
      options: [
        "All required documents and publications might have to be produced.",
        "Licensed GMDSS operators may be required to demonstrate equipment competencies.",
        "All required equipment must be fully operational.",
        "All of the above.",
      ],
      answer: 3
    },
    {
      question: "Foreign governments or administrations may inspect the radio installation:",
      options: [
        "When the ship's station license cannot be produced without delay.",
        "When irregularities are observed.",
        "Both of the above.",
        "None of the above.",
      ],
      answer: 2
    },
    {
      question: "Which of the following references should the GMDSS Radio Operator consult for information on the proper operation of equipment?",
      options: [
        "ITU List of Equipment Operations.",
        "The manufacturer's operator manuals.",
        "47 CFR Part 80.",
        "Information is available through SafetyNET channels.",
      ],
      answer: 1
    },
    {
      question: "Where can GMDSS regulations pertaining specifically to U.S.-flag vessels be found?",
      options: [
        "These are located in CCIR #476.",
        "These are located in FCC Part 83.",
        "These are published only by the U.S. Coast Guard.",
        "These are located in 47 CFR 80.",
      ],
      answer: 3
    },
    {
      question: "What should the GMDSS Radio Operator consult to review the proper procedures to be followed in distress situations under GMDSS?",
      options: [
        "IMO Recommendations.",
        "The manufacturer's instruction manuals.",
        "Part 90 of the FCC Rules and Regulations.",
        "Part 80, Subpart W of the FCC Rules and Regulations.",
      ],
      answer: 3
    },
    {
      question: "Which of the following documents are required by GMDSS for vessels on international voyages (other than the Great Lakes)?",
      options: [
        "A copy of the IMO master plan of shore-based facilities.",
        "Station logs.",
        "Part 80 FCC rules and regulations.",
        "All of these.",
      ],
      answer: 3
    },
    {
      question: "Which of the following documents are required by Part 80 of the FCC rules for vessels on international voyages (other than the Great Lakes)?",
      options: [
        "Appropriate Safety Convention Certificate.",
        "List of Call Signs and Numerical Identities. (ITU List VII-A)",
        "List of Radiodetermination and Special Service Stations. (ITU List VI)",
        "All of these.",
      ],
      answer: 3
    },
    {
      question: "What publication/s should a GMDSS Operator consult regarding the proper set-up and operation of vessel equipment?",
      options: [
        "ITU Publications.",
        "The manufacturer's instruction manuals.",
        "Part 90 of the FCC Rules and Regulations.",
        "Code of Federal Regulations, Title 47, Part 80, Subpart W.",
      ],
      answer: 1
    },
    {
      question: "Which of the following maintenance functions is not the responsibility of the GMDSS Radio Operator?",
      options: [
        "Visual inspection of equipment, including the antenna and associated components.",
        "Perform on-the-air verification checks.",
        "Perform scheduled testing of the battery's charged condition.",
        "Aligning the power output stage for maximum power.",
      ],
      answer: 3
    },
    {
      question: "When may a compulsory vessel not be allowed to leave port?",
      options: [
        "When the vessel is in an over-carriage condition.",
        "When the vessel has arranged for both duplication of equipment AND shore-based maintenance.",
        "When the vessel has replaced a required piece of GMDSS-related equipment but its performance has not been verified or logged.",
        "When the vessel is carrying only two licensed GMDSS Radio Operators and is capable of performing all required functions.",
      ],
      answer: 2
    },
    {
      question: "Which statement is false regarding the maintenance of GMDSS equipment at sea?",
      options: [
        "The GMDSS maintainer may not be the person designated to have primary responsibility for radio- communications during distress incidents even if licensed as an operator.",
        "Ships must carry at least one person who qualifies as a GMDSS maintainer for the maintenance and repair of equipment if the at-sea maintenance option is selected.",
        "All at-sea maintenance and repairs must be performed by, or under the supervision of a person holding a GMDSS Maintainer license.",
        "The GMDSS maintainer may be the person responsible for ensuring that the watches are properly maintained and that the proper guard channels and the vessel's position are entered into the DSC equipment.",
      ],
      answer: 0
    },
    {
      question: "Which of the following service or maintenance functions may NOT be performed by the holder of a GMDSS Radio Operator License?",
      options: [
        "Reset tripped circuit breakers or replace defective fuses.",
        "Routine battery maintenance if used as part of the GMDSS station.",
        "Any adjustments or maintenance that may affect the proper operation of the station.",
        "Replacement of consumable items such as paper, ribbons, etc.",
      ],
      answer: 2
    },
    {
      question: "What are the conditions, under GMDSS, whereby a ship is NOT allowed to depart from any port?",
      options: [
        "The vessel is not capable of performing all required distress and safety functions.",
        "The vessel is carrying more than the required number of qualified GMDSS radio operators.",
        "The vessel has a temporary waiver of its radio license and Safety Certificate.",
        "The vessel is not carrying a GMDSS radio maintainer, but has provided for shoreside maintenance plus duplication of equipment if required.",
      ],
      answer: 0
    },
    {
      question: "What determines the spares and maintenance materials requirements for the SITOR equipment under GMDSS?",
      options: [
        "The recommendations of the manufacturer.",
        "FCC Part 80.",
        "IMO Circular The GMDSS Maintainer's requirements.",
      ],
      answer: 0
    },
    {
      question: "Which of the following is the minimum license requirement of a GMDSS Radio Operator?",
      options: [
        "Holding the Marine Radio Operator Permit is a pre-requisite before the GMDSS Radio Operator Endorsement can be obtained.",
        "Holding the General Radiotelephone Operator License with RADAR endorsement is sufficient.",
        "Holding a valid GMDSS Radio Operator license is sufficient.",
        "Holding either the General Radiotelephone Operator License or the First or Second Class Radiotelegraph license with GMDSS Radio Maintainer's endorsement is sufficient.",
      ],
      answer: 2
    },
    {
      question: "Which of the following statements concerning GMDSS Radio Operator requirements is false?",
      options: [
        "Each compulsory vessel must carry at least two licensed GMDSS Radio Operators at all times while at sea.",
        "Each compulsory vessel must carry at least two licensed GMDSS Radio Operators at all times while at sea and may elect to carry a GMDSS Radio Maintainer as well.",
        "Communications involving safety of life at sea do not have to be logged as long as the compulsory vessel was not involved in such communications.",
        "While at sea, adjustments to, and the maintaining of, GMDSS equipment may be performed by the GMDSS Radio Operator as long as the work is supervised by an on-board licensed GMDSS Radio Maintainer.",
      ],
      answer: 2
    },
    {
      question: "What is the minimum operator license required to perform or supervise the performance of at-sea adjustments, servicing or maintenance which may affect the proper operation of the GMDSS station?",
      options: [
        "Marine Radio Operator Permit.",
        "General Radiotelephone Operator license and Radar endorsement.",
        "Designated maintainer possessing a GMDSS Radio Operator license.",
        "GMDSS Radio Maintainer's license.",
      ],
      answer: 3
    },
    {
      question: "Which statement is false regarding the radio operator requirements for a GMDSS-equipped ship station?",
      options: [
        "One of the qualified GMDSS radio operators must be designated to have primary responsibility for radio- communications during distress incidents.",
        "A qualified GMDSS radio operator, and a qualified backup, must be designated to perform distress, urgency and safety communications.",
        "Maintaining a record of all incidents connected with the radio-communications service that appear to be of importance to safety of life at sea is not required.",
        "While at sea, all adjustments or radio installations, servicing or maintenance of such installations that may affect the proper operation of the GMDSS station must be performed by, or under the supervision of, a qualified GMDSS radio maintainer.",
      ],
      answer: 2
    },
  ],

  set15: [
    {
      question: "What are the vessel equipment and personnel requirements of GMDSS?",
      options: [
        "Two licensed GMDSS radio operators.",
        "Equipment carriage requirements.",
        "Distress alerting and response.",
        "All of these.",
      ],
      answer: 3
    },
    {
      question: "What is the minimum requirement of a GMDSS radio operator?",
      options: [
        "Marine Radio Operator Permit and GMDSS Endorsement.",
        "General Radiotelephone Operator license and Radar endorsement.",
        "GMDSS Radio Operator license.",
        "General Radiotelephone license or First or Second Class Radiotelegraph license with GMDSS Radio Maintainer's endorsement.",
      ],
      answer: 2
    },
    {
      question: "Which statement is false regarding the GMDSS requirement for ship sources of energy?",
      options: [
        "At all times while the vessel is at sea, a sufficient supply of electrical energy to operate the radio installations and charge any batteries which may be part of the reserve source of energy is required.",
        "The reserve sources of energy need to supply independent MF and HF radio installations at the same time.",
        "An uninterruptible power supply or other means of ensuring a continuous supply of electrical power to all GMDSS equipment that could be affected by normal variations and interruptions of ship's power is required.",
        "If an uninterrupted input of information is required from the ship's navigational or other equipment to a GMDSS radio station to ensure its proper performance, a means must be provided to ensure such continuous supply of information in the event of failure of the ship's main or emergency source of energy.",
      ],
      answer: 1
    },
    {
      question: "What is the meaning of \"Reserve Source of Energy\"?",
      options: [
        "The supply of electrical energy sufficient to operate the radio installations for the purpose of conducting distress and safety communications in the event of failure of the ship's main and emergency sources of electrical power.",
        "High caloric value items for lifeboat, per SOLAS regulations.",
        "Diesel fuel stored for the purpose of operating the powered survival craft for a period equal to or exceeding the U.S.C.G. and SOLAS requirements.",
        "None of these.",
      ],
      answer: 0
    },
    {
      question: "What is the term which refers to the supply of electrical energy required to supply radio installations on every ship for the purpose of conducting distress and safety radio-communications in the event of failure of the ship's main and emergency sources of electrical power?",
      options: [
        "Emergency power.",
        "Reserve source of energy.",
        "Ship's emergency diesel generator.",
        "Ship's standby generator.",
      ],
      answer: 1
    },
    {
      question: "What are the characteristics of the Reserve Source of Energy under GMDSS?",
      options: [
        "Supplies independent HF and MF installations at the same time.",
        "Cannot be independent of the propelling power of the ship.",
        "Must be incorporated into the ship's electrical system.",
        "Must be independent of the ship's electrical system when the RSE is needed to supply power to the GMDSS equipment.",
      ],
      answer: 3
    },
    {
      question: "Which of the following terms is defined as a back-up power source that provides power to radio installations for the purpose of conducting distress and safety communications when the vessel's main and emergency generators cannot?",
      options: [
        "Reserve Source of Energy (RSE).",
        "Emergency Diesel Generator (EDG).",
        "Reserve Source of Diesel Power (RSDP).",
        "Emergency Back-up Generator (EBG).",
      ],
      answer: 0
    },
    {
      question: "Under GMDSS, a compulsory VHF-DSC radiotelephone installation must be tested at what minimum intervals at sea?",
      options: [
        "Daily.",
        "Annually, by a representative of the FCC.",
        "At the annual SOLAS inspection.",
        "Monthly.",
      ],
      answer: 0
    },
    {
      question: "DSC controllers have a facility that allows the unit to be routinely tested without the associated transmitter being activated. The unit should be tested while underway at least?",
      options: [
        "Once a Day.",
        "Once a week.",
        "Twice a week.",
        "Once a month.",
      ],
      answer: 0
    },
    {
      question: "At sea, all required equipment (other than Survival Craft Equipment) must be proven operational by?",
      options: [
        "Daily testing.",
        "By either a) or c).",
        "Operational use of the equipment.",
        "Testing at least every 48 hours.",
      ],
      answer: 1
    },
    {
      question: "The best way to test the MF-HF NBDP system is?",
      options: [
        "Make a radiotelephone call to a Coast Station.",
        "Initiate an ARQ call to demonstrate that the transmitter and antenna are working.",
        "Initiate an FEC call to demonstrate that the transmitter and antenna are working.",
        "Initiate an ARQ call to a Coast Station and wait for the automatic exchange of answerbacks.",
      ],
      answer: 3
    },
    {
      question: "The best way to test the Inmarsat-C terminal is?",
      options: [
        "Send a message to a shore terminal and wait for confirmation.",
        "Compose and send a brief message to your own Inmarsat-C terminal.",
        "Send a message to another ship terminal.",
        "If the send light flashes, proper operation has been confirmed.",
      ],
      answer: 1
    },
    {
      question: "A vessel certified for service in Sea Area A3 is required to maintain a watch on?",
      options: [
        "VHF Channel 70.",
        "MF Frequency 2187.5.",
        "HF on 8414.5 kHz and one other HF DSC frequency.",
        "All of these.",
      ],
      answer: 3
    },
    {
      question: "A vessel certified for service in Sea Area A-2 is required to maintain watch on?",
      options: [
        "2174.5 kHz 2187.5 kHz",
        "2182.0 kHz 2738.0 kHz",
      ],
      answer: 0
    },
    {
      question: "What are the mandatory DSC watchkeeping bands/channels?",
      options: [
        "VHF Ch-70, 2 MHz MF DSC, 6 MHz DSC and 1 other HF DSC.",
        "2 MHz MF DSC, 8 MHz DSC, VHF Ch-16 and 1 other HF DSC.",
        "8 MHz HF DSC, 1 other HF DSC, 2 MHz MF DSC and VHF Ch-70.",
        "None of the above.",
      ],
      answer: 2
    },
    {
      question: "Proper watchkeeping includes the following:",
      options: [
        "All required frequencies are being monitored in the proper mode.",
        "After silencing an alarm all displays and/or printouts are read.",
        "Notifying the Master of any distress alerts.",
        "All of the above.",
      ],
      answer: 3
    },
    {
      question: "Which is true concerning a required watch on VHF Ch-16.",
      options: [
        "It is compulsory at all times while at sea until Feb 2005 unless the vessel is in a VTS system.",
        "When a vessel is in an A1 sea area and subject to the Bridge-to-Bridge act and in a VTS system, a watch is not required on Ch-16 provided the vessel monitors both Ch-13 and VTS channel.",
        "It is always compulsory in sea areas A2, A3 and A4.",
        "All of the above.",
      ],
      answer: 3
    },
    {
      question: "Which of the following statements are true?",
      options: [
        "GMDSS Radio Logs are required to contain entries pertaining to all incidents connected with the radio- communications service that appear to be of importance to the safety of life at sea.",
        "All distress communications must be entered in the GMDSS radio log.",
        "Both of the above.",
        "None of the above.",
      ],
      answer: 2
    },
    {
      question: "Where should the GMDSS radio log be kept on board ship?",
      options: [
        "Captain's office.",
        "Sea cabin.",
        "At the GMDSS operating position.",
        "Anywhere on board the vessel.",
      ],
      answer: 2
    },
    {
      question: "How long must the radio log be retained on board before sending it to the shoreside licensee?",
      options: [
        "At least one year after the last entry.",
        "At least two years after the last entry.",
        "At least 90 days after the last entry.",
        "At least 30 days after the last entry.",
      ],
      answer: 3
    },
    {
      question: "How long must the radio log be archived by the licensee?",
      options: [
        "Two years if there is no distress or urgent entries.",
        "Three years if there are any distress or urgent entries.",
        "Both of the above.",
        "None of the above.",
      ],
      answer: 2
    },
    {
      question: "Which of the following logkeeping statements is true?",
      options: [
        "Entries relating to pre-voyage, pre-departure and daily tests are required.",
        "Both a) and c).",
        "All distress, urgent and safety communications must be logged.",
        "Routine daily MF-HF and Inmarsat-C transmissions do not have to be logged.",
      ],
      answer: 1
    },
    {
      question: "A typical call sign for a large container ship under U. S. flag would be:",
      options: [
        "WBX1469 KBZY",
        "NADN KPH",
      ],
      answer: 0
    },
    {
      question: "What would the number 1090 indicate?",
      options: [
        "A ship MMSI number.",
        "A coast station MMSI number.",
        "A coast station selcall number.",
        "A ship station selcall number.",
      ],
      answer: 2
    },
    {
      question: "Which one of the following is a ship station selcall?",
      options: [
        "11243 1104",
        "1502352 0230364973",
      ],
      answer: 0
    },
    {
      question: "Which of the following is the call sign for a U.S.C.G. coast station?",
      options: [
        "NERK KPH",
        "NMN WCC",
      ],
      answer: 1
    },
    {
      question: "What type of station would be assigned the call sign WAB2174?",
      options: [
        "Container ship.",
        "Passenger ship.",
        "Tug boat.",
        "Bulk Tanker.",
      ],
      answer: 2
    },
    {
      question: "What number will a ship station use to identify itself using SITOR?",
      options: [
        "Four digit selcall.",
        "Five digit selcall or 9 digit MMSI number.",
        "7 digit Inmarsat-A I. D. number.",
        "9 digit Inmarsat-C I.D. number.",
      ],
      answer: 1
    },
    {
      question: "What is the MID?",
      options: [
        "Mobile Identification Number.",
        "Maritime Identification Digits.",
        "Marine Indemnity Directory.",
        "Mobile Interference Digits.",
      ],
      answer: 1
    },
    {
      question: "How many digits are in the MID (Maritime Identification Digits)?",
      options: [
        "7 9",
        "3 10",
      ],
      answer: 1
    },
  ],

  set16: [
    {
      question: "What does the MID (Maritime Identification Digits) signify?",
      options: [
        "Port of registry.",
        "Nationality.",
        "Gross tonnage.",
        "Passenger vessel.",
      ],
      answer: 1
    },
    {
      question: "Which of the following numbers indicates a U.S. flag ship station?",
      options: [
        "036627934 243537672",
        "338426791 003382315",
      ],
      answer: 1
    },
    {
      question: "Which of the following MMSI numbers indicates a U.S. flag ship station?",
      options: [
        "430326890 303236824",
        "033609991 257326819",
      ],
      answer: 0
    },
    {
      question: "Which of the following numbers indicates a ship station MMSI?",
      options: [
        "003372694 623944326",
        "030356328 3384672",
      ],
      answer: 0
    },
    {
      question: "A DSC call is received from a station with a MMSI number of 003669991. Which of the following types of stations is it from?",
      options: [
        "A vessel operating in Sea Area A3.",
        "A group ship station.",
        "A U.S. coast station.",
        "An Intercoastal vessel.",
      ],
      answer: 2
    },
    {
      question: "A valid MMSI number for a DSC call to a specific group of vessels is:",
      options: [
        "003664523 030327931",
        "338462941 003036483",
      ],
      answer: 0
    },
    {
      question: "MMSI 030346239 indicates what?",
      options: [
        "A group ship MMSI issued in Hawaii.",
        "Coast station on Atlantic Coast.",
        "A group ship MMSI issued in Alaska.",
        "Ship station registered from San Francisco.",
      ],
      answer: 2
    },
    {
      question: "Which of the following statements concerning MMSI is true?",
      options: [
        "Coast station MMSI numbers have 9 digits starting with 4.",
        "All MMSI numbers are 9 digits and contain an MID.",
        "Ship station MMSI numbers can be 7 digits or 9 digits depending on the Inmarsat terminal.",
        "Group MMSI numbers must begin with 2 zeros.",
      ],
      answer: 1
    },
    {
      question: "Which of the following would indicate an Inmarsat-A terminal?",
      options: [
        "A 9 digit number beginning with the MID.",
        "A 7 digit number.",
        "A 9 digit number always starting with 3.",
        "A 9 digit number always starting with 4.",
      ],
      answer: 1
    },
    {
      question: "Which of the following would indicate an Inmarsat-B terminal?",
      options: [
        "003668202 436682433",
        "325468263 1500270",
      ],
      answer: 1
    },
    {
      question: "You receive a telex with the senders I.D. of 433863491. What type of terminal sent this message to your vessel?",
      options: [
        "Inmarsat-C.",
        "Land telex terminal.",
        "Inmarsat-B.",
        "Inmarsat-A.",
      ],
      answer: 0
    },
    {
      question: "You receive a telex with the senders I.D. of 1502340. What type of terminal sent this message to your vessel?",
      options: [
        "Inmarsat-C.",
        "Land telex terminal.",
        "Inmarsat-B.",
        "Inmarsat-A.",
      ],
      answer: 3
    },
    {
      question: "Which of the following would indicate an Inmarsat-C terminal?",
      options: [
        "003668202 436682433",
        "325468263 1500270",
      ],
      answer: 0
    },
    {
      question: "What is first sent by all MF-HF DSC transmissions?",
      options: [
        "Distress alert character.",
        "A string of dots to stop the scan receiver.",
        "Priority of transmission character.",
        "Ship's position.",
      ],
      answer: 1
    },
    {
      question: "VHF-DSC transmissions are encoded and transmitted in what emission mode?",
      options: [
        "H3E F1B/J2B",
        "A3E None of the above.",
      ],
      answer: 1
    },
    {
      question: "When sending a DSC call:",
      options: [
        "Vessel's position will automatically be sent.",
        "Vessel's position will automatically be sent if the vessel is sending a alert.",
        "Vessel's MMSI will indicate its ocean region.",
        "None of these.",
      ],
      answer: 1
    },
    {
      question: "DSC transmissions are encoded:",
      options: [
        "Using J3E mode for proper follow-on communications.",
        "Using a special digital format.",
        "Using F1B mode to ensure proper reception.",
        "Using J2B mode for correct transmission.",
      ],
      answer: 1
    },
    {
      question: "DSC transmissions are received:",
      options: [
        "Using voice or telex modes as appropriate.",
        "Using J3E or H3E modes as appropriate.",
        "Using digital decoding by the DSC controller.",
        "Using F1B and/or J2B decoding by the transceiver.",
      ],
      answer: 2
    },
    {
      question: "Properly formatted DSC transmissions can request which of the following emissions for follow on communications?",
      options: [
        "J3E/H3E telex emissions.",
        "F1B/J2B voice emissions.",
        "J3E/H3E voice emissions.",
        "None of the above.",
      ],
      answer: 2
    },
    {
      question: "Which of the following statements concerning DSC equipment is true?",
      options: [
        "The GMDSS Radio Operator is responsible for properly selecting HF DSC guard channels.",
        "All equipment must be type accepted.",
        "The vessel's navigational position must be updated, either automatically or manually, no less often that every four (4) hours.",
        "All of the above.",
      ],
      answer: 3
    },
    {
      question: "What is the action that a GMDSS Radio Operator should take when a DSC distress alert is received?",
      options: [
        "No action is necessary, as the DSC control unit will automatically switch to the NBDP follow-on communications frequency.",
        "The Operator should immediately set continuous watch on the radiotelephone frequency that is associated with frequency band on which the distress alert was received.",
        "The Operator should immediately set continuous watch on VHF channel 70.",
        "The Operator should immediately set continuous watch on the NBDP frequency that is associated with frequency band on which the distress alert was received.",
      ],
      answer: 1
    },
    {
      question: "What does the DSC control unit do if the GMDSS Radio Operator fails to insert updated information when initiating a DSC distress alert?",
      options: [
        "It will abort the transmission and set off an audible alarm that must be manually reset.",
        "It will initiate the DSC distress alert but, as no information will be transmitted, rescue personnel will not be able to identify the vessel, its position, or its situation.",
        "It will initiate the DSC distress alert, and default information will automatically be transmitted.",
        "It will initiate the DSC distress alert, but any station receiving it will have to establish contact with the distressed vessel to determine its identity, position, and situation.",
      ],
      answer: 2
    },
    {
      question: "A DSC Distress alert:",
      options: [
        "Must always be sent on VHF Ch-70.",
        "Must always be sent on MF 2 MHz plus one other HF DSC frequency.",
        "Will always be sent on one or more of the DSC distress frequencies.",
        "Must always be sent on VHF Ch-70, then 2 MHz MF then 8 MHz HF.",
      ],
      answer: 2
    },
    {
      question: "In all cases, the transmit frequency of a MF/HF console DSC distress alert:",
      options: [
        "Will go out first on 2187.5 kHz.",
        "Will go out on 8 MHz and 2 MHz and one other DSC distress frequency.",
        "It depends upon operator DSC Call set up entries.",
        "None of the above.",
      ],
      answer: 2
    },
    {
      question: "DSC relays of Distress Alerts by vessels:",
      options: [
        "Should be done for all Distress Alerts.",
        "Should be transmitted to ships involved in Distress traffic.",
        "Should be avoided, however after repeated alerts, should be relayed to a Coast Station nearest the distress incident.",
        "Are the best means to provide for a relay of Distress communications.",
      ],
      answer: 2
    },
    {
      question: "Which of the following is not a DSC watch frequency?",
      options: [
        "2187.5 kHz.",
        "6312 kHz.",
        "2182 kHz.",
        "12577 kHz.",
      ],
      answer: 2
    },
    {
      question: "Which of the following channels and modes should be used when initiating a distress alert transmission?",
      options: [
        "Ch-6 DSC.",
        "Ch-6 Radiotelephony.",
        "Ch-13 Radiotelephony and Ch-16 DSC.",
        "Ch-70 DSC.",
      ],
      answer: 3
    },
    {
      question: "How many total frequencies are available for DSC distress alerting?",
      options: [
        "One (1).",
        "Two (2).",
        "Five (5).",
        "Seven (7).",
      ],
      answer: 3
    },
    {
      question: "Which of the following watches must a compulsory vessel maintain when sailing in Sea Area A1?",
      options: [
        "A continuous DSC watch on 8414.5 kHz plus one other HF DSC frequency.",
        "A continuous DSC watch on 2187.5 kHz.",
        "A continuous DSC watch on Ch-16.",
        "A continuous DSC watch on Ch-70.",
      ],
      answer: 3
    },
    {
      question: "Which of the following are the MF/HF DSC Distress watch frequencies",
      options: [
        "2177.5, 4210.0, 6314.0, 8416.5 12579.0, 16806.5",
        "2182.0, 4125.0, 6215.0, 8291.0, 12290.0, 16420.0",
        "2187.5, 4207.5, 6312.0, 8414.5, 12577.0, 16804.5",
        "2174.5, 4177.5, 6268.0, 8376.5, 12520.0, 16695.0",
      ],
      answer: 2
    },
  ],

  set17: [
    {
      question: "How many HF DSC distress watch channels must be guarded by a compulsory vessel underway.",
      options: [
        "1 2",
        "3 4",
      ],
      answer: 0
    },
    {
      question: "What is usually the first step for a GMDSS Radio Operator to take when initiating a distress priority message via Inmarsat?",
      options: [
        "By dialing the correct code on the telephone remote unit.",
        "By pressing a or",
        "on the equipment.",
        "By contacting the CES operator and announcing a distress condition is in existence.",
        "By contacting the CES operator using the radiotelephone distress procedure",
        "… etc.",
      ],
      answer: 1
    },
    {
      question: "Which of the following statements is true regarding distress alerting under GMDSS?",
      options: [
        "The distress alert must identify the station in distress and its position and may additionally include information regarding the nature of the distress, the type of assistance required, the course and speed of the mobile unit and the time this information was recorded.",
        "Ship to shore distress alerts are used to alert other ships in port of navigational hazards.",
        "Ship-to-ship distress alerts are used to alert other ships in the vicinity of navigational hazards and bad weather.",
        "The vessel nearest to the emergency must notify the Coast Guard before leaving the vicinity.",
      ],
      answer: 0
    },
    {
      question: "If a GMDSS Radio Operator initiates a DSC distress transmission but does not insert a message, what happens?",
      options: [
        "The transmission is aborted and an alarm sounds to indicate this data must be provided by the operator.",
        "The transmission is not initiated and is indicated on the display readout.",
        "The transmission will be made with information provided automatically.",
        "The receiving station will poll the DSC unit of the vessel in distress to download the necessary information.",
      ],
      answer: 1
    },
    {
      question: "Repetition of a DSC Distress call is normally automatic if not acknowledged after a delay of:",
      options: [
        "1 - 2 minutes.",
        "2- 5 minutes.",
        "3.5 - 4.5 minutes.",
        "Not at all.",
      ],
      answer: 2
    },
    {
      question: "A MF/HF DSC Distress call:",
      options: [
        "Will send the minimal necessary information using the or",
        "Contains all the information normally of interest in on-scene Distress communications.",
        "Will send a more detailed Distress format if time permits and operator data entries are correctly performed.",
        "Both a) & c) are true.",
      ],
      answer: 1
    },
    {
      question: "Which statement regarding an MF/HF DSC Distress call is true:",
      options: [
        "Follow on communications should be presumed to take place on the telex frequency associated with the specific DSC frequency used.",
        "Follow on communications should be presumed to take place on the voice frequency associated with the specific DSC frequency used.",
        "An alternate emission and frequency may be specified for follow-up communications by the vessel originating the Distress Alert.",
        "Both b) and c) are true.",
      ],
      answer: 3
    },
    {
      question: "You send a VHF-DSC distress alert. What channel do you use for the follow-on voice transmission?",
      options: [
        "Ch-12 Ch-70",
        "Ch-13 Ch-16",
      ],
      answer: 1
    },
    {
      question: "You send a MF-DSC distress alert. What frequency do you use for the follow-on voice transmission?",
      options: [
        "2760 kHz 2187.5 kHz",
        "2182 kHz 2174.5 kHz",
      ],
      answer: 1
    },
    {
      question: "You send a HF-DSC alert on 8414.5 kHz. What frequency do you use for the voice transmission?",
      options: [
        "8376.5 kHz 8291.0 kHz",
        "8401.5 kHz 8201.0 kHz",
      ],
      answer: 0
    },
    {
      question: "What is the proper format for a distress follow on voice transmission? (3x is three times),",
      options: [
        "All Ships 3x this is Ship's Name/Call Sign 3x Mayday Position.",
        "Mayday 3x this is Ship's Name/Call Sign 3x Distress category.",
        "Both of the above.",
        "None of the above.",
      ],
      answer: 3
    },
    {
      question: "What information should be included in a distress follow on voice transmission?",
      options: [
        "Ship's Name and Call Sign.",
        "Ship's position.",
        "Ship's MMSI number.",
        "All of the above.",
      ],
      answer: 3
    },
    {
      question: "Which statement is true regarding the receipt and acknowledgement of distress alerts by ship stations and ship earth stations (SES)?",
      options: [
        "A ship or ship earth station that receives a distress alert must, as soon as possible, inform the Master or person responsible for the ship of the contents of the distress alert.",
        "Ship stations in receipt of distress alert should not defer acknowledgement for a short interval, so that receipt may be acknowledged by the coast station.",
        "Ship stations operating in areas where reliable communications with a coast station are not practicable, that receive a distress alert from a vessel in their vicinity, must either acknowledge receipt of and inform the Rescue Coordination Center or, if received by HF, wait for 3 minutes for a coast station acknowledgement before performing any relay of the distress alert.",
        "Alerts concerning navigational hazards are second only to safety traffic.",
      ],
      answer: 0
    },
    {
      question: "What does the acronym 'EOS\" indicate in the received message?",
      options: [
        "Error Of Sequence.",
        "End Of Sequence.",
        "End Of Signals.",
        "Equal Operating Signals.",
      ],
      answer: 1
    },
    {
      question: "What is the proper procedure to be followed upon receipt of a distress alert transmitted by use of Digital Selective Calling techniques?",
      options: [
        "Set watch on the DSC alerting frequency in the band of frequencies the alert was received.",
        "Set watch on the radiotelephone distress and safety frequency associated with the distress and safety calling frequency on which the distress alert was received.",
        "Set a continuous watch on VHF-FM Channel 13, 16 and DSC on Channel 70.",
        "Ship stations equipped with narrow-band direct-printing equipment should respond to the distress alert as soon as practicable by this means.",
      ],
      answer: 1
    },
    {
      question: "What does the acronym \"ECC\" indicate in the received message?",
      options: [
        "Every Cipher Counted.",
        "Error Cannot Confirm.",
        "Error Check Character.",
        "Even Characters Counted.",
      ],
      answer: 2
    },
    {
      question: "What action should be taken on receipt of a distress alert?",
      options: [
        "Read the display screen and/or printout.",
        "Silence the alarm.",
        "Listen for any follow on voice/telex transmission on the appropriate frequency.",
        "All of the above.",
      ],
      answer: 3
    },
    {
      question: "What action should be taken if a distress alert is received on the 12 MHz DSC frequency?",
      options: [
        "Use DSC to acknowledge the alert using the 12 MHz DSC frequency.",
        "Set the receiver to 12290.0 kHz J3E.",
        "Do nothing. Ship is too far away to render assistance.",
        "Set the receiver to 12520.0 kHz F1B.",
      ],
      answer: 1
    },
    {
      question: "Your ship received a distress relay from the U.S. Coast Guard on DSC freq. 2187.5 kHz. You would acknowledge by radiotelephony on what frequency?",
      options: [
        "4207.5 kHz 8290.0 kHz",
        "2182.0 kHz 6312.0 kHz",
      ],
      answer: 1
    },
    {
      question: "Your ship received a Distress relay on DSC VHF channel 70, on what channel would you reply?",
      options: [
        "Ch-70 Ch-06",
        "Ch-13 Ch-16",
      ],
      answer: 1
    },
    {
      question: "Under what conditions would you relay a DSC distress alert?",
      options: [
        "If the mobile unit in distress is incapable of further Distress Alert communications.",
        "If no Coast Station/Mobile Unit acknowledgement is observed.",
        "Answers a) and b) are both possible.",
        "You should never relay such an alert - the Coast Station & RCC will do that.",
      ],
      answer: 2
    },
    {
      question: "The relay of DSC Distress Alerts:",
      options: [
        "Has completely overburdened the GMDSS system with improperly formatted or inappropriately relayed DSC calls.",
        "Was originally an intended function of the GMDSS system.",
        "Is no longer the preferred method for passing Distress message traffic to an RCC or Coast Station.",
        "All of the above",
      ],
      answer: 3
    },
    {
      question: "Transmission of a distress alert by a station not in itself in distress should occur:",
      options: [
        "When the mobile unit actually in distress is not itself in a position to transmit the distress alert.",
        "When the Master or responsible person on the mobile unit not in distress so decides.",
        "When the responsible person at the Coast Station determines further help is necessary.",
        "In some cases, all of the preceding situations may justify a Distress Alert relay.",
      ],
      answer: 3
    },
    {
      question: "Relays of Distress Alerts using DSC may still be done. However, it is now recommended that such relays be done:",
      options: [
        "Only by Inmarsat-C telex with Distress Priority.",
        "Only by Inmarsat-A voice or telex with Distress priority.",
        "Preferably by MF/HF voice or telex directly to the RCC.",
        "By any of the above methods which will effectively provide Distress communications to an RCC or Coast station without further activations of other Mobile Units' DSC controllers.",
      ],
      answer: 3
    },
    {
      question: "What action should you take after sending a false distress alert on VHF?",
      options: [
        "Send a DSC cancellation message on Ch-70.",
        "Make a voice announcement to cancel the alert on Ch-16.",
        "Make a voice announcement to cancel the alert on Ch-13.",
        "Make a voice announcement to cancel the alert on Ch-22A.",
      ],
      answer: 1
    },
    {
      question: "What action should you take after sending a false distress alert on MF?",
      options: [
        "Make a voice announcement to cancel the alert on 2187.5 kHz.",
        "Make a voice announcement to cancel the alert on 2174.5 kHz.",
        "Make a voice announcement to cancel the alert on 2182.0 kHz.",
        "Send another DSC alert and follow on with voice on 2182.0 kHz.",
      ],
      answer: 2
    },
    {
      question: "What action should you take after sending a false distress alert on 8 MHz?",
      options: [
        "Make an call on all 5 H.F. telex channels canceling the alert.",
        "Make an call on 8291.0 kHz canceling the alert.",
        "Make a call on 8414.5 kHz canceling the alert.",
        "Make an call on 8614.0 kHz canceling the alert.",
      ],
      answer: 0
    },
    {
      question: "What action should you take after sending a false distress alert on 12577.0 kHz?",
      options: [
        "No action is necessary.",
        "Make an call on all 5 H.F. telex frequencies canceling the alert.",
        "Make an call on the associated 12 MHz J3E frequency canceling the alert.",
        "Send a message to the nearest RCC via Inmarsat canceling the alert.",
      ],
      answer: 1
    },
    {
      question: "What action should you take after sending a false distress alert on Inmarsat-C?",
      options: [
        "Press the then press the",
        "key.",
        "Select menu and send a cancel message via the CES used for the distress alert.",
        "Both of the above.",
        "None of the above.",
      ],
      answer: 0
    },
    {
      question: "What is the fundamental purpose for imposing radio silence?",
      options: [
        "To ensure that interference to proprietary communications is minimized.",
        "To ensure that only voice communications can be effected on the distress frequency or channel.",
        "To ensure that a distressed vessel will have a twice each hour for transmitting routine messages.",
        "To ensure that interference on a particular frequency or channel for communications concerning emergency traffic is minimized.",
      ],
      answer: 2
    },
  ],

  set18: [
    {
      question: "When can routine communications be resumed when radio silence has been imposed?",
      options: [
        "After determining that the frequency or channel appears to be no longer in use.",
        "After determining that geographic distance from the distress situation will prohibit any other signal from interfering with emergency communications.",
        "Routine communications can resume after the Rescue Coordination Center transmits a message on the frequency or channel being used for emergency communications stating that such traffic has concluded.",
        "If, in the master's opinion, communications on that frequency will interfere with emergency communications.",
      ],
      answer: 2
    },
    {
      question: "What is meant by the term \"radio silence\"?",
      options: [
        "Stations not directly involved with the on-going distress communications may not transmit on the distress frequency or channel.",
        "Stations remaining off the air to safeguard proprietary information.",
        "Two three-minute silent periods, at 15 and 45 minutes after the hour, that provide a transmitting for distressed vessels to transmit distress alerts using J3E.",
        "Communications on a distress frequency or channel is banned for 24 hours following the cessation of the distress traffic.",
      ],
      answer: 0
    },
    {
      question: "How is \"radio silence\" imposed?",
      options: [
        "By the On Scene Coordinator (OSC).",
        "By the Coast Earth Station (CES) controlling the distress communications on that frequency.",
        "By the nearest Public Correspondence Coast Station.",
        "By the vessel first responding to the distress call.",
      ],
      answer: 0
    },
    {
      question: "How are normal working conditions restored on a narrow band direct printing (NBDP) frequency on which radio silence had been imposed?",
      options: [
        "The RCC that imposed the radio silence must transmit a NBDP message stating",
        "The CES that imposed the radio silence must transmit a NBDP message stating",
        "The Public Correspondence Station (PCS) that imposed the radio silence must transmit a narrow band direct printing message on the distress frequency stating",
        "The High Seas Service (HSS) that imposed the radio silence must transmit a narrow band direct printing message on the distress frequency stating",
      ],
      answer: 0
    },
    {
      question: "How are normal working conditions restored after radio silence has been imposed?",
      options: [
        "The Rescue Coordination Center (RCC) that imposed the radio silence must transmit a voice message on the distress frequency stating",
        "The Coast Earth Station (CES) that imposed the radio silence must transmit a voice message on the distress frequency stating",
        "The Public Correspondence Station (PCS) that imposed the radio silence must transmit a voice message on the distress frequency stating",
        "None of the above.",
      ],
      answer: 0
    },
    {
      question: "The Radiotelephone Urgency signal is:",
      options: [
        "Mayday Pan Pan",
        "Securite Seelonce Feenee",
      ],
      answer: 0
    },
    {
      question: "The Urgent Priority should be used for:",
      options: [
        "Messages concerning the Safety of Life At Sea (SOLAS).",
        "Messages detailing important navigational warnings.",
        "Messages containing information concerning the safety of a mobile unit or person.",
        "Messages concerning On-scene communications .",
      ],
      answer: 2
    },
    {
      question: "If the Watch Officer hears \"PAN PAN\" spoken 3 times it means:",
      options: [
        "A navigation or important meteorological warning should follow.",
        "The station is preparing to transmit an URGENT message possibly concerning the safety of a mobile unit or person.",
        "A Mobile unit is in need of immediate assistance.",
        "None of the above.",
      ],
      answer: 1
    },
    {
      question: "When the GMDSS Radio Operator on watch hears \"SECURITE\" spoken three times, he can expect to receive the following information:",
      options: [
        "Message concerning the Safety of navigation or important meteorological warnings.",
        "Safety of vessel or person is in jeopardy.",
        "Vessel in need of immediate assistance.",
        "Coast Station Traffic list.",
      ],
      answer: 0
    },
    {
      question: "Which of the following situations would normally use the Voice designation \"Securite\"?",
      options: [
        "Messages concerning the Safety of Life At Sea (SOLAS).",
        "Messages detailing important navigational warnings.",
        "Messages containing information concerning the safety of a mobile unit or person.",
        "Messages concerning On-scene communications .",
      ],
      answer: 1
    },
    {
      question: "Which of the following situations would normally use the Safety priority?",
      options: [
        "Loss of 5 containers with lashing gear over the side.",
        "Treatment of crewmember breaking a leg in a cargo hold.",
        "A fire in the generator flat/spaces.",
        "Answers a) and b) are both possible.",
      ],
      answer: 0
    },
    {
      question: "Which of the following frequencies and modes is allocated for distress alerting in GMDSS?",
      options: [
        "406 MHz via EPIRB.",
        "1626.5-1645.5 MHz via Inmarsat.",
        "Channel 70 DSC plus six (6) MF/HF DSC frequencies.",
        "All of the above.",
      ],
      answer: 3
    },
    {
      question: "Which of the following frequencies is normally used for distress and safety communications?",
      options: [
        "490 kHz 518 kHz",
        "4209.5 kHz 2174.5 kHz",
      ],
      answer: 1
    },
    {
      question: "Which channel is designated for GMDSS Digital Selective Calling?",
      options: [
        "Ch-06 Ch-13",
        "Ch-16 Ch-70",
      ],
      answer: 1
    },
    {
      question: "How many MF frequencies are available for DSC distress related calls?",
      options: [
        "One Two",
        "Four Five",
      ],
      answer: 0
    },
    {
      question: "How many HF frequencies are available for DSC distress related calls?",
      options: [
        "One Two",
        "Four Five",
      ],
      answer: 1
    },
    {
      question: "How many frequencies are available under GMDSS for DSC distress-related calls?",
      options: [
        "Two Four",
        "Five Seven",
      ],
      answer: 1
    },
    {
      question: "Which of the following steps should be taken, if possible, when the vessel must be abandoned because of a distress situation?",
      options: [
        "Alert the U.S. Coast Guard by using the survival craft's portable INMARSAT unit.",
        "Program the SART and EPIRB to transmit the vessel's location and situation.",
        "Place the SART and EPIRB in the position and secure them to the survival craft.",
        "No additional steps are needed as the SART and EPIRB will both automatically float free and operate properly.",
      ],
      answer: 2
    },
    {
      question: "Which action is the most appropriate action for a GMDSS radio Operator to take in a distress situation where immediate help is needed, but the vessel is not sinking nor needs to be abandoned?",
      options: [
        "Switch off EPIRB and SART manually.",
        "Transmit distress call by HF/MF/VHF DSC or Inmarsat.",
        "Notify the RCC (Rescue Coordination Center) through VHF FM on channel 13.",
        "Transmit distress call by activating the radiotelegraph automatic alarm signal.",
      ],
      answer: 1
    },
    {
      question: "DSC is used primarily to:",
      options: [
        "Receive weather warnings, navigational notices and other marine safety information.",
        "Provide routine communications with the ship owner.",
        "Transmit and receive distress, urgent and safety alerts to and from other ships and shore stations via radio.",
        "Report ship's position to search-and-rescue authorities via satellite.",
      ],
      answer: 2
    },
    {
      question: "GMDSS vessels equipped for A2, A3 or A4 must maintain a continuous DSC watch on 2187.5 kHz.",
      options: [
        "Only in areas beyond Inmarsat coverage.",
        "Only outside of areas covered by VHF-DSC.",
        "When directed to do so by a cognizant rescue authority.",
        "At all times when underway.",
      ],
      answer: 3
    },
    {
      question: "Which statement is true regarding distress communications under GMDSS?",
      options: [
        "Distress communications by NBDP should be in the ARQ mode when in communications with the Coast Guard or other coast stations.",
        "The Rescue Coordination Center (RCC) is responsible for controlling a search and rescue operation and will also coordinate the distress traffic relating to the incident.",
        "The Rescue Coordination Center may appoint another station to coordinate distress traffic relating to the incident.",
        "All of these.",
      ],
      answer: 3
    },
    {
      question: "When operating in coastal waters (sea area A1), a GMDSS-equipped vessel must:",
      options: [
        "Maintain a continuous DSC watch on 8514.5 kHz.",
        "Maintain a continuous aural watch on 2182 kHz.",
        "Maintain a continuous DSC watch on VHF channel 16.",
        "Maintain a continuous DSC watch on VHF channel 70.",
      ],
      answer: 3
    },
    {
      question: "How can a SART's effective range be maximized?",
      options: [
        "The SART should be placed in water immediately upon activation.",
        "The SART should be held as high as possible.",
        "Switch the SART into the power position.",
        "If possible, the SART should be mounted horizontally so that its signal matches that of the searching radar signal.",
      ],
      answer: 1
    },
    {
      question: "In a lifeboat or liferaft, what is a method of maximizing the effectiveness of an SART?",
      options: [
        "Place the SART into the sea as soon as possible to begin transmitting.",
        "Hold or mount the unit as high as possible.",
        "Extend the length of the transmitting antenna.",
        "Replace the internal battery with the AC power adapter.",
      ],
      answer: 1
    },
    {
      question: "At what point does a SART begin transmitting?",
      options: [
        "It immediately begins radiating when placed in the position.",
        "It must be manually activated.",
        "If it has been placed in the position, it will respond when it has been interrogated by a 9-GHz radar signal.",
        "If it has been placed in the position, it will begin transmitting immediately upon detecting that it is in water.",
      ],
      answer: 1
    },
    {
      question: "How does the searching vessel's radar interrogate a survival craft SART?",
      options: [
        "Activate the IFF interrogation system.",
        "The SART responds automatically when it detects the search craft or other vessels' X-Band radar signal.",
        "Maintain watch on VHF-FM Ch-70 for the SART's unique identifier.",
        "The SART responds automatically when it detects the search craft or other vessel's 3.5 GHz radar signal.",
      ],
      answer: 1
    },
    {
      question: "What does a SART signal sound or look like?",
      options: [
        "It transmits and the vessel's name and position in slow speed Morse Code.",
        "It will appear on a radar unit's PPI as a line of dots radiating outward with the innermost dot indicating the SART's position.",
        "It will appear on a radar unit's PPI as a line of dots radiating outward with the outermost dot indicating the SART's position.",
        "None of the above.",
      ],
      answer: 0
    },
    {
      question: "How can rescue personnel detect that a SART is transmitting in the immediate vicinity?",
      options: [
        "The SART's dots on the PPI will begin arcing and eventually become concentric circles.",
        "The DSC unit will react to the SART's signal and respond with the two-tone auto alarm.",
        "The SART can provide an approximate location to within a two nautical mile radius, per IMO standards.",
        "The SART signal appears as a target which comes and goes; the effect of heavy swells on a SART.",
      ],
      answer: 0
    },
    {
      question: "What signal is detected as originating from an SART?",
      options: [
        "The Morse code distress series S-O-S repeated three times followed by DE and the vessel's call sign.",
        "A line of dots on a radar screen outward from the SART's position along its line of bearing.",
        "A line of dots on a radar screen inward from the SART's position to its own ship along its line of bearing.",
        "None of these.",
      ],
      answer: 1
    },
  ],

  set19: [
    {
      question: "How can vessel personnel detect the operation of a SART in its vicinity?",
      options: [
        "A unique radar signal consisting of a 12 dots radiating outward from a SART's position along its line of bearing.",
        "A unique two-tone signal heard on VHF-FM Ch-70.",
        "A unique two-tone alarm signal heard upon the automatic un-muting of the 2182 kHz radiotelephone automatic watch receiver.",
        "The SART signal appears as a target which comes and goes; the effect of heavy swells on an SART.",
      ],
      answer: 0
    },
    {
      question: "How should the signal from a Search And Rescue Radar Transponder appear on a radar display?",
      options: [
        "A series of dashes.",
        "A series of spirals all originating from the range and bearing of the SART.",
        "A series of 12 equally spaced dots.",
        "A series of twenty dashes.",
      ],
      answer: 2
    },
    {
      question: "In which frequency band does a search and rescue transponder operate?",
      options: [
        "3 GHz 9 GHz",
        "S-band 406 MHz",
      ],
      answer: 0
    },
    {
      question: "Which of the following would most likely prevent a SART's signal from being detected?",
      options: [
        "Signal absorption by the ionosphere.",
        "Heavy sea swells.",
        "The rescue personnel were monitoring the 10-CM radar.",
        "The rescue personnel were monitoring the 3-CM radar.",
      ],
      answer: 2
    },
    {
      question: "Which statement is NOT true regarding the SART?",
      options: [
        "Responds to interrogations by a vessel's X-Band radar.",
        "Transmits on the 9 GHz band reserved for navigational radar.",
        "Operates in conjunction with a vessel's S-Band radar.",
        "Transmits a distinctive code for easy recognition.",
      ],
      answer: 2
    },
    {
      question: "Which statement is true regarding the SART required for GMDSS compliance?",
      options: [
        "This is a performance monitor attached to at least one X-band navigational radar system.",
        "This is a 9 GHz transponder capable of being received by vessel's X-band navigational radar system.",
        "This is a 9 GHz transponder capable of being received by another vessel's S-band navigational radar system.",
        "This is a performance monitor attached to at least one X-band navigational radar system.",
      ],
      answer: 1
    },
    {
      question: "A SART's signal cannot be detected:",
      options: [
        "In poor visibility or at night.",
        "In heavy seas.",
        "By a search vessel's 10 cm Radar.",
        "By a search vessel's 3 cm Radar.",
      ],
      answer: 2
    },
    {
      question: "Which of the following statements concerning testing and maintenance of SARTs is true?",
      options: [
        "An at-sea GMDSS maintainer is not able to test a SART as it is hermetically sealed.",
        "Testing a SART should be performed only in controlled environment as a test signal may be misinterpreted as a genuine distress situation.",
        "A SART's battery must be replaced within ninety (90) days after the expiration date imprinted on the unit.",
        "All of the above.",
      ],
      answer: 1
    },
    {
      question: "Why is it important to limit the duration of testing a SART?",
      options: [
        "Excessive testing causes on the vessel's radar PPI.",
        "Testing a SART should be performed only in controlled environment as a test signal may be misinterpreted as a genuine distress situation.",
        "To prevent overheating, a SART requires sufficient ventilation that is significantly reduced when the SART is being tested.",
        "If another SART is testing at the same time, the two signals will cause damage to the unit that transmitted them.",
      ],
      answer: 0
    },
    {
      question: "What statement is true regarding tests and maintenance that could be provided for the SART?",
      options: [
        "To fully verify operation within manufacturer's specifications would require measuring equipment to generate 9 GHz signals; generally beyond the scope of on-board maintenance.",
        "Extreme care should be exercise because testing of the SART may be received by other vessels and may be interpreted as a distress condition or provide interfere with other vessels' safe navigation.",
        "Battery should be replaced with a new one before the manufacturer's expiration date shown on the SART.",
        "All of these.",
      ],
      answer: 3
    },
    {
      question: "Why should functional testing of an SART be minimized?",
      options: [
        "Potential interference with safe navigation.",
        "Minimize power consumption of the battery.",
        "Possibility of misinterpretation by other vessels as a distress situation.",
        "All of these.",
      ],
      answer: 3
    },
    {
      question: "Which is not a valid maintenance and testing function for an SART?",
      options: [
        "Operational test with several vessels to determine effective transmitting range.",
        "Inspection of container for apparent damage.",
        "Inspect battery expiration date and the lanyard condition.",
        "Brief operational test utilizing own ship's radar.",
      ],
      answer: 0
    },
    {
      question: "The SART is required to have sufficient battery capacity to operate in the stand-by mode for what period of time?",
      options: [
        "Eight hours.",
        "Three days.",
        "Four days.",
        "Forty-eight hours.",
      ],
      answer: 2
    },
    {
      question: "Which is a function of a satellite under COSPAS-SARSAT using satellite EPIRBs?",
      options: [
        "Vessel information recovered from the digital encoded message provided by the satellite EPIRB.",
        "Doppler shift of EPIRB signal is measured.",
        "Information received from EPIRBs are time-tagged and transmitted to any Local User Terminal in the satellite's view.",
        "All of these.",
      ],
      answer: 3
    },
    {
      question: "Which of the following satellite systems is of particular importance to search and rescue missions under GMDSS?",
      options: [
        "COSPAS/SARSAT.",
        "AMSAT.",
        "NASA/Arienne.",
        "COMSAT.",
      ],
      answer: 0
    },
    {
      question: "Which of the following statements concerning COSPAS-SARSAT is true?",
      options: [
        "EPIRBs are units that are used as alerting devices.",
        "These are satellites in a low-earth polar orbit that detect EPIRB beacons on 406 MHz and relay the information to an earth-side Local User Terminal (LUT).",
        "The Doppler frequency measurement concept is used to determine the EPIRB's location.",
        "All of the above.",
      ],
      answer: 3
    },
    {
      question: "Which of the following statements concerning COSPAS-SARSAT is false?",
      options: [
        "EPIRBs are used primarily for distress alerting.",
        "These satellites are looking specifically for EPIRB signals on 406 MHz.",
        "These satellites use Doppler shift measurement to determine the location of the beacons.",
        "After initiating a call request and selecting the CES, these satellites may be used for commercial messages.",
      ],
      answer: 3
    },
    {
      question: "A distress signal transmitted from which EPIRB is relayed by an INMARSAT satellite.",
      options: [
        "Class A EPIRBs.",
        "Class B EPIRBs.",
        "L-band EPIRBs on the designated frequency.",
        "406 MHz EPIRBs broadcast to all vessels for relay to a CES.",
      ],
      answer: 2
    },
    {
      question: "Which of the following statements concerning satellite EPIRBs is true?",
      options: [
        "Once activated, these EPIRBs transmit a signal for use in identifying the vessel and for determining the position of the beacon.",
        "The coded signal identifies the nature of the distress situation.",
        "The coded signal only identifies the vessel's name and port of registry.",
        "If the GMDSS Radio Operator does not program the EPIRB, it will transmit default information such as the follow-on communications frequency and mode.",
      ],
      answer: 0
    },
    {
      question: "What feature(s) may be found on certain satellite EPIRB units?",
      options: [
        "Strobe light.",
        "Emergency transmission on 406 MHz.",
        "Float-free release bracket.",
        "All of these.",
      ],
      answer: 3
    },
    {
      question: "What feature is not found on 406 MHz satellite EPIRB units?",
      options: [
        "121.5 MHz emergency homing transmitter.",
        "Aural locator signal.",
        "Emergency transmission on 406.025 MHz.",
        "Float-free release bracket.",
      ],
      answer: 1
    },
    {
      question: "What statement is true regarding 406 MHz EPIRB transmissions?",
      options: [
        "Allows immediate voice communications with the RCC.",
        "Coding permits the SAR authorities to know if manually or automatically activated.",
        "Transmits a unique hexadecimal identification number.",
        "Radio Operator programs his I.D. into the SART immediately prior to activation.",
      ],
      answer: 2
    },
    {
      question: "Which of the following is normally found on EPIRBs that are detected by satellites?",
      options: [
        "A strobe light.",
        "A 5-watt 406-MHz beacon.",
        "A bracket designed to allow the EPIRB to automatically float-free.",
        "All of the above.",
      ],
      answer: 3
    },
    {
      question: "Which EPIRB transmits a distress alert that is received and relayed by an INMARSAT satellite?",
      options: [
        "Class A EPIRBs.",
        "Class B EPIRBs.",
        "L-band EPIRBs.",
        "Category I EPIRBs.",
      ],
      answer: 2
    },
    {
      question: "Which of the following EPIRBs is most likely to be used to transmit a distress alert signal?",
      options: [
        "S-Band EPIRBs.",
        "406 MHz EPIRBs.",
        "Class A EPIRBs.",
        "121.5/243 MHz EPIRBs.",
      ],
      answer: 1
    },
    {
      question: "Which of the following would best be used for visual detection of a distressed vessel?",
      options: [
        "A 9-GHz SART's beacon.",
        "An EPIRB's strobe light.",
        "A 121.5-MHz EPIRB beacon.",
        "A 406-MHz EPIRB beacon.",
      ],
      answer: 1
    },
    {
      question: "Which piece of required GMDSS equipment is the primary source of transmitting locating signals?",
      options: [
        "Radio Direction Finder (RDF).",
        "An EPIRB transmitting on 406 MHz.",
        "Survival Craft Transceiver.",
        "A SART transmitting on 406 MHz.",
      ],
      answer: 1
    },
    {
      question: "What may be used as a homing signal by the search and rescue vessels in the immediate vicinity of the ship in distress?",
      options: [
        "Flare gun.",
        "Strobe Light.",
        "A 121.5 MHz emergency transmitter in a satellite EPIRB.",
        "406 MHz signal from a satellite EPIRB.",
      ],
      answer: 2
    },
    {
      question: "What part of a satellite EPIRB may function as a visual aid to rescue vessels?",
      options: [
        "A 121.5 MHz emergency transmitter in a satellite EPIRB.",
        "Strobe light.",
        "406 MHz signal from a satellite EPIRB.",
        "Loud beeping tone emitted by the unit once activated.",
      ],
      answer: 1
    },
    {
      question: "What is an example of a locating signal?",
      options: [
        "SSB phone traffic.",
        "Ship to shore transmissions.",
        "Loran C.",
        "A Float-Free EPIRB.",
      ],
      answer: 3
    },
  ],

  set20: [
    {
      question: "Which device provides the main means in the GMDSS for locating ships in distress, or their survival craft?",
      options: [
        "Radio Direction Finder.",
        "Satellite EPIRBs.",
        "MF/HF DSC.",
        "VHF homing device.",
      ],
      answer: 1
    },
    {
      question: "What information is transmitted by a 406 MHz EPIRB alert?",
      options: [
        "Vessel position and nature of distress.",
        "A unique Hexadecimal I.D. number.",
        "Vessel name and identification.",
        "None of the above.",
      ],
      answer: 1
    },
    {
      question: "Which statement is true regarding the COSPAS-SARSAT system and EPIRB operations?",
      options: [
        "The EPIRB's position is calculated by the system and passed to the RCC.",
        "The EPIRB transmits a unique Hex I.D. and vessel position that is passed to the RCC.",
        "The EPIRB transmits a unique Hex I.D. that is passed to the RCC.",
        "Both a) and c) are true.",
      ],
      answer: 3
    },
    {
      question: "Which of the following has been designated for \"On-scene\" communications in GMDSS?",
      options: [
        "Ch-24 Ch-2182",
        "Ch-70 Ch-16 on VHF radiotelephone and 2174.5 kHz using MF SITOR.",
      ],
      answer: 1
    },
    {
      question: "Which of the following channels is designated as the VHF follow-on communications channel and is required in all portable survival craft equipment?",
      options: [
        "Ch-6 Ch-13",
        "Ch-16 Ch-70",
      ],
      answer: 1
    },
    {
      question: "Which of the following frequencies have been designated for \"On-scene\" communications in the Global Maritime Distress and Safety System?",
      options: [
        "VHF Ch-22.",
        "HF radiotelephone on 21.820 MHz.",
        "NBDP on 2177.0 kHz and VHF Ch-16.",
        "VHF Ch-16 and NBDP on 2174.5 kHz.",
      ],
      answer: 3
    },
    {
      question: "Which of the following frequencies have NOT been designated for \"On-scene\" communications in the Global Maritime Distress and Safety System?",
      options: [
        "VHF Ch-16.",
        "MF radiotelephony on 2182 kHz.",
        "NBDP on 2182.0 kHz.",
        "None of these.",
      ],
      answer: 2
    },
    {
      question: "\"On-scene\" communications would best be represented by?",
      options: [
        "NBDP on 2174.5 Sending DSC alert on VHF Ch-70.",
        "Using Inmarsat-C function.",
        "None of the above.",
      ],
      answer: 0
    },
    {
      question: "For \"On-scene\" communications, vessels in distress and SAR Aircraft should use?",
      options: [
        "VHF Ch-70, 4125 kHz J3E, 5680 kHz J3E",
        "VHF Ch-16, 4125 kHz J3E, 3023 kHz J3E",
        "VHF Ch-16, 4125 kHz F1B, 3023 kHz J3E",
        "None of the above.",
      ],
      answer: 1
    },
    {
      question: "Which of the following control selections may result in limited receiving range?",
      options: [
        "Setting the squelch control to its minimum level.",
        "The power switch is set to the output position resulting in receiver overloading.",
        "Setting the squelch control to its maximum level.",
        "Setting the channel selection switch midway between channels 6 and 16.",
      ],
      answer: 1
    },
    {
      question: "At mid-day, what would be the best choice in attempting to communicate with a shore station 15 miles (24 km) distant?",
      options: [
        "VHF-FM.",
        "16 MHz band.",
        "12 MHz band.",
        "22 MHz band.",
      ],
      answer: 0
    },
    {
      question: "Which factors normally determine the range of VHF transmissions:",
      options: [
        "Channel frequency.",
        "Power level.",
        "Both b) and d).",
        "Vessel antenna height.",
      ],
      answer: 2
    },
    {
      question: "Causes of much longer than normal VHF transmissions are:",
      options: [
        "Changing power from 1W to 25 W.",
        "Atmospheric ducting.",
        "Ionospheric activity in layers F1/F2.",
        "None of the above.",
      ],
      answer: 1
    },
    {
      question: "Describing VHF transmissions as \"line of sight\" means:",
      options: [
        "VHF communications are effective only with nearby stations within visual range of the bridge.",
        "Vessel antenna height will affect the radius of propagation.",
        "The normal transmission range to a coast station is approximately 25 NM.",
        "Both b and c are true.",
      ],
      answer: 3
    },
    {
      question: "The effectiveness of VHF communications is maximized by:",
      options: [
        "The adjustment of squelch for maximum receiver sensitivity.",
        "Appropriate setting of the transmitter power.",
        "Selecting an appropriate channel.",
        "All of the above.",
      ],
      answer: 3
    },
    {
      question: "A VHF frequency channel pair of TX 157.200 MHz and RX 161.800 MHz would most likely be:",
      options: [
        "A Public Correspondence Coast Radio Station frequency.",
        "Simplex.",
        "Duplex.",
        "Both a) and c) are correct.",
      ],
      answer: 3
    },
    {
      question: "Which channel is utilized for the required bridge-to-bridge watch?",
      options: [
        "DSC on Ch-70.",
        "VHF-FM on Ch-16.",
        "VHF-FM on Ch-13 in most areas of the continental United States.",
        "The vessel's VHF working frequency.",
      ],
      answer: 2
    },
    {
      question: "While conducting routine communications using the wheelhouse VHF with a station 1 mile distant, your recommended power setting would be:",
      options: [
        "25 watts after dark.",
        "1 watt, day or night.",
        "25 watts during a clear sunny day.",
        "1 watt using DSC at night.",
      ],
      answer: 1
    },
    {
      question: "The USA-INT control on VHF units:",
      options: [
        "Selects Duplex operations for U.S. coastal waters and Simplex operations in non-U.S. waters on the channels.",
        "Changes selected international duplex channels to simplex channels for use in U.S. waters.",
        "Both of the scenarios above may be set up and selected by the operator.",
        "None of the above.",
      ],
      answer: 0
    },
    {
      question: "Proper and legal VHF operations require:",
      options: [
        "The channel must be designated as valid for the nature or type of communications desired.",
        "The correct bandwidth must be selected by the operator.",
        "The power level must be appropriately chosen.",
        "Both answers a) and c) are correct.",
      ],
      answer: 3
    },
    {
      question: "How is a NAVTEX receiver programmed to reject certain messages?",
      options: [
        "The transmitting station's two-digit identification can be entered to de-select reception of its broadcasts.",
        "By choosing a message category's single letter (A-Z) identifier and then deselecting or deactivating.",
        "By entering the selcall of the transmitting station.",
        "By pressing in the transmitter's ID block.",
      ],
      answer: 1
    },
    {
      question: "How can reception of certain NAVTEX broadcasts be prevented?",
      options: [
        "Stations are limited to daytime operation only.",
        "The receiver can be programmed to reject certain stations and message categories.",
        "Coordinating reception with published broadcast schedules.",
        "Automatic receiver desensitization during night hours.",
      ],
      answer: 1
    },
    {
      question: "What means are used to prevent the reception of unwanted broadcasts by vessels utilizing the NAVTEX system?",
      options: [
        "Operating the receiver only during daytime hours.",
        "Programming the receiver to reject unwanted broadcasts.",
        "Coordinating reception with published broadcast schedules.",
        "Automatic receiver de-sensitization during night hours.",
      ],
      answer: 1
    },
    {
      question: "What statement \"is true\" regarding the control the operator can exercise over the NAVTEX receiver's operation?",
      options: [
        "The operator can set the unit to automatically reject any and all categories of messages if the ship desires to not receive them.",
        "The operator can set the unit to reject all messages except navigation, weather and sea warnings, and search and rescue messages.",
        "To reduce the number of messages, the operator can select code 00 to indicate",
        "Upon entering a coastal area for the first time, the operator enters code KK to indicate",
      ],
      answer: 1
    },
    {
      question: "Which message subject matter can be programmed to be rejected or disabled by the operator of a NAVTEX receiver?",
      options: [
        "Navigational warnings.",
        "Meteorological warnings.",
        "Pilot Service Messages.",
        "All of these.",
      ],
      answer: 2
    },
    {
      question: "The NAVTEX message header contains the following?",
      options: [
        "A single letter (A-Z) indicates the NAVTEX transmitting station.",
        "A two-digit number (01-99) indicates the NAVTEX message category.",
        "Message numbers include a date/time group along with the transmitting station's numerical ID.",
        "None of these.",
      ],
      answer: 0
    },
    {
      question: "Which of the following message categories cannot be disabled by the GMDSS Radio Operator?",
      options: [
        "Navigational warnings.",
        "Meteorological warnings.",
        "Search and Rescue information.",
        "All of the above.",
      ],
      answer: 3
    },
    {
      question: "How are NAVTEX broadcasts transmitted?",
      options: [
        "Using FEC techniques.",
        "NAVTEX is transmitted by commercial coast radio stations following their traffic lists.",
        "NAVTEX is transmitted only when an urgency or distress broadcast is warranted.",
        "No more often than every two hours and should immediately follow the radiotelephone silent periods.",
      ],
      answer: 0
    },
    {
      question: "Which determines whether a NAVTEX receiver does not print a particular type of message content?",
      options: [
        "The serial number and type of message have already been received.",
        "The subject indicator matches that programmed for rejection by the operator.",
        "The transmitting station ID covering your area has not been programmed for rejection by the operator.",
        "Both answers a) and b).",
      ],
      answer: 3
    },
    {
      question: "Which information determines if a NAVTEX message is to be rejected?",
      options: [
        "Transmitter identity (numerals from 1 to 26 identifying transmitting station within the NAVAREA).",
        "Subject indicator (single letter from A to Z indicating the type of message).",
        "The Answerback of the receiving station has not been entered in the NAVTEX receiver.",
        "Only messages having a serial number 00 are rejected.",
      ],
      answer: 1
    },
  ],

  set21: [
    {
      question: "NAVTEX broadcasts are sent:",
      options: [
        "In categories of messages indicated by a single letter or identifier.",
        "Immediately following traffic lists.",
        "On request of maritime mobile stations.",
        "Regularly after the radiotelephone silent periods.",
      ],
      answer: 0
    },
    {
      question: "Where NAVTEX cannot be feasibly established, what system can be implemented to provide an automated service in coastal waters to receive MSI?",
      options: [
        "SafetyNET.",
        "AMVER.",
        "VHF DSC.",
        "ARQ SITOR.",
      ],
      answer: 0
    },
    {
      question: "What action should a GMDSS Radio Operator take when SafetyNET distress or urgency messages are received by the vessel's EGC receiver?",
      options: [
        "No immediate action is required as an audible tone will be generated at the beginning and end of the transmission and a paper printout of the message will be generated.",
        "Aural and visual alarms are activated, and require manual deactivation.",
        "No immediate action is required by the operator since the transmission will be automatically acknowledged by the receiving vessel.",
        "A periodic alarm tone will be heard until the radio operator prints the message from the unit's memory.",
      ],
      answer: 1
    },
    {
      question: "What system can provide an automated service in coastal waters where it may not be feasible to establish the NAVTEX service or where shipping density is too low to warrant its implementation?",
      options: [
        "SafetyNET.",
        "AMVER.",
        "VHF DSC.",
        "ARQ SITOR.",
      ],
      answer: 0
    },
    {
      question: "Aboard ship, SafetyNET messages can be received by which equipment?",
      options: [
        "VHF DSC.",
        "NAVTEX Receiver.",
        "Dedicated receiver or optional receiver integrated in vessel's SES.",
        "All of these.",
      ],
      answer: 2
    },
    {
      question: "SafetyNET messages can be received by which of the following shipboard equipment?",
      options: [
        "NAVTEX.",
        "MF and HF NBDP.",
        "EGC receiver.",
        "All of these.",
      ],
      answer: 2
    },
    {
      question: "Marine Safety Information is promulgated via satellite through which system?",
      options: [
        "AMVER.",
        "SafetyNET.",
        "NAVTEX.",
        "Inmarsat-M SES.",
      ],
      answer: 1
    },
    {
      question: "SafetyNET promulgates what type of information?",
      options: [
        "MSI.",
        "Traffic Lists.",
        "News advisories.",
        "MARAD.",
      ],
      answer: 0
    },
    {
      question: "What kind(s) of broadcasts are not available through SafetyNET?",
      options: [
        "MSI and messages to specific geographic areas.",
        "Vessel traffic lists.",
        "Storm warnings.",
        "Distress and urgent bulletins.",
      ],
      answer: 1
    },
    {
      question: "Which satellite system promulgates Maritime Safety Information?",
      options: [
        "AMVER.",
        "Inmarsat-C SafetyNET.",
        "NAVTEX.",
        "Inmarsat-M SES.",
      ],
      answer: 1
    },
    {
      question: "What information is promulgated by the international SafetyNET?",
      options: [
        "MSI.",
        "Traffic Lists.",
        "Priority Messages.",
        "MARAD.",
      ],
      answer: 0
    },
    {
      question: "A vessel using SafetyNet should:",
      options: [
        "Notify the NAVAREA coordinator you are using SafetyNet for MSI (Maritime safety information).",
        "Set the receiver to your present NAVAREA.",
        "Set the receiver to your destination Ocean Region.",
        "Notify the NAVAREA coordinator you are using SafetyNet for MSI (Maritime safety information) and set the receiver to your destination Ocean Region.",
      ],
      answer: 1
    },
    {
      question: "In using SafetyNET for MSI (Maritime safety information):",
      options: [
        "If you fail to log-in with your Ocean Region you will receive only unscheduled urgent and distress broadcasts.",
        "To receive scheduled and unscheduled broadcasts you must log-in with your Ocean Region Net Control Station (NCS).",
        "Your satellite receiver must have Enhanced Group Calling (EGC) capability.",
        "All of these.",
      ],
      answer: 3
    },
    {
      question: "Over what system are Enhanced Group Calls transmitted?",
      options: [
        "By COSPAS satellite.",
        "By HF SITOR shore stations.",
        "By NAVTEX shore stations.",
        "By Inmarsat satellite.",
      ],
      answer: 3
    },
    {
      question: "How are MSI (Marine safety information) broadcasts received in an EGC receiver integrated with existing Inmarsat equipment when the SES is otherwise engaged in communications?",
      options: [
        "The broadcast message is missed and the Radio Operator must request a retransmission.",
        "The broadcast message is stored in the EGC memory and will automatically be printed at the conclusion of the ongoing traffic.",
        "The radio operator can request retransmission of messages missing from numeric serial number succession.",
        "There is no loss of information since broadcasts of messages will be repeated.",
      ],
      answer: 3
    },
    {
      question: "Which of the following provides a unique automated system capable of addressing messages to pre- determined groups of ships or all vessels in both fixed and variable geographic areas?",
      options: [
        "NAVTEX.",
        "EGC.",
        "AFRTS.",
        "NAVAREAs.",
      ],
      answer: 1
    },
    {
      question: "What system may be useful for messages, such as local storm warnings or a shore-to-ship distress alert, for which it is inappropriate to alert all ships in the satellite coverage area?",
      options: [
        "NAVTEX.",
        "EGC.",
        "AMVER.",
        "DSC.",
      ],
      answer: 1
    },
    {
      question: "What services are available through Enhanced Group Calls?",
      options: [
        "Marine Safety Information and messages to pre-defined groups of subscribers.",
        "Marine Safety Information and vessel traffic lists.",
        "Hourly NOAA weather broadcasts from the NWS.",
        "Coastal weather broadcasts.",
      ],
      answer: 0
    },
    {
      question: "What messages originate from registered information providers anywhere in the world and are broadcast to the appropriate ocean region via a CES?",
      options: [
        "SafetyNET messages.",
        "AMVER broadcasts.",
        "Urgency messages.",
        "NAVTEX broadcasts.",
      ],
      answer: 0
    },
    {
      question: "Which HF SITOR mode would be selected to receive MSI broadcasts from high seas shore stations:",
      options: [
        "AM FEC",
        "RTTY ARQ",
      ],
      answer: 0
    },
    {
      question: "The U.S. Coast Guard communications station providing HF MSI broadcast coverage for NAVAREA IV is:",
      options: [
        "NOJ (Kodiak).",
        "NMF (Boston).",
        "NMC (San Francisco).",
        "NMO (Honolulu).",
      ],
      answer: 1
    },
    {
      question: "The U.S. Coast Guard communications station providing HF MSI (Maritime safety information) broadcast coverage for NAVAREA XII is:",
      options: [
        "NMA (Miami).",
        "NMF (Boston).",
        "NMO (Honolulu).",
        "NMR (San Juan).",
      ],
      answer: 2
    },
    {
      question: "Frequencies for receiving HF MSI (Maritime safety information) are:",
      options: [
        "The same as used for NAVTEX.",
        "The same as used for general telex using FEC.",
        "Specified HF voice frequencies.",
        "Specified HF NBDP frequencies.",
      ],
      answer: 3
    },
    {
      question: "Which frequency/mode is authorized for use internationally for Marine Safety Information transmissions?",
      options: [
        "4125.0 kHz using simplex mode.",
        "4209.5 kHz using FEC mode.",
        "4209.5 kHz using ARQ mode.",
        "4125.0 kHz using FEC mode.",
      ],
      answer: 1
    },
    {
      question: "How many frequencies are assigned specifically for H.F. MSI broadcasts?",
      options: [
        "6 5",
        "8 7",
      ],
      answer: 1
    },
    {
      question: "Which NAVAREA is associated with the western North Atlantic and the Caribbean Sea?",
      options: [
        "NAVAREA IV.",
        "NAVAREA X.",
        "NAVAREA XI.",
        "NAVAREA XII.",
      ],
      answer: 0
    },
    {
      question: "Which NAVAREA is associated with the Pacific Ocean north of the equator and east of the International Date Line?",
      options: [
        "NAVAREA IV.",
        "NAVAREA X.",
        "NAVAREA XI.",
        "NAVAREA XII.",
      ],
      answer: 3
    },
    {
      question: "NAVAREAs referred to in NAVTEX are the same as used in:",
      options: [
        "INMARSAT SafetyNET.",
        "GMDSS sea areas.",
        "International Vessel Traffic Service.",
        "INMARSAT ocean regions.",
      ],
      answer: 0
    },
    {
      question: "A vessel operating in the Western Atlantic or along the East coast of North America and Central America from Canada to Venezuela, including the Caribbean and Panama, would be located in which NAVAREA?",
      options: [
        "X XI",
        "IV XIII",
      ],
      answer: 1
    },
    {
      question: "A vessel operating in the Eastern Pacific or along the West coast of North and Central America from Alaska to Ecuador, including Panama and Hawaii, would be operating in which NAVAREA?",
      options: [
        "X XI",
        "XII IV",
      ],
      answer: 1
    },
  ],

  set22: [
    {
      question: "A vessel on a voyage between Miami and Los Angeles via the Panama Canal would be operating in which NAVAREA(s)?",
      options: [
        "II and III.",
        "IV and XII.",
        "IV and V.",
        "V and VI.",
      ],
      answer: 1
    },
    {
      question: "Which of the following actions should be taken once the vessel is berthed and will not leave port again for several weeks?",
      options: [
        "The GMDSS Radio Operator must notify the NCS that the vessel will be off-line, and wait for the NCS to acknowledge with a confirmation number that must be logged.",
        "The Inmarsat-C system can be powered down without taking additional steps once the GMDSS Radio Operator has ensured that all incoming SafetyNET messages have been received and stored.",
        "The GMDSS Radio Operator must log out of the Inmarsat-C system.",
        "The GMDSS Radio Operator must transmit an all-ships alert to notify all vessels within the satellite's footprint that the vessel will be off-line.",
      ],
      answer: 2
    },
    {
      question: "What action should be taken on arrival at every port?",
      options: [
        "An Inmarsat-C system must be powered down.",
        "Send a message to the NCS advising arrival in port.",
        "Both of the above.",
        "None of the above.",
      ],
      answer: 3
    },
    {
      question: "With most Inmarsat-C systems what should the indicator lamps do when powering up?",
      options: [
        "The power on lamp should light and the others stay off until a message is received.",
        "All lamps should illuminate in a particular sequence per the operator's manual.",
        "All lamps should light and stay on.",
        "All lamps should light except the RED light.",
      ],
      answer: 1
    },
    {
      question: "Upon power-up, what controls are adjusted on an Inmarsat-C terminal?",
      options: [
        "The antenna Azimuth and Elevation controls.",
        "The receiver gain is adjusted for maximum signal.",
        "Both of the above.",
        "None of the above.",
      ],
      answer: 3
    },
    {
      question: "On an Inmarsat-C system soon after power up what might a blinking lamp indicate?",
      options: [
        "The system is not yet locked on to the NCS signal.",
        "An EGC message is being received.",
        "There is mail being received.",
        "None of the above.",
      ],
      answer: 0
    },
    {
      question: "On an Inmarsat-C system an alarm sounds:",
      options: [
        "When first powered on.",
        "When receiving distress traffic.",
        "Both of the above.",
        "None of the above.",
      ],
      answer: 1
    },
    {
      question: "Which satellite(s) would most likely be selected for use when the vessel is operating off the eastern shore of the United States?",
      options: [
        "AOR-W.",
        "IOR-E.",
        "POR.",
        "Either AOR-W or IOR-E will work.",
      ],
      answer: 0
    },
    {
      question: "Which satellite would be chosen when operating in the Eastern Gulf of Mexico?",
      options: [
        "AOR-W.",
        "IOR.",
        "POR.",
        "Any one of these.",
      ],
      answer: 0
    },
    {
      question: "Which longitude corresponds to the AOR-W satellite for Inmarsat communications?",
      options: [
        "64.5E.",
        "178E.",
        "15.5W.",
        "54W.",
      ],
      answer: 3
    },
    {
      question: "Which longitude corresponds to the AOR-E satellite for Inmarsat communications?",
      options: [
        "64.5E.",
        "178E.",
        "15.5W.",
        "54W.",
      ],
      answer: 2
    },
    {
      question: "Which longitude corresponds to the POR's satellite location for Inmarsat communications?",
      options: [
        "64.5E.",
        "178E.",
        "15.5W.",
        "54W.",
      ],
      answer: 1
    },
    {
      question: "Which longitude corresponds to the IOR's satellite location for Inmarsat communications?",
      options: [
        "64.5E.",
        "178E.",
        "15.5W.",
        "54W.",
      ],
      answer: 0
    },
    {
      question: "Which action must be taken to ensure that incoming message traffic of all priority levels will be received through Inmarsat-C?",
      options: [
        "The system needs only to be commissioned and turned on.",
        "No additional action is necessary after turning on the receiver and aiming the antenna at the desired satellite.",
        "The GMDSS Radio Operator must log-in to the desired satellite.",
        "The GMDSS Radio Operator must log on to the desired satellite and receive the message reference number (MRN) from the CES.",
      ],
      answer: 2
    },
    {
      question: "When logging into the Inmarsat system using Inmarsat-C, it is necessary to:",
      options: [
        "Enter your IMN.",
        "Enter the CES answer back.",
        "Select the Ocean Region.",
        "Call the CES and inform them that you are now operating in the appropriate ocean region.",
      ],
      answer: 2
    },
    {
      question: "What action should be taken on changing from one ocean region to another?",
      options: [
        "Power the system down and turn the power back on again.",
        "Manually realign the antenna.",
        "Log out of the current satellite and log in to the correct satellite.",
        "Both a) and c) are correct.",
      ],
      answer: 2
    },
    {
      question: "The process of logging out involves the following:",
      options: [
        "Selecting the proper command from the correct menu.",
        "Obtaining confirmation of log out from the NCS.",
        "Both of the above.",
        "None of the above.",
      ],
      answer: 0
    },
    {
      question: "How do you determine that your Inmarsat-C terminal has accomplished a successful login?",
      options: [
        "The red panel lamp lights.",
        "The green synch lamp starts flashing.",
        "The green synch lamp turns on steady.",
        "None of the above.",
      ],
      answer: 3
    },
    {
      question: "On many Inmarsat-C terminals, which of the following indicates a successful log-in?",
      options: [
        "A message is displayed on the screen indicating a successful log-in.",
        "The printer may also print out a notice of a successful log-in.",
        "Both of the above.",
        "None of the above.",
      ],
      answer: 2
    },
    {
      question: "What is the primary function of an NCS?",
      options: [
        "To monitor and control communications through the Inmarsat satellite for which it is responsible.",
        "To provide direct communications between the Inmarsat station placing a call and the station receiving the call.",
        "To provide multi-mode communications between the Inmarsat station placing a call and the coast radio station that will deliver it.",
        "To determine which satellite is best suited to provide communications between the Inmarsat station placing a call and the station receiving the call.",
      ],
      answer: 0
    },
    {
      question: "What is the primary function of a CES?",
      options: [
        "To monitor and control communications through the Inmarsat satellite for which it is responsible.",
        "To provide direct communications between the Inmarsat station placing a call and the station receiving the call.",
        "To provide multi-mode communications between the Inmarsat station placing a call and the coast radio station that will deliver it.",
        "To determine which satellite is best suited to provide communications between the Inmarsat station placing a call and the station receiving the call.",
      ],
      answer: 1
    },
    {
      question: "Messages are transmitted by the CES according to what criteria?",
      options: [
        "First In, First Out.",
        "Last In, First Out.",
        "Priority, e.g.: Distress, Urgency, Safety and Routine.",
        "Serial Number.",
      ],
      answer: 2
    },
    {
      question: "How is maximum coverage provided by satellites in the maritime satellite service?",
      options: [
        "Four satellites in polar orbit.",
        "Four satellites in geo-stationary orbit approximately 22,184 miles above the equator.",
        "Four satellites in geo-stationary orbit for each Inmarsat Service (A, B, C and M).",
        "Through coordinated use of COSPAS-SARSAT satellites.",
      ],
      answer: 1
    },
    {
      question: "What is meant by the characters \"GA+\" on an Inmarsat terminal?",
      options: [
        "General Address (to all stations).",
        "Go ahead.",
        "The instruction to None of these.",
      ],
      answer: 1
    },
    {
      question: "What is the purpose of compandors?",
      options: [
        "Noise and echo-canceling used in telex operation.",
        "Noise and echo canceling in voice operation.",
        "To enable distress communications.",
        "To enable data communications.",
      ],
      answer: 1
    },
    {
      question: "What is an MRN?",
      options: [
        "A Mobile Registration Number, provided by the FCC.",
        "A Message Reference Number, provided by the CES.",
        "A Mobile Registration Number, provided by IMO.",
        "The vessel's call sign.",
      ],
      answer: 1
    },
    {
      question: "To keep the Inmarsat-A/B antenna pointing at the desired satellite, regardless of the ship's position and course, it has an input from the vessel's:",
      options: [
        "Operational radar.",
        "Automated Radar Plotting Aid (ARPA) equipped radar.",
        "Steering control system.",
        "Gyrocompass.",
      ],
      answer: 3
    },
    {
      question: "The Inmarsat telephone and telex communications channel usage scheme is:",
      options: [
        "Many ships on the same telex analog channel frequency and many ships on the same TDM telephone channel.",
        "One ship per telephone channel and many ships per telex channel.",
        "One ship per analog telephone channel and one ship per telex analog channel frequency.",
        "One ship per channel whether telephone or telex.",
      ],
      answer: 1
    },
    {
      question: "What is an Inmarsat \"Subscriber Number\"?",
      options: [
        "This identifies the vessel's selective calling (selcall) number.",
        "This is the Inmarsat number that is assigned to a unit for incoming calls.",
        "This is the vessel's Inmarsat registration number for accounting authority purposes.",
        "This number is used for receiving news and other optional services in FleetNET.",
      ],
      answer: 1
    },
    {
      question: "Which of the following statements concerning Inmarsat geostationary satellites is true?",
      options: [
        "They are in a low-earth polar orbit to provide true global coverage.",
        "They are in an equatorial orbit to provide true global coverage.",
        "They provide coverage to vessels in nearly all of the world's navigable waters.",
        "Vessels sailing in equatorial waters are able to use only one satellite whereas other vessels are able to choose between at least two satellites.",
      ],
      answer: 2
    },
  ],

  set23: [
    {
      question: "What is meant by \"CES\"?",
      options: [
        "Coast Earth Satellite.",
        "Coast Earth Station.",
        "Central Equatorial Station.",
        "Coastal Equivalent Station.",
      ],
      answer: 1
    },
    {
      question: "How is a signal radiated from an Inmarsat-A system's antenna?",
      options: [
        "It is a highly focused directional signal that must be beamed at the desired satellite.",
        "It is usually radiated in an omni-directional pattern, but an optional feature allows it to be directional for use when the vessel is on the fringe of the satellite's footprint.",
        "It is radiated in an omni-directional pattern.",
        "It is radiated in an omni-directional pattern that can be reversed by the Operator to attain directional beaming to an alternate satellite.",
      ],
      answer: 0
    },
    {
      question: "Which mode of Inmarsat-A communications may be possible with a lower received signal strength?",
      options: [
        "Fax.",
        "Telex Voice Communications, compandors off.",
        "Voice Communications, compandors on.",
      ],
      answer: 1
    },
    {
      question: "What is the purpose of the second I.D. in an Inmarsat-A SES?",
      options: [
        "To provide an additional number which may be dedicated to computers, fax, etc.",
        "To provide an alternate number which may be called if a busy signal is received by the calling party.",
        "To provide an additional speech path which may be used to communicate while the first channel is engaged in active communications.",
        "To provide for an emergency working frequency.",
      ],
      answer: 0
    },
    {
      question: "What is the effect of having five periods (e.g.-meanwhile…..) in the text of a telex transmission on an Inmarsat-A SES?",
      options: [
        "Only the first period will be routed to the receiving party.",
        "Only the first two periods will be routed to the receiving party.",
        "The transmission will automatically terminate after those characters are transmitted.",
        "This will automatically trigger the reversal of charges to the receiving party.",
      ],
      answer: 2
    },
    {
      question: "Why is the automatic answerback request (WRU) first used by the CES after an Inmarsat-A telex call has been placed from a ship?",
      options: [
        "Identify the SES making the request.",
        "Let the CES operator know the printer is functioning correctly.",
        "Get the identity of the ship station and start the channel assignment process.",
        "Verify that there is a good connection with no transmission errors.",
      ],
      answer: 0
    },
    {
      question: "When sending digital information via an Inmarsat-A terminal, what should be utilized for optimum communications?",
      options: [
        "Noise-blanking must be selected by the operator.",
        "Request a duplex telephone call without compandors.",
        "Request a simplex voice call without compandors.",
        "Request a simplex voice call with compandors.",
      ],
      answer: 1
    },
    {
      question: "Which mode of communications is NOT possible through an Inmarsat-C SES?",
      options: [
        "Data.",
        "Telex.",
        "Emergency Activation.",
        "Shore-to-ship Facsimile.",
      ],
      answer: 3
    },
    {
      question: "What is the average length of time required for a telex sent by Inmarsat-C to be delivered to the addressee?",
      options: [
        "All Inmarsat-C communications are made with real-time connectivity so there is no delay in message delivery.",
        "The average delivery time for a message sent by Inmarsat-C is about 10 minutes.",
        "Date/time notification of delivery is possible only through Inmarsat-A.",
        "The average delivery time for a telex sent by Inmarsat-C is about 10 minutes, but fax and data messages sent by Inmarsat-C require about 30 minutes for delivery.",
      ],
      answer: 1
    },
    {
      question: "How is a signal radiated from an Inmarsat-C system's antenna?",
      options: [
        "It is a highly focused directional signal that must be beamed at the desired satellite.",
        "It is usually radiated in an omni-directional pattern, but an optional feature allows it to be directional for use when the vessel is on the fringe of the satellite's footprint.",
        "It is radiated in an omni-directional pattern.",
        "It is radiated in an omni-directional pattern that can be reversed by the Operator to attain directional beaming to an alternate satellite.",
      ],
      answer: 2
    },
    {
      question: "What statement is true regarding Inmarsat-C?",
      options: [
        "There is a propagation delay, but a direct connection is made between the ship and shore users.",
        "There are delays in establishing the communications then a direct real-time connection is maintained with the other party.",
        "This is a store and forward network with an intermediate step that means there is no direct connection between ship and shore users.",
        "The telex message is stored until the mailbox is accessed by the station desiring to retrieve their message.",
      ],
      answer: 2
    },
    {
      question: "With an Inmarsat-C CES, how are messages routed to receiving stations?",
      options: [
        "Direct connections are made to the receiving stations via gateways.",
        "All messages are forwarded via a store and forward network.",
        "Intermediary stations are used to connect the sending station with the receiving station in a real-time mode.",
        "Messages are stored until the network is polled by the receiving station.",
      ],
      answer: 1
    },
    {
      question: "What are the directional characteristics of the Inmarsat-C SES antenna?",
      options: [
        "Highly directional parabolic antenna requiring stabilization.",
        "Omni-directional.",
        "Wide beam width in a cardioid pattern off the front of the antenna.",
        "Very narrow beam width straight-up from the top of the antenna.",
      ],
      answer: 1
    },
    {
      question: "Which of the following best describes Inmarsat-C operation?",
      options: [
        "Is an analog-based system.",
        "Requires a stabilized directional antenna.",
        "Provides for voice, telex, high- and low-speed data and compressed video communications.",
        "Is a digital store-and-forward system that also provides Enhanced Group Call, data reporting, polling and distress alerting capabilities.",
      ],
      answer: 3
    },
    {
      question: "Which of the following best describes a shipboard Inmarsat-C system?",
      options: [
        "A satellite communications system that provides real-time connectivity.",
        "A small, lightweight terminal capable of providing satellite store-and-forward message communications.",
        "A small, lightweight terminal used to transmit messages over high frequency (HF) bands to communicate through a satellite.",
        "A satellite communications system that also provides continuous Digital Selective Calling coverage for all ocean regions.",
      ],
      answer: 1
    },
    {
      question: "Which of the following modes of communications are available when using Inmarsat-C?",
      options: [
        "Telex.",
        "Fax.",
        "14400 BPS Data.",
        "Voice.",
      ],
      answer: 0
    },
    {
      question: "Which mode of communications is possible through an Inmarsat-C SES?",
      options: [
        "SITOR.",
        "Telex.",
        "Radiotelephone.",
        "DSC",
      ],
      answer: 1
    },
    {
      question: "It is possible to transmit all of the following via Inmarsat-C from a vessel except?",
      options: [
        "Telex.",
        "Text for delivery by Fax.",
        "Voice.",
        "Comtex mail and x.400 data services.",
      ],
      answer: 2
    },
    {
      question: "Inmarsat-C provides for which of the following?",
      options: [
        "Polling, enhanced group call, and one-way position and data reporting via satellite.",
        "FM voice communications via satellite.",
        "Two-way messaging and data communications on a store-and-forward basis.",
        "Polling, enhanced group call, one-way position and data reporting via satellite, two-way messaging and data communications on a store-and-forward basis.",
      ],
      answer: 3
    },
    {
      question: "Which statement concerning Inmarsat-A and Inmarsat-C terminals is correct?",
      options: [
        "Both Inmarsat-A and Inmarsat-C units are capable of faxes and voice communications.",
        "Both Inmarsat-A and Inmarsat-C units can send data as well as send messages to FAX machines.",
        "Inmarsat-A units do not require compandors for data communications but Inmarsat-C units do require compandors.",
        "None of the above.",
      ],
      answer: 1
    },
    {
      question: "When Inmarsat-A and Inmarsat-C terminals are compared:",
      options: [
        "Inmarsat-A antennas are bulkier but omni-directional, while Inmarsat-C antennas are smaller and parabolic for aiming at the satellite.",
        "Inmarsat-A antennas are parabolic and smaller for higher gain, while Inmarsat-C antennas are larger but omni-directional.",
        "Inmarsat-C antennas are smaller but omni-directional, while Inmarsat-A antennas are parabolic for lower gain.",
        "None of the above.",
      ],
      answer: 3
    },
    {
      question: "Which CES should a GMDSS Radio Operator select if his/her vessel is off the Pacific Coast of the United States?",
      options: [
        "Goonhilly.",
        "Anatolia.",
        "Niles Canyon or Santa Paula.",
        "RCC Alameda.",
      ],
      answer: 2
    },
    {
      question: "Which CES should a GMDSS Radio Operator select if his/her vessel is off the Atlantic Coast of the United States?",
      options: [
        "Southbury or Staten Island.",
        "Santa Paula.",
        "RCC New York.",
        "Anatolia.",
      ],
      answer: 0
    },
    {
      question: "What is the C.E.S. ID Code for the Southbury Earth Station for a vessel operating in the Western Atlantic?",
      options: [
        "00 01",
        "10 11",
      ],
      answer: 0
    },
    {
      question: "What is the C.E.S. ID Code for the Santa Paula Earth Station for a vessel operating off the Pacific Coast of the U.S.?",
      options: [
        "00 11",
        "10 01",
      ],
      answer: 1
    },
    {
      question: "Which Earth Station would a vessel be utilizing if operating off the Pacific Coast of the United States?",
      options: [
        "Goonhilly.",
        "Southbury.",
        "Santa Paula.",
        "KPH (San Francisco, CA).",
      ],
      answer: 2
    },
    {
      question: "Which Earth Station would a vessel be utilizing if operating off the Atlantic Coast of the United States?",
      options: [
        "Southbury.",
        "Santa Paula.",
        "WCC (Chatham, MA).",
        "Odessa.",
      ],
      answer: 0
    },
    {
      question: "A vessel is operating in the Western Atlantic. To initiate a ship-to-shore telephone contact to a shoreside party in the United States, whose number is 123-456-7890, through the Southbury Earth Station, using automatic service by telephone, a valid Inmarsat dialing sequence is?",
      options: [
        "1011234567890 #0111234567890#",
        "01# 0011234567890# 1234567890",
      ],
      answer: 1
    },
    {
      question: "A vessel is operating in the Eastern Atlantic. To initiate a ship-to-shore telephone contact to a shoreside party in the United States, whose number is 202-456-7890, through the Goonhilly Earth Station, using automatic service by telephone, a valid Inmarsat dialing sequence would be?",
      options: [
        "1020234567890 02# 0012024567890#",
        "0111234567890# 2024567890",
      ],
      answer: 0
    },
    {
      question: "Which key would be used to indicate the end of a manually dialed number in a telephone, facsimile or data call via an Inmarsat-A SES?",
      options: [
        "The key.",
        "The key.",
        "The key.",
        "The key.",
      ],
      answer: 1
    },
  ],

  set24: [
    {
      question: "The U.S. Country Code for voice transmission is:",
      options: [
        "011 1",
        "001 for Southbury, 201 Santa Paula.",
        "581 for AOR-E, 582 for POR and 584 for AOR-W.",
      ],
      answer: 0
    },
    {
      question: "If you are south of the Hawaiian Islands and wish to communicate by voice with another ship 200 miles due west of Lands End, UK. What is the proper procedure?",
      options: [
        "01# 008711502360# 04# 115821503695#",
        "001# 008512364560# 03+ 0058143032643+",
      ],
      answer: 0
    },
    {
      question: "Which of the following is a correct dialing string for a vessel in the western Atlantic to send a FAX to a U.S. destination using an Inmarsat-A terminal?",
      options: [
        "02# 110313 01+ 110243674932+",
        "01# 0015036943254# 001# 15036684376#",
      ],
      answer: 1
    },
    {
      question: "Which key is used to indicate the end of a selection in a telex call via an Inmarsat-A SES?",
      options: [
        "The key.",
        "The key.",
        "The key.",
        "The key.",
      ],
      answer: 1
    },
    {
      question: "Which number, if typed at an Inmarsat-A SES by a vessel in the Western Atlantic, would result in placing an automatic telex call to a subscriber whose WUT subscriber number is 123456?",
      options: [
        "00230123456# 0012131234567#",
        "00230123456+ 00 1 213 1234567+",
      ],
      answer: 1
    },
    {
      question: "Which of the following numbers is appropriate for an Inmarsat-A terminal placing a telex call via Southbury to another ship logged-in to the AOR-E?",
      options: [
        "01+ 005841506423+ 01+ 005811506423+",
        "02+ 005841506423+ 13+ 005811506423+",
      ],
      answer: 0
    },
    {
      question: "You are on a ship in the Pacific ocean. What keyboard entry would you make on an Inmarsat-A terminal to obtain a telex connection via Santa Paula to another ship that is 300 miles west of San Francisco?",
      options: [
        "01# 005821504530# 03+ 005821504530+",
        "01+ 005821504530+ 001+ 005821504530+",
      ],
      answer: 1
    },
    {
      question: "What keyboard entry would you make on an Inmarsat-A terminal to obtain a telex connection to a shoreside telex terminal number 882419 office in Nebraska, USA (telex country code 230)?",
      options: [
        "11230882419+ 00230882419#",
        "00230882419+ 00230882419",
      ],
      answer: 1
    },
    {
      question: "Which of the following is a correctly formatted Inmarsat-A address for sending communications to a shoreside telex terminal number 440122 in the United Kingdom (telex country code 51)?",
      options: [
        "51440122+ 51440122",
        "(51)440122+ 51440122#",
      ],
      answer: 0
    },
    {
      question: "What is the Inmarsat-A Service Code for automatic service?",
      options: [
        "AA 11",
        "01 00",
      ],
      answer: 1
    },
    {
      question: "What dial sequence is used, after entering the shore ID, to obtain the intervention of the telephone operator in the Inmarsat-A service?",
      options: [
        "00# 01#",
        "10# 11#",
      ],
      answer: 1
    },
    {
      question: "What must be entered, after the Shore I.D. and \"#\" sign is entered and a ring-back tone is heard, to obtain the intervention of the telephone operator in the Inmarsat-A service?",
      options: [
        "00# 01#",
        "10# 11#",
      ],
      answer: 1
    },
    {
      question: "What is the Inmarsat-A service code for the international telephone information operator?",
      options: [
        "12# 11+",
        "13# 36#",
      ],
      answer: 0
    },
    {
      question: "How would a Radio Operator of a vessel off the California Coast request Operator Assistance from the shore station via telex?",
      options: [
        "Dial 11# on the keypad after receiving the tone.",
        "Type 00+ after receiving the by the shore station.",
        "Type 11+ after receiving the by the shore station.",
        "Type 001 after receiving the by the shore station.",
      ],
      answer: 1
    },
    {
      question: "What dial sequence is used, after entering the shore ID, to place a call that will be billed to a credit card?",
      options: [
        "36# The digits 00 followed by the country code, the credit card number, the expiration date and ending with the",
        "sign.",
        "Credit card billing is impossible via Inmarsat.",
        "The Shore I.D. and sign followed by the digits 00, then the Country Code, subscriber's number and ending with the",
        "sign.",
      ],
      answer: 0
    },
    {
      question: "From an Inmarsat-C terminal which of the following is a correctly formatted address for sending telex messages to a vessel in AOR-W?",
      options: [
        "5841502773 8741502773",
        "584436671929 Either a) or c) are correct, depending on the Inmarsat system addressed.",
      ],
      answer: 1
    },
    {
      question: "Which of the following is a correctly formatted Inmarsat-C address book entry for sending telex communications to a vessel in the AOR-E?",
      options: [
        "871436772983 571436772983",
        "5811509952 5811509952+",
      ],
      answer: 1
    },
    {
      question: "Which of the following is a correctly formatted Inmarsat-C address book entry for sending telex communications to a vessel in the POR?",
      options: [
        "582436559121 872436559121",
        "582436559121+ 5821508862+",
      ],
      answer: 0
    },
    {
      question: "Which of the following is a correctly formatted Inmarsat-C address book entry for sending telex communications to a vessel in the IOR?",
      options: [
        "853446323868 873446976519",
        "582446323868 583446976519",
      ],
      answer: 1
    },
    {
      question: "Which of the following is a correctly formatted Inmarsat-C address book entry for sending telex communications to a vessel in AOR-W?",
      options: [
        "8541502927 5841502927",
        "8741502927 5841502927+",
      ],
      answer: 0
    },
    {
      question: "Which of the following is a correctly formatted Inmarsat-C address book entry for sending communications to a shoreside telex terminal number 45992 in Taiwan (telex country code 769)?",
      options: [
        "(769)45992 76945992+",
        "769 45992+ None of the above.",
      ],
      answer: 1
    },
    {
      question: "Which of the following is a correctly formatted Inmarsat-C address book entry for sending communications to a shoreside telex terminal number 440122 in the United Kingdom (telex country code 51)?",
      options: [
        "51440122+ 51440122",
        "(51)440122 51440122#",
      ],
      answer: 0
    },
    {
      question: "If your vessel is in the POR, which of the following is a correctly formatted Inmarsat-C address book entry for sending communications to a shoreside telex terminal number 42267 in Ecuador (telex country code 308)?",
      options: [
        "30842267 58230842267",
        "30842267+ (582)30842267",
      ],
      answer: 0
    },
    {
      question: "Which of the following is a correctly formatted Inmarsat-C address book entry for sending communications to a shoreside terminal number 276992 in New Jersey via TRT (telex country code 238)?",
      options: [
        "238276992 (238)276992",
        "238276992# 238 276992+",
      ],
      answer: 0
    },
    {
      question: "If your vessel is in the IOR, which of the following is a correctly formatted Inmarsat-C address book entry for sending communications to a shoreside telex terminal number 77829 in the Philippines (telex country code 758)?",
      options: [
        "75877829+ 87375877829",
        "75877829 58375877829",
      ],
      answer: 1
    },
    {
      question: "If your vessel is in the AOR-E, which of the following is a correctly formatted Inmarsat-C address book entry for sending communications to a shoreside telex terminal number 776424 in Canada via the TWX system (telex country code 26)?",
      options: [
        "58126776424 26776424",
        "582776424 26776424+",
      ],
      answer: 0
    },
    {
      question: "Which of the following is a correctly formatted Inmarsat-C address book entry for sending communications to a fax machine on a vessel in the AOR-W?",
      options: [
        "8741500292 874436871225",
        "5841500292 1 8741500292",
      ],
      answer: 0
    },
    {
      question: "Which of the following is a correctly formatted Inmarsat-C address book entry for sending communications to a fax machine number 516-229-4339 in Long Beach, CA, U.S.?",
      options: [
        "015162294339# 15162294339",
        "015162294339 1 516-229-4339",
      ],
      answer: 0
    },
    {
      question: "Which of the following is a correctly formatted Inmarsat-C address book entry for sending communications to a fax machine on a vessel in the AOR-E?",
      options: [
        "581366269025 871466269025",
        "5811504338 8711504338",
      ],
      answer: 1
    },
    {
      question: "Which of the following is a correctly formatted Inmarsat-C address book entry for sending communications to a fax machine number 1424-8821-902 in the United Kingdom (voice country code 44)?",
      options: [
        "44 1424-8821-902 4414248821902",
        "4414248821902# 44 14248821902",
      ],
      answer: 0
    },
  ],

  set25: [
    {
      question: "Which of the following is a correctly formatted Inmarsat-C address book entry for sending communications to a fax machine on a vessel in the IOR?",
      options: [
        "5831509987 583442519372",
        "1873442519372 8731509987",
      ],
      answer: 1
    },
    {
      question: "Which of the following is a correctly formatted Inmarsat-C address book entry for sending communications to a fax machine number (045) 334-5678 in Japan (voice country code 81)?",
      options: [
        "810453345678# 81(045)3345678",
        "810453345678 81 (045) 334-5678",
      ],
      answer: 1
    },
    {
      question: "Which statement is false regarding a distress request?",
      options: [
        "Any distress request is automatically switched to an Inmarsat distress working frequency.",
        "If all satellite channels are busy, one of them will be preempted by a distress request.",
        "The NCS in each ocean region automatically monitors the processing of such calls by other CESs in that region, and processes calls if any anomaly exists in the system.",
        "Any request message with distress priority is automatically recognized by the CES and a satellite channel is instantly assigned.",
      ],
      answer: 0
    },
    {
      question: "How is a distress message normally initiated through Inmarsat?",
      options: [
        "All Inmarsat units have a dedicated key that can be pressed for immediate action.",
        "By adding the word in the first line of the message's preamble.",
        "Certain Inmarsat units have a dedicated key that can be pressed for immediate action, while other systems provide menu-driven features.",
        "By transmitting the distress message on the U.S. Coast Guard's dedicated monitoring channel.",
      ],
      answer: 1
    },
    {
      question: "How is a distress priority message ordinarily initiated on board the vessel?",
      options: [
        "By dialing the correct code on the telephone remote unit.",
        "By pressing one or more dedicated on the equipment.",
        "By contacting the CES operator, and announcing a distress condition is in existence.",
        "By contacting the CES operator using the radiotelephone distress procedure",
      ],
      answer: 1
    },
    {
      question: "What must be done to disconnect an incoming telex message when voice distress communications is desired via Inmarsat-A?",
      options: [
        "Depress the switch to disconnect incoming message.",
        "Depressing the button automatically disconnects incoming messages.",
        "It is necessary to wait until the incoming telex message has concluded, otherwise a system fault will occur.",
        "Momentarily turn off the system power.",
      ],
      answer: 0
    },
    {
      question: "Which of the following two-way communications can be made through Inmarsat without charge?",
      options: [
        "A service message that advises a vessel of other ship traffic in its vicinity.",
        "SafetyNET.",
        "Distress traffic.",
        "Vessel position information when the ship's GPS fails.",
      ],
      answer: 2
    },
    {
      question: "How is ship to shore transmission of a distress priority message in most SESs initiated?",
      options: [
        "By provision of a or code in the SES.",
        "By including the priority code in the preamble of the telex message.",
        "By including the priority code in the dialed number in voice communications.",
        "By initial voice contact with the Rescue Coordination Center.",
      ],
      answer: 0
    },
    {
      question: "Upon receipt of SafetyNET messages of the distress or urgency category on the ship's EGC receiver, what action is required by the GMDSS Radio Operator?",
      options: [
        "No immediate action is required as an audible tone will be generated at the beginning and end of the transmission and a paper printout of the message will be generated.",
        "Manually reset the alarm.",
        "No immediate action is required by the operator since the transmission will be automatically acknowledged by the receiving vessel.",
        "A periodic alarm tone will be heard until the radio operator prints the message from the unit's memory.",
      ],
      answer: 1
    },
    {
      question: "What can be defined as the service that allows terrestrial information providers to send general information messages to pre-defined groups of subscribers?",
      options: [
        "SafetyNET.",
        "COSPAS-SARSAT.",
        "InfoNET.",
        "FleetNET.",
      ],
      answer: 3
    },
    {
      question: "What additional equipment provides the maximum availability for receiving SafetyNET broadcasts when the associated Inmarsat-C is being used for telex communications?",
      options: [
        "An integrated EGC receiver with the existing Inmarsat-C equipment.",
        "A separate EGC receiver.",
        "HF SSB can be used to receive voice MSI broadcasts.",
        "Automatic switching between Inmarsat-C and EGC functions.",
      ],
      answer: 1
    },
    {
      question: "What equipment is utilized to transmit Enhanced Group Calls?",
      options: [
        "COSPAS satellite.",
        "HF SITOR shore stations.",
        "NAVTEX shore stations.",
        "Inmarsat satellite.",
      ],
      answer: 3
    },
    {
      question: "What is the equipment arrangement that provides the maximum availability for reception of MSI broadcasts when using Inmarsat-C for telex communications?",
      options: [
        "Integrating ECG receiver with the existing Inmarsat-C equipment.",
        "Separate EGC receiver.",
        "Redundancy using HF SSB to receive voice broadcasts.",
        "Automatic switching between Inmarsat-C and EGC functions.",
      ],
      answer: 1
    },
    {
      question: "Which of the following statement concerning EGC configuration is false?",
      options: [
        "NAVAREA selection should be monitored and appropriately updated.",
        "The originator of MSI information can specify receipt only by vessels within a specific geographical area, circular or rectangular.",
        "The originator of MSI information cannot specify receipt only by vessels within a specific geographical area, circular or rectangular.",
        "GMDSS operators generally can select additional NAVAREAS to acquire EGC messages of interest to the vessel.",
      ],
      answer: 2
    },
    {
      question: "A vessel with an 18-hour ETA to the Panama Canal on a voyage from Miami loses the ability to communicate via Inmarsat. The most likely cause is?",
      options: [
        "The vessel has sailed beyond the coverage area of the Southbury Shore Station.",
        "The vessel has sailed beyond the coverage area of the Eastern Atlantic satellite.",
        "The vessel has sailed beyond the coverage area of the Western Atlantic satellite.",
        "An equipment fault.",
      ],
      answer: 3
    },
    {
      question: "A vessel, before transiting the Panama Canal, on a voyage from San Diego to Miami, loses the ability to communicate via Inmarsat. The most likely cause is:",
      options: [
        "The vessel has sailed beyond the coverage area of the Southbury Shore Station.",
        "The vessel has sailed beyond the coverage area of the Western Atlantic satellite.",
        "The satellite orbit is beyond the usable range of the SES.",
        "The vessel has sailed beyond the coverage area of the Pacific satellite.",
      ],
      answer: 3
    },
    {
      question: "What can be the visual observation of a condition whereby it may be possible to initiate a reliable telex transmission but a voice transmission may not be possible?",
      options: [
        "An indication on a meter or on the display terminal of high transmit power.",
        "An indication of a very high antenna elevation on the display terminal screen.",
        "An indication that the antenna has reached its maximum travel in one direction.",
        "An indication on a meter or on the terminal of low receiver signal strength.",
      ],
      answer: 3
    },
    {
      question: "What maintenance function may the holder of a GMDSS Radio Operator license perform, or supervise the performance of, on an Inmarsat-C SES?",
      options: [
        "Adjust the station's EIRP.",
        "Remove stack deposits and other debris from the radome preventing degraded performance.",
        "Adjust a reference oscillator or synthesizer.",
        "None of these.",
      ],
      answer: 1
    },
    {
      question: "Which functions may the holder of a GMDSS Radio Operator License NOT perform on the Inmarsat-C equipment?",
      options: [
        "Optimize performance by adjusting the transmitter EIRP.",
        "Maintain the antenna clear of soot, paint, etc.",
        "Logon, traffic and logoff functions.",
        "Entry of position data and selection of CES.",
      ],
      answer: 0
    },
    {
      question: "What immediate remedy can be used to correct shadowing of the satellite signal by a shipboard obstruction?",
      options: [
        "Change the ship's course.",
        "Relocate the mast or other obstruction.",
        "Raise the transmit power level.",
        "Increase the receiver gain.",
      ],
      answer: 0
    },
    {
      question: "A vessel loses Inmarsat-A SES operation after a large course change. Which of the following could cause this?",
      options: [
        "System loses gyro follow-up or a gyro system malfunction.",
        "Shadowing of the SES antenna by clouds or other weather formations.",
        "Misalignment of the shadow correction filter.",
        "None of these.",
      ],
      answer: 0
    },
    {
      question: "Which statement is correct regarding a method that a vessel experiencing problems with shadowing of the Inmarsat-A SES antenna by an on-board obstruction could use to attempt reliable communications?",
      options: [
        "Change course to make the communications.",
        "Change the Coast Station ID programming.",
        "Install a shadow correction filter.",
        "Switch from telex to Voice mode which requires lower signal strength for proper operation.",
      ],
      answer: 0
    },
    {
      question: "Which of the following conditions can render Inmarsat-A communications impossible?",
      options: [
        "An obstruction, such as a mast, causing disruption of the signal between the satellite and the SES antenna when the vessel is steering a certain course.",
        "A satellite whose signal is on a low elevation, below the horizon.",
        "Travel beyond the effective radius of the satellite.",
        "All of these.",
      ],
      answer: 3
    },
    {
      question: "A vessel is experiencing problems tracking the satellite in an Inmarsat-C SES. The problem could be:",
      options: [
        "Extremely heavy rain/snow storms.",
        "Shadowing caused by an obstacle, such as a mast, between the SES antenna and the satellite.",
        "The vessel is on the fringe of the coverage area of the satellite.",
        "All of these.",
      ],
      answer: 3
    },
    {
      question: "Which functions may the holder of a GMDSS Radio Operator License perform on the Inmarsat-C equipment?",
      options: [
        "Selection of CES.",
        "Maintain the antenna clear of soot, paint, etc.",
        "Logon, traffic and logoff functions.",
        "All of these.",
      ],
      answer: 3
    },
    {
      question: "Which modes could be selected to receive vessel traffic lists from high seas shore stations:",
      options: [
        "AM and VHF-FM.",
        "SSB and FEC.",
        "ARQ and FEC.",
        "VHF-FM and SSB.",
      ],
      answer: 1
    },
    {
      question: "MF/HF Transceiver Power levels should be set:",
      options: [
        "To the lowest level necessary for effective communications.",
        "To the level necessary to maximize the propagation radius.",
        "To the highest level possible so as to ensure other stations cannot on the channel during use.",
        "Both a) and c).",
      ],
      answer: 0
    },
    {
      question: "Which statement regarding GMDSS MF/HF Transceiver frequency set-up is true:",
      options: [
        "Transmit and receive frequencies may be manually entered from the keypad.",
        "ITU channels must be recalled from a database or memory.",
        "All consoles allow both manual keypad entry and ITU channel recall from a database.",
        "Depending on the manufacturer, either a) or b) could be true.",
      ],
      answer: 3
    },
    {
      question: "To set-up the MF/HF Transceiver for a telex call to a coast station, the operator must:",
      options: [
        "Select J3E mode for proper Sitor operations.",
        "Select F1B mode or J2B mode, depending on the equipment manufacturer.",
        "Select F1B/J2B modes or J3E mode, depending on whether ARQ or FEC is preferred.",
        "None of the above.",
      ],
      answer: 1
    },
    {
      question: "To set-up the MF/HF Transceiver for a voice call to a coast station, the operator must:",
      options: [
        "Select J3E mode for proper Sitor operations.",
        "Select F1B mode or J2B mode, depending on the equipment manufacturer.",
        "Select F1B/J2B modes or J3E mode, depending on whether FEC or ARQ is preferred.",
        "Select J3E mode for proper voice operations.",
      ],
      answer: 3
    },
  ],

  set26: [
    {
      question: "How are paired NBDP frequencies normally used?",
      options: [
        "These are normally used for FEC communications with coast radio stations.",
        "These are normally used for ARQ communications with coast radio stations.",
        "These are normally used only for distress communications to limit channel interference.",
        "These are normally used for DSC communications with coast radio stations.",
      ],
      answer: 1
    },
    {
      question: "How are paired SSB frequencies normally used?",
      options: [
        "These are normally used for FEC communications with coast radio stations.",
        "These are normally used for ARQ communications with coast radio stations.",
        "These are normally used for J3E communications with coast radio stations.",
        "These are normally used for DSC communications with coast radio stations.",
      ],
      answer: 2
    },
    {
      question: "For general communications purposes, paired frequencies are:",
      options: [
        "Normally used with private coast stations.",
        "Normally used with public coast stations.",
        "Normally used between ship stations.",
        "Normally used between private coast and ship stations.",
      ],
      answer: 1
    },
    {
      question: "For general communications purposes, simplex frequencies are:",
      options: [
        "Normally used between ship stations and private coast stations.",
        "Normally used with public coast stations.",
        "Normally used between ship stations.",
        "Both a) and c) are correct.",
      ],
      answer: 3
    },
    {
      question: "An ITU simplex channel frequency assignment is defined as:",
      options: [
        "Transmit and receive frequencies must be different.",
        "Transmit and receive frequencies must be identical.",
        "Transmit and receive frequencies may be different, depending on whether communications are ship-shore or ship to ship.",
        "Transmit and receive frequencies are different regardless of emission mode.",
      ],
      answer: 1
    },
    {
      question: "An ITU duplex channel frequency is defined as:",
      options: [
        "Transmit and receive frequencies may be different, depending on whether communications are ship-shore or ship to ship.",
        "Transmit and receive frequencies must be identical.",
        "Transmit and receive frequencies must be different.",
        "Transmit and receive frequencies may be different, depending on whether communications are ship-shore or ship to ship.",
      ],
      answer: 2
    },
    {
      question: "Which of the following defines \"ITU Channel 1216\"?",
      options: [
        "Ch-12 in the 16 MHz band.",
        "Ch-1216 in the MF band.",
        "Ch-16 in the 12 MHz band.",
        "This would indicate the 16th channel in the 12 MHz band, but Ch-1216 does not yet exist as there are currently only 15 possible channels.",
      ],
      answer: 2
    },
    {
      question: "Which of the following is a valid 22-MHz ITU Channel?",
      options: [
        "HF Ch-2206.",
        "VHF Ch-22.",
        "Ch-22A when used for VTS communications.",
        "Ch-70 (DSC only).",
      ],
      answer: 0
    },
    {
      question: "What is meant by the term \"ITU channel\"?",
      options: [
        "This refers to a vessel's selcall number.",
        "This refers to an internationally standardized assignment of frequency pairings for common use.",
        "This refers to VHF channels 1-28 and 60-88.",
        "None of the above.",
      ],
      answer: 1
    },
    {
      question: "ITU channel 1604 would mean:",
      options: [
        "Ch-16 in the 4 MHz band.",
        "Ch-4 in the 16 MHz band.",
        "Ch-1604 in the MF band.",
        "1604 is the Channel number. It has no relevance to frequency bands.",
      ],
      answer: 1
    },
    {
      question: "ITU channels are:",
      options: [
        "Frequency assignments specific to U.S. vessels only.",
        "VHF-FM frequencies.",
        "International Traffic Utility frequencies.",
        "An international designation of specific frequencies.",
      ],
      answer: 3
    },
    {
      question: "Which statement regarding bandwidth and channel spacing is correct:",
      options: [
        "Channel spacing values are a function of bandwidth values.",
        "Bandwidth values are a function of Channel spacing values.",
        "Channel spacing values are not a function of bandwidth values.",
        "Bandwidth & channel values do not vary with emission mode.",
      ],
      answer: 0
    },
    {
      question: "The purpose of ITU channel spacing is:",
      options: [
        "To maximize the number of voice & telex channels available.",
        "To minimize the possibility of interference from adjacent channels.",
        "To make most efficient use of the radio spectrum by using voice channels rather than telex channels.",
        "To make most efficient use of the radio spectrum by using telex channels rather than voice channels.",
      ],
      answer: 1
    },
    {
      question: "Which statement regarding channel spacing and bandwidth is true?",
      options: [
        "Voice bandwidth is greater than telex bandwidth and therefore Voice channel spacing values are less than telex channel spacing values.",
        "Telex bandwidth is greater than voice bandwidth and therefore telex channel spacing values are less than voice channel spacing values.",
        "Both telex bandwidth and channel spacing values are less than voice bandwidth and channel spacing values.",
        "Both telex bandwidth and channel spacing values are greater than voice bandwidth and channel spacing values.",
      ],
      answer: 2
    },
    {
      question: "The proper sequence of channel spacing from narrow to widest is:",
      options: [
        "SSB Voice, NBDP Sitor, VHF-FM Voice.",
        "VHF-FM Voice, NBDP Sitor, SSB-Voice.",
        "NBDP Sitor, VHF-FM Voice, SSB-Voice.",
        "NBDP Sitor, SSB-Voice, VHF-FM Voice.",
      ],
      answer: 3
    },
    {
      question: "Communications with an emission of F1B/J2B would typically have a channel spacing of:",
      options: [
        "0.5 kHz 0.3 kHz",
        "2.8 kHz 3.0 kHz",
      ],
      answer: 0
    },
    {
      question: "Communications with an emission of J3E would typically have a channel spacing of:",
      options: [
        "0.5 kHz 0.3 kHz",
        "2.8 kHz 3.0 kHz",
      ],
      answer: 1
    },
    {
      question: "For RF communications, \"modulation\" is best defined as:",
      options: [
        "The combination of information or intelligence with a carrier frequency.",
        "Using a single carrier frequency with the proper power level.",
        "Setting up the transceiver with the correct bandwidth to ensure proper communications.",
        "The combination of the received frequency and oscillator frequency in the mixer.",
      ],
      answer: 0
    },
    {
      question: "For RF communications, \"bandwidth\" is best defined as:",
      options: [
        "The modulation technique required to insure proper ITU channel spacing.",
        "The emission designation resulting from the desired modulation technique.",
        "The portion of the radio spectrum consumed by a particular emission selection and modulation technique.",
        "The portion of the radio spectrum reserved for frequency allocations by the ITU.",
      ],
      answer: 2
    },
    {
      question: "In an AM signal using voice:",
      options: [
        "Varying the amplitude of the carrier and employing both sidebands without the carrier.",
        "There is a constant amplitude carrier with complex upper and lower sidebands varying in amplitude and frequency.",
        "Varying only the amplitude of the carrier, depending on Double or Single-Sideband operations.",
        "Varying the amplitude of the carrier and employing both sidebands and the carrier.",
      ],
      answer: 1
    },
    {
      question: "In FM communications, the information is applied to the carrier by:",
      options: [
        "Varying the amplitude or the frequency of the carrier, depending on Double or Single-Sideband operations.",
        "Varying the frequency of the carrier.",
        "Varying only the frequency of the carrier, depending on Double or Single-Sideband operations.",
        "Varying the amplitude of the carrier.",
      ],
      answer: 1
    },
    {
      question: "The proper sequence of emissions corresponding to the sequence AM-Voice DSB, SSB-Voice without carrier, USB-Voice with carrier and FM-Voice, is:",
      options: [
        "A3E, H3E, J3E, F3E.",
        "A3E, J3E, H3E, F3E.",
        "J3E, H3E, A3E, F3E.",
        "H3E, A3E, J3E, F3E.",
      ],
      answer: 1
    },
    {
      question: "The proper sequence of emissions corresponding to the sequence SSB-Voice without carrier, USB-Voice with carrier, FM-Voice and Sitor telex is:",
      options: [
        "H3E, J3E, F3E, F1B.",
        "J3E, H3E, F1B, F3E.",
        "J3E, H3E, F3E, F1B.",
        "H3E, J3E, F1B, F3E.",
      ],
      answer: 2
    },
    {
      question: "When placing a SSB MF/HF call to a Coast Station, you should always:",
      options: [
        "Choose the closest station to ensure a quick connection.",
        "Make sure the frequency is not occupied.",
        "Tune the transmitter on another frequency.",
        "Wait until the coast station sends his Traffic List.",
      ],
      answer: 1
    },
    {
      question: "How are high seas (HF) radiotelephone communications initially established between a vessel and a public correspondence station?",
      options: [
        "The vessel listens for and calls the public correspondence station on the NBDP calling channel with the strongest marker signal.",
        "The vessel calls the public correspondence station on VHF Channel 16 and the two stations then switch to the working channel.",
        "Public Correspondence Stations operate NBDP only.",
        "The vessel calls and establishes voice contact with the public correspondence station on a channel that the station is known to monitor, and the two stations then proceed with their business.",
      ],
      answer: 2
    },
    {
      question: "What is the best procedure for calling another ship station using HF radiotelephone when the signals are weak but readable?",
      options: [
        "On a properly selected ITU channel, give the call sign of the ship being called three times using the ICAO alphabet, and the words followed by the call sign of the ship initiating the call three times, using the ICAO alphabet, and concluding with",
        "Give the name of the ship being called three times, and the words followed by the name of the ship initiating the call three times, and concluding with",
        "Instruct the nearest public correspondence station to add the desired ship's call sign to the station's traffic list.",
        "Notify the local vessel traffic service control station of your intention to contact a specific vessel, and request the VTS operator place the call on channel 22A.",
      ],
      answer: 0
    },
    {
      question: "Through which coast radio station(s) may a U.S.-flag merchant vessel communicate?",
      options: [
        "Any coast radio station in the world that is licensed to provide such communications.",
        "Any coast radio station in the world that is licensed to provide such communications, but prior authorization must be obtained for a U.S.-flag merchant vessel to communicate through a non-U.S. station.",
        "The U.S. Coast Guard coordinates the communications and assigns the working channel.",
        "Any coast radio station in the world that has been commissioned to provide such communications.",
      ],
      answer: 0
    },
    {
      question: "What is the best source of information to find changes or additions to the routine communications frequencies of a Commercial Radio Station?",
      options: [
        "ITU List of Coast Stations Part IV.",
        "GMDSS Master Plan of Radio Stations.",
        "FCC Part 80.",
        "ITU List of Ship Stations Part VII.",
      ],
      answer: 0
    },
    {
      question: "The purpose of the MF/HF DSC controller is?",
      options: [
        "Providing for the formatting and transmission of outgoing DSC calls.",
        "Permitting control of transceiver operations via an interface.",
        "Providing the scanning watch receiver capability on the 6 MF/HF DSC frequencies.",
        "Both a) and b) are crucial functions of a DSC Controller.",
      ],
      answer: 3
    },
    {
      question: "A \"Distress Hot Key\" MF/HF DSC Distress Alert:",
      options: [
        "May go out on 2187.5 kHz or may go out on another DSC frequency, depending on the manufacturer.",
        "Must go out on 2187.5 kHz and 8414.5 kHz to trip DSC alarms on the mandatory MF/HF DSC watch frequencies.",
        "Must go out on 2187.5 kHz to alert the nearest vessels and coast stations.",
        "None of the above.",
      ],
      answer: 0
    },
  ],

  set27: [
    {
      question: "A Distress Priority DSC call may be formatted and transmitted specifying and requesting:",
      options: [
        "Nature of Distress, vessel position, follow-on frequency, only voice follow-on communications.",
        "Nature of Distress or alternate frequency but not both in a single call, vessel position or alternate frequency/emission but not both in a single call, voice or telex follow-up communications.",
        "Nature of Distress or alternate frequency but not both in a single call, vessel position or alternate frequency/emission but not both in a single call, only telex follow-up communications",
        "Nature of Distress, vessel position, follow-on frequency, only telex follow-on communications.",
      ],
      answer: 1
    },
    {
      question: "A multi-frequency MF/HF DSC Distress Alert:",
      options: [
        "Must be transmitted in ascending order of propagation radius to alert nearby ships first.",
        "May be transmitted on the mandatory MF/HF DSC watch frequencies first, and then on the others.",
        "Either a) or b), depending on the manufacturer.",
        "May be transmitted in any order programmed by the GMDSSS operator.",
      ],
      answer: 2
    },
    {
      question: "To make a call to another vessel requesting voice communications regarding important company business, the GMDSS operator should:",
      options: [
        "Select Urgent priority, enter other vessel's MMSI, specify legal alternate frequency, F1B emission and transmit the properly formatted DSC call.",
        "Select Routine priority, enter other vessel's MMSI, specify legal alternate frequency, J2B emission and transmit the properly formatted DSC call.",
        "Select Routine priority, enter own vessel's MMSI, specify legal alternate frequency, J3E emission and transmit the properly formatted DSC call.",
        "None of the above.",
      ],
      answer: 3
    },
    {
      question: "To make a call to another vessel requesting telex communications regarding important company business, the GMDSS operator should:",
      options: [
        "Select Routine priority, enter other vessel's MMSI, specify legal alternate frequency, F1B emission and transmit the properly formatted DSC call.",
        "Select Urgent priority, enter other vessel's MMSI, specify legal alternate frequency, F1B emission and transmit the properly formatted DSC call.",
        "Select Routine priority, enter own vessel's MMSI, specify legal alternate frequency, F1B emission and transmit the properly formatted DSC call.",
        "Select Routine priority, enter other vessel's SelCall for telex specify legal alternate frequency, F1B emission and transmit the properly formatted DSC call.",
      ],
      answer: 0
    },
    {
      question: "What is meant by the acronym ATOR?",
      options: [
        "Automatic Telex Over Radio.",
        "AMVER Transmittals Over Radio.",
        "Amateur Telex Over Radio.",
        "None of the above.",
      ],
      answer: 0
    },
    {
      question: "Which of the following acronyms refers to a communications system that is not based on some form of telex?",
      options: [
        "NAVTEX.",
        "SITOR.",
        "NAVCOMSTA.",
        "NBDP.",
      ],
      answer: 2
    },
    {
      question: "What does the term FEC mean in SITOR communications?",
      options: [
        "Field Effect Correction Forward Error Check",
        "Forward Error Character.",
        "None of the Above.",
      ],
      answer: 2
    },
    {
      question: "What term is nearly synonymous with ATOR?",
      options: [
        "NAVTEX.",
        "SITOR.",
        "AMTOR.",
        "NBDP.",
      ],
      answer: 1
    },
    {
      question: "The acronym SITOR stands for:",
      options: [
        "Simplified Telephony Over Radio.",
        "Simplex Telex Over Radio or Simplex Teleprinter over Radio.",
        "Simplified Telex Over Radio.",
        "Simplex Telephony Over Radio.",
      ],
      answer: 1
    },
    {
      question: "What does the term \"ARQ\" mean in SITOR operations?",
      options: [
        "Automation Repeat Request.",
        "Automatic Repeat Request.",
        "Automaton Repeat Request.",
        "Automatic Request Repeat.",
      ],
      answer: 1
    },
    {
      question: "Which of the following statements concerning SITOR communications is true?",
      options: [
        "ARQ transmissions are made in data groups consisting of three-character blocks.",
        "ARQ transmissions are acknowledged by the Information Receiving Station only at the end of the message.",
        "ARQ communications rely upon error correction by time diversity transmission and reception.",
        "Forward error correction is an interactive mode.",
      ],
      answer: 0
    },
    {
      question: "Which statement best defines the SITOR acronym \"ARQ\"?",
      options: [
        "Error correction for one-way telex broadcasts of weather or navigation information.",
        "Error Correction when 2 stations are in direct & phased telephone communications with each other.",
        "Either a) or b), depending on transceiver mode selection.",
        "None of the above.",
      ],
      answer: 3
    },
    {
      question: "Which statement best defines the SITOR acronym \"FEC\"?",
      options: [
        "Error correction for one-way telex broadcasts of weather or navigation information.",
        "Error Correction when 2 stations are in direct & phased telephone communications with each other.",
        "Error Correction when 2 stations are in direct & phased telex communications with each other.",
        "None of the above.",
      ],
      answer: 0
    },
    {
      question: "The purpose of \"parity\" in SITOR communications is?",
      options: [
        "Error correction in FEC weather and navigational broadcasts.",
        "Error correction in ARQ communications.",
        "Error correction in NAVTEX broadcasts.",
        "All of the above are true.",
      ],
      answer: 3
    },
    {
      question: "\"SITOR\" communications are based on a digital code system:",
      options: [
        "Consisting of 7 bits, with four ones and three zeros.",
        "Consisting of 7 bits, with four zeros and three ones.",
        "Consisting of 5 bits telex and 8 bits Fax.",
        "Consisting of 5 bits for ship stations and 7 bits for shore stations.",
      ],
      answer: 1
    },
    {
      question: "Which of the following would be a valid selcall for use in ARQ communications?",
      options: [
        "1106 212420 WHAQ X.",
        "Four marks (ones) and three spaces (zeroes) forming the binary signal",
        "This is established by the communications protocol used with the modem.",
      ],
      answer: 0
    },
    {
      question: "Once ARQ communication with the coast radio station has been established, which of the following exchanges will most likely take place?",
      options: [
        "The vessel then requests the coast radio station's selcall so that communication can be set up on the appropriate working channel.",
        "Since communication has already shifted to the working channel, the vessel then transmits the subscriber number and text of the message to be sent for the coast radio station to store and forward.",
        "After exchanging answerbacks with the vessel, the coast radio station transmits",
        "None of the above.",
      ],
      answer: 2
    },
    {
      question: "Which of the following methods will give a GMDSS Radio Operator the best indication of whether ARQ communication can be established with a coast radio station?",
      options: [
        "Referring to propagation charts will tell the Operator when the eruption of communication shattering solar flares will occur.",
        "Selecting a frequency in the MF band averts interference from severe static discharges.",
        "Monitor the coast radio station's and call on the frequency on which the loudest and most consistent signals are heard.",
        "Re-position the radome's antenna toward the coast radio station and press the button.",
      ],
      answer: 2
    },
    {
      question: "When placing a telex call to a Coast Station, you should always:",
      options: [
        "Choose the closest station.",
        "Make sure the frequency is not occupied with normal traffic.",
        "Tune the transmitter on another frequency.",
        "Wait until the coast station sends his Traffic List.",
      ],
      answer: 1
    },
    {
      question: "What is the best method for a GMDSS Radio Operator to determine which SITOR station to contact for the purpose of sending a chargeable message or cable?",
      options: [
        "Listen to each station's voice announcement and determine which channel(s) will be monitored.",
        "Listen to each station's free signals, and call the station generating the loudest free signal marker.",
        "Listen to each station's MSI broadcast to determine which public correspondence station to contact.",
        "Listen to the U.S. Coast Guard's traffic list to determine which Coast Guard station will handle commercial traffic.",
      ],
      answer: 1
    },
    {
      question: "Which statement is correct regarding HF NBDP under GMDSS?",
      options: [
        "Safety communications by direct-printing telegraphy should be in the ARQ mode when communicating with the U.S. Coast Guard or other coast stations on channels that they normally guard.",
        "Distress communications other than directly to the Coast Guard or other coast stations on the channels that they normally guard, should be in the broadcast SSB mode.",
        "The ARQ mode may be used subsequently to the FEC mode when it is advantageous to do so.",
        "Distress communications other than directly to the Coast Guard or other coast stations on the channels that they normally guard, should be in the broadcast FEC or SSB mode.",
      ],
      answer: 0
    },
    {
      question: "After establishing contact with a Coast Station on an available channel, which of the following exchanges take place?",
      options: [
        "The vessel will request the shore station's answerback to confirm it has reached the correct station, then the shore station operator will request billing authorization.",
        "The ship station begins transmitting the text.",
        "The coast station transmits its answerback, asks for the ship's answer back and then transmits GA+.",
        "None of these.",
      ],
      answer: 2
    },
    {
      question: "During Sitor ARQ operations through a coast station, what should the GMDSS operator do during the \"Automatic Exchange of Answerbacks.\"",
      options: [
        "Send a then a",
        "when requested by the coast station.",
        "Do nothing other than wait for a GA+ prompt.",
        "Send the necessary message file and then wait for time and charges.",
        "None of the above.",
      ],
      answer: 0
    },
    {
      question: "Assuming sending a direct telex message to a shore-based office, which sequence of events best describes a complete ARQ telex exchange with a coast station?",
      options: [
        "Initiate call, observe phasing, Automatic Exchange of Answerbacks, send message, send KKKK to terminate the telex link, receive MRN & Time and charges.",
        "Initiate call, observe phasing, Automatic Exchange of Answerbacks, send DIRTLX command with zero then telex country code, telex number, send message, send KKKK to terminate the telex link, receive MRN & Time and charges.",
        "Initiate call, observe Automatic Exchange of Answerbacks, send message, send KKKK to terminate radio link, receive MRN & Time and charges.",
        "Initiate call, observe phasing, Automatic Exchange of Answerbacks, send message, send KKKK to terminate radio link, receive MRN & Time and charges.",
      ],
      answer: 1
    },
    {
      question: "For ARQ communications with a Public Correspondence Coast Station, which sequence of events best describes reaching the point in time where the text of telex communications should be sent.",
      options: [
        "Transceiver setup, SelCall selection, Initiate Call, Automatic Exchange of Answerbacks, OPR+, operator entry of the appropriate automatic telex code.",
        "Transceiver setup, Automatic Exchange of Answerbacks, OPR+, operator entry of the appropriate automatic telex code.",
        "Transceiver setup, SelCall selection, Initiate Call, Exchange of Station Answerbacks, GA+?, enter DIRTLX xy+, MOM, MSG+? and exchange of terminal answerbacks.",
        "Transceiver setup, Automatic Exchange of Answerbacks, GA+, operator entry of the appropriate automatic telex code.",
      ],
      answer: 2
    },
    {
      question: "During ARQ communications, A Coast station will likely break the phased radio connection:",
      options: [
        "If the error percentage of repeat requests becomes too high.",
        "If the automatic exchange of answerbacks is interrupted by keyboard entries.",
        "If either a) or b) takes place.",
        "If the operator enters",
      ],
      answer: 2
    },
    {
      question: "Which of the following keystrokes or characters is sent as part of ARQ communications to signal the end of communications with a land based telex terminal?",
      options: [
        "Four s, i.e.",
        "Four s, i.e.",
        "Five periods ( ).",
      ],
      answer: 0
    },
    {
      question: "Which character(s) must follow most command codes to a coast station using ATOR?",
      options: [
        "+ #",
        "* GA+",
      ],
      answer: 0
    },
    {
      question: "Which characters are sent by the shore station to indicate that it has shifted control to and that it is awaiting instructions from the vessel?",
      options: [
        "WRU GA+?",
        "KKKK",
      ],
      answer: 0
    },
    {
      question: "All country codes which are transmitted by MF/HF Sitor are preceded by which character(s)?",
      options: [
        "0 00",
        "+ DIR",
      ],
      answer: 0
    },
  ],

  set28: [
    {
      question: "Which of the following keystrokes or characters is sent as part of ARQ communications to switch information transmission control from one station to the other?",
      options: [
        "The plus and question mark keys (",
        ", ).",
        "The go-ahead ( ) command.",
        "The key.",
        "The key.",
      ],
      answer: 0
    },
    {
      question: "Which of the following keystrokes or characters follows most commands in ARQ communications when working an automated Coast Station?",
      options: [
        "The plus ( ) key.",
        "The go-ahead ( ) command.",
        "The key.",
        "The key.",
      ],
      answer: 0
    },
    {
      question: "Which characters are sent by the ship station when operating HF telex, to indicate a desire to send an AMVER message?",
      options: [
        "MSG+ DIRTLX+",
        "AMV+ OPR+",
      ],
      answer: 1
    },
    {
      question: "Which characters are sent by the ship station to indicate a desire to send a message via a direct connection to a shoreside telex subscriber?",
      options: [
        "MSG+ DIRTLX0xxyyyy+",
        "AMV+ OPR+",
      ],
      answer: 0
    },
    {
      question: "What is the procedure used to terminate the radio circuit?",
      options: [
        "The END command.",
        "CONTROL, ALT AND DELETE keys.",
        "BRK+.",
        "Shut off the telex printer.",
      ],
      answer: 2
    },
    {
      question: "What statement is true regarding the exchange between two parties engaged in SITOR communications?",
      options: [
        "In ARQ, each character is transmitted twice, with the second displaced in time from the first.",
        "In ARQ, the station transmits a block of three characters and the",
        "station responds with a one character acknowledgement. Following this the station will send a new block.",
        "In ARQ, the station transmits a block of three characters and the",
        "station responds with either a one-character acknowledgement of the receipt of a valid block or a negative acknowledgement indicating that the block should be re-sent. Following this the station will send a new block or retransmit the previous block, as required.",
        "Broadcasts of Marine Safety Information, traffic lists, etc. can be copied by the receiving station in ARQ mode.",
      ],
      answer: 1
    },
    {
      question: "Of the following, which is true of SITOR ARQ mode direct printing radioteletype transmission?",
      options: [
        "Each data block consists of three characters.",
        "The acceptance code consists of three characters.",
        "A continuous data stream is transmitted.",
        "Forward error correction reduces the number of errors.",
      ],
      answer: 0
    },
    {
      question: "Which of the following is true of SITOR ARQ mode?",
      options: [
        "This is an interactive mode.",
        "Each character is repeated three times.",
        "Each character is transmitted twice.",
        "This mode is generally used to broadcast messages.",
      ],
      answer: 0
    },
    {
      question: "What should happen when an RQ code is received by a SITOR station which is sending message traffic?",
      options: [
        "The last block will be resent.",
        "The next block will be sent.",
        "The data link will break.",
        "The acknowledge light should illuminate.",
      ],
      answer: 0
    },
    {
      question: "Which of the following is true of Sitor ARQ mode:",
      options: [
        "The ship station sends a group of 3 characters twice and then waits for an signal to indicate proper receipt before continuing transmission.",
        "The Ship station sends each character twice, using a Time Diversity system to ensure proper parity.",
        "The ship station sends a group of 3 characters, the shore station checks for proper parity and then requests the same group be resent to enable error correction.",
        "The ship station sends a group of 3 characters, the shore station checks for proper parity. If parity is ok, the shore station indicates readiness for transmission of the next 3 characters.",
      ],
      answer: 2
    },
    {
      question: "The DIRTLX command should be given to a coast station at what point in time?",
      options: [
        "Immediately following the Automatic Exchange of Answerbacks.",
        "After receipt of the Go Ahead indication followed by the Automatic Exchange of Answerbacks.",
        "Sent at the beginning of the message to request a direct telex connection.",
        "After receipt of the Go Ahead indication following the Automatic Exchange of Answerbacks.",
      ],
      answer: 3
    },
    {
      question: "Which Automatic telex command should be sent by a ship station during Sitor operations to properly address a weather report to the national weather authority?",
      options: [
        "WX+ followed by the text of the report.",
        "OBS+ OBS+ then MSG+ to indicate weather report.",
        "GA+ then OBS+.",
      ],
      answer: 1
    },
    {
      question: "Which of the following would be a valid automatic telex code and number for a request for a real-time telex connection to a shore-based telex terminal?",
      options: [
        "DIRTLX023424998+.",
        "DIRTLX then waits for MSG+ to dial 023419645+.",
        "DIRTLX23122445+.",
        "DIRTLX then after GA+ then sends telex number.",
      ],
      answer: 0
    },
    {
      question: "When requesting a direct telex connection to a vessel's Inmarsat-A terminal, (i.e. making a sitor call to an Inmarsat-A unit) the GMDSS operator must:",
      options: [
        "DIRTLX, 00, Ocean Area Code, telex number, +.",
        "DIRTLX, 0, Ocean Area Code, telex number, +.",
        "DIRTLX, 0, Country code, telex number, +.",
        "None of the above.",
      ],
      answer: 1
    },
    {
      question: "To correctly address a Sitor message and transmit it \"live\" to a shore-based office the GMDSS operator would dial which sequence:",
      options: [
        "DIRTLX051440344+ DIRTLX0051440344+",
        "DIRTLX581440344+ DIRTLX05811500260+",
      ],
      answer: 0
    },
    {
      question: "Which of the following is true of SITOR FEC in the presence of impulse-type interference?",
      options: [
        "Data flow rate depends on signal propagation.",
        "Idle characters are sent upon request.",
        "Transmitter and receiver cannot synchronize.",
        "The error rate is reduced by time diversity reception.",
      ],
      answer: 3
    },
    {
      question: "The sequence ARQ, FEC, SFEC best corresponds to which of the following sequences?",
      options: [
        "One-way communications to a single station, one-way communications to all stations, two-way communications.",
        "One-way communications to all stations, two-way communications, one-way communications to a single station.",
        "Two way communications, one-way communications to all stations, one-way communications to a single station.",
        "Two way communications, One way communications to a single station, One way communications to all stations.",
      ],
      answer: 2
    },
    {
      question: "The sequence BFEC, SFEC, ARQ best corresponds to which of the following sequences?",
      options: [
        "One-way communications to a single station, one-way communications to all stations, two-way communications.",
        "One-way communications to all stations, two way communications, one-way communications to a single station.",
        "Two way communications, one-way communications to all stations, two-way communications.",
        "None of the above.",
      ],
      answer: 3
    },
    {
      question: "Selective FEC communications (SFEC) are employed when:",
      options: [
        "Multiple stations without a group selcall must receive communications without using their transmitters (Radio Silence).",
        "Multiple stations must receive communications by using their transmitters to achieve phasing.",
        "An individual station must receive communications without using any transmitters (Radio Silence).",
        "An individual station must receive communications by using their transmitter to achieve phasing and block other stations from breaking in.",
      ],
      answer: 2
    },
    {
      question: "If the vessel is within range of NAVTEX broadcasts and both the Inmarsat-C and the NAVTEX receiver are inoperative the GMDSS operator should:",
      options: [
        "Select 518 kHz ARQ telex on the MF/HF console to receive MSI.",
        "Request repairs of the Sat-C system and wait until within range of NAVTEX.",
        "Select an HF MSI frequency and ARQ telex mode to receive MSI.",
        "Select 518 kHz FEC telex on the MF/HF console to receive MSI.",
      ],
      answer: 3
    },
    {
      question: "If the vessel is beyond range of NAVTEX broadcasts and the Sat-C system fails, the GMDSS operator must:",
      options: [
        "Select 518 kHz ARQ telex on the MF/HF console to receive MSI.",
        "Request repairs of the Sat-C system and wait until within range of NAVTEX.",
        "Select an HF MSI frequency and FEC telex mode to receive MSI.",
        "Select 518 kHz FEC telex on the MF/HF console to receive MSI.",
      ],
      answer: 2
    },
    {
      question: "If the vessel is experiencing atmospheric interference with NAVTEX broadcasts, especially in the tropics, the GMDSS operator should:",
      options: [
        "Select one of the 6 HF MSI frequencies and set-up the transceiver in ARQ telex mode.",
        "Select one of the 6 MF MSI frequencies and set-up the transceiver in FEC telex mode.",
        "Select one of the 8 HF MSI frequencies and set-up the transceiver in FEC telex mode.",
        "Select the MF MSI frequency dedicated to tropical MSI and set-up the transceiver in FEC telex mode.",
      ],
      answer: 2
    },
    {
      question: "Why must the GMDSS operator be able to set-up FEC & ARQ modes and differentiate between them?",
      options: [
        "The proper mode must be selected for reception of HF MSI.",
        "The proper mode must be selected for follow-on telex communications in a distress situation.",
        "The ARQ telex mode must be selected for follow-on telex communications in a distress situation and the FEC telex mode selected for reception of HF MSI.",
        "Both a) and b) are correct.",
      ],
      answer: 3
    },
    {
      question: "FEC Sitor transmissions might be used to?",
      options: [
        "Receive Coast station traffic lists, NAVTEX and VHF MSI broadcasts.",
        "Send and receive distress telex communications, receive HF MSI and NAVTEX.",
        "Receive weather messages or Coast Station traffic lists.",
        "Either b or c might be possible.",
      ],
      answer: 3
    },
    {
      question: "FEC NBDP transmissions are normally used to?",
      options: [
        "Receive Coast station traffic lists, NAVTEX and VHF MSI broadcasts.",
        "Receive HF MSI and NAVTEX.",
        "Receive weather messages, Coast Station traffic lists and company messages.",
        "None of the above.",
      ],
      answer: 1
    },
    {
      question: "The \"short rules\" of propagation necessary to select the appropriate frequency band are:",
      options: [
        "Shorter Distance = Higher Frequency, Daytime = Higher Frequency.",
        "Shorter Distance = Higher Frequency, Daytime = Lower Frequency.",
        "Shorter Distance = Lower Frequency, Daytime = Higher Frequency.",
        "Shorter Distance = Lower Frequency, Daytime = Lower Frequency.",
      ],
      answer: 2
    },
    {
      question: "GMDSS operators should learn which of the following propagation \"rules of thumb\"?",
      options: [
        "Longer distance = lower frequency, Shorter Distance = higher frequency; Daytime = higher frequency, nighttime = lower frequency.",
        "Longer distance = lower frequency, Shorter Distance = lower frequency, Daytime = lower frequency, nighttime = higher frequency.",
        "Longer distance = higher frequency, Shorter Distance = lower frequency, Daytime = higher frequency, nighttime = lower frequency.",
        "Longer distance = higher frequency, Shorter Distance = higher frequency, Daytime = lower frequency, nighttime = higher frequency.",
      ],
      answer: 2
    },
    {
      question: "Which of the following is a source of solar flux conditions that can be used with propagation software as an aid in predicting the best frequency band to use for HF radio communications?",
      options: [
        "Hourly announcements from WWV and WWVH.",
        "Hourly forecast broadcasts from CHU.",
        "Every public correspondence station provides propagation forecasting services.",
        "Doppler weather satellite broadcasts.",
      ],
      answer: 0
    },
    {
      question: "GMDSS operators should routinely focus on the factors affecting propagation in what priority?",
      options: [
        "Distance & Time of Day, Seasonal variations, Sunspot cycle, Solar flare alerts.",
        "Sunspot cycle, Distance & Time of Day, Seasonal variations, Solar flare Alerts.",
        "Solar flare alerts, Distance & Time of Day, Sunspot cycle, Seasonal variations.",
        "Solar flare alerts, Sunspot cycle, Seasonal variations, Distance & Time of Day.",
      ],
      answer: 0
    },
    {
      question: "Which statement concerning frequency band selection and propagation most corresponds with standard practice.",
      options: [
        "Maximum Usable Frequency (MUF) and Optimum Usable Frequency (OUF) should be calculated prior to setting up the transceiver.",
        "Propagation rules, Sunspot cycle status and seasonal variations (winter & summer) must always be employed to calculate the proper band selection.",
        "Propagation are usually sufficient for routine operations.",
        "Propagation should be combined with Solar flare alerts to determine band selection.",
      ],
      answer: 2
    },
  ],

  set29: [
    {
      question: "To ensure effective communications, GMDSS operators should:",
      options: [
        "Rely on the equipment calculations of Optimum Usable Frequency.",
        "Employ the short rules of propagation selection.",
        "Rely on previous successful communications on the selected frequency band.",
        "Taken together, both b and c are good operational practices.",
      ],
      answer: 3
    },
    {
      question: "A ship at anchor has been communicating effectively with a shore station approximately 500 miles (805 km) distant on a frequency in the 16 MHz band periodically throughout the day. Toward the late afternoon and evening, what effect should be noticed?",
      options: [
        "Communications should be maintained with slight improvement in the signal received from the shore station.",
        "The gray line effect will prevent communications after dark.",
        "Communications should gradually deteriorate and become impossible on this frequency at night.",
        "Communications should improve and peak at night.",
      ],
      answer: 2
    },
    {
      question: "A ship at anchor has been communicating marginally with a shore station approximately 200 miles (322 km) distant on a frequency in the 4 MHz band periodically throughout the day. Toward the late afternoon and evening, what effect should be noticed?",
      options: [
        "Communications should be maintained with slight improvement in the signal received from the shore station.",
        "Communications should slowly deteriorate but may be continued throughout the night.",
        "Communications should gradually deteriorate and become impossible on this frequency by night.",
        "Communications should gradually improve and peak at night and early morning.",
      ],
      answer: 3
    },
    {
      question: "At mid-day in summer, what would be the best choice in attempting to communicate, using NBDP with a shore station some 800 miles (1,287 km) distant?",
      options: [
        "VHF-FM.",
        "Higher HF bands.",
        "Lower HF bands.",
        "MF",
      ],
      answer: 1
    },
    {
      question: "At mid-night, what would be the best choice in attempting to communicate, using NBDP with a shore station some 800 miles (1,287 km) distant?",
      options: [
        "VHF-FM.",
        "Higher UHF bands.",
        "HF bands.",
        "Communications is impossible at this distance.",
      ],
      answer: 2
    },
    {
      question: "At mid-day, what would be the best choice in attempting to communicate with a shore station some 75 miles (121 km) distant?",
      options: [
        "VHF-FM.",
        "22 MHz band.",
        "16 MHz band.",
        "MF",
      ],
      answer: 3
    },
    {
      question: "How can a radio operator determine the best frequency band to choose for a SITOR transmission to a shore station?",
      options: [
        "By consulting propagation tables.",
        "If static interference is present, try lower bands first.",
        "Listen to shore station ; choose the band with the strongest.",
        "During nighttime, choose highest frequencies. Choose lower frequencies in the daytime.",
      ],
      answer: 2
    },
    {
      question: "The Distress Alarm sounds and the screen readout no longer contains the particulars of the Distress:",
      options: [
        "Examine the printer to determine if the particulars were routed to the printer.",
        "Examine the Transmit Data Directory.",
        "Both a) and d) are correct.",
        "Examine the Received Data Directory.",
      ],
      answer: 2
    },
    {
      question: "A DSC Distress call is received by your vessel and your transceiver frequency display reads: Transmit = 4207.5 kHz and Receive = 4207.5 kHz - what information can you infer from this?",
      options: [
        "The DSC controller decoded the requested voice frequency as 4207.5 kHz Simplex and your DSC controller has automatically set-up your transceiver.",
        "The DSC controller decoded the contents of the DSC call but the request is illegal.",
        "Both a) and b) are true.",
        "The DSC call came in on 4 MHz DSC and you should set-up your transmitter and respond on the appropriate voice follow-on frequency.",
      ],
      answer: 3
    },
    {
      question: "You receive an Urgent DSC call to all vessels specifying an alternate telex frequency & emission. If your transceiver frequency display reads: 2174.5 kHz transmit & 4207.5 kHz receive:",
      options: [
        "Either the call was incorrectly formatted by the other vessel or the other vessel has presumably lost MF/HF voice capability.",
        "The DSC controller decoded the contents of the DSC call but the request is illegal.",
        "Both a) and d) are true.",
        "The DSC call came in on 4 MHz DSC but either the call was incorrectly formatted by the other vessel or your controller failed to decode the receive field of the alternate frequency entry and only your Transmit set-up is correct.",
      ],
      answer: 2
    },
    {
      question: "You receive a Routine DSC call specifying an alternate working voice frequency & emission. Your transceiver frequency display reads: 4125.0 kHz transmit 4125.0 kHz receive:",
      options: [
        "The requested alternate working channel was 4125.0 kHz Simplex and your DSC controller has automatically set-up your transceiver.",
        "The DSC controller decoded the contents of the DSC call and has automatically set-up your transceiver but the request is illegal.",
        "Both a) and b) are true.",
        "The DSC call came in on 4125 kHz and you should respond on the alternate working frequency.",
      ],
      answer: 2
    },
    {
      question: "You receive a Routine DSC call to your vessel, without specifying an alternate working voice frequency & emission. If your transceiver frequency display reads: 2177 kHz transmit 2177 kHz receive what must you do?",
      options: [
        "Tune the transmitter and make a voice call to the other vessel on 2187.5 kHz.",
        "Access the data directory to determine the alternate frequency and then make a voice call to the other vessel on the alternate frequency.",
        "Manually Acknowledge the DSC call on the alternate frequency, then make a voice call to the other vessel on 2182.0 kHz.",
        "Call other vessel on 2182.0 kHz and shift to a proper working frequency.",
      ],
      answer: 3
    },
    {
      question: "An incoming DSC Distress Alert on 8414.5 kHz will have what result?",
      options: [
        "The DSC controller will emit both an audible and visual alarm.",
        "The particulars of the alert may be printed out.",
        "The distress information contained in the alert will be sent to the data directory.",
        "All of the above.",
      ],
      answer: 3
    },
    {
      question: "What usually comprises a coast station's call sign?",
      options: [
        "Three numerals from a group assigned to the coast station's nation by the ITU.",
        "Four numerals from a group assigned to the coast station's nation by the ITU.",
        "Three letters from a group assigned to the coast station's nation by the ITU.",
        "Four letters from a group assigned to the coast station's nation by the ITU.",
      ],
      answer: 2
    },
    {
      question: "What is the term normally used to describe a scheduled broadcast by a coast station to identify those vessels for which the coast station is holding message traffic?",
      options: [
        "AAIC list.",
        "Traffic Radio Service (TRS).",
        "Traffic list.",
        "Mobile Traffic Radio Service (MTRS).",
      ],
      answer: 2
    },
    {
      question: "How often does a coast radio station that regularly broadcasts traffic lists transmit the list?",
      options: [
        "As often as is deemed necessary to effect delivery.",
        "No less often than every four hours.",
        "Only on an as-needed basis.",
        "Once per 24-hour period.",
      ],
      answer: 1
    },
    {
      question: "What is an accounting authority?",
      options: [
        "An agency responsible for collecting payments on behalf of a vessel.",
        "An agency responsible for verifying the accuracy of a shipping company's financial records.",
        "An agency responsible for settling a vessel's financial accounts for chargeable communications.",
        "An agency responsible for establishing tariff rates for commercial communications.",
      ],
      answer: 2
    },
    {
      question: "What message charges are incurred when sending a ship's business message through a public correspondence station?",
      options: [
        "Ship station (SS) and land line (LL) charges.",
        "Ship station (SS) and coast (CC) charges.",
        "Ship station (SS), coast (CC), and land line (LL) charges.",
        "Coast (CC) and land line (LL) charges.",
      ],
      answer: 3
    },
    {
      question: "What are the primary components of a formal message or cable sent from a vessel to a coast radio station for delivery?",
      options: [
        "Date/time group, address, text, and signature.",
        "Preamble, address, text, and signature.",
        "Preamble, service instructions, address, text, and signature.",
        "Service instructions, address, text, and signature.",
      ],
      answer: 1
    },
    {
      question: "Which of the following conditions would be a symptom of malfunction in a 2182 kHz radiotelephone system which must be reported to an onboard or at-sea maintainer under GMDSS?",
      options: [
        "Much higher noise level observed during daytime operation.",
        "No indication of power output when speaking into the microphone.",
        "When testing a radiotelephone alarm on 2182 kHz into an artificial antenna, the distress frequency watch receiver becomes unmuted, an improper testing procedure.",
        "Failure to contact a shore station 600 nautical miles distant during daytime operation.",
      ],
      answer: 1
    },
    {
      question: "Which would indicate a malfunction in a 2182 kHz radiotelephone system?",
      options: [
        "No discernable traffic has been heard on the 2182 kHz during the radiotelephone silent periods.",
        "Failure to contact another station 60 miles distant during daytime operation.",
        "Dramatic decrease in noise level observed during night and early morning hours.",
        "The visual indication of power to the antenna fluctuates while testing the radiotelephone alarm signal generator into an artificial antenna.",
      ],
      answer: 1
    },
    {
      question: "Which would indicate proper operation of a SSB transmitter rated at 60 Watt PEP output in J3E mode?",
      options: [
        "In SITOR communications, the power meter can be seen fluctuating regularly from zero to the 60 watt relative output reading.",
        "In SSB (J3E) voice mode, with the transmitter keyed but without speaking into the microphone, no power output is indicated.",
        "In SSB (J3E) mode, speaking into the microphone causes the power meter to fluctuate well above the 60 watt reading.",
        "A steady indication of transmitted energy on an RF power meter with no fluctuations when speaking into the microphone.",
      ],
      answer: 1
    },
    {
      question: "Which would be an indication of proper operation of a SSB transmitter rated at 60 watt PEP output?",
      options: [
        "In Sitor communications, the power meter can be seen fluctuating regularly from zero to the 60 watt relative output reading.",
        "In SSB (J3E) voice mode, with the transmitter keyed but without speaking into the microphone, power output is indicated.",
        "In SSB (J3E) mode, speaking into the microphone causes power meter to fluctuate slightly around the 60 watt reading.",
        "A steady indication of transmitted energy on an RF Power meter with no fluctuations when speaking into the microphone.",
      ],
      answer: 0
    },
    {
      question: "There are no signals or static heard in the receiver of the SSB Transceiver, although a loud noise is heard if the volume control is advanced all the way up, what is a possible cause?",
      options: [
        "The antenna or feedline has been damaged.",
        "The antenna switch has been transferred to the test position.",
        "A defective receiver.",
        "Any of these.",
      ],
      answer: 3
    },
    {
      question: "What would be an indication of a malfunction on a GMDSS station with a 24 VDC battery system?",
      options: [
        "A constant 30 volt reading on the GMDSS console voltmeter.",
        "After testing the station on battery power, the ammeter reading indicates a high rate of charge that then declines.",
        "After testing the station on battery power, a voltmeter reading of 30 volts for brief period followed by a steady 26 volt reading.",
        "None of the above.",
      ],
      answer: 0
    },
  ],
};
