import { QuizQuestion, RatingValue } from '../types';

export const PURAVIDA_LOGO_URL = 'https://media.cdnws.com/_i/333163/3576/2389/76/logo-pura-vida.jpeg';
export const PURAVIDA_SHOP_URL = 'https://magasin.espacepuravida.fr/elixirs-floraux/';
export const ADVISOR_PHONE = '07 49 21 82 42';
export const ADVISOR_TEL = 'tel:0749218242';
export const ADVISOR_SMS = 'sms:0749218242';
export const PROMO_CODE = 'RYMXN';
export const PROMO_TEXT = 'Remise 5% avec le code RYMXN • Livraison Offerte dès 30€ d’achat';

export const RATING_OPTIONS: { value: RatingValue; label: string; description: string }[] = [
  {
    value: 0,
    label: "Pas du tout",
    description: "Je ne ressens pas cela en ce moment",
  },
  {
    value: 1,
    label: "Un peu",
    description: "Cela m'arrive ponctuellement ou légèrement",
  },
  {
    value: 2,
    label: "Moyennement",
    description: "Cela correspond assez bien à mon état actuel",
  },
  {
    value: 3,
    label: "Tout à fait",
    description: "C'est exactement ce que je vis en ce moment",
  },
];

export const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    id: 'A',
    groupName: 'Groupe A',
    statement: "Je ressens une tristesse ou une mélancolie soudaine que je n'arrive pas à expliquer.",
    flowerName: 'La Moutarde',
    flowerSubtitle: 'Mustard (Sinapis arvensis) • Fleur de Bach Deva Sans Alcool 30ml',
    benefitShort: 'Pour chasser le blues et retrouver votre lumière.',
    tagline: 'Dissipe les nuages sombres et restaure la joie intérieure',
    emotionalState:
      "Un coup de blues brutal, un voile sombre tombé sans événement déclencheur apparent. Vous vous sentez abattu(e), mélancolique, avec l'impression que la joie s'est évaporée soudainement.",
    flowerAction:
      "L'élixir floral de Moutarde dissipe cette brume émotionnelle pesante. Il permet à la lumière et à la clarté intérieure de réapparaître, transformant la tristesse inexpliquée en une paix sereine et stable.",
    symptoms: [
      'Tristesse soudaine et passagère sans raison claire',
      'Perte temporaire d’enthousiasme et de joie de vivre',
      'Sensation d’un nuage gris au-dessus de la tête',
    ],
    tips: "Prenez quelques gouttes dès que le voile de mélancolie se présente, et accordez-vous 5 minutes d'exposition à la lumière naturelle le matin.",
    posology: "3 à 4 gouttes, 4 fois par jour directement sous la langue ou diluées dans un verre d'eau.",
    accentColor: '#D97706',
    badgeBg: '#FEF3C7',
    badgeText: '#92400E',
    imageUrl: 'https://media.cdnws.com/_i/333163/375/1921/78/moutarde-mustard-fleur-de-bach-deva-30ml-sans-alcool.png',
    productUrl: 'https://magasin.espacepuravida.fr/elixirs-floraux/fleurs-de-bach-sans-alcool/moutarde-mustard-fleur-de-bach-sans-alcool-30ml.html',
  },
  {
    id: 'B',
    groupName: 'Groupe B',
    statement: "J'ai du mal à m'adapter au nouveau rythme et aux changements de cette saison.",
    flowerName: 'Le Noyer',
    flowerSubtitle: 'Walnut (Juglans regia) • Fleur de Bach Deva Sans Alcool 30ml',
    benefitShort: 'Pour accepter le changement de rythme en douceur.',
    tagline: 'L’allié des transitions et du nouveau départ serein',
    emotionalState:
      "Changement de saison, rentrée professionnelle, journées plus courtes, nouvelles habitudes à installer... Vous vous sentez bousculé(e), hésitant(e) ou facilement influencé(e) par l'agitation extérieure.",
    flowerAction:
      "Le Noyer est l'élixir souverain des transitions. Il agit comme un bouclier protecteur contre les doutes et les influences extérieures, vous aidant à vous affranchir de l'inertie passée et à épouser le nouveau rythme en toute quiétude.",
    symptoms: [
      'Difficulté à reprendre le rythme automnal ou de rentrée',
      'Vulnérabilité face aux changements extérieurs',
      'Besoin d’ancrer ses nouvelles résolutions',
    ],
    tips: "Idéal lors de chaque changement de saison pour synchroniser son horloge interne avec fluidité.",
    posology: "3 à 4 gouttes, 4 fois par jour. À poursuivre sur 3 à 4 semaines pendant la période de transition.",
    accentColor: '#059669',
    badgeBg: '#ECFDF5',
    badgeText: '#065F46',
    imageUrl: 'https://media.cdnws.com/_i/333163/377/3774/80/noyer-walnut-fleur-de-bach-deva-30ml-sans-alcool.png',
    productUrl: 'https://magasin.espacepuravida.fr/elixirs-floraux/fleurs-de-bach-sans-alcool/noyer-walnut-fleur-de-bach-sans-alcool-30ml.html',
  },
  {
    id: 'C',
    groupName: 'Groupe C',
    statement: "Les actualités mondiales (peur de la guerre, climat social) me stressent et l'anxiété collective me gagne.",
    flowerName: 'Le Trèfle Rouge',
    flowerSubtitle: 'Red Clover (Trifolium pratense) • Élixir Floral Deva Sans Alcool 30ml',
    benefitShort: "Pour faire bouclier contre l'angoisse collective de la guerre.",
    tagline: 'Le bouclier psychique face à la panique ambiante',
    emotionalState:
      "Vous agissez comme une véritable éponge émotionnelle : les informations anxiogènes, la peur ambiante et le climat social tendu s'infiltrent en vous et déclenchent une angoisse qui ne vous appartient pas nécessairement.",
    flowerAction:
      "Le Trèfle Rouge apporte un ancrage remarquable et renforce la barrière psychique. Il vous aide à rester calme, centré(e) et lucide au milieu de l'agitation collective ou des peurs propagées par l'actualité.",
    symptoms: [
      'Anxiété déclenchée par les nouvelles télévisées ou réseaux sociaux',
      'Peur diffuse de l’avenir ou de conflits mondiaux',
      'Difficulté à se dissocier de la souffrance ambiante',
    ],
    tips: "Limitez les écrans d'actualité en fin de journée et prenez votre élixir au réveil pour ancrer votre bulle de sérénité.",
    posology: "3 à 4 gouttes matin et soir, et 3 gouttes ponctuelles avant d’écouter les actualités ou lors d’une vague d'anxiété.",
    accentColor: '#B91C1C',
    badgeBg: '#FEE2E2',
    badgeText: '#991B1B',
    imageUrl: 'https://media.cdnws.com/_i/333163/323/1505/26/trefle-rouge-elixir-floral-deva-30ml-sans-alcool.png',
    productUrl: 'https://magasin.espacepuravida.fr/elixirs-floraux/elixirs-floraux-contemporains-sans-alcool/trefle-rouge-elixir-floral-sans-alcool-30ml.html',
  },
  {
    id: 'D',
    groupName: 'Groupe D',
    statement: "Je me sens totalement vidé(e) d'énergie, épuisé(e) physiquement ou mentalement.",
    flowerName: "L'Olivier",
    flowerSubtitle: 'Olive (Olea europaea) • Fleur de Bach Deva Sans Alcool 30ml',
    benefitShort: 'Pour recharger vos batteries à plat et régénérer votre énergie vitale.',
    tagline: 'Régénération vitale et récupération profonde en automne',
    emotionalState:
      "Épuisement général, batteries à plat, sentiment d'être à sec d'énergie après une période prolongée d'efforts. Vous vous réveillez fatigué(e) et vous aspirez à un repos profond et reconstructeur.",
    flowerAction:
      "L'Olivier est le grand remède de la régénération physique et psychique. Il aide le corps et l'esprit à restaurer leur vitalité profonde, à surmonter la fatigue accumulée et à reconstituer durablement ses réserves d'énergie.",
    symptoms: [
      'Batteries complètement à plat dès le réveil',
      'Épuisement physique, intellectuel ou nerveux profond',
      'Besoin réparateur de régénérer ses réserves d’énergie',
    ],
    tips: "Privilégiez des nuits de sommeil régulières et buvez un grand verre d'eau tiède avec vos gouttes d'Olivier au lever.",
    posology: "3 à 4 gouttes, 4 fois par jour directement sous la langue ou diluées dans une boisson.",
    accentColor: '#0906af',
    badgeBg: '#EEF2FF',
    badgeText: '#1E1B4B',
    imageUrl: 'https://media.cdnws.com/_i/333163/379/3408/82/olivier-olive-fleur-de-bach-deva-30ml-sans-alcool.png',
    productUrl: 'https://magasin.espacepuravida.fr/elixirs-floraux/fleurs-de-bach-sans-alcool/olive-olive-fleur-de-bach-sans-alcool-30ml.html',
  },
  {
    id: 'E',
    groupName: 'Groupe E',
    statement: "Je suis à fleur de peau, irritable, et la moindre petite contrariété me fait réagir excessivement.",
    flowerName: 'La Camomille',
    flowerSubtitle: 'Chamomile (Matricaria recutita) • Élixir Floral Deva Sans Alcool 30ml',
    benefitShort: "Pour apaiser les nerfs et l'hypersensibilité.",
    tagline: 'Apaisement nerveux immédiat et sérénité émotionnelle',
    emotionalState:
      "Vos nerfs sont à vif. Le moindre bruit, une phrase maladroite, un imprévu et vous réagissez vivement. Cette surréactivité vous épuise et vous pèse au quotidien.",
    flowerAction:
      "La Camomille dissout les tensions logées dans le plexus solaire et calme le système nerveux surexcité. Elle restaure un tempérament équilibré, doux et patient face aux imprévus du quotidien.",
    symptoms: [
      'Irritabilité soudaine face à des détails mineurs',
      'Tensions nerveuses au niveau de l’estomac ou de la mâchoire',
      'Agitation et réactivité émotionnelle vive',
    ],
    tips: "Associez la prise de vos gouttes à une infusion tiède le soir pour détendre les muscles et le système digestif.",
    posology: "3 à 4 gouttes dès que la nervosité monte, jusqu'à 4 à 5 fois par jour si nécessaire.",
    accentColor: '#C2410C',
    badgeBg: '#FFEDD5',
    badgeText: '#9A3412',
    imageUrl: 'https://media.cdnws.com/_i/333163/182/1276/83/camomille-elixir-floral-deva-30ml-sans-alcool.png',
    productUrl: 'https://magasin.espacepuravida.fr/elixirs-floraux/elixirs-floraux-contemporains-sans-alcool/camomille-elixir-floral-sans-alcool-30ml.html',
  },
];

