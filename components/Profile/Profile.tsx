import React from "react";
import { Typography } from "@material-ui/core";
// import profile from "../../assets/images/karl.jpeg";
import styles from "./Profile.module.css";
import style from "../Timeline/Timeline.module.css";
import CustomTimeline, { CustomTimelineSeparator } from "../Timeline/Timeline";
import TimelineItem from "@material-ui/lab/TimelineItem";
import TimelineContent from "@material-ui/lab/TimelineContent";
import PersonOutlineOutlinedIcon from "@material-ui/icons/PersonOutlineOutlined";
import resume from "../../config/utils/resumeData";
import CustomButton from "../Button/Button";
import GetAppIcon from "@material-ui/icons/GetApp";
import Image from "next/image";
import Link from "next/link";
type CustomeTimelineItemProps ={
  title?: string,
  text?: string,
  link?:string,
  icon?:string,
  children?: JSX.Element;
}
const CustomTimelineItem = ({ title, text, link }: CustomeTimelineItemProps) => {
  return (
    <TimelineItem className={styles.tika}>
      <CustomTimelineSeparator />
      <TimelineContent className={styles.timeline_content}>
        {link ? (
          <Typography className={styles.timelineItem_text}>
            <span>{title}:</span>
            {"  "}
            <a href={link} target="_blank">
              {text}
            </a>
          </Typography>
        ) : (
          <Typography className={styles.timelineItem_text}>
            <span>{title}:</span>
            {text}
          </Typography>
        )}
      </TimelineContent>
    </TimelineItem>
  );
};

// const CvDownload = () => {
//   return (
//     <iframe
//       src="/assets/Karl_Doudy_Angrand_Resume.pdf"
//       type="application/pdf"
//       style={{ height: "800px", width: "500px" }}
//     />
//   );
// };

const Profile = () => {
  const { name, title, displayImage, birthday, email, socials } = resume;

  return (
    <div className={`${styles.profile} ${styles.container_shadow}`}>
      <div className={styles.profile_name}>
        <Typography className={styles.name}>{name}</Typography>
        <Typography className={styles.title}>{title}</Typography>
      </div>

      <figure className={styles.profile_image}>
        <Image
          src="/images/karl.jpeg"
          alt="Profile Image"
          className={styles.image}
          width="100"
          height="100"
          layout="responsive"
        />
      </figure>

      <div className={styles.profile_information}>
        <CustomTimeline icon={<PersonOutlineOutlinedIcon />}>
          <CustomTimelineItem title="Name" text={name} />
          <CustomTimelineItem title="Title" text={title} />
          <CustomTimelineItem title="Email" text={email} />
          {Object.keys(socials).map((key) => (
            <CustomTimelineItem
              title={key}
              text={socials[key].text}
              link={socials[key].link}
            />
          ))}
        </CustomTimeline>
        {/* <CustomButton text="Download Cv" icon={<GetAppIcon />}></CustomButton> */}
        <div>
          <a
            href="/assets/Karl_Doudy_Angrand_Resume.pdf"
            rel="noopener noreferrer"
            target="_blank"
          >
            Download Cv
          </a>
          <CustomButton text="Download Cv" icon={<GetAppIcon />}></CustomButton>
        </div>

        <div className={styles.button_container}>
          {/* <a href={PDF} without rel="noopener noreferrer" target="_blank">
            <CustomButton
              text={"Download Cv"}
              icon={<GetAppIcon />}
            ></CustomButton>
          </a> */}

          {/* <a
            download
            href="/assets/Karl_Doudy_Angrand_Resume.pdf"
            locale={false}
            without
            rel="noopener noreferrer"
            target="_blank"
          ></a> */}
          {/* <CustomButton
            text={"Download Cv"}
            icon={<GetAppIcon />}
          ></CustomButton> */}

          {/* TODO - To preview PDF before download*/}

          {/* <CustomButton
            text={"Download Cv"}
            icon={<GetAppIcon />}
          ></CustomButton> */}
        </div>
      </div>
    </div>
  );
};

export default Profile;
