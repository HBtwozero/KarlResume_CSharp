import React from "react";
import Timeline from "@material-ui/lab/Timeline";
import TimelineItem from "@material-ui/lab/TimelineItem";
import TimelineSeparator from "@material-ui/lab/TimelineSeparator";
import TimelineConnector from "@material-ui/lab/TimelineConnector";
import TimelineContent from "@material-ui/lab/TimelineContent";
import TimelineDot from "@material-ui/lab/TimelineDot";
import { Typography } from "@material-ui/core";
import WorkIcon from "@material-ui/icons/Work";
import styles from "./Timeline.module.css";
const CustomTimeline = ({ title, icon, children }) => {
  return (
    <Timeline className={styles.timeline}>
      {/* Item Header */}
      <TimelineItem className={styles.timeline_firstItem}>
        <TimelineSeparator>
          <TimelineDot className={styles.timeline_dot_header}>
            {<WorkIcon />}
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Typography variant="h6" className={styles.timeline_header}>
            {title}
          </Typography>
        </TimelineContent>
      </TimelineItem>

      {/* <div style={{ marginLeft: "-300px" }}>{children}</div> */}
      {children}
      {/* Remaining Items */}
      {/* <TimelineItem>
        <CustomTimelineSeparator />

        {/* <TimelineContent>Code</TimelineContent> */}

      {/* <TimelineSeparator>
                <TimelineDot className={'timeline_dot'}/>
                <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                <Typography variant='h6' className={'timeline_header'}>
                    {title}
                    </Typography>
                </TimelineContent> 
      </TimelineItem> */}
    </Timeline>
  );
};

export const CustomTimelineSeparator = () => (
  <TimelineSeparator className={styles.separator_padding}>
    <TimelineDot variant={"outlined"} className={styles.timeline_dot} />
    <TimelineConnector />
  </TimelineSeparator>
);
export default CustomTimeline;
