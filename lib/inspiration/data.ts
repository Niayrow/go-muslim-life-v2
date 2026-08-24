export type InspirationKind = "verse" | "hadith";

export type InspirationItem = {
  id: string;
  kind: InspirationKind;
  arabic: string;
  translation: string;
  reference: string;
  sourceLabel: string;
  sourceUrl: string;
};

export const INSPIRATION_ITEMS: InspirationItem[] = [
  {
    id: "verse-94-5",
    kind: "verse",
    arabic: "فَإِنَّ مَعَ ٱلْعُسْرِ يُسْرًا",
    translation: "Avec la difficulté vient certes la facilité.",
    reference: "Ash-Sharh · 94:5",
    sourceLabel: "Coran 94:5",
    sourceUrl: "https://quran.com/94/5?translations=31",
  },
  {
    id: "hadith-bukhari-1",
    kind: "hadith",
    arabic: "إِنَّمَا الأَعْمَالُ بِالنِّيَّاتِ، وَإِنَّمَا لِكُلِّ امْرِئٍ مَا نَوَى",
    translation:
      "Les actes ne valent que par les intentions, et chacun n’aura que ce qu’il a eu comme intention.",
    reference: "Sahih al-Bukhari · 1",
    sourceLabel: "Hadith authentique",
    sourceUrl: "https://sunnah.com/bukhari:1",
  },
  {
    id: "verse-2-286",
    kind: "verse",
    arabic: "لَا يُكَلِّفُ ٱللَّهُ نَفْسًا إِلَّا وُسْعَهَا",
    translation: "Allah n’impose à aucune âme une charge supérieure à sa capacité.",
    reference: "Al-Baqara · 2:286",
    sourceLabel: "Coran 2:286",
    sourceUrl: "https://quran.com/2/286?translations=31",
  },
  {
    id: "hadith-muslim-2699",
    kind: "hadith",
    arabic: "مَنْ سَلَكَ طَرِيقًا يَلْتَمِسُ فِيهِ عِلْمًا سَهَّلَ اللَّهُ لَهُ بِهِ طَرِيقًا إِلَى الْجَنَّةِ",
    translation:
      "Celui qui emprunte un chemin à la recherche d’une science, Allah lui facilite par cela un chemin vers le Paradis.",
    reference: "Sahih Muslim · 2699",
    sourceLabel: "Hadith authentique",
    sourceUrl: "https://sunnah.com/muslim:2699",
  },
  {
    id: "verse-13-28",
    kind: "verse",
    arabic:
      "ٱلَّذِينَ ءَامَنُوا۟ وَتَطْمَئِنُّ قُلُوبُهُم بِذِكْرِ ٱللَّهِ ۗ أَلَا بِذِكْرِ ٱللَّهِ تَطْمَئِنُّ ٱلْقُلُوبُ",
    translation:
      "Ceux qui ont cru et dont les cœurs se tranquillisent à l’évocation d’Allah. N’est-ce point par l’évocation d’Allah que se tranquillisent les cœurs ?",
    reference: "Ar-Ra‘d · 13:28",
    sourceLabel: "Coran 13:28",
    sourceUrl: "https://quran.com/13/28?translations=31",
  },
  {
    id: "hadith-bukhari-13",
    kind: "hadith",
    arabic: "لاَ يُؤْمِنُ أَحَدُكُمْ حَتَّى يُحِبَّ لأَخِيهِ مَا يُحِبُّ لِنَفْسِهِ",
    translation:
      "Aucun de vous ne croit vraiment tant qu’il n’aime pas pour son frère ce qu’il aime pour lui-même.",
    reference: "Sahih al-Bukhari · 13",
    sourceLabel: "Hadith authentique",
    sourceUrl: "https://sunnah.com/bukhari:13",
  },
  {
    id: "verse-39-53",
    kind: "verse",
    arabic:
      "قُلْ يَٰعِبَادِىَ ٱلَّذِينَ أَسْرَفُوا۟ عَلَىٰٓ أَنفُسِهِمْ لَا تَقْنَطُوا۟ مِن رَّحْمَةِ ٱللَّهِ",
    translation:
      "Dis : « Ô Mes serviteurs qui avez commis des excès à votre propre détriment, ne désespérez pas de la miséricorde d’Allah. »",
    reference: "Az-Zumar · 39:53",
    sourceLabel: "Coran 39:53",
    sourceUrl: "https://quran.com/39/53?translations=31",
  },
  {
    id: "hadith-muslim-223",
    kind: "hadith",
    arabic: "الطُّهُورُ شَطْرُ الإِيمَانِ",
    translation: "La purification représente la moitié de la foi.",
    reference: "Sahih Muslim · 223",
    sourceLabel: "Hadith authentique",
    sourceUrl: "https://sunnah.com/muslim:223",
  },
  {
    id: "verse-20-114",
    kind: "verse",
    arabic: "وَقُل رَّبِّ زِدْنِى عِلْمًا",
    translation: "Et dis : « Ô mon Seigneur, accrois mes connaissances ! »",
    reference: "Ta-Ha · 20:114",
    sourceLabel: "Coran 20:114",
    sourceUrl: "https://quran.com/20/114?translations=31",
  },
  {
    id: "hadith-bukhari-6114",
    kind: "hadith",
    arabic: "لَيْسَ الشَّدِيدُ بِالصُّرَعَةِ، إِنَّمَا الشَّدِيدُ الَّذِي يَمْلِكُ نَفْسَهُ عِنْدَ الْغَضَبِ",
    translation:
      "L’homme fort n’est pas celui qui terrasse les autres, mais celui qui se maîtrise lorsqu’il est en colère.",
    reference: "Sahih al-Bukhari · 6114",
    sourceLabel: "Hadith authentique",
    sourceUrl: "https://sunnah.com/bukhari:6114",
  },
  {
    id: "verse-49-13",
    kind: "verse",
    arabic:
      "إِنَّ أَكْرَمَكُمْ عِندَ ٱللَّهِ أَتْقَىٰكُمْ ۚ إِنَّ ٱللَّهَ عَلِيمٌ خَبِيرٌ",
    translation:
      "Le plus noble d’entre vous, auprès d’Allah, est le plus pieux. Allah est certes Omniscient et parfaitement Connaisseur.",
    reference: "Al-Hujurat · 49:13",
    sourceLabel: "Coran 49:13",
    sourceUrl: "https://quran.com/49/13?translations=31",
  },
  {
    id: "hadith-bukhari-6018",
    kind: "hadith",
    arabic: "مَنْ كَانَ يُؤْمِنُ بِاللَّهِ وَالْيَوْمِ الآخِرِ فَلْيَقُلْ خَيْرًا أَوْ لِيَصْمُتْ",
    translation:
      "Que celui qui croit en Allah et au Jour dernier dise du bien ou qu’il se taise.",
    reference: "Sahih al-Bukhari · 6018",
    sourceLabel: "Hadith authentique",
    sourceUrl: "https://sunnah.com/bukhari:6018",
  },
  {
    id: "verse-16-97",
    kind: "verse",
    arabic:
      "مَنْ عَمِلَ صَٰلِحًا مِّن ذَكَرٍ أَوْ أُنثَىٰ وَهُوَ مُؤْمِنٌ فَلَنُحْيِيَنَّهُۥ حَيَوٰةً طَيِّبَةً",
    translation:
      "Quiconque, homme ou femme, accomplit une bonne œuvre tout en étant croyant, Nous lui ferons vivre une bonne vie.",
    reference: "An-Nahl · 16:97",
    sourceLabel: "Coran 16:97",
    sourceUrl: "https://quran.com/16/97?translations=31",
  },
  {
    id: "hadith-muslim-2564",
    kind: "hadith",
    arabic:
      "إِنَّ اللَّهَ لاَ يَنْظُرُ إِلَى صُوَرِكُمْ وَأَمْوَالِكُمْ وَلَكِنْ يَنْظُرُ إِلَى قُلُوبِكُمْ وَأَعْمَالِكُمْ",
    translation:
      "Allah ne regarde ni vos apparences ni vos biens, mais Il regarde vos cœurs et vos œuvres.",
    reference: "Sahih Muslim · 2564",
    sourceLabel: "Hadith authentique",
    sourceUrl: "https://sunnah.com/muslim:2564a",
  },
  {
    id: "verse-3-139",
    kind: "verse",
    arabic: "وَلَا تَهِنُوا۟ وَلَا تَحْزَنُوا۟ وَأَنتُمُ ٱلْأَعْلَوْنَ إِن كُنتُم مُّؤْمِنِينَ",
    translation:
      "Ne vous laissez pas battre, ne vous affligez pas, alors que vous êtes les supérieurs, si vous êtes de vrais croyants.",
    reference: "Ali ‘Imran · 3:139",
    sourceLabel: "Coran 3:139",
    sourceUrl: "https://quran.com/3/139?translations=31",
  },
  {
    id: "hadith-bukhari-6464",
    kind: "hadith",
    arabic: "أَحَبُّ الأَعْمَالِ إِلَى اللَّهِ أَدْوَمُهَا وَإِنْ قَلَّ",
    translation:
      "Les œuvres les plus aimées d’Allah sont celles qui sont accomplies avec régularité, même si elles sont peu nombreuses.",
    reference: "Sahih al-Bukhari · 6464",
    sourceLabel: "Hadith authentique",
    sourceUrl: "https://sunnah.com/bukhari:6464",
  },
];
