import { Box, Divider, Slide, Typography, useColorScheme } from "@mui/material";
import VSC from "../assets/vsc.png";
import Boxe from "../assets/boxe.jpeg";
import { useTranslation } from "react-i18next";

const About = () => {
  const { mode } = useColorScheme();
  const isDark = mode === "dark";
  const { t } = useTranslation();

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
            {t("aboutMe")}
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
          flexDirection: { xs: "column", md: "row" },
        }}
      >
        <Box
          sx={{
            display: "flex",
            width: { xs: "100%", md: "50%" },
            flexDirection: "column",
            justifyContent: { xs: "center", md: "flex-end" },
            alignItems: { xs: "center", md: "flex-end" },
            textAlign: { xs: "center", md: "left" },
          }}
        >
          <Slide in={true} direction="right" timeout={500}>
            <Typography
              sx={{
                width: { xs: "70%", md: "80%" },
                mb: 2,
              }}
              variant="body1"
            >
              {t("likeWeb")}
            </Typography>
          </Slide>
          <Slide in={true} direction="right" timeout={500}>
            <Typography
              sx={{
                width: { xs: "70%", md: "80%" },
                mb: 2,
              }}
              variant="body1"
            >
              {t("likePassion")}
            </Typography>
          </Slide>
          <Slide in={true} direction="right" timeout={500}>
            <Typography
              sx={{
                width: { xs: "70%", md: "80%" },
              }}
              variant="body1"
            >
              {t("likeTech")}
            </Typography>
          </Slide>
        </Box>
        <Box
          sx={{
            display: "flex",
            width: { xs: "100%", md: "50%" },
            justifyContent: "center",
            alignItems: "center",
            mt: { xs: 4, md: 0 },
          }}
        >
          <Slide in={true} direction="left" timeout={500}>
            <Box
              component="img"
              alt="Visual studio code"
              src={VSC}
              sx={{
                width: "300px",
                height: "150px",
                maxWidth: "100%",
                objectFit: "cover",
                borderRadius: "8px",
                display: "block",
              }}
              loading="lazy"
            />
          </Slide>
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          width: "100%",
          justifyContent: "center",
          alignItems: "center",
          padding: "60px 0",
          flexDirection: { xs: "column", md: "row" },
        }}
      >
        <Box
          sx={{
            display: "flex",
            width: { xs: "100%", md: "50%" },
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Slide in={true} direction="right" timeout={500}>
            <Box
              component="img"
              alt="Boxe"
              src={Boxe}
              sx={{
                width: "300px",
                height: "450px",
                maxWidth: "100%",
                objectFit: "cover",
                borderRadius: "8px",
                display: "block",
              }}
              loading="lazy"
            />
          </Slide>
        </Box>
        <Box
          sx={{
            display: "flex",
            width: { xs: "100%", md: "50%" },
            flexDirection: "column",
            justifyContent: { xs: "center", md: "flex-start" },
            alignItems: { xs: "center", md: "flex-start" },
            mt: { xs: 4, md: 0 },
            textAlign: { xs: "center", md: "left" },
          }}
        >
          <Slide in={true} direction="left" timeout={500}>
            <Typography
              sx={{
                width: { xs: "70%", md: "80%" },
                mb: 2,
              }}
              variant="body1"
            >
              {t("liveParis")}
            </Typography>
          </Slide>
          <Slide in={true} direction="left" timeout={500}>
            <Typography
              sx={{
                width: { xs: "70%", md: "80%" },
                mb: 2,
              }}
              variant="body1"
            >
              {t("likeCreated")}
            </Typography>
          </Slide>
          <Slide in={true} direction="left" timeout={500}>
            <Typography
              sx={{
                width: { xs: "70%", md: "80%" },
                mb: 2,
              }}
              variant="body1"
            >
              {t("likeBoxed")}
            </Typography>
          </Slide>
          <Slide in={true} direction="left" timeout={500}>
            <Typography
              sx={{
                width: { xs: "70%", md: "80%" },
                mb: 2,
              }}
              variant="body1"
            >
              {t("likeTravel")}
            </Typography>
          </Slide>
          <Slide in={true} direction="left" timeout={500}>
            <Typography
              sx={{
                width: { xs: "70%", md: "80%" },
              }}
              variant="body1"
            >
              {t("likeCode")}
            </Typography>
          </Slide>
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          width: "100%",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: isDark ? "#282828" : "#F1F1F1",
          padding: "40px 0",
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
              width: "80%",
            }}
            variant="h6"
          >
            {t("likeYou")}
          </Typography>
        </Box>
      </Box>
    </>
  );
};

export default About;
