import { cn } from "@/lib/utils";

type TypographyPProps = {
  text: string;
  className?: string;
};

export const TypographyP = ({ text, className }: TypographyPProps) => {
  return (
    <p
      className={cn(
        "leading-7 [&:not(:first-child)]:mt-2 text-base",
        className
      )}
    >
      {text}
    </p>
  );
};
