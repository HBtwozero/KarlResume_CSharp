import {FC} from 'react';
import Link from "next/link";
import { Container, Grid } from "@material-ui/core";
import Profile from "../Profile/Profile";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const DocsLayout: FC<{}> = ({ children }) => (
  <Container className="top_60">
    <Grid container>
      <Grid item xs={12} sm={12} md={4} lg={3}>
        <Profile />
      </Grid>
      <Grid item xs>
        <Header />
        <div className="main_content container_shadow">{children}</div>
        <Footer />
      </Grid>
      {/* <Grid item xs>
        <Header />
        <div className="main_content container_shadow">{children}</div>
      </Grid> */}
    </Grid>
  </Container>
);

export default DocsLayout;