// Natural harmonic pairings for seasonal balance if only 1 question scored high
export const DEFAULT_COMPLEMENTARY_MAP: Record<'A' | 'B' | 'C' | 'D' | 'E', 'A' | 'B' | 'C' | 'D' | 'E'> = {
  A: 'B', // Moutarde + Noyer (chasser le blues tout en s'adaptant en douceur)
  B: 'D', // Noyer + Olivier (adapter le rythme et recharger les batteries)
  C: 'B', // Trèfle Rouge + Noyer (se protéger de l'angoisse collective et rester centré dans le changement)
  D: 'B', // Olivier + Noyer (recharger les batteries et installer un rythme pérenne)
  E: 'D', // Camomille + Olivier (apaiser la nervosité et régénérer l'énergie)
};

export const SYNERGY_EXPLANATIONS: Record<string, string> = {
  'A-B': 'Cette synergie dissipe la mélancolie automnale tout en vous apportant un bouclier pour vous adapter au nouveau rythme avec sérénité.',
  'B-A': 'Cette synergie dissipe la mélancolie automnale tout en vous apportant un bouclier pour vous adapter au nouveau rythme avec sérénité.',
  'A-D': 'Un duo idéal pour chasser le coup de blues tout en régénérant votre énergie vitale et en rechargeant des batteries épuisées.',
  'D-A': 'Un duo idéal pour chasser le coup de blues tout en régénérant votre énergie vitale et en rechargeant des batteries épuisées.',
  'B-D': 'L’association parfaite pour la rentrée : s’adapter au changement de rythme de saison tout en rechargeant des batteries à plat.',
  'D-B': 'L’association parfaite pour la rentrée : s’adapter au changement de rythme de saison tout en rechargeant des batteries à plat.',
  'B-C': 'Une protection émotionnelle complète : bouclier contre l’angoisse collective et adaptation fluide aux nouvelles contraintes.',
  'C-B': 'Une protection émotionnelle complète : bouclier contre l’angoisse collective et adaptation fluide aux nouvelles contraintes.',
  'C-D': 'Libère de la charge anxiogène médiatique et recharge en profondeur votre organisme vidé d’énergie.',
  'D-C': 'Libère de la charge anxiogène médiatique et recharge en profondeur votre organisme vidé d’énergie.',
  'E-D': 'Apaisement total : détend l’irritabilité à fleur de peau et régénère les réserves d’énergie durablement.',
  'D-E': 'Apaisement total : détend l’irritabilité à fleur de peau et régénère les réserves d’énergie durablement.',
  'E-B': 'Aide à garder son calme face aux contrariétés quotidiennes tout en accompagnant en douceur les transitions de vie.',
  'B-E': 'Aide à garder son calme face aux contrariétés quotidiennes tout en accompagnant en douceur les transitions de vie.',
  'A-C': 'Chasse les idées sombres et protège votre hypersensibilité face au climat ambiant anxiogène.',
  'C-A': 'Chasse les idées sombres et protège votre hypersensibilité face au climat ambiant anxiogène.',
  'A-E': 'Libère de la morosité et calme l’agitation émotionnelle pour retrouver un esprit léger et détendu.',
  'E-A': 'Libère de la morosité et calme l’agitation émotionnelle pour retrouver un esprit léger et détendu.',
  'C-E': 'Crée une bulle de sérénité protectrice contre le stress extérieur et désamorce les tensions nerveuses vives.',
  'E-C': 'Crée une bulle de sérénité protectrice contre le stress extérieur et désamorce les tensions nerveuses vives.',
};

