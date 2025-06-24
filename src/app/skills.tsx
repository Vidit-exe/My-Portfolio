"use client";

import { Typography } from "@material-tailwind/react";
import {
  RectangleGroupIcon,
  FingerPrintIcon,
  SwatchIcon,
  HashtagIcon,
  EyeIcon,
  DocumentTextIcon,
} from "@heroicons/react/24/solid";
import { FaMobile } from "react-icons/fa";
import { IoFileTrayStackedSharp } from "react-icons/io5";
import { FaJava } from "react-icons/fa";
import { SiSpringboot } from "react-icons/si";
import { VscAzureDevops } from "react-icons/vsc";
import { FaDatabase } from "react-icons/fa";
import { FaPython } from "react-icons/fa";
import { SkillCard } from "@/components";

const SKILLS = [
  {
    icon: RectangleGroupIcon,
    title: "Full-Stack Web Development:",
    children:
      "Creating beautiful and functional web experiences is my forte. Using the latest technologies and best practices, I design and build websites that captivate and engage users.",
  },
  {
    icon: FaMobile,
    title: "Mobile App Development",
    children:
      " I specialize in creating responsive and intuitive mobile apps that work seamlessly across iOS & Android devices. From concept to deployment, I handle every stage of the development process.",
  },
  {
    icon: FaJava,
    title: "Java Development",
    children:
      "I refer to the development in Java since it is a old yet better in many modules type language which provide optimal yet sustainable solution in modern times too.",
  },
  {
    icon: SiSpringboot,
    title: "Spring Boot Development",
    children:
      "It is a framework of Java where the code is written in Java language mainly used to connect the client side applications with server side.",
  },
  {
    icon: IoFileTrayStackedSharp,
    title: "Technology Stack",
    children:
      "I'm well-versed in the industry's most popular frontend technologies, including HTML5, CSS3, JavaScript, Java and frameworks like React, React Native and Spring Boot.",
  },
  {
    icon: FaDatabase,
    title: "Database",
    children:
      "I am proficient in maintaining the real time data connected to the live application, more liable in NoSQL data e.g. MongoDB.",
  },
  {
    icon: FaPython,
    title: "Python",
    children:
      "I possess a foundational proficiency in Python, with the ability to build, debug, and enhance practical solutions.",
  },
  {
    icon: HashtagIcon,
    title: " Web Optimization",
    children:
      "Performance matters. I optimize websites and apps for speed, ensuring your users enjoy a fast and responsive experience, which in turn boosts user satisfaction and SEO rankings.",
  },
  {
    icon: EyeIcon,
    title: "User-Centric Design",
    children:
      "My development goes hand-in-hand with an eye for design. I create user interfaces that are not only functional but also aesthetically pleasing, providing a seamless and enjoyable user journey.",
  },
  {
    icon: DocumentTextIcon,
    title: "Testing and Quality Assurance",
    children:
      "I rigorously test and debug applications to guarantee a bug-free and secure environment for users. Your peace of mind is as important to me as the functionality of your project.",
  },
  {
    icon: VscAzureDevops,
    title: "Continuous Testing and Development (Devops)",
    children:
      "In this modern era, I assure you the development as well as the operations held together to maintain the provided data.",
  },
];

export function Skills() {
  return (
    <section className="px-8 py-10">
      <div className="container mx-auto mb-20 text-center">
        <Typography className="mb-2 font-bold uppercase">
          my skills
        </Typography>
        <Typography variant="h1" className="mb-4">
          What I do
        </Typography>
        <Typography
          variant="lead"
          className="mx-auto w-full lg:w-10/12"
        >
          I&apos;m not just a developer; I&apos;m a digital dreamweaver.
          Crafting immersive online experiences is not just a job but my
          calling. Discover below how I can help you.
        </Typography>
      </div>
      <div className="container mx-auto grid grid-cols-1 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
        {SKILLS.map((props, idx) => (
          <SkillCard key={idx} {...props} />
        ))}
      </div>
    </section>
  );
}

export default Skills;
