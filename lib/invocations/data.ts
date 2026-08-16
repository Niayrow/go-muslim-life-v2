export type InvocationCategory =
  | "Matin"
  | "Soir"
  | "Prière"
  | "Maison"
  | "Voyage"
  | "Pardon"
  | "Autre";

export type Invocation = {
  id: number;
  title: string;
  category: InvocationCategory;
  arabic: string;
  phonetic: string;
  translation: string;
};

export const INVOCATION_CATEGORIES: InvocationCategory[] = [
  "Matin",
  "Soir",
  "Prière",
  "Maison",
  "Voyage",
  "Pardon",
  "Autre",
];

export const INVOCATIONS: Invocation[] = [
  {
    id: 1,
    title: "Invocation de la protection complète",
    category: "Matin",
    arabic:
      "بِسْمِ اللَّهِ الَّذِي لَا يَضُرُّ مَعَ اسْمِهِ شَيْءٌ فِي الْأَرْضِ وَلَا فِي السَّمَاءِ وَهُوَ السَّمِيعُ الْعَلِيمُ",
    phonetic:
      "Bismillāhi-lladhī lā yaḍurru maʿa-smihi shayʾun fi-l-arḍi wa lā fi-s-samāʾi wa huwa-s-Samīʿu-l-ʿAlīm",
    translation:
      "Au nom d'Allah, celui par le nom de qui rien ne peut nuire, ni sur la terre ni dans le ciel, et Il est l'Audient, l'Omniscient.",
  },
  {
    id: 2,
    title: "Invocation du matin – bénédiction",
    category: "Matin",
    arabic:
      "اللّهُـمَّ ما أَصْـبَحَ بي مِـنْ نِعْـمَةٍ فَمِـنْكَ وَحْـدَكَ لا شَريكَ لَـكَ",
    phonetic:
      "Allahoumma ma asbaha bi min ni‘matin faminka wahdaka la sharika lak",
    translation:
      "Ô Allah, toute grâce que je possède ce matin vient de Toi seul, sans associé.",
  },
  {
    id: 15,
    title: "Invocation du matin – protection du corps et de la foi",
    category: "Matin",
    arabic:
      "اللّهُـمَّ عافِني في بَدَني، اللّهُـمَّ عافِني في سَمْعي، اللّهُـمَّ عافِني في بَصَري",
    phonetic:
      "Allahoumma ‘afini fi badani, Allahoumma ‘afini fi sam‘i, Allahoumma ‘afini fi basari",
    translation:
      "Ô Allah, accorde-moi la santé dans mon corps, ô Allah accorde-moi la santé dans mon ouïe, ô Allah accorde-moi la santé dans ma vue.",
  },
  {
    id: 3,
    title: "Invocation du soir – remise à Allah",
    category: "Soir",
    arabic:
      "اللّهُـمَّ بِكَ أَمْسَـيْنا وَبِكَ أَصْـبَحْنا وَبِكَ نَحْـيا وَبِكَ نَمـوتُ",
    phonetic:
      "Allahoumma bika amsayna wa bika asbahna wa bika nahya wa bika namout",
    translation:
      "Ô Allah, c’est par Toi que nous entrons dans le soir et par Toi que nous entrons dans le matin.",
  },
  {
    id: 4,
    title: "Invocation du soir – protection nocturne",
    category: "Soir",
    arabic: "أَعُوذُ بِكَلِمَاتِ اللّهِ التَّامَّاتِ مِنْ شَرِّ مَا خَلَق",
    phonetic:
      "A‘oudhou bi-kalimatillahi-t-tammati min sharri ma khalaq",
    translation:
      "Je cherche refuge auprès des paroles parfaites d’Allah contre le mal de ce qu’Il a créé.",
  },
  {
    id: 16,
    title: "Invocation du soir – confiance et protection",
    category: "Soir",
    arabic:
      "اللّهُـمَّ إِنِّي أَسْلَمْتُ نَفْسِي إِلَيْكَ وَفَوَّضْتُ أَمْرِي إِلَيْكَ",
    phonetic:
      "Allahoumma inni aslamtou nafsi ilayk wa fawwadtu amri ilayk",
    translation:
      "Ô Allah, je Te soumets mon âme et je Te confie entièrement mes affaires.",
  },
  {
    id: 5,
    title: "Invocation avant la prière",
    category: "Prière",
    arabic: "اللّهُـمَّ اغْسِلْ خَطايايَ بِماءِ الثَّلْجِ وَالْبَرَد",
    phonetic: "Allahoumma-ghsil khatayaya bi ma’i-th-thalji wal-barad",
    translation:
      "Ô Allah, lave mes fautes avec l’eau, la neige et la grêle.",
  },
  {
    id: 6,
    title: "Invocation après la prière",
    category: "Prière",
    arabic: "اللّهُـمَّ أَنْتَ السَّلاَمُ وَمِنْكَ السَّلاَمُ",
    phonetic: "Allahoumma anta-s-salam wa minka-s-salam",
    translation: "Ô Allah, Tu es la Paix et de Toi vient la paix.",
  },
  {
    id: 17,
    title: "Invocation pour la concentration dans la prière",
    category: "Prière",
    arabic:
      "اللّهُـمَّ أَعِنِّي عَلَى ذِكْرِكَ وَشُكْرِكَ وَحُسْنِ عِبَادَتِكَ",
    phonetic:
      "Allahoumma a‘inni ‘ala dhikrika wa shoukrika wa housni ‘ibadatika",
    translation:
      "Ô Allah, aide-moi à T’évoquer, à Te remercier et à T’adorer de la meilleure manière.",
  },
  {
    id: 7,
    title: "Invocation en entrant à la maison",
    category: "Maison",
    arabic: "بِسْمِ اللّهِ وَلَجْنَا وَبِسْمِ اللّهِ خَرَجْنَا",
    phonetic: "Bismillahi walajna wa bismillahi kharajna",
    translation:
      "Au nom d’Allah nous entrons, et au nom d’Allah nous sortons.",
  },
  {
    id: 8,
    title: "Invocation pour la bénédiction du foyer",
    category: "Maison",
    arabic:
      "اللّهُـمَّ إِنِّي أَسْأَلُكَ خَيْرَ الْمَوْلِجِ وَخَيْرَ الْمَخْرَج",
    phonetic:
      "Allahoumma inni as’alouka khayra-l-mawliji wa khayra-l-makhraj",
    translation:
      "Ô Allah, je Te demande une bonne entrée et une bonne sortie.",
  },
  {
    id: 19,
    title: "Invocation en entrant aux toilettes",
    category: "Maison",
    arabic:
      "اللّهُـمَّ إِنِّي أَعُوذُ بِكَ مِنَ الْخُبُثِ وَالْخَبَائِث",
    phonetic:
      "Allahoumma inni a‘oudhou bika mina-l-khubthi wal-khaba’ith",
    translation:
      "Ô Allah, je cherche refuge auprès de Toi contre les démons mâles et femelles.",
  },
  {
    id: 20,
    title: "Invocation en sortant des toilettes",
    category: "Maison",
    arabic: "غُفْرَانَكَ",
    phonetic: "Ghoufranak",
    translation: "Je Te demande pardon, ô Allah.",
  },
  {
    id: 9,
    title: "Invocation du voyage",
    category: "Voyage",
    arabic:
      "سُبْحَانَ الَّذِي سَخَّرَ لَنَا هَذَا وَمَا كُنَّا لَهُ مُقْرِنِينَ",
    phonetic:
      "Subhana-lladhi sakhkhara lana hadha wa ma kunna lahou mouqrinin",
    translation:
      "Gloire à Celui qui a mis ceci à notre service alors que nous n’en étions pas capables.",
  },
  {
    id: 10,
    title: "Invocation de protection en voyage",
    category: "Voyage",
    arabic: "اللّهُـمَّ أَنْتَ الصَّاحِبُ فِي السَّفَر",
    phonetic: "Allahoumma anta-s-sahib fi-s-safar",
    translation: "Ô Allah, Tu es le Compagnon durant le voyage.",
  },
  {
    id: 11,
    title: "Demande de pardon simple",
    category: "Pardon",
    arabic: "أَسْتَغْفِرُ اللّهَ وَأَتُوبُ إِلَيْه",
    phonetic: "Astaghfirou-llaha wa atoubou ilayh",
    translation: "Je demande pardon à Allah et je me repens à Lui.",
  },
  {
    id: 12,
    title: "Invocation du pardon complet",
    category: "Pardon",
    arabic:
      "رَبِّ اغْفِرْ لِي وَتُبْ عَلَيَّ إِنَّكَ أَنْتَ التَّوَّابُ الرَّحِيم",
    phonetic:
      "Rabbi-ghfir li wa toub ‘alayya innaka anta-t-tawwabou-r-rahim",
    translation:
      "Seigneur, pardonne-moi et accepte mon repentir, Tu es certes Celui qui accepte le repentir.",
  },
  {
    id: 13,
    title: "Invocation contre l’angoisse",
    category: "Autre",
    arabic: "اللّهُـمَّ إِنِّي أَعُوذُ بِكَ مِنَ الْهَمِّ وَالْحَزَن",
    phonetic: "Allahoumma inni a‘oudhou bika mina-l-hammi wal-hazan",
    translation:
      "Ô Allah, je cherche refuge auprès de Toi contre l’angoisse et la tristesse.",
  },
  {
    id: 14,
    title: "Invocation pour la réussite",
    category: "Autre",
    arabic: "رَبِّ زِدْنِي عِلْمًا",
    phonetic: "Rabbi zidni ‘ilma",
    translation: "Seigneur, augmente-moi en science.",
  },
  {
    id: 18,
    title: "Invocation pour une bonne fin",
    category: "Autre",
    arabic: "اللّهُـمَّ اخْتِمْ لَنَا بِحُسْنِ الْخَاتِمَة",
    phonetic: "Allahoumma-khtim lana bi housni-l-khatimah",
    translation: "Ô Allah, accorde-nous une belle fin.",
  },
];
