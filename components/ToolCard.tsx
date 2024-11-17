import { ReactNode } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

type Props = {
  name: string;
  children: ReactNode;
  gradientClass: string;
  href: string;
};

export default function ToolCard({
  name,
  gradientClass,
  href,
  children,
}: Props) {
  return (
    <Card
      className={`bg-gradient-to-br ${gradientClass} to-60% hover:to-100% to-white flex flex-col`}
    >
      <a href={href}>
        <CardHeader className="space-y-0 flex flex-row items-center justify-between pb-2 gap-2 [&>svg]:size-6 [&>svg]:block">
          <CardTitle className="text-3xl">{name}</CardTitle>
        </CardHeader>
        <CardContent className="mt-2 lg:h-full">
          {children}
        </CardContent>
      </a>
    </Card>
  );
}
