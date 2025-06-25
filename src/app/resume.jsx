"use client";

import { Typography, Button } from "@material-tailwind/react";
import {
  ChartBarIcon,
  PuzzlePieceIcon,
  CursorArrowRaysIcon,
  ArrowDownIcon,
} from "@heroicons/react/24/solid";
import { ResumeItem } from "@/components";

const RESUME_ITEMS = [
  {
    icon: ChartBarIcon,
    children: "Bachelor of Engineering in Information Technology.",
  },
  {
    icon: PuzzlePieceIcon,
    children: "Certified Web Developer",
  },
  {
    icon: CursorArrowRaysIcon,
    children: "Full Stack Proficiency",
  },
];

export function Resume() {
  return (
    <section className="px-8 py-24">
      <div className="container mx-auto grid w-full grid-cols-1 items-center gap-16 lg:grid-cols-2">
        <div className="col-span-1 lg:text-start text-center flex flex-col lg:items-start lg:justify-start items-center justify-center">
          <Typography variant="h2" classname="dark:bg-white dark:text-gray-900 lg:text-start text-center">
            My Resume
          </Typography>
          <Typography className="mb-4 mt-3 lg:w-9/12 font-normal dark:text-white w-full lg:text-start text-center gap-3">
            Highly skilled and creative Developer, crafting visually stunning and functionally robust
            websites, web applications, mobile applications, databases and UI/UX Designs.
          </Typography>
          <a
            href="/documents/Vidit-Professional-CV-Resume.pdf"
            download
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              variant="text"
              color="gray"
              className="flex items-center gap-2 bg-gray-900 text-white dark:bg-white dark:text-gray-900 lg:text-start text-center"
            >
              Download Now
              <ArrowDownIcon
                strokeWidth={3}
                className="h-3.5 w-3.5 text-white dark:text-gray-900"
              />
            </Button>
          </a>

        </div>
        <div className="col-span-1 grid gap-y-6 lg:ml-auto pr-0 lg:pr-12 xl:pr-32 items-center justify-center">
          {RESUME_ITEMS.map((props, idx) => (
            <ResumeItem key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Resume;
