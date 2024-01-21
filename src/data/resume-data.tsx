import {
  AmbitLogo,
  BarepapersLogo,
  BimLogo,
  CDGOLogo,
  ClevertechLogo,
  ConsultlyLogo,
  EvercastLogo,
  Howdy,
  JarockiMeLogo,
  JojoMobileLogo,
  Minimal,
  MobileVikingsLogo,
  MonitoLogo,
  NSNLogo,
  ParabolLogo,
  TastyCloudLogo,
  YearProgressLogo,
} from "@/images/logos";
import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Eric Zhong",
  initials: "EZ",
  location: "Los Angeles, California",
  locationLink: "https://www.google.com/maps/place/Los-Angeles",
  about:
    "CECS + EE Presidential Scholar at USC",
  summary:
    "Hi! My name is Eric I'm a 3rd-year Presidential Scholar at USC concurrently studying towards a master’s in electrical engineering and a bachelor’s in computer engineering & computer science. I love to learn and build, two things you'll find common in most of what I've done. I'm passionate about all things computers—particularly computer architecture, low-level software/systems, and high-performance computing. In my free time, you can find me reading/writing, playing poker, or going down some random internet rabbit hole. Please feel free to reach out if you'd like to get in touch. Thanks for stopping by!",
  avatarUrl: "https://media.licdn.com/dms/image/D5603AQFYfrlycEQ0XQ/profile-displayphoto-shrink_400_400/0/1695108300674?e=1711584000&v=beta&t=3eSoJNwL_axGymSIbqxwFL2QL0ZSw5LyKe9YGQBmla8",
  personalWebsiteUrl: "https://www.erictzhong.com",
  contact: {
    email: "eric@erictzhong.com",
    //tel: "+48530213401",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/etzhong",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/erictzhong",
        icon: LinkedInIcon,
      },
      // {
      //   name: "X",
      //   url: "https://x.com/BartoszJarocki",
      //   icon: XIcon,
      // },
    ],
  },
  education: [
    {
      school: "USC Viterbi School of Engineering",
      degree: "Master's Degree in Electrical Engineering (specialization in Computer Architecture)",
      start: "2023",
      end: "Present",
    },
    {
      school: "University of Southern California",
      degree: "Bachelor's Degree in Computer Engineering & Computer Science",
      start: "2021",
      end: "Present",
    },
  ],
  work: [
    {
      company: "NVIDIA",
      link: "https://www.nvidia.com/en-us/",
      badges: ["Santa Clara, CA"],
      title: "Computer Architecture Intern",
      logo: "",
      start: "",
      end: "",
      description:
        "Incoming GPU Architecture Intern for Summer 2024",
    },
    {
      company: "USC Viterbi School of Engineering",
      link: "https://viterbischool.usc.edu/",
      badges: ["Los Angeles, CA"],
      title: "Undergraduate Teaching Assistant",
      logo: "",
      start: "August 2022",
      end: "Present",
      description:
        "CSCI 270 - Algorithms and the Theory of Computation (Spring 2024), EE 250 - Distributed Systems for the Internet of Things (Fall 2023), EE 109 - Embedded Systems (Spring 2023, Fall 2022)",
    },
    {
      company: "USC Photonic Computing Laboratory",
      link: "https://sites.usc.edu/zchen",
      badges: ["Los Angeles, CA"],
      title: "Research Fellow",
      logo: "",
      start: "August 2022",
      end: "Present",
      description:
        "Intelligent and Quantum Photonics Group",
    },
    {
      company: "IQVIA",
      link: "https://www.iqvia.com/",
      badges: ["Philadelphia, PA"],
      title: "Software Engineering Intern",
      logo: "",
      start: "May 2022",
      end: "August 2022",
      description: "Engineered backend infrastructures for powering global healthcare intelligence and analytics",
    },
  ],
  skills: [
    "Computer Architecture",
    "Hardware Development",
    "High Performance Computing",
    "Photonics",
    "Embedded Systems",
    "Entreprenuership",
    "Competitive Poker"
  ],
  projects: [
    
    { 
      title: "Pipelined MIPS Processor",
      techStack: [
        "Academic Project",
        "Verilog",
        "FPGAs",
        "Assembly",
        "QuestaSim",
        "Architecture",
      ],
      description: "An 8-stage pipelined processor with branch prediction running the MIPS instruction set",
      logo: "",
      link: {
        label: "",
        href: "",
      },
    },


    { 
      title: "Ducking Duck",
      techStack: [
        "Academic Project",
        "Verilog",
        "FPGAs",
        "QuestaSim",
        "Vivado",
        "Digital Design",
      ],
      description: "An interactive RTL hardware version of the google chrome dinosaur game on a Nexys4 FPGA",
      logo: "",
      link: {
        label: "",
        href: "https://github.com/etzhong/ducking-duck",
      },
    },
    { 
      title: "SALNET",
      techStack: [
        "Academic Project",
        "C++",
        "Networking",
        "Socket Programming",
      ],
      description: "A custom P2P network protocol stack for exchanging secure messages and files",
      logo: "",
      link: {
        label: "",
        href: "",
      },
    },
    {
      title: ":Documate",
      techStack: [
        "Startup MVP",
        "TypeScript",
        "Next.js",
        "Python",
        "Langchain",
        "MongoDB",
      ],
      description: "An AI-powered platform for streamlining technical documentation",
      logo: "",
      link: {
        label: "",
        href: "",
      },
    },
    {
      title: "SparkSC",
      techStack: ["Student Org", "Entreprenuership", "Project Management"],
      description:
        "A student community seeking to inspire entreprenuerial thought at USC and beyond",
      logo: "",
      link: {
        label: "",
        href: "https://sparksc.org/",
      },
    },

  ],
} as const;
