import { Card, CardBody, Typography } from "@material-tailwind/react";

interface SkillCardProps {
  title: string;
  icon: React.ElementType;
  children: React.ReactNode;
}

export function SkillCard({ icon: Icon, title, children }: SkillCardProps) {
  return (
    <Card color="transparent" shadow={false}>
      <CardBody className="grid justify-center text-center">
        <div className="mx-auto mb-6 grid h-12 w-12 place-items-center rounded-full bg-gray-900 text-white dark:bg-white dark:text-gray-900 p-2.5 shadow">
          <Icon className="h-6 w-6" />
        </div>
        <Typography variant="h5" className="mb-2 text-gray-900 dark:text-white">
          {title}
        </Typography>
        <Typography className="px-8 font-normal text-gray-700 dark:text-gray-300">
          {children}
        </Typography>
      </CardBody>
    </Card>
  );
}

export default SkillCard;
