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
    <Card className="w-full max-w-sm gap-0 rounded-sm px-4 py-6">
      <CardHeader className="text-center mb-6">
        <CardTitle className="text-2xl font-light ">{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>{children}</CardContent>
      {footerChildren && (
        <CardFooter className="flex-col gap-2">{footerChildren}</CardFooter>
      )}
    </Card>
  );
};

export default AuthCardForm;
