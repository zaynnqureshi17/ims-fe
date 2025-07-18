import { Button } from "@/components/ui/button";
import React from "react";

interface IconButtonProps extends React.ComponentProps<typeof Button> {
  text: string;
  icon: React.ReactNode;
  className?: string;
}

const IconButton: React.FC<IconButtonProps> = ({
  text,
  icon,
  className = "",
  ...props
}) => {
  return (
    <Button
      className={`inline-flex items-center justify-center p-4 space-x-2 cursor-pointer hover:bg-accent/80  ${className}`}
      {...props}
    >
      {icon}
      <span>{text}</span>
    </Button>
  );
};

export default IconButton;
