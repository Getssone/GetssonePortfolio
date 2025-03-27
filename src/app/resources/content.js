import { Badge, Grid, InlineCode } from "@/once-ui/components";

const person = {
  firstName: "Gaëtan",
  lastName: "Solis",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Développeur Web / Application",
  avatar: "/images/avatar.webp",
  location: "Europe/Paris", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  countryActuelle: "France",
  country2: "Chine",
  languages: ["Français", "Anglais", "Chinois"], // optional: Leave the array empty if you don't want to display languages
  passions: ["Développer", "Modéliser", "Chercher"], // optional: Leave the array empty if you don't want to display languages
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
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
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
    link: "mailto:gaetan.solis@gmail.com",
    //ineedtoknow@duck.com
  },
];

const home = {
  label: "Getssone",
  title: `${person.name} Portfolio`,
  description: `Mon portfolio présentant le travail de Gaëtan Solis alias Getssone développeur et modélisateur 3d`,
  headline: (
    <>
      En tant que <br /> {person.role}
    </>
  ),
  subline: (
    <>
      Je suis {person.name}, un Développeur <InlineCode>FULL-STACK</InlineCode>.
      Je crée des sites et applications intuitives en mettant en premier
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
                Fonctionnalités développées : (Vente de biens
                immobiliers,immobilières, Enregistrement de biens, Sauvegarde de
                documents liés aux biens immobiliers) Informations
              </li>
            </ul>
          </>,
          <>
            Technologie :{" "}
            <Grid columns="3" gap="24" padding="24">
              <Badge title="React" icon="react" arrow={false}></Badge>
              <Badge title="TypeScript" icon="typescript" arrow={false}></Badge>
              <Badge title="Css" icon="css" arrow={false}></Badge>
              <Badge title="API Rest" icon="api" arrow={false}></Badge>
              <Badge title="Docker" icon="docker" arrow={false}></Badge>
            </Grid>
          </>,
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
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
                Fonctionnalités développées : (Multi-diffusion immobilières,
                Gestion des documents, Suivi des transactions, Collaboration
                interprofessionnelle, Partage d'honoraires, Analyse des
                performances, Gestion des collaborateurs,){" "}
              </li>
            </ul>
          </>,
          <>
            Technologie :{" "}
            <Grid columns="3" gap="24" padding="24">
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
                Piloter le projet de marketing opérationnel et de communication
                : organisation, suivi, évaluation...
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
        // optional: leave the array empty if you don't want to display images
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
  title: "Blog de Getssone ",
  subtitle: "Bienvenu dans mon journal de bord ",
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
  title: "Travaux de Getssone",
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const secretpage = {
  label: "Page secrète",
  display: true,
  title: "Galerie de photos UX/UI /Dév et Modélisation",
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
      Parce que tes yeux méritent le meilleur : personnalise l'affichage pour un
      confort optimal.
    </>
  ),
};

export {
  person,
  social,
  newsletter,
  home,
  about,
  blog,
  work,
  secretpage,
  themeParams,
};
