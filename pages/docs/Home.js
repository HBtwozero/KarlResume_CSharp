import React from "react";
import { Head } from "next/head";
import "./Home.module.css";
import { Grid, Icon, TextField, Typography } from "@material-ui/core";
import resumeData from "../../utils/resumeData";
import CustomTimeline from "../../components/Timeline/Timeline";
import { CustomTimelineSeparator } from "../../components/Timeline/Timeline";
import WorkIcon from "@material-ui/icons/Work";
import SchoolIcon from "@material-ui/icons/School";
import CustomButton from "../../components/Button/Button";

import TimelineContent from "@material-ui/lab/TimelineContent";
import TimelineItem from "@material-ui/lab/TimelineItem";

const Home = () => {
  return (
    <>
      <Head>
        <title>Home - HomePage</title>
      </Head>
      <Grid container className="section paddingbottom_abtme">
        <Grid item className="section_title marginbottom_abtme">
          <span></span>
          <h6 className="">About Me</h6>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="body2" className="aboutme_text">
            {resumeData.about}
          </Typography>
        </Grid>
      </Grid>
      <Grid container className="section">
        <Grid item className="section_title marginbottom_abtme">
          <span></span>
          <h6 className="">Hobbies</h6>
        </Grid>
        <Grid item xs={12}>
          <Grid container spacing={3} justify="space-around">
            {resumeData.hobbies.map((hobbie) => (
              <Grid item xs={12} sm={6} md={3}>
                <div className="hobbie">
                  <Icon className="hobbie_icon">{hobbie.icon}</Icon>
                  <Typography className="hobbie_title" variant="h6">
                    {hobbie.title}
                  </Typography>
                </div>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>

      {/*Contact page/section*/}
      <Grid
        container
        spacing={6}
        className="section paddingtop_abtme padddingbottom_abtme"
      >
        <Grid item xs={12} lg={7}>
          <Grid container>
            <Grid item className="section_title marginbottom_abtme">
              <span></span>
              <h6 className="">
                Contact Form (Submission Features Coming Soon)
              </h6>
            </Grid>
            <Grid item xs={12}>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField fullWidth name="name" label="Name" />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField fullWidth name="email" label="Email" />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    name="message"
                    label="Message"
                    multiline
                    rows={4}
                  />
                </Grid>
                <Grid item xs={12}>
                  <CustomButton text="Submit" />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>

        {/*Contact details*/}
        <Grid item xs={12} lg={5}>
          <Grid container>
            <Grid item className="section_title marginbottom_abtme">
              <span></span>
              <h6 className="">Contact Details</h6>
            </Grid>
            <Grid item xs={12}>
              <Grid container>
                <Grid item xs={12}>
                  <Typography className="contactdetail_item">
                    <span>Address: </span>
                    {resumeData.address}
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography className="contactdetail_item">
                    <span>Phone: </span>
                    {resumeData.phone}
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography className="contactdetail_item">
                    <span>Email: </span>
                    {resumeData.email}
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      <Grid container className="section"></Grid>
    </>
  );
};
export default Home;
