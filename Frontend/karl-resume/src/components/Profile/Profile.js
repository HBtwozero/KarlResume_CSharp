import React from "react";
import { Typography } from "@material-ui/core";
import profile from "../../assets/images/karl.jpeg";
import "./Profile.css";
import CustomTimeline, { CustomTimelineSeparator } from "../Timeline/Timeline";
import TimelineItem from "@material-ui/lab/TimelineItem";
import TimelineContent from "@material-ui/lab/TimelineContent";
import PersonOutlineOutlinedIcon from "@material-ui/icons/PersonOutlineOutlined";
import resume from "../../utils/resumeData";
import CustomButton from "../Button/Button";
import GetAppIcon from "@material-ui/icons/GetApp";

import PDF from '../../utils/Karl_Doudy_Angrand_Resume.pdf';


const CustomTimelineItem = ({ title, text, link }) => {
  return (
    <TimelineItem>
      <CustomTimelineSeparator />
      <TimelineContent className="timeline_content">
        {link ? (
          <Typography className="timelineItem_text">
            <span>{title}:</span>
            {"  "}
            <a href={link} target="_blank">
              {text}
            </a>
          </Typography>
        ) : (
          <Typography className="timelineItem_text">
            <span>{title}:</span>
            {text}
          </Typography>
        )}
      </TimelineContent>
    </TimelineItem>
  );
};


const CvDownload = () =>{
  return(
      <iframe src={PDF} 
      type="application/pdf" 
      style={{height: "800px", width:"500px"}} 
      />
  )
};


const Profile = () => {
  const { name, title, displayImage, birthday, email, socials } = resume;

  return (
    <div className="profile container_shadow">
      <div className="profile_name">
        <Typography className="name">{name}</Typography>
        <Typography className="title">{title}</Typography>
      </div>

      <figure className="profile_image">
        {/* <img src={require('../../assets/images/profile.jpg')} alt='' /> */}
        <img src={profile} alt="" />
      </figure>

      <div className="profile_information">
        <CustomTimeline icon={<PersonOutlineOutlinedIcon />}>
          <CustomTimelineItem title="Name" text={name} />
          <CustomTimelineItem title="Title" text={title} />
          {/* <CustomTimelineItem title="Phone" text={phone} /> */}
          <CustomTimelineItem title="Email" text={email} />

          {Object.keys(socials).map(key => (
            <CustomTimelineItem
              title={key}
              text={socials[key].text}
              link={socials[key].link}
            />
          ))}
        </CustomTimeline>
        <div className="button_container">
        <a href= {PDF} without rel='noopener noreferrer' target='_blank' >
            <CustomButton text={'Download Cv'} icon={<GetAppIcon/>} >
               
             </CustomButton>
        </a>

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
