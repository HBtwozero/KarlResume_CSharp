// import logo from './logo.svg';
import { Container, Grid } from "@material-ui/core";
import React from "react";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Profile from "./components/Profile/Profile";
import Resume from "./pages/Resume/Resume";
import Portfolio from "./pages/Portfolio/Portfolio";
import Home from "./pages/Home/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Blog from "./pages/Blog/Blog";

function App() {
  return (
    <Container className="top_60">
      <Grid container>
        <Grid item xs={12} sm={12} md={4} lg={3}>
          <Profile />
        </Grid>
        <Grid item xs>
          <Router>
            <Header />
            <div className="main_content container_shadow">
              <Switch>
                <Route path="/portfolio">
                  <Portfolio />
                </Route>
                <Route path="/about">
                  {" "}
                  <Home />{" "}
                </Route>
                <Route path="/blog">
                  {" "}
                  <Blog />{" "}
                </Route>
                <Route path="/">
                  <Resume />
                </Route>
              </Switch>
            </div>
          </Router>

          <Footer />
        </Grid>
        {/* <Grid item xs={12} sm={12} md={4} lg={3}>
          <Profile />
        </Grid> */}
      </Grid>
    </Container>
  );
}

export default App;