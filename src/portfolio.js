/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Devin Tseng's Portfolio",
  description:
    "A passionate individual who always thrives to work on end to end products which develop sustainable and scalable social and technical systems to create impact.",
  og: {
    title: "Devin Tseng Portfolio",
    type: "website",
    url: "https://alianlbj23.github.io/home",
  },
};

//Home Page
const greeting = {
  title: "Devin Tseng",
  logo_name: "Devin Tseng",
  nickname: "alianL.B.J",
  subTitle:
    "A computer science graduate exploring robotics, ROS 2, Digital Twin, firmware control, AI, and computer vision.",
  resumeLink:
    "https://drive.google.com/file/d/1bXRknv_h-XI_3CQ3SGPteGODtvEb7YvI/view?usp=sharing",
  portfolio_repository: "https://github.com/ashutosh1919/masterPortfolio",
  githubProfile: "https://github.com/alianlbj23",
};

const socialMediaLinks = [
  /* Your Social Media Link */
  // github: "https://github.com/ashutosh1919",
  // linkedin: "https://www.linkedin.com/in/ashutosh-hathidara-88710b138/",
  // gmail: "ashutoshhathidara98@gmail.com",
  // gitlab: "https://gitlab.com/ashutoshhathidara98",
  // facebook: "https://www.facebook.com/laymanbrother.19/",
  // twitter: "https://twitter.com/ashutosh_1919",
  // instagram: "https://www.instagram.com/layman_brother/"

  {
    name: "Github",
    link: "https://github.com/alianlbj23",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link:
      "https://www.linkedin.com/in/%E8%A3%95%E7%BF%94-%E6%9B%BE-devin-tseng/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "Gmail",
    link: "mailto:alianlbj23@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/omega_shoutmonster?utm_source=qr",
    fontAwesomeIcon: "fa-instagram", // Reference https://fontawesome.com/icons/instagram?style=brands
    backgroundColor: "#E4405F", // Reference https://simpleicons.org/?q=instagram
  },
];

