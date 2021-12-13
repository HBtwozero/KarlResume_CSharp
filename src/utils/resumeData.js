import React from "react";
import {
  InfoOutlined,
  AssignmentOutlined,
  WorkRounded,
  Facebook,
  Twitter,
  LinkedIn,
  GitHub,
  Telegram,
  WebOutlined
} from "@material-ui/icons";
import BookIcon from "@material-ui/icons/Book";
import VideogameAssetIcon from "@material-ui/icons/VideogameAsset";
import SportsSoccerIcon from "@material-ui/icons/SportsSoccer";
import ExploreIcon from "@material-ui/icons/Explore";
import DeveloperModeIcon from "@material-ui/icons/DeveloperMode";
import ShowChartIcon from "@material-ui/icons/ShowChart";
import StorageIcon from "@material-ui/icons/Storage";
import microcontrollerImg from "../assets/images/microcontroller.jpeg";
import yorklogo from "../assets/images/york_logo.png";
import softwareImg from "../assets/images/software.jpeg";
import webdevImg from "../assets/images/webdevImg.png";
import IoTImg from "../assets/images/IoTImg.jpg";
import robotImg from "../assets/images/robotImg.jpg";
const resume =
 {
  name: "Karl Doudy Angrand",
  title: "Electrical Engineer",
  displayImage: "displayImage.jpg",
  birthday: "N/A",
  email: "kangrand@ycp.edu",
  address: "York PA, USA",
  phone: "717-471-1782",

  socials: {
    // Facebook: {
    //   link: "https://www.facebook.com/",
    //   text: "SalmanFazal01",
    //   icon: <Facebook />
    // },
    Twitter: {
      link: "https://www.twitter.com/",
      text: "Karl Doudy",
      icon: <Twitter />
    },
    linkedIn: {
      link: "https://www.linkedin.com/",
      text: "KarlAngrand",
      icon: <LinkedIn />
    },
    Github: {
      link: "https://www.github.com/",
      text: "HBtwozero",
      icon: <GitHub />
    }
  },

  about:
    "HI THERE! I am Karl Angrand. My passion is using engineering to improve people's live, and giving them the tools they need to do the same" +
    "\n\n" +
    "I received my bachelor degree in Electrical Engineering from York College of Pennsylvania." +
    "\n\n" +
    "When not working on Electrical Engineering projects, I love to mentor kids. I have mentored several kids from Haiti, and help them find their passion and motivate them to stay on the path of success",

  experiences: [
    {
      title: "Electrical Manufacturing Engineering 2",
      description:
        "Expenses as material breeding insisted building to in. Continual so distrusts pronounce by unwilling listening. Thing do taste on we manor.",
      date: "September 2020 - Present"
    },
    {
      title: "Work 2",
      description:
        "So insisted received is occasion advanced honoured. Among ready to which up. Attacks smiling and may out assured moments man nothing outward.",
      date: "2008 - 2010"
    },
    {
      title: "Work 3",
      description:
        "Excited him now natural saw passage offices you minuter. At by asked being court hopes. Farther so friends am to detract.",
      date: "2005 - 2008"
    }
  ],

  // education: [
  //   {
  //     title: "Abc University of Los Angeles",
  //     description:
  //       "Expenses as material breeding insisted building to in. Continual so distrusts pronounce by unwilling listening. Thing do taste on we manor.",
  //     date: "2004 - 2009"
  //   },
  //   {
  //     title: "Education 2",
  //     description:
  //       "So insisted received is occasion advanced honoured. Among ready to which up. Attacks smiling and may out assured moments man nothing outward.",
  //     date: "2003 - 2004"
  //   },
  //   {
  //     title: "Education 3",
  //     description:
  //       "Excited him now natural saw passage offices you minuter. At by asked being court hopes. Farther so friends am to detract.",
  //     date: "2000 - 2003"
  //   }
  // ],
  institutions: [
    {
      school: "York College of PA, USA",
      date: "January 2017 - August 2020",
      degree: "Bachelor of Science In Electrical Engineering"
    },
    {
      school: "Harrisburg Area Community College, USA",
      date: "Aug 2014 - December 2016",
      degree: "Associate of Science in Physics"
    },
    {
      school: "Institution Univers, Haiti",
      date: "Sep 1998 - Dec 2014",
      degree: "High School Diploma"
    }
  ],
  skills: [
    {
      title: "Electrical",
      type: ["PCB Design/ Altium", "SolidsWork", "Linux"]
    },

    {
      title: "Programming/Framework",
      type: ["React.js", "Node.js", "C# & C", "Python"]
    },
    {
      title: "Tranlators",
      type: ["French", "English", "Haitian Creole"]
    }
  ],
  certificates: [
    {
      title: "Web Developer Bootcamp",
      date: " Expected completion date -  April 2020"
    }
    // {
    //   title:
    //     "Digital Marketing Certificate, Google Fundamental Digital Marketing",
    //   date: "May 2019"
    // }
  ],
  services: [
    {
      title: "Altium Designer",
      description: "Coming Soon.",
      icon: <WebOutlined />
    },
    {
      title: "Translation Services",
      description: "Coming Soon.",
      icon: <AssignmentOutlined />
    },
    {
      title: "Web Development",
      description: "Coming Soon",
      icon: <WebOutlined />
    }
  ],

  employments: [
    {
      firm: "Electrical Manufacturing Engineering 2 at Becton Dickinson",
      date: "September 2020 - Present",
      desc: 
      "Develop and execute solutions for obsolete components, including alternate sourcing, alternate components or PC board re-design and re-layout. Develop and execute substantive testing and verification, and documentation activities. Design, build, test, and document simple to moderately complex manufacturing assembly fixtures, test tooling, and test fixtures. Analyze field and/or manufacturing failures of electronic and electrical components, sub-assemblies, and instruments, and provide corrective and preventative solutions and action"
      
    },
    {
      firm: "Professional Engineering Intern at Becton Dickinson",
      date: "January 2019 - December 2019",
      desc: "Supported Diagnostic Systems products and product assemblies throughout production life and service (sustaining engineering). Utilized troubleshooting skills with hands on approach to identify root cause and corrective actions. Provided hands on engineering support to production process including design, build and/or testing of fixtures and prototypes. Directly applied knowledge in electronics and electro-optics to execute overall project assignments. Conducted project work in compliance with BD internal processes, ISO 9001, and FDA CGMP standards for the design of Medical Devices. Interacted closely with software, systems, mechanical and electrical engineering functions to develop comprehensive solutions to design problems."
    },
    {
      firm: "Electrical Engineering Intern at RMF Engineering",
      date: "May 2018 - August 2018",
      desc: "Developed wiring and panel diagrams for control panels using AutoCAD. Created drafts and blueprints in CAD & REVIT following Clients technical specifications. Performed design process for renovations and modifications of existing products. Designed 2D and 3D illustrations from technical specifications, and architectural plans as per the sketches. Converted hand sketches into detailed drawings."
    },
    {
      firm: "Peer Tutor at Harrisburg Area Community College",
      date: "January 2015 - January 2017",
      desc: "Assist, evaluate, motivate, develop and integrate students learning. Communicate and build a rapport with students. Offer personal support on a range of topics that might include academic difficulty, emotional and social problems, illness or a traumatic life event. provided support in classes like Math (Algebra, Calculus, Liner Algebra), Physics, Chemistry, and English as a second language "
    }
  ],
  portfolio: [
    // {
    //   course: "Electrical",
    //   image: microcontrollerImg,
    //   title: "Coming Soon"
    // },
    {
      course: "Microcontroller",
      image: microcontrollerImg,
      title: "Coming Soon"
    },
    {
      course: "Robotics",
      image: robotImg,
      title: "Coming Soon - TBD"
    },
    {
      course: "IoT",
      image: IoTImg,
      title: "Coming Soon - TBD"
    },
    {
      course: "Software Development",
      image: softwareImg,
      title: "Coming Soon - TBD"
    },
    {
      course: "Web Development",
      image: webdevImg,
      title: "Coming Soon - TBD"
    }
  ],
  hobbies: [
    {
      title: "Reading",
      desc: "I am an Electrical Engineer",
      icon: <BookIcon />
    },
    {
      title: "Soccer",
      desc: "TBD",
      icon: <VideogameAssetIcon />
    }
    // {
    //   title: "Football",
    //   desc: "I am a database administrator",
    //   icon: <SportsSoccerIcon />
    // },
    // {
    //   title: "Traveling",
    //   desc: "I am a database administrator",
    //   icon: <ExploreIcon />
    // }
  ]
};

export default resume;
