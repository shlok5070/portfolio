/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation
import paysecureLogo from "./assets/images/paysecureLogo.svg";
import paysecureMark from "./assets/images/paysecureMark.svg";
import cventLogo from "./assets/images/cventLogo.svg";
import publicisSapientLogo from "./assets/images/publicisSapientLogo.svg";

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Shlok Khandelwal",
  title: "Hi all, I'm Shlok",
  subTitle: emoji(
    "A Software Developer 🚀 building fast, maintainable web applications with React, TypeScript, Redux and Node.js, from real-time WebSocket systems to API-first development with OpenAPI."
  ),
  resumeLink: "resume", // Any non-empty value shows the "Download my resume" button (serves src/containers/greeting/resume.pdf)
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  linkedin: "https://www.linkedin.com/in/shlok-khandelwal18/",
  gmail: "shlok5070@gmail.com",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle:
    "SOFTWARE DEVELOPER FOCUSED ON SCALABLE FRONTENDS, REAL-TIME SYSTEMS AND CLEAN API CONTRACTS",
  skills: [
    emoji(
      "⚡ Build modular, reusable UIs with React, TypeScript, Redux Toolkit and Redux-Saga"
    ),
    emoji(
      "⚡ Design real-time features with WebSockets, and keep the main thread responsive with Web Workers"
    ),
    emoji(
      "⚡ Design OpenAPI 3.0 (YAML) schemas and mock servers so frontend and backend can be built in parallel"
    ),
    emoji(
      "⚡ Build end-to-end API workflows with Node.js and Express, backed by MySQL, PostgreSQL and Redis"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "TypeScript",
      fontAwesomeClassname: "fas fa-code"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "React",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "Node.js",
      fontAwesomeClassname: "fab fa-node-js"
    },
    {
      skillName: "Python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "Java",
      fontAwesomeClassname: "fab fa-java"
    },
    {
      skillName: "C++",
      fontAwesomeClassname: "fas fa-laptop-code"
    },
    {
      skillName: "SQL",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "Redis",
      fontAwesomeClassname: "fas fa-server"
    },
    {
      skillName: "Git",
      fontAwesomeClassname: "fab fa-git-alt"
    },
    {
      skillName: "GitHub",
      fontAwesomeClassname: "fab fa-github"
    },
    {
      skillName: "Jira",
      fontAwesomeClassname: "fab fa-jira"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Manipal University",
      subHeader: "B.Tech in Computer Science Engineering",
      duration: "Graduated 2024",
      desc: "Relevant coursework:",
      descBullets: [
        "Data Structures & Algorithms, Design & Analysis of Algorithms",
        "Object-Oriented Programming, Computer Networks, Machine Learning"
      ]
    }
  ]
};

// Company journey section (shown right after Education), oldest first

const companyJourney = {
  display: true, // Set false to hide this section
  title: "Where I've Worked",
  subtitle: "FROM INTERNSHIPS TO BUILDING PAYMENTS SOFTWARE",
  companies: [
    {
      company: "Publicis Sapient",
      logo: publicisSapientLogo,
      role: "Engineering Intern",
      period: "2023",
      highlight: "ServiceNow forms, UI policies and scripting, plus C/C++ DSA"
    },
    {
      company: "Cvent",
      logo: cventLogo,
      role: "Product Consultant",
      period: "2024",
      highlight: "Client support and implementations, 90% training score"
    },
    {
      company: "Paysecure",
      logo: paysecureLogo,
      role: "Software Developer",
      period: "2025 – Now",
      highlight:
        "React 19 migration, 30% faster loads, WebSockets cut load ~80%",
      current: true
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend (React, TypeScript, Redux)", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend & APIs (Node.js, Express, OpenAPI)",
      progressPercentage: "75%"
    },
    {
      Stack: "Databases (MySQL, PostgreSQL, Redis)",
      progressPercentage: "70%"
    }
  ]
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Software Developer",
      company: "Paysecure",
      companylogo: paysecureMark,
      date: "April 2025 – Present",
      desc: "Building and modernizing the frontend and API layer of a payments platform.",
      descBullets: [
        "Led migration of a legacy AngularJS + Thymeleaf frontend to React 19 + TypeScript, improving maintainability, type safety and scalability, and cutting initial page-load time by 30% across core user flows",
        "Built modular, reusable UI components with React, Redux and Redux-Saga to manage complex asynchronous state and API side effects",
        "Designed and maintained OpenAPI (YAML) schemas and mock servers, enabling parallel frontend–backend development and reducing API integration turnaround time by ~25%",
        "Re-architected the notification and chat system from 10s polling to WebSockets, reducing server load by ~80% and average latency from 10s to ~300ms, with Web Workers handling background processing",
        "Implemented end-to-end API workflows covering request validation, business logic and error handling across frontend and backend layers"
      ]
    },
    {
      role: "Product Consultant",
      company: "Cvent",
      companylogo: cventLogo,
      date: "Jun 2024 – Sept 2024",
      desc: "Supported clients on the Cvent platform through implementation and day-to-day use.",
      descBullets: [
        "Provided phone and email support, answering product questions and delivering technical assistance",
        "Reviewed initial product implementations with clients, gathered feedback and made adjustments for the best fit",
        "Scored a 90% average in an intensive 8-week product training program"
      ]
    },
    {
      role: "Software Engineering Intern",
      company: "Harken Data",
      date: "Aug 2023 – May 2024",
      desc: "Built Python ETL pipelines to move business data from Excel into MySQL.",
      descBullets: [
        "Collected and processed business datasets, including data from a jewelry company provided in Excel",
        "Refined, parsed and imported data into MySQL using Python with Pandas, OpenPyxl and mysql.connector",
        "Ensured data accuracy and consistency while optimizing database performance"
      ]
    },
    {
      role: "Engineering Intern",
      company: "Publicis Sapient",
      companylogo: publicisSapientLogo,
      date: "Jun 2023 – Aug 2023",
      desc: "Worked on the ServiceNow platform and on a DSA problem-solving team.",
      descBullets: [
        "Created and managed ServiceNow forms, UI policies and tables, with scripting in JavaScript",
        "Contributed to a problem-solving team focused on data structures and algorithms in C/C++"
      ]
    }
  ]
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Want to discuss a project, a role, or just say hi? My inbox is open.",
  number: "+91 9828011210",
  email_address: "shlok5070@gmail.com"
};

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  companyJourney,
  techStack,
  workExperiences,
  contactInfo
};
