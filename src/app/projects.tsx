"use client";

import { ProjectCard } from "@/components";
import { Typography } from "@material-tailwind/react";
import { getImagePrefix } from "../../utils/utils";

const PROJECTS = [
  {
    img: `${getImagePrefix()}image/movie-app.png`,
    title: "Cinema Website",
    desc: "A place where you can see the data of movies, series and others.",
    link: "https://movie-app-liart-tau.vercel.app/",
  },
  {
    img: `${getImagePrefix()}image/blog2.svg`,
    title: "Landing Page Development",
    desc: "Responsive landing page for aerial vibes",
    link: "https://github.com/Vidit-exe/Responsive_Landing_Page.git",
  },
  {
    img: `${getImagePrefix()}image/blog3.svg`,
    title: "Weather Web App",
    desc: "A web application used to detect and know about the real time climate data.",
    link: "https://github.com/Vidit-exe/Weather_Application.git",
  },
  {
    img: `${getImagePrefix()}image/car-scout.png`,
    title: "Car Scout",
    desc: "A web application made with MERN Stack used to trade about cars such as selling, buying, renting and many more.",
    link: "https://github.com/Vidit-exe/Car-Scout-Frontend.git",
  },
  {
    img: `${getImagePrefix()}image/admin-panel.png`,
    title: "Admin Panel",
    desc: "A live project Admin Panel used to manage the company data.",
    link: "https://github.com/hemant-manglani/pyonix-pannel-admin.git",
  },
];

export function Projects() {
  return (
    <section className="py-28 px-8">
      <div className="container mx-auto mb-20 text-center">
        <Typography variant="h2" className="mb-4">
          My Projects
        </Typography>
        <Typography
          variant="lead"
          className="mx-auto w-full px-4 font-normal lg:w-6/12"
        >
          Whether you have a mobile app idea that needs to come to life or a
          website that requires a facelift, I&apos;m here to turn your digital
          dreams into reality.
        </Typography>
      </div>
      <div className="container mx-auto grid grid-cols-1 gap-x-10 gap-y-20 md:grid-cols-2 xl:grid-cols-4">
        {PROJECTS.map((props, idx) => (
          <ProjectCard key={idx} {...props} />
        ))}
      </div>
    </section>
  );
}

export default Projects;
