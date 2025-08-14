"use client";
import { ArrowLeftSquareIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import IconButton from "../button";

type Props = {
  url?: string;
};

const BackArrow = ({ url }: Props) => {
  const router = useRouter();

  const handleGo = () => {
    if (url) {
      router.push(url);
    } else {
      router.back();
    }
  };
  return (
    <IconButton
      text="Go Back"
      icon={<ArrowLeftSquareIcon />}
      onClick={handleGo}
    />
  );
};

export default BackArrow;
