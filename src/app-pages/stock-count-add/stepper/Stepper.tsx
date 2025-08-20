"use client";

import { cn } from "@/lib/utils";

interface Step {
  id: number;
  title: string;
}

interface StepperProps {
  steps: Step[];
  activeStep: number;
}

const Stepper = ({ steps, activeStep }: StepperProps) => {
  return (
    <div className="flex items-center space-x-4">
      {steps.map((step, index) => (
        <div key={step.id} className="flex items-center space-x-4 w-1/4">
          <div className="flex items-center space-x-2">
            <div
              className={cn(
                "flex h-10 w-10 items-center justify-center rounded-full border text-xs font-bold",
                activeStep === step.id
                  ? "bg-accent-orange text-white "
                  : "bg-gray-200 text-gray-600 border-gray-300",
              )}
            >
              {step.id}
            </div>
            <span
              className={cn(
                "text-sm font-medium  ",
                activeStep === step.id ? "text-black" : "text-gray-500",
              )}
            >
              {step.title}
            </span>
          </div>
          {index < steps.length - 1 && (
            <hr className="border-gray-300 w-[120px] h-0.5" />
          )}
        </div>
      ))}
    </div>
  );
};

export default Stepper;
