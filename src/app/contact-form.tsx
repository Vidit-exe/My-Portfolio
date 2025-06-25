"use client";

import React, { useRef, useState } from "react";
import {
  Typography,
  Card,
  CardBody,
  Radio,
  Input,
  Textarea,
  Button,
  IconButton,
} from "@material-tailwind/react";
import { EnvelopeIcon, PhoneIcon } from "@heroicons/react/24/solid";
import { FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const scriptURL =
  "https://script.google.com/macros/s/AKfycbykm5CIFkJsuC1MgdNFPqd_UcUlGtfLAjr331rENveK-1-MHxJi7AUPDj39vadFknAO/exec";

export function ContactForm() {
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
    <section className="py-28 px-8">
      <div className="container mx-auto mb-20 text-center">
        <Typography variant="h1" className="mb-4 text-gray-900 dark:text-white">
          Contact Us
        </Typography>
        <Typography
          variant="lead"
          className="mx-auto w-full lg:w-5/12 text-gray-700 dark:text-white"
        >
          Ready to get started? Feel free to reach out through the contact form,
          and let&apos;s embark on a journey of innovation and success.
        </Typography>
      </div>

      <Card shadow={true} className="container mx-auto border border-gray/50 dark:border-white/50 dark:bg-transparent">
        <CardBody className="grid grid-cols-1 lg:grid-cols-7 md:gap-10">
          {/* LEFT SIDE */}
          <div className="w-full col-span-3 rounded-lg h-full py-8 p-5 md:p-16 bg-gray-900 dark:bg-white">
            <Typography variant="h4" className="mb-2 text-white dark:text-gray-900">
              Contact Information
            </Typography>
            <Typography
              variant="lead"
              className="mx-auto mb-8 text-base text-white dark:text-gray-900"
            >
              Fill up the form and our Team will get back to you within 24
              hours.
            </Typography>
            <div className="flex gap-5">
              <a href="tel:+918160471647" className="flex gap-5">
                <PhoneIcon className="h-6 w-6 text-white dark:text-gray-900" />
                <Typography variant="h6" className="text-white dark:text-gray-900">
                  +91 81604 71647
                </Typography>
              </a>
            </div>
            <div
              className="flex my-2 gap-5 cursor-pointer"
              onClick={() =>
                (window.location.href = "mailto:joshividit11@gmail.com")
              }
            >
              <EnvelopeIcon className="h-6 w-6 text-white dark:text-gray-900" />
              <Typography variant="h6" className="text-white dark:text-gray-900">
                joshividit11@gmail.com
              </Typography>
            </div>
            <div className="flex items-center lg:gap-5 gap-2 lg:-ml-1 -ml-2 mr-64">
              <a href="https://www.instagram.com/j_viditttt">
                <IconButton
                  variant="text"
                  className="text-white dark:text-gray-900"
                  onClick={() =>
                    (window.location.href = "https://www.instagram.com/j_viditttt")
                  }
                >
                  <FaInstagram className="text-2xl" />
                </IconButton>
              </a>
              <a href="https://x.com/ViditJoshi83058">
                <IconButton
                  variant="text"
                  className="text-white dark:text-gray-900"
                  onClick={() =>
                    (window.location.href = "https://x.com/ViditJoshi83058")
                  }
                >
                  <FaXTwitter className="text-2xl" />
                </IconButton>
              </a>
              <a href="https://github.com/Vidit-exe">
                <IconButton
                  variant="text"
                  className="text-white dark:text-gray-900"
                  onClick={() =>
                    (window.location.href = "https://github.com/Vidit-exe")
                  }
                >
                  <FaGithub className="text-2xl" />
                </IconButton>
              </a>
              <a href="https://www.linkedin.com/in/vidit-j-344064244">
                <IconButton
                  variant="text"
                  className="text-white dark:text-gray-900"
                  onClick={() =>
                    (window.location.href = "https://www.linkedin.com/in/vidit-j-344064244")
                  }
                >
                  <FaLinkedin className="text-2xl" />
                </IconButton>
              </a>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="w-full mt-8 md:mt-0 md:px-10 col-span-4 h-full p-5">
            <form
              name="submit-to-google-sheet"
              ref={formRef}
              onSubmit={handleSubmit}
            >
              <div className="mb-8 grid gap-4 lg:grid-cols-2">
                <Input
                  size="lg"
                  color="gray"
                  variant="static"
                  label="First Name"
                  name="First_Name"
                  placeholder="eg. Tony"
                  containerProps={{
                    className: "!min-w-full mb-3 md:mb-0",
                  }}
                  required
                />
                <Input
                  color="gray"
                  size="lg"
                  variant="static"
                  label="Last Name"
                  name="Last_Name"
                  placeholder="eg. Stark"
                  containerProps={{
                    className: "!min-w-full",
                  }}
                  required
                />
              </div>

              <Input
                color="gray"
                size="lg"
                variant="static"
                label="Email"
                name="Email"
                placeholder="eg. tonystark@marvel.com"
                containerProps={{
                  className: "!min-w-full mb-8",
                }}
                required
              />

              <Textarea
                color="gray"
                size="lg"
                variant="static"
                label="Your Message"
                name="Message"
                containerProps={{
                  className: "!min-w-full mb-8",
                }}
                required
              />

              <div className="w-full flex justify-end">
                <Button type="submit" className="w-full md:w-fit dark:text-gray-900 dark:bg-white" size="md">
                  Send Message
                </Button>
              </div>
            </form>

            {status === "success" && (
              <Typography className="mt-6 text-green-600">
                ✅ Message sent successfully!
              </Typography>
            )}
            {status === "error" && (
              <Typography className="mt-6 text-red-600">
                ❌ Failed to send. Please try again.
              </Typography>
            )}
          </div>
        </CardBody>
      </Card>
    </section>
  );
}

export default ContactForm;
