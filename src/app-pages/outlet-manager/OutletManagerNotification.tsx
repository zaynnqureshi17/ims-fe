// src/components/OutletManagerNotification.tsx
import React from "react";
import { NotificationAlert } from "@/components/alert-box";
import SectionWrapper from "@/components/wrapper/SectionWrapper";
import { AlertCircle, Info, Triangle } from "lucide-react";
import { NotificationAlertProps } from "@/components/alert-box/NotificationAlert";

const OutletManagerNotification = () => {
  return (
    <SectionWrapper title="Notifications">
      <div className="space-y-4">
        {notifications.map((item, idx) => (
          <NotificationAlert
            key={idx}
            type={item.type}
            icon={item.icon}
            title={item.title}
            message={item.message}
          />
        ))}
      </div>
    </SectionWrapper>
  );
};

export default OutletManagerNotification;

export const notifications: NotificationAlertProps[] = [
  {
    type: "error",
    title: "Low Stock Alert",
    message: "Tomatoes below minimum level",
    icon: <AlertCircle className="w-5 h-5 text-red-500" />,
  },
  {
    type: "warning",
    title: "Transfer Approval",
    message: "3 transfers awaiting approval",
    icon: <Triangle className="w-5 h-5 text-yellow-500" />,
  },
  {
    type: "info",
    title: "Stock Count Due",
    message: "Bar section count overdue",
    icon: <Info className="w-5 h-5 text-blue-500" />,
  },
];