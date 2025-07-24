import { Loader } from "lucide-react";
import React from "react";

const SpinnerLoader = () => {
  return (
    <div className="flex justify-center items-center">
      <Loader className="animate-spin text-white w-8 h-8" />
    </div>
  );
};

export default SpinnerLoader;
