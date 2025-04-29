import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Container,
  Divider,
  IconButton,
  Stack,
  Typography,
  useColorScheme,
} from "@mui/material";
import {
  EmojiObjects,
  Public,
  RocketLaunch,
  Warning,
  Visibility,
  Grass,
  ArrowBackIos,
  ArrowForwardIos,
} from "@mui/icons-material";
import { motion } from "framer-motion";
import { useRef, useState } from "react";

const articles = [
  {
    title: "Stratégie Continentale sur l’Intelligence Artificielle",
    source: "Union Africaine",
    url: "https://au.int/sites/default/files/documents/44004-doc-FR_Strategie_Continentale_sur_lIntelligence_Artificielle_3.pdf?ref=fakt-afrique.org",
    summary:
      "Vision de l’Union Africaine pour un développement éthique et inclusif de l’IA sur le continent.",
  },
  {
    title: "ARTIFICIAL INTELLIGENCE, A DRIVING FORCE FOR CHANGE IN AFRICA",
    source: "AFD",
    url: "https://www.afd.fr/en/Artificial-intelligence-Africa",
    summary:
      "L'IA comme levier de transformation économique et sociale en Afrique, selon l’AFD.",
  },
  {
    title:
      "Au Rwanda, l’Ircad Africa forme les médecins africains à la chirurgie de pointe",
    source: "Le Monde",
    url: "https://www.lemonde.fr/afrique/article/2024/08/28/au-rwanda-l-ircad-africa-forme-les-medecins-africains-a-la-chirurgie-de-pointe_6297729_3212.html",
    summary:
      "Un centre d’excellence forme les praticiens africains aux techniques chirurgicales avancées.",
  },
  {
    title:
      "Au Maroc, le centre AI Movement met l’intelligence artificielle au service du continent africain",
    source: "Le Monde",
    url: "https://www.lemonde.fr/afrique/article/2024/03/21/au-maroc-le-centre-ai-movement-met-l-intelligence-artificielle-au-service-du-continent-africain_6223333_3212.html",
    summary:
      "Le Maroc se positionne comme hub africain de l’innovation en intelligence artificielle.",
  },
  {
    title: "GITEX Africa",
    source: "Wikipédia",
    url: "https://fr.wikipedia.org/wiki/GITEX_Africa",
    summary:
      "Le plus grand salon tech d’Afrique réunissant startups, gouvernements et investisseurs.",
  },
  {
    title: "Crop's Talk, une application mobile de conseils agricoles",
    source: "Agri Digital",
    url: "https://agridigitale.tg/article/crops-talk-une-application-mobile-de-conseils-agricoles",
    summary:
      "Une appli qui connecte les agriculteurs africains à des conseils pratiques et personnalisés.",
  },
  {
    title:
      "Challenge App Afrique : la Tunisienne Rabeb Fersi lauréate pour son projet 'Crop's Talk'",
    source: "France 24",
    url: "https://www.france24.com/fr/afrique/20230411-challenge-app-afrique-la-tunisienne-rabeb-fersi-lauréate-pour-son-projet-crop-s-talk",
    summary:
      "Le projet 'Crop’s Talk' primé pour son impact sur l’agriculture connectée en Afrique.",
  },
];

const MotionCard = motion(Card);

const Section = ({
  icon,
  title,
  children,
}: {
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
}) => (
  <MotionCard
    variant="outlined"
    sx={{ mb: 4 }}
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    viewport={{ once: false, amount: 0.2 }}
  >
    <Card variant="outlined" sx={{ mb: 4 }}>
      <CardContent>
        <Stack direction="row" alignItems="center" spacing={1} mb={2}>
          {icon}
          <Typography variant="h6" component="h2">
            {title}
          </Typography>
        </Stack>
        <Divider sx={{ mb: 2 }} />
        <Box sx={{ typography: "body1" }}>{children}</Box>
      </CardContent>
    </Card>
  </MotionCard>
);

