// src/components/NotificationAlert.tsx
import { cn } from "@/lib/utils";
import { AlertCircle, CheckCircle, Info, Triangle } from "lucide-react";
import { ReactNode } from "react";

type NotificationType = "error" | "warning" | "info" | "success";

export interface NotificationAlertProps {
  icon: ReactNode;
  type?: NotificationType;
  title: string;
  message: string;
  className?: string;
}

const typeStyles: Record<
  NotificationType,
  {
    icon: ReactNode;
    bg: string;
    borderColor: string;
    titleColor: string;
    messageColor: string;
  }
> = {
  error: {
    icon: <AlertCircle className="w-5 h-5 text-red-500" />,
    bg: "bg-red-50",
    borderColor: "border-red-400",
    titleColor: "text-red-700",
    messageColor: "text-red-600",
  },
  warning: {
    icon: <Triangle className="w-5 h-5 text-yellow-500" />,
    bg: "bg-yellow-50",
    borderColor: "border-yellow-400",
    titleColor: "text-yellow-700",
    messageColor: "text-yellow-600",
  },
  info: {
    icon: <Info className="w-5 h-5 text-blue-500" />,
    bg: "bg-blue-50",
    borderColor: "border-blue-400",
    titleColor: "text-blue-700",
    messageColor: "text-blue-600",
  },
  success: {
    icon: <CheckCircle className="w-5 h-5 text-green-500" />,
    bg: "bg-green-50",
    borderColor: "border-green-400",
    titleColor: "text-green-700",
    messageColor: "text-green-600",
  },
};

const NotificationAlert: React.FC<NotificationAlertProps> = ({
  type = "info",
  title,
  message,
  className = "",
}) => {
  const { icon, bg, borderColor, titleColor, messageColor } = typeStyles[type];

  return (
    <div
      className={cn(
        "flex items-start gap-3 rounded-md border-l-4 p-4",
        bg,
        borderColor,
        className
      )}
    >
      <div className="mt-1">{icon}</div>
      <div>
        <p className={cn("font-semibold", titleColor)}>{title}</p>
        <p className={cn("text-sm", messageColor)}>{message}</p>
      </div>
    </div>
  );
};

export default NotificationAlert;
