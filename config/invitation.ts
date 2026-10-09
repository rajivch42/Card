export interface BilingualText {
  hi: string;
  en: string;
}

export interface WeddingEvent {
  key: string;
  name: BilingualText;
  subtitle?: BilingualText;
  date: BilingualText;
  time: BilingualText;
  venue: BilingualText;
  mapsUrl: string;
  image: string;
  microAnimation: "fire" | "haldi" | "phere";
}

export interface InvitationConfig {
  theme: "awadhi" | "kashi" | "mughal" | "braj" | "scroll";
  defaultLang: "hi" | "en";
  city: BilingualText;
  state: BilingualText;
  couple: {
    groom: {
      name: BilingualText;
      parents: BilingualText;
      grandparents: BilingualText;
    };
    bride: {
      name: BilingualText;
      parents: BilingualText;
      grandparents: BilingualText;
    };
    monogram: string;
  };
  blessing: {
    shloka: string;
    shlokaMeaning: BilingualText;
    line: BilingualText;
    motifImage: string;
  };
  saveTheDate: {
    reveals: [string, string, string]; // [Day, Month, Year]
    countdownTo: string; // ISO string
  };
  events: WeddingEvent[];
  venueDetails: {
    title: BilingualText;
    venueName: BilingualText;
    address: BilingualText;
    mapsUrl: string;
    image: string;
    station: BilingualText;
    airport: BilingualText;
    parking: BilingualText;
  };
  closing: {
    darshanabhilashi: BilingualText;
    family: BilingualText;
    warmNote: BilingualText;
  };
  music: {
    title: string;
    trackUrl: string;
  };
}