const ArticleList = () => {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState("right");
  const [animating, setAnimating] = useState(false);
  const startX = useRef<number | null>(null);
  const isDragging = useRef(false);

  const handleNext = () => {
    if (animating) return;
    setDirection("right");
    setAnimating(true);
    setTimeout(() => {
      setIndex((prev) => (prev + 1) % articles.length);
      setAnimating(false);
    }, 200);
  };

  const handlePrev = () => {
    if (animating) return;
    setDirection("left");
    setAnimating(true);
    setTimeout(() => {
      setIndex((prev) => (prev - 1 + articles.length) % articles.length);
      setAnimating(false);
    }, 200);
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    isDragging.current = true;
    startX.current = e.clientX;
  };

  const handleMouseUp = (e: React.MouseEvent) => {
    if (!isDragging.current) return;
    if (!startX.current) return;
    const deltaX = e.clientX - startX.current;
    if (deltaX > 50) handlePrev();
    else if (deltaX < -50) handleNext();
    isDragging.current = false;
  };

  const handleMouseLeave = () => {
    isDragging.current = false;
  };

  const article = articles[index];

  const slideStyle = {
    transition: "transform 0.2s ease, opacity 0.2s ease",
    transform:
      animating && direction === "right"
        ? "translateX(30px)"
        : animating && direction === "left"
        ? "translateX(-30px)"
        : "translateX(0)",
    opacity: animating ? 0 : 1,
  };

  return (
    <Box
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseLeave}
      sx={{
        display: "flex",
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
        mx: "auto",
        mt: 4,
        position: "relative",
        cursor: "grab",
        userSelect: "none",
        height: "300px",
      }}
    >
      <Card
        sx={{
          display: "flex",
          width: "80%",
          flexDirection: "column",
          ...slideStyle,
        }}
      >
        <CardContent>
          <Typography variant="h6">{article.title}</Typography>
          <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
            {article.summary}
          </Typography>
          <Typography
            variant="caption"
            color="text.secondary"
            sx={{ mt: 2, display: "block" }}
          >
            Source : {article.source}
          </Typography>
        </CardContent>
        <CardActions>
          <Button
            size="small"
            href={article.url}
            target="_blank"
            rel="noopener noreferrer"
            variant="outlined"
          >
            Lire l’article
          </Button>
        </CardActions>
      </Card>
      <IconButton
        onClick={handlePrev}
        sx={{
          position: "absolute",
          top: "50%",
          left: 0,
          transform: "translateY(-50%)",
        }}
      >
        <ArrowBackIos />
      </IconButton>
      <IconButton
        onClick={handleNext}
        sx={{
          position: "absolute",
          top: "50%",
          right: 0,
          transform: "translateY(-50%)",
        }}
      >
        <ArrowForwardIos />
      </IconButton>
    </Box>
  );
};

