import { Typography, Button } from "@material-tailwind/react";

const CURRENT_YEAR = new Date().getFullYear();

export function Footer() {
  return (
    <footer className="mt-5 px-8 pt-20 text-center w-full">
      <div className="container mx-auto text-center">
        <div className="mt-16 flex flex-wrap items-center justify-center gap-y-4 border-t border-gray-200 py-6 md:justify-between">
          <Typography className="text-center font-normal text-gray-700 dark:text-white/90 mx-auto">
            &copy; {CURRENT_YEAR} Made by Vidit Joshi and Team.
          </Typography>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
