"use client";

import Image from "next/image";
import { Input, Button, Typography } from "@material-tailwind/react";
import { getImagePrefix } from "../../utils/utils";
import { useRef, useState } from "react";import dynamic from "next/dynamic";
const TncModal = dynamic(() => import("../components/TncModal"), { ssr: false });


const scriptURL =
  "https://script.google.com/macros/s/AKfycbwIXv74kwVE8SUC5COQwQRFIcDoPtzmzjTNRmjdT9bsbFirTsFn1MEFGR0opLsrRnxViw/exec";

function Hero() {
  const formRef = useRef<HTMLFormElement | null>(null);
  const [status, setStatus] = useState<"success" | "error" | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
  
    try {
      const form = formRef.current;
      if (!form) return;
  
      const response = await fetch(scriptURL, {
        method: "POST",
        body: new FormData(form),
      });
  
      if (response.ok) {
        setStatus("success");
        form.reset();
        setTimeout(() => {
          setStatus(null)
        }, 3000);
      } else {
        setStatus("error");
        setTimeout(() => {
          setStatus(null);
        }, 3000);
      }
    } catch (error) {
      console.error("Submission Error:", error);
      setStatus("error");
      setTimeout(() => {
        setStatus(null);
      }, 3000);
    }
  };

  return (
    <header className="p-8">
      <div className="container mx-auto grid h-full gap-10 min-h-[60vh] w-full grid-cols-1 items-center lg:grid-cols-2 justify-between">
        <div className="row-start-2 lg:row-auto">
          <Typography
            variant="h1"
            className="mb-4 lg:text-5xl !leading-tight text-3xl"
          >
            Welcome to my <br /> Development Portfolio!
          </Typography>
          <Typography
            variant="lead"
            className="mb-4 md:pr-16 xl:pr-28"
          >
            I&apos;m Vidit, a passionate developer based in India. Here,
            you&apos;ll get a glimpse of my journey in the world of
            development, where creativity meets functionality.
          </Typography>

          {/* FORM START */}
          <div className="grid">
            <form
              name="submit-to-google-sheet"
              ref={formRef}
              onSubmit={handleSubmit}
            >
              <Typography
                variant="small"
                className="mb-2 font-medium"
              >
                Your email
              </Typography>
              <div className="mb-2 flex w-full flex-col gap-4 md:w-10/12 md:flex-row">
                <Input
                  color="gray"
                  label="Enter your email"
                  size="lg"
                  name="Enquiry_email"
                  required
                />
                <Button
                  type="submit"
                  color="gray"
                  className="w-full px-4 md:w-[12rem] bg-gray-900 text-white dark:bg-white dark:text-gray-900"
                >
                  require offer
                </Button>
              </div>
            </form>

            {status === "success" && (
              <Typography className="mt-4 text-green-600">
                ✅ Email sent successfully!
              </Typography>
            )}
            {status === "error" && (
              <Typography className="mt-4 text-red-600">
                ❌ Failed to send. Please try again.
              </Typography>
            )}
          </div>
          {/* FORM END */}
          <div>
            <Typography variant="small" className="font-normal !text-gray-500 mt-4">
              Read my{" "}
              <a className="font-medium underline transition-colors">
                <TncModal/>
              </a>
            </Typography>
          </div>
        </div>

        <Image
          width={1024}
          height={750}
          alt="Vidit"
          src={`${getImagePrefix()}image/avatar4.jpg`}
          className="w-[95%] rounded-xl lg:h-[650px] lg:w-[75%] mx-auto"
        />
      </div>
    </header>
  );
}

export default Hero;