const TechMonitoring = () => {
  const { mode } = useColorScheme();
  const isDark = mode === "dark";
  return (
    <>
      <Divider />
      <Box
        sx={{
          display: "flex",
          width: "100%",
          justifyContent: "center",
          alignItems: "center",
          padding: "30px 0",
          flexDirection: { xs: "column", md: "row" },
        }}
      >
        <Box
          sx={{
            display: "flex",
            width: "100%",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            textAlign: "center",
          }}
        >
          <Typography
            sx={{
              fontWeight: "bold",
            }}
            variant="h5"
          >
            Veille Technologique
          </Typography>
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          width: "100%",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: isDark ? "#282828" : "#F1F1F1",
          padding: "60px 0",
          flexDirection: "column",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
            alignItems: "flex-start",
            width: "80%",
          }}
        >
          <Container maxWidth="md" sx={{ py: 5 }}>
            <Typography
              variant="h5"
              component="h1"
              fontWeight="bold"
              gutterBottom
            >
              Développement de l’IA en Afrique
            </Typography>

            <Section
              icon={<EmojiObjects />}
              title="🧭 Stratégies et politiques publiques"
            >
              En juillet 2024, l’Union africaine a adopté une Stratégie
              continentale sur l’intelligence artificielle, visant à promouvoir
              une IA éthique, inclusive et centrée sur le développement. Cette
              stratégie s’aligne sur l’Agenda 2063 et les Objectifs de
              Développement Durable (ODD), en mettant l’accent sur la
              souveraineté numérique, la formation et la gouvernance des
              données. <br />
              <br />
              Plusieurs pays ont également lancé leurs propres stratégies
              nationales. Le Nigeria a publié sa National Artificial
              Intelligence Strategy en 2024, tandis que le Sénégal développe des
              programmes intégrant les langues locales dans les systèmes d’IA.
            </Section>

            <Section
              icon={<Public />}
              title="🌍 Cas d’usage et innovations locales"
            >
              <strong>Agriculture :</strong> Des applications d’IA aident les
              agriculteurs à optimiser les rendements et à anticiper les aléas
              climatiques.
              <br />
              <strong>Santé :</strong> Des outils prédictifs sont utilisés pour
              diagnostiquer des maladies et améliorer l’accès aux soins, comme
              au Rwanda avec l’Ircad Africa.
              <br />
              <strong>Éducation :</strong> Des initiatives telles que AfricAIED
              2024 développent des outils d’apprentissage personnalisés.
              <br />
              <strong>Inclusion sociale :</strong> Au Maroc, le centre AI
              Movement conçoit des solutions pour lutter contre l’illettrisme et
              soutenir les femmes rurales.
            </Section>

            <Section
              icon={<RocketLaunch />}
              title="🚀 Écosystème et dynamique entrepreneuriale"
            >
              Le GITEX Africa, tenu à Marrakech, est devenu un événement majeur
              réunissant start-up, investisseurs et décideurs autour des
              technologies émergentes.
              <br />
              Des pays comme le Rwanda ont lancé des programmes ambitieux, tels
              que le développement de 50 applications d’IA en quatre ans.
              <br />
              En 2024, certaines entreprises africaines ont généré jusqu’à 65 %
              de leurs revenus grâce à l’adoption de l’IA, illustrant son impact
              économique croissant.
            </Section>

            <Section icon={<Warning />} title="⚠️ Défis à relever">
              <strong>Infrastructures :</strong> Le manque d’accès à des
              infrastructures technologiques adéquates freine le déploiement de
              l’IA dans certaines régions.
              <br />
              <strong>Formation :</strong> Besoin crucial de former des experts
              en IA, nécessitant des investissements dans l’éducation et la
              recherche.
              <br />
              <strong>Réglementation :</strong> Mise en place de cadres
              juridiques adaptés pour protéger les données personnelles.
              <br />
              <strong>Inégalités numériques :</strong> L’adoption de l’IA doit
              être inclusive pour éviter d’amplifier les disparités existantes.
            </Section>

            <Section
              icon={<Visibility />}
              title="🔮 Perspectives et potentiel économique"
            >
              Selon PwC, l’IA pourrait générer jusqu’à 1 500 milliards de
              dollars pour l’économie africaine d’ici 2030 si le continent capte
              10 % du marché mondial. Cela nécessite des investissements
              continus dans la formation, l’infrastructure, la recherche et la
              réglementation, tout en garantissant une IA bénéfique à l’ensemble
              de la population.
            </Section>

            <Section
              icon={<Grass />}
              title="🌱 Exemple de projet IA en Afrique : Crop’s Talk – Tunisie"
            >
              Développée par l’agronome tunisienne <strong>Rabeb Fersi</strong>,{" "}
              <strong>Crop’s Talk</strong> est une application mobile lauréate
              du Challenge App Afrique 2023. Elle utilise l’
              <strong>intelligence artificielle</strong> pour optimiser
              l’irrigation et l’usage des engrais chez les petits agriculteurs.
              L'application identifie les cultures et analyse les données de
              terrain pour recommander précisément les ressources nécessaires.
              Testée sur l’olivier, la vigne et les agrumes, elle permet de{" "}
              <strong>réduire le gaspillage en eau et en électricité</strong>{" "}
              tout en augmentant la productivité. L’objectif est désormais de{" "}
              <strong>déployer cette solution à l’échelle continentale</strong>.
            </Section>
            <ArticleList />
          </Container>
        </Box>
      </Box>
    </>
  );
};

export default TechMonitoring;
