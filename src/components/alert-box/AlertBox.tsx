import {
  AlertCircle,
  Info,
  Triangle,
  CheckCircle,
} from "lucide-react";
import { cn } from "@/lib/utils";

type AlertType = "error" | "warning" | "info" | "success";

interface AlertBoxProps {
  type?: AlertType;
  title: string;
  message: string;
}

const typeStyles = {
  error: {
    icon: <AlertCircle className="text-red-500 w-5 h-5" />,
    bg: "bg-red-50",
    border: "border-red-300",
    text: "text-red-700",
  },
  warning: {
    icon: <Triangle className="text-yellow-500 w-5 h-5" />,
    bg: "bg-yellow-50",
    border: "border-yellow-300",
    text: "text-yellow-700",
  },
  info: {
    icon: <Info className="text-blue-500 w-5 h-5" />,
    bg: "bg-blue-50",
    border: "border-blue-300",
    text: "text-blue-700",
  },
  success: {
    icon: <CheckCircle className="text-green-500 w-5 h-5" />,
    bg: "bg-green-50",
    border: "border-green-300",
    text: "text-green-700",
  },
};

const AlertBox = ({ type = "info", title, message }: AlertBoxProps) => {
  const styles = typeStyles[type];

  return (
    <div
      className={cn(
        "flex items-start gap-3 rounded-md border px-4 py-3 mb-4",
        styles.bg,
        styles.border,
        styles.text
      )}
    >
      <div className="mt-1">{styles.icon}</div>
      <div>
        <div className="font-semibold">{title}</div>
        <div className="text-sm">{message}</div>
      </div>
    </div>
  );
};

export default AlertBox;