export const PURAVIDA_TRUST_POINTS = [
  {
    title: 'Solarisation Originelle & Bio',
    description:
      'Élaborés dans le respect strict des méthodes artisanales du Dr Bach, avec macérations solaires certifiées bio.',
    icon: 'Sparkles',
  },
  {
    title: 'Sans Dépendance & Sans Risque',
    description:
      'Subtiles et douces, nos préparations florales conviennent à toute la famille et peuvent être associées sans risque.',
    icon: 'ShieldCheck',
  },
  {
    title: 'Conseillère Professionnelle Dédiée',
    description:
      'L’Espace Puravida vous accompagne dans le choix de vos synergies avec un conseil téléphonique bienveillant au 07 49 21 82 42.',
    icon: 'HeartHandshake',
  },
  {
    title: 'Expédition Rapide & Soignée',
    description:
      'Livraison offerte dès 30€ d’achat. Flacons en verre ambré protégés pour préserver leur vitalité vibratoire.',
    icon: 'PackageCheck',
  },
];

export const FAQ_ITEMS = [
  {
    question: "Qu'est-ce qu'un élixir floral ou une fleur de Bach ?",
    answer:
      "Créés dans les années 1930 par le Dr Edward Bach, médecin et homéopathe britannique, les élixirs floraux sont des macérations solaires de fleurs sauvages qui agissent sur les déséquilibres émotionnels passagers (peurs, doutes, fatigue, tristesse). Ils n'agissent pas sur le corps physique comme un médicament mais restaurent l'harmonie intérieure.",
  },
  {
    question: "Comment utiliser mon élixir floral au quotidien ?",
    answer:
      "La posologie classique est de 3 à 4 gouttes, 4 fois par jour, directement sous la langue ou diluées dans un demi-verre d'eau. Vous pouvez aussi verser 16 gouttes dans une gourde d'eau à boire au fil de la journée. Les prises les plus importantes sont au réveil et au coucher.",
  },
  {
    question: "Puis-je combiner plusieurs fleurs de Bach ?",
    answer:
      "Oui, absolument ! Le Dr Bach préconisait jusqu'à 6 ou 7 fleurs complémentaires au sein d'un même mélange. Si vos résultats mettent en avant deux élixirs (par exemple Le Noyer et L'Olivier), vous pouvez parfaitement les associer dans le même verre d'eau.",
  },
  {
    question: "Combien de temps faut-il pour ressentir les bienfaits ?",
    answer:
      "Certaines personnes ressentent un soulagement dès les premières prises (notamment pour l'angoisse ou l'irritabilité). Pour un rééquilibrage de fond lié au rythme de l'automne, une cure de 3 à 4 semaines (soit l'équivalent d'un flacon de 15ml ou 30ml) est généralement idéale.",
  },
  {
    question: "Y a-t-il des versions sans alcool disponibles ?",
    answer:
      "Oui ! L'Espace Puravida propose les élixirs originels avec alcool ainsi que des versions sans alcool (Deva) pour les enfants, femmes enceintes ou personnes sensibles, disponibles sur notre boutique en ligne.",
  },
];

export const CLIENT_TESTIMONIALS = [
  {
    author: 'Sophie M.',
    city: 'Lyon',
    date: 'Octobre 2025',
    flower: 'Le Noyer',
    text: "Chaque automne est une épreuve pour mon moral avec les jours qui déclinent. Sur recommandation de l'Espace Puravida, j'ai pris Le Noyer : la transition s'est faite avec une douceur incroyable.",
    rating: 5,
  },
  {
    author: 'Laurent D.',
    city: 'Nantes',
    date: 'Novembre 2025',
    flower: "L'Olivier",
    text: "Complètement à plat après une rentrée intense, L'Olivier m'a permis de recharger mes batteries et de retrouver un vrai sommeil réparateur sans fatigue persistante dès le réveil.",
    rating: 5,
  },
  {
    author: 'Camille R.',
    city: 'Bordeaux',
    date: 'Septembre 2025',
    flower: 'La Moutarde',
    text: "Ce petit test m'a orientée vers la Moutarde. En 48h, cette chape de plomb inexpliquée s'est envolée. Merci pour la qualité des élixirs et la rapidité d'envoi !",
    rating: 5,
  },
];
