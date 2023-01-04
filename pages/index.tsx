import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import { Container, Grid } from "@mui/material";
import Profile from "../components/Profile/Profile";
import Header from "../components/Header/Header";
import { useRouter } from "next/router";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
const theme = createTheme();

function Copyright() {
  console.log("theme definition", theme.palette);
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

export default function Layout(props) {
  const { locale } = useRouter();
  // We want to get the translations from `home.json`
  const { t } = useTranslation("home");
  return (
    // <ThemeProvider theme={theme}>
    //   <CssBaseline />
    //   <Container className="top_60">
    //     <Grid container>
    //       <Grid item xs={12} sm={12} md={4} lg={3}>
    //         <Profile />
    //       </Grid>
    //       <Grid item xs></Grid>
    //     </Grid>
    //   </Container>
    //   <h1>Layout Page</h1>

    //   <Copyright />
    // </ThemeProvider>
    <div>
      <h1>Homepage</h1>
      <main>Hello world: {locale}</main>
      <h2>{t("greeting")}</h2>
      <p>Welcome to our website</p>
    </div>
  );
}
// export async function getStaticProps({ locale }) {
//   return {
//     props: {
//       ...(await serverSideTranslations(locale, ["common", "home"])),
//       // Will be passed to the page component as props
//     },
//   };
// }
export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common", "home"])),
      // Will be passed to the page component as props
    },
  };
}
