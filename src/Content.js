// import images
import Hero_person from "./assets/images/Hero/person.png";

import tensorflow from "./assets/images/Skills/tensorflow.png";
import scikit from "./assets/images/Skills/scikit-learn.png";
import pytorch from "./assets/images/Skills/pytorch.png";
import colab from "./assets/images/Skills/colab.png";
import azure from "./assets/images/Skills/azure.png";
import python from "./assets/images/Skills/python.png";

import services_logo1 from "./assets/images/Services/logo1.png";
import services_logo2 from "./assets/images/Services/logo2.png";
import services_logo3 from "./assets/images/Services/logo3.png";

import project1 from "./assets/images/projects/img1.png";
import project2 from "./assets/images/projects/img2.png";
import project3 from "./assets/images/projects/img3.png";
import person_project from "./assets/images/projects/person.png";

import avatar1 from "./assets/images/Testimonials/avatar1.png";
import avatar2 from "./assets/images/Testimonials/avatar2.png";
import avatar3 from "./assets/images/Testimonials/avatar3.png";
import avatar4 from "./assets/images/Testimonials/avatar4.png";

import Hireme_person from "./assets/images/Hireme/person.png";
import Hireme_person2 from "./assets/images/Hireme/person2.png";

// import icons from react-icons
import { GrMail } from "react-icons/gr";
import { MdArrowForward, MdCall } from "react-icons/md";
import { BsLinkedin } from "react-icons/bs";
import { TbSmartHome } from "react-icons/tb";
import { BiUser } from "react-icons/bi";
import { RiServiceLine, RiProjectorLine } from "react-icons/ri";
import { MdOutlinePermContactCalendar } from "react-icons/md";

export const content = {
  nav: [
    {
      link: "#home",
      icon: TbSmartHome,
    },
    {
      link: "#skills",
      icon: BiUser,
    },
    {
      link: "#services",
      icon: RiServiceLine,
    },
    {
      link: "#projects",
      icon: RiProjectorLine,
    },
    {
      link: "#contact",
      icon: MdOutlinePermContactCalendar,
    },
  ],
  hero: {
    title: "AI/ML Enthusiast",
    firstName: "Parthib",
    LastName: "Sarkar",
    btnText: "Hire Me",
    image: Hero_person,
    hero_content: [
      {
        count: "2+",
        text: "Years of Experience in AI/ML",
      },
      {
        count: "20+",
        text: "Projects Worked in my career",
      },
    ],
  },
  skills: {
    title: "Skills",
    subtitle: "MY TOP SKILLS",
    skills_content: [
      {
        name: "Python",
        para: "Learning Everyday! Using Everyday!",
        logo: python,
      },
      {
        name: "TensorFlow",
        para: "Deep Learning Framework",
        logo: tensorflow,
      },
      {
        name: "Scikit-learn",
        para: "Data Science Toolkit",
        logo: scikit,
      },
      {
        name: "Pytorch",
        para: "Machine Learning Library",
        logo: pytorch,
      },
      {
        name: "Google Colab",
        para: "Collaborative Coding Environment",
        logo: colab,
      },
      {
        name: "Azure",
        para: "Cloud Computing Platform",
        logo: azure,
      },
    ],
    icon: MdArrowForward,
  },
  services: {
    title: "Services",
    subtitle: "WHAT I OFFER",
    service_content: [
      {
        title: "AI/ML Solutions",
        para: "Building and deploying AI-powered applications for automation, recommendation systems, or predictive analytics.",
        logo: services_logo1,
      },
      {
        title: "Cloud Services & DevOps",
        para: "Hosting, managing, and optimizing websites or applications on cloud platforms.",
        logo: services_logo2,
      },
      {
        title: "Open-Source Contributions",
        para: "Contributing to community-driven software development, problem-solving, and code optimization.",
        logo: services_logo3,
      },
    ],
  },
  Projects: {
    title: "Projects",
    subtitle: "MY CREATION",
    image: person_project,
    project_content: [
      {
        title: "Text to Image Generator",
        image: project1,
      },
      {
        title: "Movie Recommender System",
        image: project2,
      },
      {
        title: "AI Chatbot",
        image: project3,
      },
    ],
  },
  Testimonials: {
    title: "Testimonials",
    subtitle: "MY CLIENT REVIEWS",
    testimonials_content: [
      {
        review:
          "“His expertise in AI solutions helped us streamline our data processes significantly. A true professional!”",
        img: avatar1,
        name: "JOHN DOE",
      },
      {
        review:
          "“Working with Parthib Sarkar was a game-changer for our project. His attention to detail and innovative ideas made a real difference!”",
        img: avatar2,
        name: "Tom Alex",
      },
      {
        review:
          "“Fantastic communication and a quick turnaround. He understood our needs perfectly and delivered a great product!”",
        img: avatar3,
        name: "Johnny",
      },
      {
        review:
          "“The collaboration was smooth and productive. Their skills in web development and cloud services truly stood out.”",
        img: avatar4,
        name: "ROBBIN",
      },
    ],
  },
  Hireme: {
    title: "Hire Me",
    subtitle: "FOR YOUR PROJECTS",
    image1: Hireme_person,
    image2: Hireme_person2,
    para: "Looking for a passionate developer to bring your ideas to life? With expertise in web development, AI, and cloud services, I’m ready to deliver innovative solutions tailored to your needs. Let’s connect and discuss how I can help with your next project!",
    btnText: "Hire Me",
  },
  Contact: {
    title: "Contact Me",
    subtitle: "GET IN TOUCH",
    social_media: [
      {
        text: "parthib.sarkar04@gmail.com",
        icon: GrMail,
        link: "mailto:parthib.sarkar04@gmail.com",
      },
      {
        text: "+91 9163556868",
        icon: MdCall,
        link: "https://wa.me/9163556868",
      },
      {
        text: "Parthib Sarkar",
        icon: BsLinkedin,
        link: "https://www.linkedin.com/in/parthib-sarkar-859838293/",
      },
    ],
  },
  Footer: {
    text: "All © Copy Right Reserved 2024",
  },
};
