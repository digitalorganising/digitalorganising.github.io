import { ReactNode } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

type Props = {
  title: string;
  children: ReactNode;
  icon?: ReactNode;
};

export default function SimpleCard({ title, icon, children }: Props) {
  return (
    <Card>
      <CardHeader className="space-y-0 flex flex-row items-center justify-between pb-2 gap-2 [&>svg]:size-6 [&>svg]:block">
        <CardTitle className="text-2xl">{title}</CardTitle>
        {icon ?? null}
      </CardHeader>
      <CardContent className="pb-7">{children}</CardContent>
    </Card>
  );
}
