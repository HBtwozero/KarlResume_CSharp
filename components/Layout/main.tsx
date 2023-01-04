import {FC} from 'react';
import Header from "../Header/Header";
import { Container, Grid } from "@material-ui/core";
import Footer from "../Footer/Footer";

const MainLayout: FC<{}> = ({ children }) => (
  <Grid item xs>
    <Header />
    <div className="">{children}</div>
    <Footer />
  </Grid>
);

export default MainLayout;
