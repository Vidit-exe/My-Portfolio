import Image from "next/image";
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Button,
} from "@material-tailwind/react";

interface ProjectCardProps {
  img: string;
  title: string;
  desc: string;
  link: string;
}

export function ProjectCard({ img, title, desc, link }: ProjectCardProps) {
  return (
    <Card color="transparent" shadow={false} className="h-full flex flex-col">
      <CardHeader floated={false} className="mx-0 mt-0 mb-6 h-48">
        <Image
          src={img}
          alt={title}
          width={768}
          height={768}
          className="h-full w-full object-cover"
        />
      </CardHeader>
      <CardBody className="p-0 flex flex-col justify-between flex-grow">
        <div>
          <Typography variant="h5" className="mb-2 dark:bg-gray-900 dark:text-white">
            {title}
          </Typography>
          <Typography className="mb-6 font-normal dark:bg-gray-900 dark:text-white">
            {desc}
          </Typography>
        </div>
        <div className="mt-auto">
          <Button
            size="sm"
            onClick={() => window.open(link, "_blank")}
            className="bg-gray-900 text-white dark:bg-white dark:text-gray-900"
          >
            See Details
          </Button>
        </div>
      </CardBody>
    </Card>
  );
}

export default ProjectCard;