export const invitationConfig: InvitationConfig = {
  theme: "awadhi",
  defaultLang: "hi",
  city: {
    hi: "पट्टी, प्रतापगढ़",
    en: "Patti, Pratapgarh",
  },
  state: {
    hi: "उत्तर प्रदेश",
    en: "Uttar Pradesh",
  },
  couple: {
    groom: {
      name: {
        hi: "विपुल चौरसिया",
        en: "Vipul Chaurasiya",
      },
      parents: {
        hi: "श्रीमती दुर्गादेवी चौरसिया एवं श्री सुरेश चौरसिया",
        en: "Smt. Durgadevi Chaurasiya & Shri Suresh Chaurasiya",
      },
      grandparents: {
        hi: "पौत्र: श्रीमती मूर्तिदेवी एवं श्री सालिकराम चौरसिया",
        en: "Grandson of Smt. Murtidevi & Shri Salikram Chaurasiya",
      },
    },
    bride: {
      name: {
        hi: "सेजल चौरसिया",
        en: "Sejal Chaurasia",
      },
      parents: {
        hi: "सुपुत्री: श्रीमती एवं श्री चौरसिया",
        en: "Daughter of Smt. & Shri Chaurasia",
      },
      grandparents: {
        hi: "पौत्री: दादी-दादा चौरसिया परिवार",
        en: "Granddaughter of Chaurasia Family Elders",
      },
    },
    monogram: "V ♥ S",
  },
  blessing: {
    shloka: "वक्रतुण्ड महाकाय सूर्यकोटि समप्रभ।\nनिर्विघ्नं कुरु मे देव सर्वकार्येषु सर्वदा॥",
    shlokaMeaning: {
      hi: "हे वक्रतुण्ड, महाकाय, करोड़ों सूर्यों के समान तेजस्वी प्रभु! हमारे समस्त कार्यों को सदैव निर्विघ्न संपन्न करें।",
      en: "O Lord with curved trunk and brilliance of a million suns, bless our beginnings and remove all obstacles always.",
    },
    line: {
      hi: "परमपिता परमेश्वर एवं पूज्य गुरुजनों के आशीर्वाद से, हमारे सुपुत्र के शुभ विवाह के पावन अवसर पर आप सपरिवार सादर आमंत्रित हैं।",
      en: "With the divine blessings of the Almighty & our respected elders, we joyfully invite you with your family to grace the auspicious wedding celebration of",
    },
    motifImage: "/images/radha_krishna.jpg",
  },
  saveTheDate: {
    reveals: ["11", "12", "2026"],
    countdownTo: "2026-12-11T19:00:00+05:30",
  },
  events: [
    {
      key: "havan",
      name: {
        hi: "हवन एवं मंडपाच्छादन",
        en: "Mandap & Sacred Havan",
      },
      subtitle: {
        hi: "वैदिक मंत्रोच्चार एवं कुलदेवता पूजन",
        en: "Auspicious Vedic Havan Ceremony",
      },
      date: {
        hi: "बुधवार, 9 दिसंबर 2026",
        en: "Wednesday, December 9, 2026",
      },
      time: {
        hi: "प्रातः 10:00 बजे से",
        en: "10:00 AM onwards",
      },
      venue: {
        hi: "निज निवास — रेडीगरापुर, पट्टी, प्रतापगढ़",
        en: "Family Residence — Redigarapur, Patti, Pratapgarh",
      },
      mapsUrl:
        "https://www.google.com/maps/place/25%C2%B054'42.4%22N+82%C2%B016'09.9%22E/@25.911764,82.2691625,87m/data=!3m1!1e3!4m12!1m7!3m6!1s0x3990750015412ed3:0xc5dbe1b16e94a9a5!2sRedigarapur+Patti+pratapgarh!8m2!3d25.9092192!4d82.2719086!16s%2Fg%2F11lyt2mmr7!3m3!8m2!3d25.911768!4d82.269428",
      image: "/images/havan.png",
      microAnimation: "fire",
    },
    {
      key: "haldi",
      name: {
        hi: "मयन एवं हल्दी उत्सव",
        en: "Mayan & Auspicious Haldi",
      },
      subtitle: {
        hi: "हल्दी, उबटन एवं मंगल गान",
        en: "Turmeric Ritual & Folk Songs",
      },
      date: {
        hi: "गुरुवार, 10 दिसंबर 2026",
        en: "Thursday, December 10, 2026",
      },
      time: {
        hi: "दोपहर 2:00 बजे से",
        en: "2:00 PM onwards",
      },
      venue: {
        hi: "निज निवास — रेडीगरापुर, पट्टी, प्रतापगढ़",
        en: "Family Residence — Redigarapur, Patti, Pratapgarh",
      },
      mapsUrl:
        "https://www.google.com/maps/place/25%C2%B054'42.4%22N+82%C2%B016'09.9%22E/@25.911764,82.2691625,87m/data=!3m1!1e3!4m12!1m7!3m6!1s0x3990750015412ed3:0xc5dbe1b16e94a9a5!2sRedigarapur+Patti+pratapgarh!8m2!3d25.9092192!4d82.2719086!16s%2Fg%2F11lyt2mmr7!3m3!8m2!3d25.911768!4d82.269428",
      image: "/images/haldi.png",
      microAnimation: "haldi",
    },
    {
      key: "vivah",
      name: {
        hi: "शुभ विवाह (पाणिग्रहण संस्कार)",
        en: "Shubh Vivah (Wedding & Pheras)",
      },
      subtitle: {
        hi: "बारात स्वागत, वरमाला एवं सात फेरे",
        en: "Baraat Welcome, Varmala & Sacred Pheras",
      },
      date: {
        hi: "शुक्रवार, 11 दिसंबर 2026",
        en: "Friday, December 11, 2026",
      },
      time: {
        hi: "सायं 7:00 बजे से (शुभ मुहूर्त)",
        en: "7:00 PM onwards (Auspicious Mahurat)",
      },
      venue: {
        hi: "विवाह स्थल — पट्टी, प्रतापगढ़ (उत्तर प्रदेश)",
        en: "Wedding Arena — Patti, Pratapgarh (Uttar Pradesh)",
      },
      mapsUrl:
        "https://www.google.com/maps/place/25%C2%B054'42.4%22N+82%C2%B016'09.9%22E/@25.911764,82.2691625,87m/data=!3m1!1e3!4m12!1m7!3m6!1s0x3990750015412ed3:0xc5dbe1b16e94a9a5!2sRedigarapur+Patti+pratapgarh!8m2!3d25.9092192!4d82.2719086!16s%2Fg%2F11lyt2mmr7!3m3!8m2!3d25.911768!4d82.269428",
      image: "/images/vivah.jpg",
      microAnimation: "phere",
    },
  ],
  venueDetails: {
    title: {
      hi: "विवाह स्थल एवं यात्रा मार्गदर्शन",
      en: "Venue & Travel Guide",
    },
    venueName: {
      hi: "पट्टी, प्रतापगढ़ (उत्तर प्रदेश)",
      en: "Patti, Pratapgarh (Uttar Pradesh)",
    },
    address: {
      hi: "ग्राम: रेडीगरापुर, तहसील: पट्टी, जनपद: प्रतापगढ़, उत्तर प्रदेश",
      en: "Redigarapur, Patti Tehsil, District Pratapgarh, Uttar Pradesh",
    },
    mapsUrl:
      "https://www.google.com/maps/place/25%C2%B054'42.4%22N+82%C2%B016'09.9%22E/@25.911764,82.2691625,87m/data=!3m1!1e3!4m12!1m7!3m6!1s0x3990750015412ed3:0xc5dbe1b16e94a9a5!2sRedigarapur+Patti+pratapgarh!8m2!3d25.9092192!4d82.2719086!16s%2Fg%2F11lyt2mmr7!3m3!8m2!3d25.911768!4d82.269428",
    image: "/images/venue.jpg",
    station: {
      hi: "प्रतापगढ़ जंक्शन (PBH) — 24 किमी | माँ बेल्हा देवी धाम",
      en: "Pratapgarh Junction (PBH) — 24 km",
    },
    airport: {
      hi: "प्रयागराज एयरपोर्ट (IXD) — 75 किमी | वाराणसी (VNS) — 110 किमी",
      en: "Prayagraj Airport (IXD) — 75 km | Varanasi Airport — 110 km",
    },
    parking: {
      hi: "विवाह स्थल पर सुगम एवं सुरक्षित वाहन पार्किंग की पूर्ण व्यवस्था है।",
      en: "Convenient & secure vehicle parking is arranged at the venue.",
    },
  },
  closing: {
    darshanabhilashi: {
      hi: "॥ दर्शनाभिलाषी ॥",
      en: "With Warm Regards",
    },
    family: {
      hi: "श्रीमती मूर्तिदेवी — श्री सालिकराम चौरसिया\nश्रीमती दुर्गादेवी — श्री सुरेश चौरसिया\nएवं समस्त चौरसिया परिवार",
      en: "Smt. Murtidevi — Shri Salikram Chaurasiya\nSmt. Durgadevi — Shri Suresh Chaurasiya\n& All Family Elders & Relatives",
    },
    warmNote: {
      hi: "आपकी गरिमामयी उपस्थिति ही हमारा परम सौभाग्य एवं नवदम्पति के लिए अनमोल आशीष होगी।",
      en: "Your gracious presence will be our greatest honor and the most precious blessing for the newlywed couple.",
    },
  },
  music: {
    title: "Jashn-e-Bahara (Instrumental Flute & Sitar)",
    trackUrl: "/audio/jashn_e_bahara.mp3",
  },
};
