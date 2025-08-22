import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import React, { ReactNode } from "react";

interface CardSectionProps {
  title: string;
  description: string;
  children: ReactNode;
  footerChildren?: ReactNode;
}

const AuthCardForm: React.FC<CardSectionProps> = ({
  title,
  description,
  children,
  footerChildren,
}) => {
  return (
    <Card className="w-full max-w-md gap-0 rounded-sm px-4 py-8">
      <CardHeader className="text-center my-6">
        <CardTitle className="text-2xl font-light ">{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>{children}</CardContent>
      {footerChildren && (
        <CardFooter className="flex-col gap-4">{footerChildren}</CardFooter>
      )}
    </Card>
  );
};

export default AuthCardForm;
