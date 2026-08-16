export type QuestionCategory =
  | "Autre"
  | "Jeûne"
  | "Prière"
  | "Spiritualité"
  | "Vie quotidienne"
  | "Voyage";

export type Question = {
  id: number;
  question: string;
  answer: string;
  category: QuestionCategory;
  source: string;
};

export const QUESTION_CATEGORIES: QuestionCategory[] = [
  "Autre",
  "Jeûne",
  "Prière",
  "Spiritualité",
  "Vie quotidienne",
  "Voyage",
];

export const QUESTIONS: Question[] = [
  {
    id: 8,
    question: `Est-il obligatoire d’accomplir les cinq prières quotidiennes à l’heure ?`,
    answer: `Oui, il est obligatoire (farḍ) pour tout musulman pubère et sain d’esprit d’accomplir les cinq prières quotidiennes dans leurs temps prescrits.
La prière est le deuxième pilier de l’Islam et son accomplissement à l’heure est une obligation clairement établie par le Coran et la Sunna.

Allah ﷻ dit :

« La prière demeure, pour les croyants, une prescription à des temps déterminés. »
(Sourate An-Nisâ, 4:103)

Le Prophète ﷺ a également insisté sur l’importance de prier à l’heure. Lorsqu’il fut interrogé sur l’acte le plus aimé d’Allah, il répondit :

« La prière accomplie à son heure. »
(Hadith authentique)

Retarder volontairement la prière hors de son temps sans excuse valable (comme le sommeil, l’oubli ou une contrainte réelle) est considéré comme un péché grave selon la majorité des savants.

Cependant, l’Islam est une religion de facilité :

En cas de voyage, certaines prières peuvent être raccourcies ou regroupées.

En cas de maladie ou contrainte majeure, des aménagements sont permis.

Mais en situation normale, prier à l’heure est une obligation ferme, et négliger cela sans excuse n’est pas autorisé.`,
    category: "Prière",
    source: `Sourate An-Nisâ, 4:103`,
  },
  {
    id: 10,
    question: `Est-il permis de jeûner sans avoir formulé l’intention la nuit précédente ?`,
    answer: `Pour le jeûne obligatoire (comme le Ramadan), il est obligatoire de formuler l’intention avant l’aube.
Sans intention préalable, le jeûne n’est pas valide selon la majorité des savants.

En revanche, pour le jeûne surérogatoire, il est permis de formuler l’intention après l’aube, tant qu’aucun acte annulant le jeûne n’a été accompli.`,
    category: "Jeûne",
    source: `Abou Dawoud 2454`,
  },
  {
    id: 11,
    question: `Est-il permis de voyager seul en Islam ?`,
    answer: `1. Pour l'homme : Permis mais déconseillé
Il est permis à l'homme de voyager seul, mais cela est fortement déconseillé (Makruh) par la Sunna, surtout si le voyage est long ou dangereux. L'Islam encourage le voyage en groupe pour des raisons de sécurité, d'entraide et de compagnie spirituelle. 
2. Pour la femme : Interdit sans Mahram (avec nuances)
La règle de base selon la majorité des savants est qu'il n'est pas permis à une femme de voyager seule sans un Mahram (mari ou proche parent qu'elle ne peut jamais épouser, comme un père ou un frère).`,
    category: "Voyage",
    source: `Al-Bukhari 1088`,
  },
  {
    id: 12,
    question: `Est-il obligatoire de faire les ablutions avant chaque prière ?`,
    answer: `Il est obligatoire d’être en état de pureté rituelle pour accomplir la prière.
Cependant, il n’est pas obligatoire de refaire les ablutions si elles n’ont pas été annulées.

Les ablutions ne sont à renouveler que si un acte les annule (sommeil profond, passage aux toilettes, etc.).`,
    category: "Prière",
    source: `Muslim 224`,
  },
  {
    id: 13,
    question: `L’intention doit-elle être prononcée à voix haute ?`,
    answer: `Non. L’intention (niyyah) se situe dans le cœur et n’a pas besoin d’être prononcée à voix haute.
Ni le Prophète ﷺ ni ses compagnons ne formulaient l’intention verbalement.

La prononcer n’annule pas l’acte, mais ce n’est ni une obligation ni une sunna.`,
    category: "Spiritualité",
    source: `Al-Bukhari 1`,
  },
  {
    id: 14,
    question: `Est-il permis de regrouper les prières sans être en voyage ?`,
    answer: `Il est autorisé de regrouper certaines prières en cas de nécessité réelle, comme la maladie, la peur ou une difficulté majeure.
Cela reste une exception, non une habitude.

En situation normale, chaque prière doit être accomplie dans son temps.`,
    category: "Prière",
    source: `Muslim 705`,
  },
  {
    id: 15,
    question: `La prière est-elle obligatoire pour celui qui travaille ?`,
    answer: `Oui. Le travail n’est pas une excuse pour délaisser la prière. Le musulman doit organiser son emploi du temps afin d’accomplir les prières dans leurs temps.`,
    category: "Prière",
    source: `Coran 4:103`,
  },
  {
    id: 16,
    question: `Est-il permis de prier assis si l’on ne peut pas se tenir debout ?`,
    answer: `Oui. Celui qui ne peut pas prier debout prie assis, et s’il ne peut pas s’asseoir, alors allongé.`,
    category: "Prière",
    source: `Al-Bukhari 1117`,
  },
  {
    id: 17,
    question: `Le jeûne est-il obligatoire pour le malade ?`,
    answer: `Non. Le malade pour qui le jeûne est pénible ou dangereux peut ne pas jeûner et rattraper plus tard.`,
    category: "Jeûne",
    source: `Coran 2:184`,
  },
  {
    id: 18,
    question: `Rompre volontairement le jeûne sans excuse est-il un péché grave ?`,
    answer: `Oui. Rompre volontairement un jeûne obligatoire sans excuse valable est un péché majeur.`,
    category: "Jeûne",
    source: `Al-Bukhari 1936`,
  },
  {
    id: 19,
    question: `Est-il permis de rattraper une prière oubliée ?`,
    answer: `Oui. Une prière oubliée doit être accomplie dès que la personne s’en souvient.`,
    category: "Prière",
    source: `Muslim 684`,
  },
  {
    id: 20,
    question: `La prière du vendredi est-elle obligatoire ?`,
    answer: `Oui. Elle est obligatoire pour tout homme musulman pubère, résident et capable.`,
    category: "Prière",
    source: `Coran 62:9`,
  },
  {
    id: 21,
    question: `La zakat est-elle obligatoire sur l’argent épargné ?`,
    answer: `Oui. Toute somme atteignant le seuil légal et conservée une année lunaire est soumise à la zakat.`,
    category: "Spiritualité",
    source: `Coran 9:103`,
  },
  {
    id: 22,
    question: `Est-il permis de voyager sans jeûner pendant Ramadan ?`,
    answer: `Oui. Le voyageur peut rompre le jeûne et le rattraper plus tard.`,
    category: "Jeûne",
    source: `Coran 2:185`,
  },
  {
    id: 23,
    question: `La prière est-elle acceptée sans ablutions ?`,
    answer: `Non. La pureté rituelle est une condition obligatoire pour la validité de la prière.`,
    category: "Prière",
    source: `Muslim 225`,
  },
  {
    id: 24,
    question: `Dormir annule-t-il les ablutions ?`,
    answer: `Le sommeil profond annule les ablutions, contrairement à un sommeil léger.`,
    category: "Prière",
    source: `Abou Dawoud 203`,
  },
  {
    id: 25,
    question: `Est-il obligatoire de jeûner le mois de Ramadan ?`,
    answer: `Oui. Le jeûne du Ramadan est un pilier de l’Islam.`,
    category: "Jeûne",
    source: `Coran 2:183`,
  },
  {
    id: 26,
    question: `La prière peut-elle être annulée par le rire ?`,
    answer: `Oui. Rire volontairement et à voix haute annule la prière.`,
    category: "Prière",
    source: `Abou Dawoud 921`,
  },
  {
    id: 27,
    question: `Dire “Bismillah” avant de manger est-il obligatoire ?`,
    answer: `C’est fortement recommandé. L’oublier n’annule pas le repas mais prive de bénédiction.`,
    category: "Spiritualité",
    source: `Muslim 2017`,
  },
  {
    id: 28,
    question: `Le mensonge est-il permis en Islam ?`,
    answer: `Non. Le mensonge est interdit sauf dans des cas très précis mentionnés par la Sunna.`,
    category: "Spiritualité",
    source: `Muslim 2605`,
  },
  {
    id: 29,
    question: `La prière est-elle obligatoire pour la femme menstruée ?`,
    answer: `Non. La femme menstruée ne prie pas et n’a pas à rattraper les prières manquées.`,
    category: "Prière",
    source: `Al-Bukhari 321`,
  },
  {
    id: 30,
    question: `La prière sans concentration est-elle valable ?`,
    answer: `Oui, elle est valable juridiquement, mais sa récompense diminue fortement.`,
    category: "Prière",
    source: `Abou Dawoud 796`,
  },
  {
    id: 31,
    question: `Aider ses parents est-il une obligation ?`,
    answer: `Oui. La bienfaisance envers les parents est une obligation majeure en Islam.`,
    category: "Spiritualité",
    source: `Coran 17:23`,
  },
  {
    id: 32,
    question: `Est-il permis de travailler dans un environnement mixte (hommes/femmes) ?`,
    answer: `Oui, c’est permis tant que les règles islamiques sont respectées : tenue correcte, comportement professionnel, absence de rapprochement interdit et de tentation volontaire.`,
    category: "Autre",
    source: `Coran 24:30`,
  },
  {
    id: 33,
    question: `Est-il permis d’écouter de la musique pendant le sport ou le travail ?`,
    answer: `La majorité des savants considèrent la musique comme interdite ou fortement déconseillée, surtout si elle détourne du rappel d’Allah ou contient des paroles immorales.`,
    category: "Spiritualité",
    source: `Al-Bukhari 5590`,
  },
  {
    id: 34,
    question: `Est-il permis d’avoir un crédit bancaire classique avec intérêts ?`,
    answer: `Non. Le prêt à intérêt (riba) est strictement interdit en Islam, quelle que soit sa forme ou son objectif.`,
    category: "Autre",
    source: `Coran 2:275`,
  },
  {
    id: 35,
    question: `Peut-on utiliser les réseaux sociaux sans péché ?`,
    answer: `Oui, à condition d’éviter les contenus interdits, la perte de temps excessive, la médisance et les comportements immoraux.`,
    category: "Autre",
    source: `Coran 49:12`,
  },
  {
    id: 36,
    question: `Est-il permis de rater une prière à cause du travail ?`,
    answer: `Non. Le travail n’est pas une excuse valable pour rater volontairement une prière obligatoire.`,
    category: "Prière",
    source: `Coran 4:103`,
  },
  {
    id: 37,
    question: `Est-il permis de prier au travail dans un endroit discret ?`,
    answer: `Oui. Il est permis et même recommandé de prier sur son lieu de travail dès lors que l’endroit est propre.`,
    category: "Prière",
    source: `Al-Bukhari 335`,
  },
  {
    id: 38,
    question: `Est-il permis d’utiliser des applications de rencontre ?`,
    answer: `C’est permis uniquement si l’intention est le mariage et que les échanges restent respectueux et encadrés. Sinon, cela devient interdit.`,
    category: "Autre",
    source: `Coran 17:32`,
  },
  {
    id: 39,
    question: `Regarder des séries ou films est-il interdit en Islam ?`,
    answer: `Cela dépend du contenu. Si le contenu contient nudité, immoralité ou glorification du péché, cela devient interdit.`,
    category: "Autre",
    source: `Coran 23:3`,
  },
  {
    id: 40,
    question: `Est-il permis de retarder le mariage pour des raisons financières ?`,
    answer: `Oui. Il est permis de retarder le mariage si la personne n’en a pas la capacité matérielle ou psychologique.`,
    category: "Autre",
    source: `Coran 24:33`,
  },
  {
    id: 41,
    question: `Est-il permis de travailler dans l’informatique ou la technologie ?`,
    answer: `Oui. Tout travail est permis tant qu’il ne sert pas directement une activité interdite.`,
    category: "Autre",
    source: `Coran 5:2`,
  },
  {
    id: 44,
    question: `Est-il obligatoire de prier en groupe à la mosquée ?`,
    answer: `La prière en groupe est fortement recommandée. Certains savants la considèrent obligatoire pour les hommes capables, d’autres une sunna très appuyée.`,
    category: "Prière",
    source: `Bukhari 645`,
  },
  {
    id: 45,
    question: `Peut-on prier avec des vêtements de travail ?`,
    answer: `Oui, tant que les vêtements sont propres et couvrent la ‘awra, la prière est valable.`,
    category: "Prière",
    source: `Muslim 512`,
  },
  {
    id: 46,
    question: `Parler pendant les ablutions les annule-t-il ?`,
    answer: `Non. Parler pendant les ablutions ne les annule pas.`,
    category: "Prière",
    source: `Bukhari 159`,
  },
  {
    id: 47,
    question: `Pendant le ramadan, est-il permis de manger avant la prière du Fajr ?`,
    answer: `Oui, tant que l’aube authentique n’est pas apparue.`,
    category: "Jeûne",
    source: `Coran 2:187`,
  },
  {
    id: 48,
    question: `Peut-on faire une invocation en français ?`,
    answer: `Oui. Les invocations peuvent être faites dans toute langue, surtout en dehors de la prière.`,
    category: "Spiritualité",
    source: `Muslim 2678`,
  },
  {
    id: 49,
    question: `Le fait de jurer par autre qu’Allah est-il permis ?`,
    answer: `Non. Jurer par autre qu’Allah est interdit.`,
    category: "Spiritualité",
    source: `Abou Dawoud 3251`,
  },
  {
    id: 50,
    question: `Le jeûne est-il annulé par un vomissement involontaire ?`,
    answer: `Non. Le vomissement involontaire n’annule pas le jeûne.`,
    category: "Jeûne",
    source: `Abou Dawoud 2380`,
  },
  {
    id: 51,
    question: `Est-il permis de dormir après la prière du ‘Asr ?`,
    answer: `Oui. Il n’existe aucune interdiction authentique à dormir après ‘Asr.`,
    category: "Vie quotidienne",
    source: `Bukhari 5682`,
  },
  {
    id: 52,
    question: `Peut-on faire ses ablutions avec peu d’eau ?`,
    answer: `Oui. Le Prophète ﷺ faisait ses ablutions avec une petite quantité d’eau.`,
    category: "Prière",
    source: `Muslim 325`,
  },
  {
    id: 53,
    question: `Le retard volontaire de la prière est-il un péché ?`,
    answer: `Oui. Retarder volontairement une prière hors de son temps sans excuse est un péché.`,
    category: "Prière",
    source: `Coran 4:103`,
  },
  {
    id: 54,
    question: `Est-il permis de faire une invocation pour autrui ?`,
    answer: `Oui. Invoquer pour les autres est recommandé et récompensé.`,
    category: "Spiritualité",
    source: `Muslim 2732`,
  },
  {
    id: 55,
    question: `Peut-on rompre le jeûne par oubli ?`,
    answer: `Non. Celui qui mange ou boit par oubli doit continuer son jeûne.`,
    category: "Jeûne",
    source: `Bukhari 1933`,
  },
  {
    id: 56,
    question: `La prière est-elle obligatoire pour l’enfant ?`,
    answer: `Non. Elle devient obligatoire à la puberté, mais doit être enseignée avant.`,
    category: "Prière",
    source: `Abou Dawoud 495`,
  },
  {
    id: 57,
    question: `Peut-on faire la prière sur une chaise ?`,
    answer: `Oui, en cas d’incapacité physique à se tenir debout ou à se prosterner.`,
    category: "Prière",
    source: `Bukhari 1117`,
  },
  {
    id: 58,
    question: `Dire “Inch’Allah” est-il obligatoire ?`,
    answer: `C’est recommandé lorsqu’on parle du futur, mais pas obligatoire.`,
    category: "Spiritualité",
    source: `Coran 18:23-24`,
  },
  {
    id: 59,
    question: `Peut-on jeûner un jour sur deux ?`,
    answer: `Oui. C’est le jeûne du prophète Dawoud, considéré comme le meilleur jeûne surérogatoire.`,
    category: "Jeûne",
    source: `Bukhari 1131`,
  },
  {
    id: 60,
    question: `Le fait de lever les mains pendant l’invocation est-il permis ?`,
    answer: `Oui. Lever les mains pendant l’invocation est une pratique authentique.`,
    category: "Spiritualité",
    source: `Abou Dawoud 1488`,
  },
  {
    id: 61,
    question: `Peut-on demander pardon pour une personne décédée ?`,
    answer: `Oui. Invoquer le pardon pour les défunts est permis et recommandé.`,
    category: "Spiritualité",
    source: `Muslim 1631`,
  },
  {
    id: 62,
    question: `Rater volontairement une prière est-il un grand péché ?`,
    answer: `Oui. Rater volontairement une prière obligatoire sans excuse est un péché grave.
`,
    category: "Prière",
    source: `Muslim 684`,
  },
  {
    id: 63,
    question: `Ne pas jeûner le Ramadan par négligence est-il grave ?`,
    answer: `Oui. Abandonner le jeûne du Ramadan sans excuse est un péché majeur.`,
    category: "Jeûne",
    source: `Bukhari 1936`,
  },
  {
    id: 64,
    question: `Regarder volontairement des choses interdites est-il un péché ?`,
    answer: `Oui. Baisser le regard est une obligation.`,
    category: "Spiritualité",
    source: `Coran 24:30`,
  },
  {
    id: 65,
    question: `La négligence répétée dans la prière est-elle grave ?`,
    answer: `Oui. Retarder constamment la prière sans excuse est un comportement blâmable.`,
    category: "Prière",
    source: `Coran 107:4-5`,
  },
  {
    id: 66,
    question: `Le mensonge “pour éviter un problème” est-il permis ?`,
    answer: `Non. Le mensonge reste interdit même pour éviter une gêne personnelle.`,
    category: "Spiritualité",
    source: `Muslim 2607`,
  },
  {
    id: 67,
    question: `La médisance est-elle un péché même si c’est vrai ?`,
    answer: `Oui. Dire sur quelqu’un ce qu’il détesterait entendre est une médisance, même si c’est vrai.`,
    category: "Spiritualité",
    source: `Muslim 2589`,
  },
  {
    id: 68,
    question: `Ignorer volontairement les parents est-il un péché ?`,
    answer: `Oui. La désobéissance et la dureté envers les parents sont des péchés graves.`,
    category: "Spiritualité",
    source: `Coran 17:23`,
  },
  {
    id: 69,
    question: `S’endormir volontairement en ratant la prière est-il excusable ?`,
    answer: `Non. S’endormir volontairement en sachant qu’on va rater la prière n’est pas une excuse.`,
    category: "Prière",
    source: `Muslim 681`,
  },
  {
    id: 70,
    question: `Utiliser l’argent illicite est-il un péché ?`,
    answer: `Oui. Se nourrir ou profiter d’argent illicite est interdit.`,
    category: "Spiritualité",
    source: `Muslim 1015`,
  },
  {
    id: 71,
    question: `Se mettre en colère excessivement est-il un péché ?`,
    answer: `Oui. La colère incontrôlée mène souvent au péché.`,
    category: "Spiritualité",
    source: `Bukhari 6116`,
  },
  {
    id: 72,
    question: `Négliger les invocations est-il un péché ?`,
    answer: `Non, mais c’est une grande perte spirituelle.`,
    category: "Spiritualité",
    source: `Muslim 2678`,
  },
  {
    id: 73,
    question: `Jurer trop souvent est-il blâmable ?`,
    answer: `Oui. Multiplier les serments est déconseillé.`,
    category: "Spiritualité",
    source: `Bukhari 6653`,
  },
  {
    id: 74,
    question: `Abandonner la prière par paresse est-il grave ?`,
    answer: `Oui. L’abandon total de la prière est extrêmement grave.`,
    category: "Prière",
    source: `Muslim 82`,
  },
  {
    id: 75,
    question: `Consommer excessivement sans besoin est-il répréhensible ?`,
    answer: `Oui. Le gaspillage est interdit en Islam.`,
    category: "Spiritualité",
    source: `Coran 7:31`,
  },
  {
    id: 76,
    question: `Retarder le repentir est-il dangereux ?`,
    answer: `Oui. Personne ne sait quand sa mort arrivera.`,
    category: "Spiritualité",
    source: `Muslim 2749`,
  },
  {
    id: 77,
    question: `Délayer volontairement les prières sans raison est-il permis ?`,
    answer: `Non. Chaque prière a un temps fixé.`,
    category: "Prière",
    source: `Coran 4:103`,
  },
  {
    id: 78,
    question: `La négligence religieuse prolongée endurcit-elle le cœur ?`,
    answer: `Oui. L’éloignement du rappel d’Allah endurcit le cœur.`,
    category: "Spiritualité",
    source: `Muslim 2654`,
  },
  {
    id: 79,
    question: `Espionner ou fouiller la vie privée est-il permis ?`,
    answer: `Non. Espionner les autres est interdit.`,
    category: "Spiritualité",
    source: `Coran 49:12`,
  },
  {
    id: 80,
    question: `Désespérer de la miséricorde d’Allah est-il un péché ?`,
    answer: `Oui. Désespérer d’Allah est interdit.`,
    category: "Spiritualité",
    source: `Coran 39:53`,
  },
  {
    id: 81,
    question: `Doit-on obligatoirement suivre une école juridique (madhhab) en Islam ?`,
    answer: `Non, il n’est pas obligatoire de suivre une école juridique précise en Islam.
L’obligation du musulman est de suivre le Coran et la Sunna.

Cependant, suivre une école juridique est fortement recommandé, en particulier pour les débutants ou les personnes n’ayant pas de connaissances approfondies en sciences islamiques.
Les écoles juridiques (hanafite, malikite, chaféite, hanbalite) sont issues du travail de grands savants et permettent de structurer l’apprentissage, d’éviter la confusion et de pratiquer la religion de manière cohérente.`,
    category: "Spiritualité",
    source: `Coran 4:59`,
  },
  {
    id: 82,
    question: `Est-il permis de délaisser la prière par manque de motivation ?`,
    answer: `Non. Le manque de motivation n’est pas une excuse valable pour délaisser la prière obligatoire.`,
    category: "Prière",
    source: `Coran 29:45`,
  },
  {
    id: 83,
    question: `Prier rapidement sans tranquillité invalide-t-il la prière ?`,
    answer: `Oui. L’absence de quiétude (tumânîna) invalide la prière.`,
    category: "Prière",
    source: `Bukhari 757`,
  },
  {
    id: 84,
    question: `Est-il permis de jeûner uniquement certains jours de Ramadan ?`,
    answer: `Non. Le jeûne du Ramadan est obligatoire pour tout le mois, sauf excuse légitime.`,
    category: "Jeûne",
    source: `Coran 2:183`,
  },
  {
    id: 85,
    question: `La paresse dans l’adoration est-elle un péché ?`,
    answer: `La paresse occasionnelle est humaine, mais la négligence persistante est blâmable.`,
    category: "Spiritualité",
    source: `Bukhari 6363`,
  },
  {
    id: 86,
    question: `Est-il permis d’abandonner une bonne action par peur de l’hypocrisie ?`,
    answer: `Non. Abandonner une bonne action par peur du regard des gens est une ruse de Shaytan.`,
    category: "Spiritualité",
    source: `Muslim 2985`,
  },
  {
    id: 87,
    question: `Est-il permis à un musulman de souhaiter « Joyeux Noël » ?`,
    answer: `Non, selon la majorité des savants, il n’est pas permis de souhaiter « Joyeux Noël » de manière explicite, car Noël est une fête religieuse chrétienne liée à des croyances contraires à l’islam (divinité de Jésus). Féliciter cette fête revient à approuver implicitement une croyance non islamique, ce qui est interdit.

➡️ En revanche, il est permis d’être poli, respectueux, et d’utiliser des formules générales comme :

« Bonnes fêtes »

« Je te souhaite du bien »
sans mentionner la fête religieuse.`,
    category: "Vie quotidienne",
    source: `Fatwas de Cheikh Ibn Bâz, Cheikh Al-Fawzân`,
  },
  {
    id: 88,
    question: `Peut-on répondre « Joyeux Noël » si quelqu’un nous le dit ?`,
    answer: `Il est préférable de ne pas répondre par la même formule. Le musulman peut répondre par une phrase neutre et polie sans valider la fête, comme :

« Merci, je te souhaite également du bien »

« Que Dieu te guide et te préserve »

Cela permet de rester respectueux sans compromettre sa croyance.`,
    category: "Vie quotidienne",
    source: `Cheikh Ibn ‘Uthaymîn, Majmû‘ Fatâwâ wa Rasâ’il, vol. 16, p. 208`,
  },
  {
    id: 89,
    question: `Est-il permis de participer à un repas de Noël en famille non musulmane ?`,
    answer: `Si le repas est lié directement à la célébration religieuse de Noël (prières, chants, symboles), cela n’est pas permis.
Si le repas est purement familial, sans rituel religieux ni participation à la fête, certains savants l’autorisent pour préserver les liens familiaux, tout en recommandant la prudence.`,
    category: "Vie quotidienne",
    source: `Cheikh Ibn ‘Uthaymîn, Majmû‘ Fatâwâ, vol. 3, p. 45`,
  },
  {
    id: 90,
    question: `Offrir un cadeau à Noël est-il permis ?`,
    answer: `Offrir un cadeau dans le cadre de Noël n’est pas permis, car cela participe à la célébration de la fête.
Accepter un cadeau offert ce jour-là sans intention de célébration, et s’il est halal, est permis selon plusieurs savants.`,
    category: "Vie quotidienne",
    source: `Cheikh Ibn ‘Uthaymîn, Majmû‘ Fatâwâ, vol. 16, p. 205`,
  },
  {
    id: 91,
    question: `Est-il permis de décorer sa maison pour Noël ?`,
    answer: `Il est interdit de décorer sa maison pour Noël, car cela constitue une imitation et une participation claire à une fête religieuse non islamique.`,
    category: "Spiritualité",
    source: `Cheikh Sâlih Al-Fawzân, Al-Muntaqâ min Fatâwâh, vol. 3, p. 159`,
  },
  {
    id: 92,
    question: `À qui revient la priorité dans la dépense ? `,
    answer: `la priorité dans la dépense financière suit des cercles concentriques, du plus proche au plus éloigné. Voici l'ordre établi :

1. Soi-même (An-Nafs) C'est la base. Tu dois d'abord subvenir à tes propres besoins vitaux (nourriture, vêtement, logement) pour ne pas être une charge pour les autres.

2. L'épouse et les enfants (La famille immédiate) Après toi-même, la priorité absolue est ton foyer. Subvenir aux besoins de sa femme et de ses enfants est une obligation (Wajib) et est considéré comme une immense aumône.

Le Prophète (ﷺ) a dit que le dinar dépensé pour sa famille est celui qui a la plus grande récompense, plus que celui dépensé pour les pauvres ou la guerre sainte.

3. Les proches parents (Al-Aqrabun) Une fois le foyer à l'abri, la priorité va aux parents, puis aux frères et sœurs, et ensuite aux autres liens de parenté (tantes, oncles).

4. Les pauvres et les nécessiteux Enfin, s'il reste un excédent, on dépense pour les pauvres de la communauté en général (Sadaqah).`,
    category: "Vie quotidienne",
    source: `Rapporté par Muslim (Livre de la Zakat)`,
  },
  {
    id: 93,
    question: `Quel est le jugement concernant le fait que la femme porte une chaînette en or à la cheville?`,
    answer: `Il est permis à la femme de porter ce qu'elle veut parmi les objets en or tant que ça ne rentre pas dans une forme de gaspillage, que ce soit à ses pieds, à ses bras, aux oreilles, sur sa tête ou autour du cou.
`,
    category: "Vie quotidienne",
    source: `Cheikh Mouhammad Ibn Salih Al-'utheymine`,
  },
  {
    id: 94,
    question: `Quel est le remède au mauvais oeil ? `,
    answer: `Le remède est la Ruqyah légiférée (lecture du Coran et invocations).

Il est rapporté qu'Aïcha (qu'Allah l'agrée) a dit : "Le Messager d'Allah (ﷺ) m'a ordonné de pratiquer la Ruqyah (exorcisme) contre le mauvais œil."

On récite principalement la Fatiha, Ayat Al-Kursi, et les trois dernières sourates (Al-Ikhlas, Al-Falaq, An-Nas).

Le Conseil en +
En prévention, la meilleure protection reste les invocations du matin et du soir (Adhkar) et le fait de dire "Allahumma Barik" (Qu'Allah te bénisse) lorsqu'on voit quelque chose qui nous plaît chez autrui pour ne pas lui porter l'œil soi-même.`,
    category: "Spiritualité",
    source: `Sahih Muslim 2195 (ou Livre 39, Hadith 78 selon les éditions)`,
  },
  {
    id: 95,
    question: `La pose de faux ongles pour la femme est-elle permise ?`,
    answer: `1. L'aspect esthétique (Permis sous conditions) En soi, se poser des faux ongles pour s'embellir (par exemple pour son mari) n'est pas interdit, à condition que cela ne soit pas une imitation aveugle de signes religieux mécréants ou que cela cause du tort à la santé (colles nocives).

2. Le problème majeur : Les Ablutions (Woudou) Pour que les ablutions soient valides, l'eau doit impérativement toucher chaque partie des membres lavés, y compris la surface des ongles.

Les faux ongles (acrylique, gel, capsules) forment une couche imperméable (isolante).

Conséquence : Si une femme fait ses ablutions avec des faux ongles, l'eau n'atteint pas l'ongle naturel. Son Woudou est donc invalide, et par conséquent, sa prière l'est aussi.

3. La seule exception Il est permis de les porter pendant la période de menstrues (règles), car la femme est dispensée de prière et d'ablutions durant ce temps. Elle devra toutefois les retirer pour faire le grand lavage (Ghusl) à la fin de son cycle.`,
    category: "Vie quotidienne",
    source: `Dar al-Ifta al-Missriyyah (Fatwa n°2691) / Majmoo' Fatawa Ibn Baz (Vol 10)`,
  },
  {
    id: 97,
    question: `Peut-on prier assis quand on a mal aux genoux ?`,
    answer: `Oui. Si une personne ne peut pas prier debout sans douleur réelle ou risque pour sa santé, elle peut prier assise. Si elle ne peut pas se prosterner, elle incline la tête.`,
    category: "Prière",
    source: `Boukhari 1117`,
  },
  {
    id: 98,
    question: `Faut-il comprendre l’arabe pour prier correctement ?`,
    answer: `Non. La récitation en arabe est obligatoire, mais la compréhension vient progressivement. La sincérité prime.`,
    category: "Spiritualité",
    source: `Consensus des savants`,
  },
  {
    id: 99,
    question: `Peut on écouter le Coran pour s'endormir ?`,
    answer: `Oui, Il n'y a aucun mal à cela, c'est une bonne chose.`,
    category: "Vie quotidienne",
    source: `Cheïkh Sālih El-Fawzān`,
  },
  {
    id: 100,
    question: `Peut on fermer les yeux durant la prière ?`,
    answer: `Il est détestable de fermer les yeux durant la prière car il y a dans cela une ressemblance (aux juifs).`,
    category: "Prière",
    source: `Cheïkh Sālih El-Fawzān`,
  },
  {
    id: 101,
    question: `Quel est le jugement de dire lorsque quelqu'un est touché par un malheur « Il mérite »`,
    answer: `La personne qui tient ce genre de propos doit se repentir et s’en abstenir, car nul n’a le droit de juger si quelqu’un mérite ou non quoi que ce soit.`,
    category: "Vie quotidienne",
    source: `Cheïkh Sālih El-Fawzān`,
  },
  {
    id: 102,
    question: `Quel est le jugement d'élever un chien ?`,
    answer: `S’il existe un besoin réel, comme la garde pour une protection effective, il n’y a pas de mal à garder un chien. En revanche, s’il n’y a aucun besoin avéré, il n’est pas permis de le garder ni de le faire entrer dans la maison, car les anges n’entrent pas dans une demeure où se trouve un chien ou une représentation, comme cela est rapporté dans les hadiths authentiques.`,
    category: "Vie quotidienne",
    source: `Cheïkh Sālih El-Fawzān`,
  },
  {
    id: 103,
    question: `Peut on dormir sur le ventre ?`,
    answer: `Cette position est déconseillée, d’une part car elle n’est pas bénéfique pour la santé, et d’autre part parce qu’un texte indique qu’elle est réprouvée. Il est préférable de dormir sur le côté droit, en direction de la qibla.`,
    category: "Vie quotidienne",
    source: `Cheïkh Sālih El-Fawzān`,
  },
  {
    id: 104,
    question: `Est-il permis de mentir par peur d'être touché par le mauvais œil ?`,
    answer: `Non, ce n’est pas permis, c’est interdit. Le croyant doit placer sa confiance en Allah, s’en remettre pleinement à Lui, car rien ne peut lui nuire sans Sa permission. Il convient de multiplier la lecture du Coran et le dhikr, et par la permission d’Allah, aucun mal ne l’atteindra.`,
    category: "Vie quotidienne",
    source: `cheïkh Sālih El-Fawzān`,
  },
  {
    id: 105,
    question: `Est-il permis aux époux de fêter chaque année leur date de mariage ?`,
    answer: `Cela n’est pas permis et relève de l’innovation. Il n’est pas autorisé de célébrer un anniversaire de mariage ni tout autre événement similaire à des dates spécifiques.`,
    category: "Vie quotidienne",
    source: `cheïkh Sālih El-Fawzān`,
  },
  {
    id: 106,
    question: `Que faire si tu tombes continuellement dans les péchés ?`,
    answer: `La solution est qu’il se repente et qu’il ne désespère pas de la miséricorde d’Allah. Chaque fois qu’il commet un péché, qu’il multiplie le repentir, car multiplier le repentir est un signe de bien. Qu’il craigne Allah, Exalté soit-Il, et persévère dans le retour vers Lui.`,
    category: "Spiritualité",
    source: `Cheïkh Sālih El-Fawzān `,
  },
  {
    id: 107,
    question: `Faut-il rattrapper les prières délaissées ?`,
    answer: `Oui, si les prières délaissées sont peu nombreuses, il est possible de les rattraper. En revanche, si elles sont nombreuses et réparties sur une longue période, il doit veiller à accomplir correctement les prières à l’avenir, et pour ce qui est du passé, Allah lui pardonnera s’il se repent sincèrement et Lui demande pardon.`,
    category: "Prière",
    source: `Cheïkh Sālih El-Fawzān`,
  }
];
