import { ReactNode } from "react";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { GitHubLogoIcon } from "@radix-ui/react-icons";

type Props = {
  name: string;
  children: ReactNode;
  gradientClass: string;
  href: string;
  image: {
    alt: string;
    image: any;
  };
};

export default function ToolCard({
  name,
  gradientClass,
  image,
  href,
  children,
}: Props) {
  return (
    <Card
      className={`bg-gradient-to-br ${gradientClass} to-60% hover:to-100% to-white flex flex-col`}
    >
      <a href={href} target="_blank">
        <CardHeader className="space-y-0 flex flex-row items-center justify-between pb-2 gap-2 [&>svg]:size-6 [&>svg]:block">
          <CardTitle className="text-3xl">{name}</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex justify-between h-full space-x-4 mt-2">
            <div>{children}</div>
            <div className="max-w-40 px-4 self-center aspect-square flex flex-col justify-center">
              <Image alt={image.alt} src={image.image} />
            </div>
          </div>
        </CardContent>
      </a>
    </Card>
  );
}
