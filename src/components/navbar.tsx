import React from "react";
import {
  Navbar as MTNavbar,
  Collapse,
  IconButton,
  Typography,
} from "@material-tailwind/react";
import {
  RectangleStackIcon,
  UserCircleIcon,
  CommandLineIcon,
  XMarkIcon,
  Bars3Icon,
} from "@heroicons/react/24/solid";
import ThemeToggleButton from "./ThemeToggleButton";

const NAV_MENU = [
  {
    name: "Home",
    icon: RectangleStackIcon,
    href: "#home",
  },
  {
    name: "My Projects",
    icon: UserCircleIcon,
    href: "#projects",
  },
  {
    name: "Contact Us",
    icon: CommandLineIcon,
    href: "#contact",
  },
];

interface NavItemProps {
  children: React.ReactNode;
  href?: string;
}

function NavItem({ children, href }: NavItemProps) {
  const isInternalLink = href?.startsWith("#");

  return (
    <li>
      <Typography
        as="a"
        href={href || "#"}
        target={isInternalLink ? "_self" : "_blank"}
        rel={isInternalLink ? undefined : "noopener noreferrer"}
        variant="paragraph"
        color="gray"
        className="flex items-center gap-2 font-medium text-gray-900 hover:text-gray-700 transition-colors dark:bg-gray-900 dark:text-white"
      >
        {children}
      </Typography>
    </li>
  );
}

export function Navbar() {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => setOpen((cur) => !cur);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpen(false)
    );
  }, []);

  return (
    <MTNavbar shadow={false} fullWidth className="border-0 sticky top-0 z-50 bg-white text-gray-900 dark:bg-gray-900 dark:text-white">
      <div className="container mx-auto flex items-center justify-between py-2 dark:bg-gray-900 dark:text-white">
        <Typography color="blue-gray" className="text-lg font-bold dark:bg-gray-900 dark:text-white">
          Vidit Joshi
        </Typography>

        {/* Desktop Nav */}
        <ul className="ml-10 hidden items-center gap-8 lg:flex">
          {NAV_MENU.map(({ name, icon: Icon, href }) => (
            <NavItem key={name} href={href}>
              <Icon className="h-5 w-5 dark:bg-gray-900 dark:text-white" />
              {name}
            </NavItem>
          ))}
        </ul>

        {/* Mobile Toggle Button */}
        <IconButton
          variant="text"
          onClick={handleOpen}
          className="ml-auto inline-block lg:hidden dark:text-white text-gray-900"
        >
          {open ? (
            <XMarkIcon strokeWidth={2} className="h-6 w-6" />
          ) : (
            <Bars3Icon strokeWidth={2} className="h-6 w-6" />
          )}
        </IconButton>
        <Typography className="lg:block hidden">
          <ThemeToggleButton />
        </Typography>
      </div>

      {/* Mobile Nav Menu */}
      <Collapse open={open}>
        <div className="container mx-auto mt-3 border-t border-gray-200 px-2 pt-4">
          <ul className="flex flex-col gap-4">
            {NAV_MENU.map(({ name, icon: Icon, href }) => (
              <NavItem key={name} href={href}>
                <Icon className="h-5 w-5" />
                {name}
              </NavItem>
            ))}
            <Typography className="">
              <ThemeToggleButton />
            </Typography>
          </ul>
        </div>
      </Collapse>
    </MTNavbar>
  );
}

export default Navbar;
