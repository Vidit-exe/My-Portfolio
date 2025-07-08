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
  title: "Vidit's Portfolio",
  description: "Vidit's Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <script
          defer
          data-site="YOUR_DOMAIN_HERE"
          src="https://api.nepcha.com/js/nepcha-analytics.js"
        ></script>
        <link rel="shortcut icon" href="/portfolio-logo.png" type="image/png" />
      </head>
      <body className={`${roboto.className} bg-white text-black dark:bg-gray-900 dark:text-white`}>
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