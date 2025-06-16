import {
  Badge,
  InlineCode,
  Grid,
  Flex,
  Heading,
  Text,
} from "@/once-ui/components";

const person = {
  firstName: "Gaëtan",
  lastName: "Solis",
  email: "contact@gaetan-solis.fr",
  adresseSiegeSocial: "11 rue du gris 07100 Boulieu les Annonay",
  formeJuridique: "EI",
  siren: "En cours d'immatriculation",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Développeur Web / Application",
  profilTags: ["Web integrator", "Software ingénieur", "PWA applications"],
  avatar: "/images/avatar.webp",
  location: "Europe/Paris",
  countryActuelle: "France",
  country2: "Chine",
  languages: ["Français", "Anglais", "Chinois"],
  passions: ["Développer", "Modéliser", "Chercher"],
};
const hebergeur = {
  name: "O2SWITCH",
  slogan: "Hébergement 100% Français",
  tel: "+33.444446041",
  adresse: "Chemin des Pardiaux, CLERMONT FERRAND, 63000, FR",
  email: "dns-nospam@o2switch.fr",
};

const newsletter = {
  display: false,
  title: <>Inscrit toi a la Newsletter de {person.firstName}</>,
  description: (
    <>
      J'écris occasionnellement sur le design, la modélisation et la
      technologie, l'intersection de la créativité et de l'ingénierie.
    </>
  ),
};

const social = [
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/Getssone",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/gaetan-solis/",
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
  },
  {
    name: "Bao-Link",
    icon: "globe",
    link: "https://www.bao-link.com",
  },
  {
    name: "Malt",
    icon: "malt",
    link: "https://www.malt.fr/profile/gaetansolis",
  },
  {
    name: "CV",
    icon: "cv",
    link: "https://github.com/Getssone/GetssonePortfolio/tree/main/public/images/CV_Gaetan_Solis-Dev-Full-Stack-WK.pdf",
  },
];

const home = {
  imageOG: "/images/Illustration-Hebergeur_bao-link.webp",
  label: "Getssone",
  title: `${person.name} Portfolio`,
  description: `Hello, je suis Gaëtan Solis alias Getssone développeur et modélisateur 3d voici mon portfolio présentant mon travail.`,
  headline: (
    <>
      En tant que <br /> {person.role}
    </>
  ),
  subline: (
    <>
      Je suis {person.name}, un Développeur <InlineCode>FULL-STACK</InlineCode>.
      Je crée des sites et applications intuitives en mettant en avant
      l'expérience utilisateur.
    </>
  ),
};

