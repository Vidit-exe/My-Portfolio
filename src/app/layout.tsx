import "./globals.css";
import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import { Layout, FixedPlugin } from "@/components";
import { ThemeProvider } from "../../context/ThemeContext";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Vidit Joshi",
  description:
    "I’m Vidit Joshi, a developer building responsive websites, web apps, mobile apps, databases, and many more with React.js, Next.js, Modern UI, Java, Databases, Python and many more. Explore my work and connect!",
  keywords: [
    "Vidit Joshi",
    "Full Stack Developer",
    "Java Developer",
    "Next.js Portfolio",
    "Spring Boot Developer",
    "Tailwind CSS",
    "India Web Developer",
    "Python Developer",
    "Django Developer",
    "Databases",
    "DevOps"
  ],
  authors: [{ name: "Vidit Joshi" }],
  creator: "Vidit Joshi",
  openGraph: {
    title: "Vidit Joshi",
    description:
      "Modern portfolio of Vidit Joshi, a developer building beautiful web apps, mobile apps and many others.",
    url: "https://yourdomain.in", // Replace with your domain
    siteName: "Vidit Joshi Portfolio",
    images: [
      {
        url: "https://yourdomain.in/og-preview.jpg", // Replace with actual image path
        width: 1200,
        height: 630,
        alt: "Vidit Joshi Portfolio Preview",
      },
    ],
    type: "website",
  },
  metadataBase: new URL("https://yourdomain.in"), // Replace with your domain
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="canonical" href="https://yourdomain.in" />
        <meta name="theme-color" content="#ffffff" />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:title" content="Vidit Joshi | Developer" />
        <meta
          property="twitter:description"
          content="Check out Vidit Joshi’s developer portfolio showcasing modern websites , apps and many more using MERN Stack, Java, Python and many more skills."
        />
        <meta
          property="twitter:image"
          content="https://yourdomain.in/og-preview.jpg"
        />
        <script
          defer
          data-site="YOUR_DOMAIN_HERE"
          src="https://api.nepcha.com/js/nepcha-analytics.js"
        ></script>
        <link rel="shortcut icon" href="/portfolio-logo.png" type="image/png" />
      </head>
      <body
        className={`${roboto.className} bg-white text-black dark:bg-gray-900 dark:text-white`}
      >
        <ThemeProvider>
          <Layout>
            {children}
            <FixedPlugin />
          </Layout>
        </ThemeProvider>
      </body>
    </html>
  );
}
