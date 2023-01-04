import React from "react";
import Timeline from "@material-ui/lab/Timeline";
import TimelineItem from "@material-ui/lab/TimelineItem";
import TimelineSeparator from "@material-ui/lab/TimelineSeparator";
import TimelineConnector from "@material-ui/lab/TimelineConnector";
import TimelineContent from "@material-ui/lab/TimelineContent";
import TimelineDot from "@material-ui/lab/TimelineDot";
import { Paper, Typography, Icon, TextField, Button } from "@material-ui/core";
import WorkIcon from "@material-ui/icons/Work";
import SchoolIcon from "@material-ui/icons/School";
import CardMembershipIcon from "@material-ui/icons/CardMembership";
import {
  SchoolRounded,
  WorkRounded,
  Facebook,
  Twitter,
  LinkedIn,
  GitHub,
} from "@material-ui/icons";
import styles from "./Resume.module.css";
import resumeData from "../../config/utils/resumeData";
import { Grid } from "@material-ui/core";
import CustomButton from "../../components/Button/Button";
import CustomTimeline from "../../components/Timeline/Timeline";
import { CustomTimelineSeparator } from "../../components/Timeline/Timeline";
import DocsLayout from "../../components/Layout/docs";

const Resume = (props) => {
  return (
    <>
      <Grid container>
        <Grid item xs={12}>
          {/*About me*/}
          {/* <Grid container className="section p_30 pb_45">
            <Grid item className="section_title top_30">
              <span></span>
              <h2>About Me</h2>
            </Grid>
            <Grid container className="top_30">
              <Grid item>
                <Typography variant="body2" className="aboutme_text">
                  {props.about}
                </Typography>
              </Grid>
            </Grid>
          </Grid> */}

          <Grid container className="section">
            <Grid item className="section_title marginbottom_abtme">
              <span></span>
              <h6 className="">Resume</h6>
            </Grid>

            <Grid item xs={12}>
              <Grid container className={styles.resume_timeline}>
                {/*Job*/}
                <Grid item sm={12} md={6}>
                  <CustomTimeline
                    title="Employment History"
                    icon={<WorkIcon />}
                  >
                    {resumeData.employments.map((employment) => (
                      <TimelineItem>
                        <CustomTimelineSeparator />
                        <TimelineContent className={styles.timeline_content}>
                          <Typography className={styles.timeline_firm}>
                            {employment.firm}
                          </Typography>
                          <Typography
                            variant="caption"
                            className={styles.timeline_date}
                          >
                            {employment.date}
                          </Typography>
                          <Typography
                            variant="body2"
                            className={styles.timeline_desc}
                          >
                            {employment.desc}
                          </Typography>
                        </TimelineContent>
                      </TimelineItem>
                    ))}
                  </CustomTimeline>
                </Grid>

                {/*Edu*/}
                <Grid item sm={12} md={6}>
                  <CustomTimeline title="Education" icon={<SchoolIcon />}>
                    {resumeData.institutions.map((institution) => (
                      <TimelineItem>
                        <CustomTimelineSeparator />
                        <TimelineContent className={styles.timeline_content}>
                          <Typography className={styles.timeline_firm}>
                            {institution.school}
                          </Typography>
                          <Typography
                            variant="caption"
                            className={styles.timeline_date}
                          >
                            {institution.date}
                          </Typography>
                          <Typography
                            variant="body2"
                            className={styles.timeline_desc}
                          >
                            {institution.degree}
                          </Typography>
                        </TimelineContent>
                      </TimelineItem>
                    ))}
                  </CustomTimeline>

                  <CustomTimeline
                    title="Certification"
                    icon={<CardMembershipIcon />}
                  >
                    {resumeData.certificates.map((certificate) => (
                      <TimelineItem>
                        <CustomTimelineSeparator />
                        <TimelineContent className={styles.timeline_content}>
                          <Typography className={styles.timeline_firm}>
                            {certificate.title}
                          </Typography>
                          <Typography
                            variant="caption"
                            className={styles.timeline_date}
                          >
                            {certificate.date}
                          </Typography>
                        </TimelineContent>
                      </TimelineItem>
                    ))}
                  </CustomTimeline>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid container className="section p_50 pb_50">
            <Grid item className="section_title marginbottom_abtme">
              <span></span>
              <h6 className="">Competencies</h6>
            </Grid>

            <Grid item xs={12}>
              <Grid container spacing={3} justify="space-around">
                {resumeData.services.map((service) => (
                  <Grid item xs={12} sm={6} md={3}>
                    <div className={styles.service}>
                      <Icon className={styles.service_icon}>
                        {service.icon}
                      </Icon>
                      <Typography className={styles.service_title} variant="h6">
                        {service.title}
                      </Typography>
                      <Typography
                        className={styles.service_desc}
                        variant="body2"
                      >
                        {service.description}
                      </Typography>
                    </div>
                  </Grid>
                ))}
              </Grid>
            </Grid>
          </Grid>

          <Grid container className="section bgcolor paddingtop_abtme">
            <Grid item className="section_title marginbottom_abtme">
              <span></span>
              <h6 className="">Skills</h6>
            </Grid>
            <Grid container className="section bgcolor p_45 pb_50">
              <Grid container spacing={3} justify="space-between">
                {resumeData.skills.map((skill) => (
                  <Grid xs={12} sm={6} md={3}>
                    <Paper elevation={0} className={styles.skill}>
                      <Typography variant="h6" className={styles.skill_title}>
                        {skill.title}
                      </Typography>
                      {skill.type.map((level) => (
                        <Typography
                          variant="body2"
                          className={styles.skill_type}
                        >
                          <TimelineDot
                            variant={"outlined"}
                            className={styles.timeline_dot}
                          />
                          {level}
                        </Typography>
                      ))}
                    </Paper>
                  </Grid>
                ))}
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};
Resume.Layout = DocsLayout;
export default Resume;