const about = {
  label: "A Propos",
  title: "A Propos de moi",
  description: `Rencontrer moi ${person.name}, ${person.role} actuellement en ${person.countryActuelle} je viens également a travailler en ${person.country2}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: false,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    descriptionMeta: `Développeur Full-Stack passionné, je suis constamment en veille sur les nouvelles technologies et innovations. Mon intérêt s'étend des **LANGAGES DE PROGRAMMATION** aux **DOMAINES ÉMERGENTS** tels que la réalité virtuelle et la **MODÉLISATION 3D**. Cette curiosité insatiable pour la recherche et l'exploration me permet de créer des solutions innovantes et de rester à la pointe des tendances technologiques. Mon approche polyvalente et ma capacité à m'adapter rapidement font de moi un atout précieux dans tout projet.${person.profilTags.map(
      (profilTag, index) => `**${profilTag}**`
    )}`,
    description: (
      <>
        <div>
          Développeur Full-Stack passionné, je suis constamment en veille sur
          les nouvelles technologies et innovations. Mon intérêt s'étend des{" "}
          <InlineCode>
            <strong>LANGAGES DE PROGRAMMATION</strong>
          </InlineCode>{" "}
          aux{" "}
          <InlineCode>
            {" "}
            <strong>DOMAINES ÉMERGENTS</strong>
          </InlineCode>{" "}
          tels que la réalité virtuelle et la{" "}
          <InlineCode>
            <strong>MODÉLISATION 3D</strong>.
          </InlineCode>{" "}
        </div>
        <div>
          Cette curiosité insatiable pour la recherche et l'exploration me
          permet de créer des solutions innovantes et de rester à la pointe des
          tendances technologiques. Mon approche polyvalente et ma capacité à
          m'adapter rapidement font de moi un atout précieux dans tout projet.
        </div>
      </>
    ),
  },
  work: {
    display: true,
    title: "Experience Professionnel",
    experiences: [
      {
        company: "Ideeri",
        timeframe: "2023 - 2025",
        role: "Développeur Full-Stack",
        achievements: [
          <>
            Développement d'une PWA (Progressive Web App) pour les particuliers.
            <ul>
              <li>Connaissance approfondie de l'API REST Papiris </li>
              <li>
                Fonctionnalités développées: (Vente de biens
                immobiliers,immobilières, Enregistrement de biens, Sauvegarde de
                documents liés aux biens immobiliers) Informations
              </li>
            </ul>
          </>,
          <>
            Technologie:{" "}
            <Grid columns="666" justifyItems="center" gap="24" padding="24">
              <Badge title="React" icon="react" arrow={false}></Badge>
              <Badge title="TypeScript" icon="typescript" arrow={false}></Badge>
              <Badge title="Css" icon="css" arrow={false}></Badge>
              <Badge title="API Rest" icon="api" arrow={false}></Badge>
              <Badge title="Docker" icon="docker" arrow={false}></Badge>
            </Grid>
          </>,
        ],
        images: [
          {
            src: "/images/projects/project-ideeri/cover-ideeri-01.webp",
            alt: "IdeeriProject",
            width: 9,
            height: 18,
          },
          {
            src: "/images/projects/project-ideeri/cover-ideeri-02.webp",
            alt: "IdeeriProject",
            width: 9,
            height: 18,
          },
          {
            src: "/images/projects/project-ideeri/cover-ideeri-10.webm",
            alt: "IdeeriProject",
            width: 9,
            height: 18,
          },
        ],
      },
      {
        company: "Papiris",
        timeframe: "2023 - 2025",
        role: "Développeur Full-Stack",
        achievements: [
          <>
            Développement d'une solution SaaS (Software as a Service) pour les
            professionnels de l'immobilier.
            <ul>
              <li>Connaissance approfondie de l'API REST Papiris </li>
              <li>
                Fonctionnalités développées: (Multi-diffusion immobilières,
                Gestion des documents, Suivi des transactions, Collaboration
                interprofessionnelle, Partage d'honoraires, Analyse des
                performances, Gestion des collaborateurs,){" "}
              </li>
            </ul>
          </>,
          <>
            Technologie:{" "}
            <Grid columns="666" justifyItems="center" gap="24" padding="24">
              <Badge title="Laravel" icon="laravel" arrow={false}></Badge>
              <Badge title="React" icon="react" arrow={false}></Badge>
              <Badge title="TypeScript" icon="typescript" arrow={false}></Badge>
              <Badge title="Css" icon="css" arrow={false}></Badge>
              <Badge title="API Rest" icon="api" arrow={false}></Badge>
              <Badge title="SQL" icon="sql" arrow={false}></Badge>
              <Badge title="Heroku" icon="heroku" arrow={false}></Badge>
              <Badge title="Docker" icon="docker" arrow={false}></Badge>
            </Grid>
          </>,
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
          {
            src: "/images/projects/project-papiris/cover-papiris.webp",
            alt: "Papiris Project",
            width: 35,
            height: 13,
          },
        ],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Études",
    institutions: [
      {
        name: "Licence Back-End",
        description: (
          <>
            <ul>
              <li>
                Analyser un cahier des charges et choisir une solution technique
                adaptée parmi les solutions existantes.
              </li>
              <li>
                Concevoir l’architecture technique d’une application à l’aide de
                diagrammes UML.
              </li>
              <li>Créer des projets web dynamiques grâce PHP.</li>
              <li>
                Communiquer avec une base de données pour stocker et requêter
                des informations.
              </li>
              <li>
                Développer de manière professionnelle grâce au framework
                Symfony.
              </li>
              <li>
                Mettre en oeuvre des tests unitaires et fonctionnels ainsi
                qu’utiliser les outils les plus connus d’intégration continue.
              </li>
              <li>
                Produire une documentation technique et fonctionnelle de
                l’application.
              </li>
              <li>
                Produire une documentation technique et fonctionnelle de
                l’application.
              </li>
              <li>
                Prendre en compte les problématiques de performance d’une
                application PHP.
              </li>
            </ul>
          </>
        ),
      },
      {
        name: "Licence Front-End",
        description: (
          <>
            <ul>
              <li>
                Choisir une solution technique adaptée aux client et travailler
                en mode Agile.
              </li>
              <li>Créer des sites webs responsive.</li>
              <li>
                Créer des applications web dynamiques avec Javascript, React,
                Redux, NextJS.
              </li>
              <li>
                Communiquer avec le back-end de l’application grâce à une API.
              </li>
              <li>
                Mettre en œuvre des test unitaires et d’intégration et débugger
                le code.
              </li>
              <li>
                Résoudre des problèmes techniques avec un langage de
                programmation et des algorithmes.
              </li>
              <li>
                Refactoriser du code pour qu’il soit plus moderne et optimisé.
              </li>
            </ul>
          </>
        ),
      },
      {
        name: "Licence Entrepreneurial",
        description: (
          <>
            <ul>
              <li>Mobiliser les outils économiques et juridiques.</li>
              <li>Réaliser la gestion administrative des contrats.</li>
              <li>Savoir monter un business model et un business plan.</li>
              <li>
                Négocier et argumenter dans le cadre d’une négociation
                commerciale.
              </li>
              <li>
                Appliquer les méthodes de prospection et de négociation
                clients/fournisseurs.
              </li>
              <li>Mobiliser les fondamentaux du marketing.</li>
              <li>Organiser le fonctionnement de la structure.</li>
            </ul>
          </>
        ),
      },
      {
        name: "Bachelor Marketing",
        description: (
          <>
            <ul>
              <li>
                Analyser et appréhender la problématique du client en optimisant
                la collecte des informations existantes et complémentaires à
                recueillir (études de marché qualitatives et quantitatives).
              </li>
              <li>
                Établir une recommandation en proposant de manière argumentée un
                ou des axes privilégiés en fonction de la situation du client et
                de sa stratégie marketing communication.
              </li>
              <li>
                Établir en cohérence avec la stratégie un plan de marketing
                opérationnel et communication en en évaluant les objectifs,
                moyens, budget, délais, étapes, ressources...
              </li>
              <li>
                Piloter le projet de marketing opérationnel et de communication:
                organisation, suivi, évaluation...
              </li>
            </ul>
          </>
        ),
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Compétences Transversales",
    skills: [
      {
        title: "Figma / Penpot",
        description: <>Mes dernier prototype UX/UI.</>,
        images: [
          {
            src: "/images/figma/cover-01.webp",
            alt: "Extrait d'un exercice pour SportSee",
            width: 16,
            height: 9,
          },
          {
            src: "/images/figma/cover-02.webp",
            alt: "Création de l'UX pour Silco",
            width: 16,
            height: 9,
          },
          {
            src: "/images/figma/cover-03.webp",
            alt: "Extrait d'une application destiné aux photographes",
            width: 36,
            height: 12,
          },
        ],
      },
      {
        title: "Blender / Fusion 360",
        description: <>Mes dernières Modélisation 3D</>,
        images: [
          {
            src: "/images/3d/sniper-lowpoly.webp",
            alt: "Modélisation d'une arme pour un jeux VR avec mappage UV",
            width: 16,
            height: 9,
          },
          {
            src: "/images/3d/Bague_Présentation_v2.webp",
            alt: "Modélisation de plusieurs bague afin de connaître la quel serait la plus pertinente a crée",
            width: 16,
            height: 9,
          },
          {
            src: "/images/3d/object-debutant.mp4",
            alt: "Vidéo d'une modélisation animée",
            width: 18,
            height: 10,
          },
          {
            src: "/images/3d/Cuiseur_Vapeur_ CGH_avec_Couvercle.webp",
            alt: "Vidéo d'une modélisation animée",
            width: 14,
            height: 10,
          },
        ],
      },
    ],
  },
};

const blog = {
  label: "Note à moi-même",
  title: `Blog de ${person.name}`,
  subtitle: "Bienvenu dans mon journal de bord ",
  descriptionMeta:
    "Ici, j'écris sur le design et les technologies que j'ai apprécié de découvrir, je mets également ma boite à outils à disposition pour tous dév, manager SEO, UX/UI designer qui souhaiterait découvrir de nouvelles méthodes...",
  description: (
    <>
      Ici, j'écris sur le <InlineCode>design</InlineCode> et les{" "}
      <InlineCode>technologies</InlineCode> que j'ai apprécié de découvrir, je
      mets également ma <InlineCode>boite à outils</InlineCode> à disposition
      pour tous dév, manager SEO, UX/UI designer qui souhaiterait découvrir de
      nouvelles méthodes...
    </>
  ),
  quotes: [
    {
      text: (
        <blockquote>
          Nous sommes ce que nous faisons à répétition. L’excellence n’est donc
          pas un acte mais une habitude.
        </blockquote>
      ),
      author: "Aristote",
      authorPicture: "/images/quote/aristote.webp",
    },
    {
      text: (
        <blockquote>
          Une vision sans action n’est qu’une hallucination.
        </blockquote>
      ),
      author: "Michael Kami",
      authorPicture: "/images/quote/michael-kami.webp",
    },
    {
      text: (
        <>
          <blockquote>
            Ne pas l'avoir appris n'est pas aussi bien que l'avoir appris
          </blockquote>
          <blockquote>
            L'avoir appris n'est pas aussi bien que l'avoir vu mis en œuvre ;
          </blockquote>
          <blockquote>
            L'avoir vu mis en œuvre n'est pas aussi bien que le comprendre;
          </blockquote>
          <blockquote>
            Le comprendre n'est pas aussi bien que le faire ;
          </blockquote>
        </>
      ),
      author: "Xun Kuang (penseur chinois confucianiste)",
      authorPicture: "/images/quote/xun-kuang.webp",
    },
    {
      text: (
        <blockquote>
          L'intelligence n'est pas la capacité de stocker des informations, mais
          de savoir où les trouver.
        </blockquote>
      ),
      author: "Einstein",
      authorPicture: "/images/quote/einstein.webp",
    },
    {
      text: (
        <>
          <blockquote>Dis moi et j’oublie.</blockquote>
          <blockquote>Enseigne le moi et je me souviens.</blockquote>
          <blockquote> Implique moi et je comprends.</blockquote>
        </>
      ),
      author: "Confucius",
      authorPicture: "/images/quote/confucius.webp",
    },
  ],
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work = {
  label: "Mes Travaux",
  title: `Travaux de ${person.name}`,
  description: `Design and dev projects by ${person.name}`,
};

const secretpage = {
  label: "Page secrète",
  display: true,
  title: "Page secrète",
  description: (
    <>
      Hello a toi - Tu as trouvé(e) ma galerie secrète -{" "}
      <InlineCode>#AmoureuxDeLaPhoto</InlineCode>
    </>
  ),
  // Images from https://pexels.com
  images: [
    {
      src: "/images/gallery/img-01.webp",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-02.webp",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-03.webp",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-04.webp",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-05.webp",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-06.webp",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-07.webp",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-08.webp",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-09.webp",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-10.webp",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-11.webp",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-12.webp",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-13.webp",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-14.webp",
      alt: "image",
      orientation: "horizontal",
    },
  ],
};
const themeParams = {
  label: "Pour toi",
  display: true,
  title: "Paramètre du blog",
  description: (
    <>
      Parce que tes yeux méritent le meilleur: personnalise l'affichage pour un
      confort optimal.
    </>
  ),
};

const mentionsLegales = {
  label: "Mentions légales",
  title: "Mentions légales",
  intro: {
    display: true,
    title: "Introduction",
    description: `Ces mentions légales ont pour but de fournir des informations sur l'identité de l'éditeur du site et les conditions d'utilisation. En utilisant ce site, vous acceptez les présentes mentions légales.`,
  },
  legalInfo: {
    display: true,
    title: "1. Informations Légales",
    content: (
      <>
        <ul className="liserai ">
          <li>
            <strong>Nom de l'éditeur:</strong> {person.name}
          </li>
          <li>
            <strong>Rôle:</strong> {person.role}
          </li>
          <li>
            <strong>Adresse:</strong> {person.adresseSiegeSocial}
          </li>
          <li>
            <strong>Email:</strong> {person.email}
          </li>
          <li>
            <strong>Numéro SIRET:</strong> {person.siren}
          </li>
          <li>
            <strong>Hébergeur:</strong> {hebergeur.name}
          </li>
          <li>
            <strong>Adresse de l'hébergeur:</strong> {hebergeur.adresse}
          </li>
          <li>
            <strong>Numéro de téléphone de l'hébergeur:</strong> {hebergeur.tel}
          </li>
        </ul>
        <p className="display-flex justify-center mb-64">
          <strong>
            <i>{hebergeur.slogan}</i>
          </strong>
        </p>
        <Heading as="h3" variant="display-strong-m" marginBottom="m">
          <u>1.1 Droits d'Auteurs</u>
        </Heading>
        <p>
          Tous les contenus présents sur ce site, y compris les textes, images,
          graphismes, logos, et vidéos, sont protégés par des droits d'auteur.
          Toute reproduction, même partielle, est interdite sans autorisation
          préalable.
        </p>
        <Heading as="h3" variant="display-strong-m" marginBottom="m">
          <u>1.2 Politique de Cookies</u>
        </Heading>
        <p>Ce site n'utilise pas de cookies.</p>
      </>
    ),
  },
  privacyPolicy: {
    display: false,
    title: "2. Politique de Confidentialité (Conformément au RGPD)",
    content: (
      <>
        <p>
          Cette Politique de Confidentialité décrit Nos politiques et procédures
          concernant la collecte, l'utilisation et la divulgation de Vos
          informations lorsque Vous utilisez le Service et Vous informe de Vos
          droits en matière de protection des données et de la manière dont la
          loi Vous protège.
        </p>
        <p>
          Nous utilisons Vos Données personnelles pour fournir et améliorer le
          Service. En utilisant le Service, Vous consentez à la collecte et à
          l'utilisation des informations conformément à cette Politique de
          Confidentialité.
        </p>
        <Heading as="h3" variant="display-strong-m" marginBottom="m">
          <u>2.1. Interprétation et Définitions</u>
        </Heading>
        <Heading as="h4" variant="display-strong-m" marginBottom="m">
          <u>2.1.1. Interprétation</u>
        </Heading>
        <p>
          Les mots dont la lettre initiale est en majuscule ont des
          significations définies dans les conditions suivantes. Les définitions
          suivantes auront la même signification, qu'elles apparaissent au
          singulier ou au pluriel.
        </p>
        <Heading as="h4" variant="display-strong-m" marginBottom="m">
          <u>2.1.2. Définitions</u>
        </Heading>
        <ul>
          <li>
            <strong>Compte</strong> désigne un compte unique créé pour Vous
            permettre d'accéder à Notre Service ou à des parties de Notre
            Service.
          </li>
          <li>
            <strong>Affilié</strong> désigne une entité qui contrôle, est
            contrôlée par ou est sous contrôle commun avec une partie, où le
            terme « contrôle » signifie la propriété de 50 % ou plus des
            actions, des participations ou d'autres titres habilités à voter
            pour l'élection des administrateurs ou d'autres autorités de
            gestion.
          </li>
          <li>
            <strong>Société</strong> (désignée par « la Société », « Nous », «
            Notre » ou « Nos » dans cet Accord) désigne `Yopmail`, dont le siège
            social est situé à `[adresseYopmail]`.
          </li>
          <li>
            <strong>Cookies</strong> sont de petits fichiers placés sur Votre
            ordinateur, Votre appareil mobile ou tout autre appareil par un site
            web, contenant les détails de Votre historique de navigation sur ce
            site web, parmi de nombreuses autres utilisations.
          </li>
          <li>
            <strong>Pays</strong> désigne: France
          </li>
          <li>
            <strong>Appareil</strong> désigne tout appareil pouvant accéder au
            Service, tel qu'un ordinateur, un téléphone portable ou une tablette
            numérique.
          </li>
          <li>
            <strong>Données Personnelles</strong> désigne toute information se
            rapportant à une personne physique identifiée ou identifiable («
            personne concernée »). Est réputée identifiable une personne
            physique qui peut être identifiée, directement ou indirectement,
            notamment par référence à un identifiant, tel qu'un nom, un numéro
            d'identification, des données de localisation, un identifiant en
            ligne, ou à un ou plusieurs éléments spécifiques propres à son
            identité physique, physiologique, génétique, psychique, économique,
            culturelle ou sociale.
          </li>
          <li>
            <strong>Service</strong> désigne le Site Web `Yopmail.fr`.
          </li>
          <li>
            <strong>Prestataire de Services</strong> désigne toute personne
            physique ou morale qui traite les données pour le compte de la
            Société. Il s'agit de sociétés tierces ou de personnes employées par
            la Société pour faciliter le Service, pour fournir le Service au nom
            de la Société, pour exécuter des services liés au Service ou pour
            aider la Société à analyser la manière dont le Service est utilisé.
          </li>
          <li>
            <strong>Données d'Utilisation</strong> désigne les données
            collectées automatiquement, générées soit par l'utilisation du
            Service, soit par l'infrastructure du Service elle-même (par
            exemple, la durée d'une visite de page).
          </li>
          <li>
            <strong>Site Web</strong> désigne `[Yopmail]` accessible depuis
            `[Yopmail.fr]`.
          </li>
          <li>
            <strong>Vous</strong> désigne la personne accédant ou utilisant le
            Service, ou la société, ou toute autre entité juridique au nom de
            laquelle cette personne accède ou utilise le Service, selon le cas.
          </li>
        </ul>
        <Heading as="h3" variant="display-strong-m" marginBottom="m">
          <u>2.2. Collecte et Utilisation de Vos Données Personnelles</u>
        </Heading>
        <Heading as="h4" variant="display-strong-m" marginBottom="m">
          <u>2.2.1. Types de Données Collectées</u>
        </Heading>
        <Heading as="h4" variant="display-strong-m" marginBottom="m">
          Données Personnelles
        </Heading>
        <p>
          Lors de l'utilisation de Notre Service, Nous pouvons Vous demander de
          Nous fournir certaines informations personnellement identifiables qui
          peuvent être utilisées pour Vous contacter ou Vous identifier. Les
          informations personnellement identifiables peuvent inclure, sans s'y
          limiter:
        </p>
        <Heading as="h4" variant="display-strong-m" marginBottom="m">
          Données d'Utilisation
        </Heading>
        <p>
          Les Données d'Utilisation sont collectées automatiquement lors de
          l'utilisation du Service. Les Données d'Utilisation peuvent inclure
          des informations telles que l'adresse de protocole Internet (par
          exemple, l'adresse IP) de Votre Appareil, le type de navigateur, la
          version du navigateur, les pages de Notre Service que Vous visitez,
          l'heure et la date de Votre visite, le temps passé sur ces pages, les
          identifiants uniques de l'appareil et d'autres données de diagnostic.
        </p>
        <p>
          Lorsque Vous accédez au Service par ou via un appareil mobile, Nous
          pouvons collecter automatiquement certaines informations, y compris,
          mais sans s'y limiter, le type d'appareil mobile que Vous utilisez,
          l'identifiant unique de Votre appareil mobile, l'adresse IP de Votre
          appareil mobile, Votre système d'exploitation mobile, le type de
          navigateur Internet mobile que Vous utilisez, les identifiants uniques
          de l'appareil et d'autres données de diagnostic.
        </p>
        <p>
          Nous pouvons également collecter les informations que Votre navigateur
          envoie chaque fois que Vous visitez Notre Service ou lorsque Vous
          accédez au Service par ou via un appareil mobile.
        </p>
        <Heading as="h4" variant="display-strong-m" marginBottom="m">
          Technologies de Suivi et Cookies
        </Heading>
        <p>
          Nous utilisons des Cookies et des technologies de suivi similaires
          pour suivre l'activité sur Notre Service et stocker certaines
          informations. Les technologies de suivi utilisées sont des balises,
          des étiquettes et des scripts pour collecter et suivre les
          informations et pour améliorer et analyser Notre Service. Les
          technologies que Nous utilisons peuvent inclure:
        </p>
        <ul>
          <li>
            <strong>Cookies ou Cookies de Navigateur.</strong> Un cookie est un
            petit fichier placé sur Votre Appareil. Vous pouvez demander à Votre
            navigateur de refuser tous les Cookies ou de Vous indiquer quand un
            Cookie est envoyé. Cependant, si Vous n'acceptez pas les Cookies,
            Vous ne pourrez peut-être pas utiliser certaines parties de Notre
            Service. À moins que Vous n'ayez ajusté les paramètres de Votre
            navigateur pour qu'il refuse les Cookies, Notre Service peut
            utiliser des Cookies.
          </li>
          <li>
            <strong>Balises Web.</strong> Certaines sections de Notre Service et
            de Nos e-mails peuvent contenir de petits fichiers électroniques
            appelés balises web (également appelés GIF invisibles, pixels
            espions et GIF à pixel unique) qui permettent à la Société, par
            exemple, de compter les utilisateurs qui ont visité ces pages ou
            ouvert un e-mail et pour d'autres statistiques de site web connexes
            (par exemple, enregistrer la popularité d'une certaine section et
            vérifier l'intégrité du système et du serveur).
          </li>
        </ul>
        <p>
          Les Cookies peuvent être des Cookies « Persistants » ou des Cookies de
          « Session ». Les Cookies Persistants restent sur Votre ordinateur
          personnel ou Votre appareil mobile lorsque Vous êtes hors ligne,
          tandis que les Cookies de Session sont supprimés dès que Vous fermez
          Votre navigateur web.
        </p>
        <p>
          Nous utilisons à la fois des Cookies de Session et des Cookies
          Persistants aux fins énoncées ci-dessous:
        </p>
        <ul>
          <li>
            <strong>Cookies Nécessaires / Essentiels</strong>
            <ul>
              <li>Type: Cookies de Session</li>
              <li>Administrés par: Nous</li>
              <li>
                Base légale (RGPD): Article 6(1)(b) - Nécessaire à l'exécution
                d'un contrat.
              </li>
              <li>
                Objectif: Ces Cookies sont essentiels pour Vous fournir les
                services disponibles via le Site Web et pour Vous permettre
                d'utiliser certaines de ses fonctionnalités. Ils aident à
                authentifier les utilisateurs et à prévenir l'utilisation
                frauduleuse des comptes d'utilisateurs. Sans ces Cookies, les
                services que Vous avez demandés ne peuvent pas être fournis, et
                Nous n'utilisons ces Cookies que pour Vous fournir ces services.
              </li>
            </ul>
          </li>
          <li>
            <strong>Cookies de Politique / d'Acceptation des Avis</strong>
            <ul>
              <li>Type: Cookies Persistants</li>
              <li>Administrés par: Nous</li>
              <li>
                Base légale (RGPD): Article 6(1)(c) - Nécessaire au respect
                d'une obligation légale.
              </li>
              <li>
                Objectif: Ces Cookies identifient si les utilisateurs ont
                accepté l'utilisation de cookies sur le Site Web.
              </li>
            </ul>
          </li>
          <li>
            <strong>Cookies de Fonctionnalité</strong>
            <ul>
              <li>Type: Cookies Persistants</li>
              <li>Administrés par: Nous</li>
              <li>
                Base légale (RGPD): Article 6(1)(a) - Consentement.{" "}
                <strong>
                  [Important: Vous devez obtenir le consentement explicite de
                  l'utilisateur pour ces cookies.]
                </strong>
              </li>
              <li>
                Objectif: Ces Cookies Nous permettent de mémoriser les choix que
                Vous faites lorsque Vous utilisez le Site Web, tels que la
                mémorisation de Vos identifiants de connexion ou de Vos
                préférences linguistiques. L'objectif de ces Cookies est de Vous
                offrir une expérience plus personnelle et de Vous éviter d'avoir
                à saisir à nouveau Vos préférences chaque fois que Vous utilisez
                le Site Web.
              </li>
            </ul>
          </li>
        </ul>
        <p>
          <strong>
            [Ajouter ici une section spécifique sur la gestion des cookies par
            l'utilisateur, comment il peut les accepter ou les refuser.]
          </strong>
        </p>
        <p>
          Pour plus d'informations sur les cookies que Nous utilisons et Vos
          choix concernant les cookies, veuillez consulter Notre Politique en
          matière de Cookies{" "}
          <strong>
            [Lien vers votre politique de cookies dédiée, si vous en avez une]
          </strong>{" "}
          ou la section Cookies de Notre Politique de Confidentialité.
        </p>
        <Heading as="h3" variant="display-strong-m" marginBottom="m">
          <u>2.3. Utilisation de Vos Données Personnelles</u>
        </Heading>
        <p>
          La Société peut utiliser les Données Personnelles aux fins suivantes:
        </p>
        <p>
          <ul>
            <li>
              <strong>Pour fournir et maintenir Notre Service</strong>, y
              compris pour surveiller l'utilisation de Notre Service.
              <br />
              Base légale (RGPD): Article 6(1)(b) - Nécessaire à l'exécution
              d'un contrat.
            </li>
            <li>
              <strong>Pour gérer Votre Compte:</strong> pour gérer Votre
              inscription en tant qu'utilisateur du Service. Les Données
              Personnelles que Vous fournissez peuvent Vous donner accès à
              différentes fonctionnalités du Service qui Vous sont disponibles
              en tant qu'utilisateur enregistré.
              <br />
              Base légale (RGPD): Article 6(1)(b) - Nécessaire à l'exécution
              d'un contrat.
            </li>
            <li>
              <strong>Pour l'exécution d'un contrat:</strong> l'élaboration, le
              respect et l'exécution du contrat d'achat des produits, articles
              ou services que Vous avez achetés ou de tout autre contrat avec
              Nous via le Service.
              <br />
              Base légale (RGPD): Article 6(1)(b) - Nécessaire à l'exécution
              d'un contrat.
            </li>
            <li>
              <strong>Pour Vous contacter:</strong> Pour Vous contacter par
              e-mail, appels téléphoniques, SMS ou autres formes équivalentes de
              communication électronique, telles que les notifications push
              d'une application mobile concernant les mises à jour ou les
              communications informatives relatives aux fonctionnalités,
              produits ou services contractés, y compris les mises à jour de
              sécurité, lorsque cela est nécessaire ou raisonnable pour leur
              mise en œuvre.
              <br />
              Base légale (RGPD): Article 6(1)(b) - Nécessaire à l'exécution
              d'un contrat ou Article 6(1)(f) - Intérêt légitime (par exemple,
              pour les communications de service).
            </li>
            <li>
              <strong>Pour Vous fournir</strong> des actualités, des offres
              spéciales et des informations générales sur d'autres biens,
              services et événements que Nous proposons et qui sont similaires à
              ceux que Vous avez déjà achetés ou sur lesquels Vous Vous êtes
              renseigné, sauf si Vous avez choisi de ne pas recevoir ces
              informations.
              <br />
              Base légale (RGPD): Article 6(1)(a) - Consentement.{" "}
              <strong>
                [Important: Vous devez obtenir le consentement explicite de
                l'utilisateur pour le marketing direct.]
              </strong>
            </li>
            <li>
              <strong>Pour gérer Vos demandes:</strong> Pour répondre et gérer
              Vos demandes.
              <br />
              Base légale (RGPD): Article 6(1)(b) - Nécessaire à l'exécution
              d'un contrat ou Article 6(1)(f) - Intérêt légitime (par exemple,
              pour le service client).
            </li>
            <li>
              <strong>Pour les transferts d'entreprise:</strong> Nous pouvons
              utiliser Vos informations pour évaluer ou réaliser une fusion, une
              cession, une restructuration, une réorganisation, une dissolution
              ou toute autre vente ou transfert de tout ou partie de Nos actifs,
              que ce soit dans le cadre d'une exploitation courante ou dans le
              cadre d'une faillite, d'une liquidation ou d'une procédure
              similaire, dans laquelle les Données Personnelles que Nous
              détenons sur les utilisateurs de Notre Service font partie des
              actifs transférés.
              <br />
              Base légale (RGPD): Article 6(1)(f) - Intérêt légitime (par
              exemple, pour la continuité de l'activité).
            </li>
            <li>
              <strong>Pour d'autres finalités:</strong> Nous pouvons utiliser
              Vos informations à d'autres fins, telles que l'analyse de données,
              l'identification des tendances d'utilisation, la détermination de
              l'efficacité de Nos campagnes promotionnelles et pour évaluer et
              améliorer Notre Service, Nos produits, Nos services, Notre
              marketing et Votre expérience.
              <br />
              Base légale (RGPD): Article 6(1)(f) - Intérêt légitime (par
              exemple, pour l'amélioration du service et l'analyse).
            </li>
          </ul>
        </p>
        <p>
          Nous pouvons partager Vos informations personnelles dans les
          situations suivantes:
        </p>
        <ul>
          <li>
            <strong>Avec des Prestataires de Services:</strong> Nous pouvons
            partager Vos informations personnelles avec des Prestataires de
            Services pour surveiller et analyser l'utilisation de Notre Service,
            pour Vous contacter.
            <br />
            Base légale (RGPD): Article 6(1)(f) - Intérêt légitime (pour la
            fourniture efficace du service).
          </li>
          <li>
            <strong>Pour les transferts d'entreprise:</strong> Nous pouvons
            partager ou transférer Vos informations personnelles dans le cadre
            de, ou lors de négociations concernant, une fusion, une vente
            d'actifs de la Société, un financement ou une acquisition de tout ou
            partie de Notre activité par une autre société.
            <br />
            Base légale (RGPD): Article 6(1)(f) - Intérêt légitime (pour la
            continuité de l'activité).
          </li>
          <li>
            <strong>Avec des Affiliés:</strong> Nous pouvons partager Vos
            informations avec Nos affiliés, auquel cas Nous exigerons de ces
            affiliés qu'ils respectent cette Politique de Confidentialité. Les
            affiliés comprennent Notre société mère et toutes autres filiales,
            partenaires de coentreprise ou autres sociétés que Nous contrôlons
            ou qui sont sous contrôle commun avec Nous.
            <br />
            Base légale (RGPD): Article 6(1)(f) - Intérêt légitime (pour
            l'organisation interne et les services partagés).
          </li>
          <li>
            <strong>Avec des partenaires commerciaux:</strong> Nous pouvons
            partager Vos informations avec Nos partenaires commerciaux pour Vous
            proposer certains produits, services ou promotions.
            <br />
            Base légale (RGPD): Article 6(1)(a) - Consentement.{" "}
            <strong>
              [Important: Vous devez obtenir le consentement explicite de
              l'utilisateur pour le partage de données à des fins de marketing
              par des tiers.]
            </strong>
          </li>
          <li>
            <strong>Avec d'autres utilisateurs:</strong> lorsque Vous partagez
            des informations personnelles ou interagissez autrement dans les
            zones publiques avec d'autres utilisateurs, ces informations peuvent
            être consultées par tous les utilisateurs et peuvent être diffusées
            publiquement en dehors.
            <br />
            Base légale (RGPD): Article 6(1)(a) - Consentement (implicite lors
            de l'action de partage public).
          </li>
          <li>
            <strong>Avec Votre consentement:</strong> Nous pouvons divulguer Vos
            informations personnelles à toute autre fin avec Votre consentement.
            <br />
            Base légale (RGPD): Article 6(1)(a) - Consentement.
            <strong>
              [Important: Vous devez obtenir le consentement explicite de
              l'utilisateur pour le partage de données à des fins de marketing
              par des tiers.]
            </strong>
          </li>
        </ul>
        <Heading as="h3" variant="display-strong-m" marginBottom="m">
          <u>2.4. Conservation de Vos Données Personnelles</u>
        </Heading>
        <p>
          La Société ne conservera Vos Données Personnelles que pendant la durée
          nécessaire aux finalités énoncées dans la présente Politique de
          Confidentialité. Nous conserverons et utiliserons Vos Données
          Personnelles dans la mesure nécessaire pour respecter Nos obligations
          légales (par exemple, si Nous sommes tenus de conserver Vos données
          pour nous conformer aux lois applicables), résoudre les litiges et
          faire appliquer Nos accords et politiques juridiques.
        </p>
        <p>
          La Société conservera également les Données d'Utilisation à des fins
          d'analyse interne. Les Données d'Utilisation sont généralement
          conservées pendant une période plus courte, sauf lorsque ces données
          sont utilisées pour renforcer la sécurité ou pour améliorer la
          fonctionnalité de Notre Service, ou lorsque Nous sommes légalement
          tenus de conserver ces données pendant des périodes plus longues.
        </p>
        <Heading as="h3" variant="display-strong-m" marginBottom="m">
          <u>2.5. Transfert de Vos Données Personnelles</u>
        </Heading>
        <p>
          Vos informations, y compris Vos Données Personnelles, sont traitées
          dans les bureaux d'exploitation de la Société et dans tout autre lieu
          où sont situées les parties impliquées dans le traitement. Cela
          signifie que ces informations peuvent être transférées vers — et
          conservées sur — des ordinateurs situés en dehors de Votre État,
          province, pays ou autre juridiction gouvernementale où les lois sur la
          protection des données peuvent différer de celles de Votre
          juridiction.
        </p>
        <p>
          Votre consentement à cette Politique de Confidentialité, suivi de
          Votre soumission de ces informations, représente Votre accord à ce
          transfert.
        </p>
        <p>
          La Société prendra toutes les mesures raisonnablement nécessaires pour
          s'assurer que Vos données sont traitées en toute sécurité et
          conformément à cette Politique de Confidentialité et qu'aucun
          transfert de Vos Données Personnelles n'aura lieu vers une
          organisation ou un pays à moins que des contrôles adéquats ne soient
          en place, y compris la sécurité de Vos données et autres informations
          personnelles.
        </p>
        <Heading as="h3" variant="display-strong-m" marginBottom="m">
          <u>2.6. Vos Droits en vertu du RGPD</u>
        </Heading>
        <p>
          En tant que personne concernée, Vous disposez des droits suivants
          concernant Vos Données Personnelles:
        </p>
        <ul>
          <li>
            <strong>Droit d'accès:</strong> Vous avez le droit de savoir si Nous
            traitons Vos Données Personnelles et, le cas échéant, d'obtenir une
            copie de ces données et des informations connexes.
          </li>
          <li>
            <strong>Droit de rectification:</strong> Vous avez le droit de
            demander la correction de Vos Données Personnelles si elles sont
            inexactes ou incomplètes.
          </li>
          <li>
            <strong>Droit à l'effacement:</strong> Vous avez le droit de
            demander l'effacement de Vos Données Personnelles, sous réserve de
            certaines exceptions.
          </li>
          <li>
            <strong>Droit à la limitation du traitement:</strong> Vous avez le
            droit de demander la limitation du traitement de Vos Données
            Personnelles dans certaines circonstances.
          </li>
          <li>
            <strong>Droit d'opposition:</strong> Vous avez le droit de vous
            opposer à tout moment au traitement de Vos Données Personnelles, y
            compris à des fins de marketing direct.
          </li>
          <li>
            <strong>Droit de retirer le consentement:</strong> Si le traitement
            de Vos Données Personnelles est fondé sur votre consentement, vous
            avez le droit de retirer ce consentement à tout moment.
          </li>
        </ul>
        <p>
          Pour exercer ces droits, veuillez nous contacter en utilisant les
          coordonnées fournies dans la section "Informations Légales" de cette
          Politique de Confidentialité.
        </p>
      </>
    ),
  },
};

export {
  person,
  hebergeur,
  social,
  newsletter,
  home,
  about,
  blog,
  work,
  secretpage,
  themeParams,
  mentionsLegales,
};