const skills = {
  data: [
    {
      title: "Robotics & Digital Twin",
      fileName: "programmer",
      skills: [
        "⚡ Robot development based on ROS systems",
        "⚡ Digital twin development using Unity and NVIDIA Isaac Sim",
        "⚡ Containerized robot control environment development using Docker",
        "⚡ 1:1 robot modeling using Fusion 360",
        "⚡ Multi-robot collaboration and robotic arm control using inverse kinematics",
      ],
      softwareSkills: [
        {
          skillName: "ROS",
          fontAwesomeClassname: "simple-icons:ros",
          style: {
            backgroundColor: "transparent",
            color: "#22314E",
          },
        },
        {
          skillName: "Linux",
          fontAwesomeClassname: "logos-linux-tux",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: {
            backgroundColor: "transparent",
            color: "#2496ED",
          },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "simple-icons:python",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
        {
          skillName: "Unity",
          fontAwesomeClassname: "simple-icons:unity",
          style: {
            backgroundColor: "transparent",
            color: "#000000",
          },
        },
        {
          skillName: "Isaac Sim",
          fontAwesomeClassname: "simple-icons:nvidia",
          style: {
            backgroundColor: "transparent",
            color: "#76B900",
          },
        },
        {
          skillName: "Fusion 360",
          fontAwesomeClassname: "simple-icons:autodesk",
          style: {
            backgroundColor: "transparent",
            color: "#E4122C",
          },
        },
      ],
    },
    // -----AI
    {
      title: "AI & Computer Vision",
      fileName: "FullStackImg",
      skills: [
        "⚡ Applying AI and computer vision to robotics perception and automation tasks",
        "⚡ Processing camera and sensor data for detection, tracking, and decision support",
        "⚡ Building practical AI workflows that connect software with real-world systems",
      ],
      softwareSkills: [
        {
          skillName: "Tensorflow",
          fontAwesomeClassname: "logos-tensorflow",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Keras",
          fontAwesomeClassname: "simple-icons:keras",
          style: {
            backgroundColor: "white",
            color: "#D00000",
          },
        },
        {
          skillName: "PyTorch",
          fontAwesomeClassname: "logos-pytorch",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "ion-logo-python",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
        {
          skillName: "Deeplearning",
          imageSrc: "deeplearning_ai_logo.png",
        },
      ],
    },
    {
      title: "Robot Firmware & Micro Controller",
      fileName: "FirwareImg",
      skills: [
        "⚡ Developing robot firmware for micro controller based hardware systems",
        "⚡ Working with motor control, sensor communication, and embedded control logic",
        "⚡ Bridging low-level firmware with higher-level robotics software and ROS 2",
        "⚡ Integrating AI models with micro controller and edge computing workflows",
      ],
      softwareSkills: [
        {
          skillName: "C",
          fontAwesomeClassname: "simple-icons:c",
          style: {
            color: "#A8B9CC",
          },
        },
        {
          skillName: "C++",
          fontAwesomeClassname: "simple-icons:cplusplus",
          style: {
            color: "#00599C",
          },
        },
        {
          skillName: "Arduino",
          fontAwesomeClassname: "simple-icons:arduino",
          style: {
            color: "#00979D",
          },
        },
        {
          skillName: "Embedded Systems",
          fontAwesomeClassname: "mdi:chip",
          style: {
            color: "#6C63FF",
          },
        },
        {
          skillName: "PlatformIO",
          fontAwesomeClassname: "simple-icons:platformio",
          style: {
            color: "#FF6C37",
          },
        },
        {
          skillName: "micro-ROS",
          fontAwesomeClassname: "simple-icons:ros",
          style: {
            color: "#22314E",
          },
        },
      ],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    // {
    //   siteName: "LeetCode",
    //   iconifyClassname: "simple-icons:leetcode",
    //   style: {
    //     color: "#F79F1B",
    //   },
    //   profileLink: "https://leetcode.com/layman_brother/",
    // },
    // {
    //   siteName: "HackerRank",
    //   iconifyClassname: "simple-icons:hackerrank",
    //   style: {
    //     color: "#2EC866",
    //   },
    //   profileLink: "https://www.hackerrank.com/layman_brother",
    // },
    // {
    //   siteName: "Codechef",
    //   iconifyClassname: "simple-icons:codechef",
    //   style: {
    //     color: "#5B4638",
    //   },
    //   profileLink: "https://www.codechef.com/users/ashutosh_1919",
    // },
    // {
    //   siteName: "Codeforces",
    //   iconifyClassname: "simple-icons:codeforces",
    //   style: {
    //     color: "#1F8ACB",
    //   },
    //   profileLink: "http://codeforces.com/profile/layman_brother",
    // },
    // {
    //   siteName: "Hackerearth",
    //   iconifyClassname: "simple-icons:hackerearth",
    //   style: {
    //     color: "#323754",
    //   },
    //   profileLink: "https://www.hackerearth.com/@ashutosh391",
    // },
    // {
    //   siteName: "Kaggle",
    //   iconifyClassname: "simple-icons:kaggle",
    //   style: {
    //     color: "#20BEFF",
    //   },
    //   profileLink: "https://www.kaggle.com/laymanbrother",
    // },
  ],
};

const degrees = {
  degrees: [
    {
      title: "National Cheng Kung University (NCKU), Taiwan",
      subtitle:
        "M.S. in Department of Computer Science and Information Engineering",
      logo_path: "ncku-logo1.jpg",
      alt_name: "National Cheng Kung University",
      duration: "Graduated",
      descriptions: [
        "⚡ Graduated with an M.S. from the Department of Computer Science and Information Engineering, National Cheng Kung University.",
        "⚡ Advisor: 蘇文鈺 (Wen-Yu Su).",
        "⚡ Thesis: Coordinated Control of Multiple Robots Using ROS2 and a Unity-Based Digital Twin Environment.",
      ],
      website_link: "https://www.csie.ncku.edu.tw/",
    },
    {
      title: "Hiroshima University, Japan",
      subtitle: "Graduate School of Advanced Science and Engineering",
      logo_path: "hiroshima_university_crest.jpg",
      alt_name: "Hiroshima University",
      duration: "Exchange Student",
      descriptions: [
        "⚡ Exchange student at Hiroshima University, Graduate School of Advanced Science and Engineering.",
        "⚡ Advisor: 近藤徹 (Toru Kondo).",
      ],
      website_link: "https://www.hiroshima-u.ac.jp/en",
    },
    {
      title:
        "National Kaohsiung University of Science and Technology (NKUST), Taiwan",
      subtitle: "B.S. in Department of Computer and Communication Engineering",
      logo_path: "ncku2.png",
      alt_name: "National Kaohsiung University of Science and Technology",
      duration: "Graduated",
      descriptions: [
        "⚡ Graduated with a B.S. from the Department of Computer and Communication Engineering, National Kaohsiung University of Science and Technology.",
        "⚡ Advisor: 曾士桓 (Shih-Huan Tseng).",
        "⚡ Capstone Project: MMSE-Based Cognitive Stimulation Game System with Pepper Robot.",
      ],
      website_link: "https://www.nkust.edu.tw/",
    },
  ],
};

const certifications = {
  certifications: [
    // {
    //   title: "Machine Learning",
    //   subtitle: "- Andrew Ng",
    //   logo_path: "stanford_logo.png",
    //   certificate_link:
    //     "https://www.coursera.org/account/accomplishments/verify/22MTSSC5WDTM",
    //   alt_name: "Stanford University",
    //   color_code: "#8C151599",
    // },
    // {
    //   title: "Deep Learning",
    //   subtitle: "- Andrew Ng",
    //   logo_path: "deeplearning_ai_logo.png",
    //   certificate_link:
    //     "https://www.coursera.org/account/accomplishments/specialization/H8CPSFXAJD2G",
    //   alt_name: "deeplearning.ai",
    //   color_code: "#00000099",
    // },
    // {
    //   title: "ML on GCP",
    //   subtitle: "- GCP Training",
    //   logo_path: "google_logo.png",
    //   certificate_link:
    //     "https://www.coursera.org/account/accomplishments/specialization/EB4VJARK8647",
    //   alt_name: "Google",
    //   color_code: "#0C9D5899",
    // },
    // {
    //   title: "Data Science",
    //   subtitle: "- Alex Aklson",
    //   logo_path: "ibm_logo.png",
    //   certificate_link:
    //     "https://www.coursera.org/account/accomplishments/specialization/PLEAPCSJBZT5",
    //   alt_name: "IBM",
    //   color_code: "#1F70C199",
    // },
    // {
    //   title: "Big Data",
    //   subtitle: "- Kim Akers",
    //   logo_path: "microsoft_logo.png",
    //   certificate_link:
    //     "https://drive.google.com/file/d/164zKCFOsI4vGqokc-Qj-e_D00kLDHIrG/view",
    //   alt_name: "Microsoft",
    //   color_code: "#D83B0199",
    // },
    // {
    //   title: "Advanced Data Science",
    //   subtitle: "- Romeo Kienzler",
    //   logo_path: "ibm_logo.png",
    //   certificate_link:
    //     "https://www.coursera.org/account/accomplishments/verify/BH2T9BRU87BH",
    //   alt_name: "IBM",
    //   color_code: "#1F70C199",
    // },
    // {
    //   title: "Advanced ML on GCP",
    //   subtitle: "- GCP Training",
    //   logo_path: "google_logo.png",
    //   certificate_link:
    //     "https://www.coursera.org/account/accomplishments/verify/5JZZM7TNQ2AV",
    //   alt_name: "Google",
    //   color_code: "#0C9D5899",
    // },
    // {
    //   title: "DL on Tensorflow",
    //   subtitle: "- Laurence Moroney",
    //   logo_path: "deeplearning_ai_logo.png",
    //   certificate_link:
    //     "https://www.coursera.org/account/accomplishments/verify/6T4DCUGNK8J8",
    //   alt_name: "deeplearning.ai",
    //   color_code: "#00000099",
    // },
    // {
    //   title: "Fullstack Development",
    //   subtitle: "- Jogesh Muppala",
    //   logo_path: "coursera_logo.png",
    //   certificate_link:
    //     "https://www.coursera.org/account/accomplishments/certificate/NRANJA66Y2YA",
    //   alt_name: "Coursera",
    //   color_code: "#2A73CC",
    // },
    // {
    //   title: "Kuberenetes on GCP",
    //   subtitle: "- Qwiklabs",
    //   logo_path: "gcp_logo.png",
    //   certificate_link:
    //     "https://google.qwiklabs.com/public_profiles/e4d5a92b-faf6-4679-a70b-a9047c0cd750",
    //   alt_name: "GCP",
    //   color_code: "#4285F499",
    // },
    // {
    //   title: "Cryptography",
    //   subtitle: "- Saurabh Mukhopadhyay",
    //   logo_path: "nptel_logo.png",
    //   certificate_link:
    //     "https://drive.google.com/open?id=1z5ExD_QJVdU0slLkp8CBqSF3-C3g-ro_",
    //   alt_name: "NPTEL",
    //   color_code: "#FFBB0099",
    // },
    // {
    //   title: "Cloud Architecture",
    //   subtitle: "- Qwiklabs",
    //   logo_path: "gcp_logo.png",
    //   certificate_link:
    //     "https://google.qwiklabs.com/public_profiles/5fab4b2d-be6f-408c-8dcb-6d3b58ecb4a2",
    //   alt_name: "GCP",
    //   color_code: "#4285F499",
    // },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work, Competition Participation and Program",
  description:
    "I have worked on robotics and digital twin development, focusing on ROS-based robot control, Unity simulation, NVIDIA Isaac Sim, Docker-based development environments, and AI-based object recognition. I enjoy building systems that connect virtual and physical robots, and I am especially interested in robotics, computer vision, and the latest AI technologies.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      work: true,
      experiences: [
        {
          title: "Robotics Software Engineer",
          company: "PAIA",
          company_url: "https://app.paia-arena.com/",
          logo_path: "paia-logo-white.svg",
          duration: "Apr 2025 - Dec 2025",
          location: "Tainan, Taiwan",
          description:
            "Focused on ROS-based development, autonomous vehicle systems, AI-powered robotics applications, and firmware development for robotic arms.",
          color: "#000000",
        },
        {
          title: "Computer-Integrated Manufacturing(CIM) Intern",
          company: "Merck",
          company_url: "https://www.merckgroup.com/en",
          logo_path: "MERCK.JPG",
          duration: "July 2022 - September 2022",
          location: "Hsinchu, Taiwan",
          description:
            "Focused on SCADA machine data automation, factory energy reporting with Power BI dashboards, and employee training application development.",
          color: "#0879bf",
        },
        {
          title: "Quality Control Specialist Intern",
          company: "Magnate Technology Co.,Ltd",
          company_url: "https://www.maicl.com/",
          logo_path: "magnate.png",
          duration: "July 2018 - September 2018",
          location: "Luzhu, Taiwan",
          description:
            "Inspection and quality verification of aerospace mechanical parts",
          color: "#9b1578",
        },
      ],
    },
    {
      title: "Competition Participation",
      experiences: [
        {
          title: "2025 Qualcomm Taiwan Innovation Challenge",
          company: "PAIA",
          company_url: "https://www.qualcomm.com/",
          logo_path: "qualcomm.png",
          duration: "November 2025",
          location: "Taipei, Taiwan",
          description:
            "Achieved 3rd place (2nd Runner-Up) in the 2025 Qualcomm Taiwan Innovation Challenge. Our team focused on creating impactful AI and robotics solutions, and this recognition encouraged us to continue developing innovative applications in AI and robotics.",
          color: "#3253DC",
        },
      ],
    },
    {
      title: "Program",
      experiences: [
        {
          title: "ITRI Collaboration on OpenRB-150 Dynamixel Control System",
          company: "Industrial Technology Research Institute (ITRI)",
          company_url: "https://www.itri.org.tw/",
          logo_path: "ITRI_logo.png",
          duration: "January 2026",
          location: "Hsinchu, Taiwan",
          description:
            "Collaborated with ITRI to develop a custom Dynamixel control system using micro-ROS, ROS 2, and a self-designed dashboard. Integrated OpenRB-150 firmware with ROS workflows for real-time motor control, implemented micro-ROS communication and ROS topic-based prototyping, and built a dashboard interface for operation and monitoring.",
          color: "#005BAC",
        },
        {
          title: "HIWIN RA605 Inverse Kinematics Environment Integration",
          company: "HIWIN Technologies Corp.",
          company_url: "https://www.hiwin.tw/",
          logo_path: "Hiwin_logo.svg-Photoroom.png",
          duration: "December, 2025",
          location: "Tainan, Taiwan",
          description:
            "Collaborated with HIWIN to integrate an inverse kinematics environment for RA605 robotic arm control. Integrated robotic arm drivers and MoveIt 2 into a unified Docker environment for robotic arm control. Tech stack: MoveIt 2, Docker, ROS 2.",
          color: "#005BAC",
        },
        {
          title: "RB3 Gen2 Object Recognition and Auto-Grasp Deployment",
          company: "PAIA",
          company_url: "https://app.paia-arena.com/",
          logo_path: "paia-logo-white.svg",
          duration: "December, 2025",
          location: "Tainan, Taiwan",
          description:
            "Deployed object recognition and automatic grasping functions on RB3 Gen2 running Qualcomm Linux. Optimized vision-guided grasping workflows using YOLO, ROS 2, and PyBullet for robotic manipulation.",
          color: "#3253DC",
        },
        {
          title: "NCKU Scream Lab Second-Generation Autonomous Vehicle",
          company: "NCKU Scream Lab",
          company_url: "https://www.ncku.edu.tw/",
          logo_path: "ncku-logo1.jpg",
          duration: "February, 2025",
          location: "Tainan, Taiwan",
          description:
            "Developed a second-generation autonomous vehicle platform with UI/remote control, autonomous navigation, and vision-based perception. Implemented robot locomotion and robotic arm operation through both UI and remote-controller interfaces, deployed the robot system on NVIDIA Jetson for onboard computation, and integrated YOLO-based object detection and tracking with autonomous navigation. Tech stack: micro-ROS, YOLO, PlatformIO, ROS 2, Embedded Systems, Nav2, Jetson.",
          color: "#003D79",
        },
        {
          title:
            "TAICA Digital Twin Platform and Tool Development for Robot Navigation",
          company: "Taiwan Artificial Intelligence College Alliance (TAICA)",
          company_url: "https://taicatw.net/",
          logo_path: "taica.png",
          duration: "2024 - 2025",
          location: "Taiwan",
          description:
            "Built a robot digital twin platform for the TAICA Robot Navigation and Exploration course. Created a 1:1 robot model using Fusion 360 and integrated Unity with ROS for connected simulation and control. Tech stack: Fusion 360, Unity, ROS 2, Nav2.",
          color: "#003D79",
        },

        {
          title: "Architecture Department Tracked Robot Project",
          company: "National Cheng Kung University Department of Architecture",
          company_url: "https://www.arch.ncku.edu.tw/",
          logo_path: "ncku-logo1.jpg",
          duration: "May, 2025",
          location: "Tainan, Taiwan",
          description:
            "Collaborated with HIWIN and the National Cheng Kung University Department of Architecture on a tracked robot system. Developed microcontroller firmware drivers for the tracked robot platform and implemented navigation capabilities for autonomous operation. Tech stack: Embedded Systems, ROS 2, Nav2.",
          color: "#003D79",
        },
        {
          title: "Product Development with Leadtek on Robotics",
          company: "Leadtek Research Inc.",
          company_url: "https://www.leadtek.com/",
          logo_path: "leadtek.png",
          duration: "2023",
          location: "Tainan, Taiwan",
          description:
            "Collaborated with Leadtek on robotic product development. Developed robotic arm control functions and vehicle navigation capabilities, and implemented firmware for both robotic arm and autonomous mobile robot platforms. Tech stack: ROS 2, Nav2, Embedded Systems, Docker.",
          color: "#003D79",
        },
        {
          title: "University-Industry Collaboration Project",
          company: "National Kaohsiung University of Science and Technology",
          company_url: "https://www.nkust.edu.tw/",
          logo_path: "ncku2.png",
          duration: "2022 - 2023",
          location: "Kaohsiung, Taiwan",
          description:
            "Worked as a research assistant under Advisor Shih-Huan Tseng on a university-industry collaboration project. Developed a web-based material management system, implementing workflows for material checkout, restocking, new item registration, and historical change tracking. Tech stack: Django, Python, JavaScript, jQuery, HTML, CSS, MySQL.",
          color: "#003D79",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects focus on Digital Twin systems, AI robotics, and multi-robot collaboration, integrating simulation, computer vision, ROS2, and embedded platforms to build intelligent robotic applications.",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "Publications",
  description: "Some of my published Articles, Blogs and Research.",
  avatar_image_path: "projects_image.svg",
};

const publications = {
  data: [
    {
      id: "neuro-symbolic-sudoku-solver",
      name: "Neuro-Symbolic Sudoku Solver",
      createdAt: "2023-07-02T00:00:00Z",
      description: "Paper published in KDD KiML 2023",
      url: "https://arxiv.org/abs/2307.00653",
    },
    {
      id:
        "Coordinated Control of Multiple Robots Using ROS2 and a Unity-Based Digital Twin Environment",
      name:
        "Coordinated Control of Multiple Robots Using ROS2 and a Unity-Based Digital Twin Environment",
      createdAt: "2023-09-19T00:00:00Z",
      description: "ROS2 and Unity digital twin multi-robot control project.",
      url: "https://github.com/alianlbj23",
    },
    {
      id: "consistency-models",
      name: "Consistency Models",
      createdAt: "2023-10-12T00:00:00Z",
      description: "Blog published in Paperspace",
      url: "https://blog.paperspace.com/consistency-models/",
    },
  ],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "devin_animate.jpg",
    description:
      "Feel free to reach out. I specialize in robotics system development and AI applications.",
  },
  blogSection: {
    title: "Blogs",
    subtitle:
      "I like to document some of my experiences in professional career journey as well as some technical knowledge sharing.",
    link: "https://blogs.ashutoshhathidara.com/",
    avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "Address",
    subtitle: "Saratoga Ave, San Jose, CA, USA 95129",
    locality: "San Jose",
    country: "USA",
    region: "California",
    postalCode: "95129",
    streetAddress: "Saratoga Avenue",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://maps.app.goo.gl/NvYZqa34Wye4tpS17",
  },
  phoneSection: {
    title: "",
    subtitle: "",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  publicationsHeader,
  publications,
  contactPageData,
};
