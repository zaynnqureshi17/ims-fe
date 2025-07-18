import {AlertBox} from "@/components/alert-box";

const alerts = [
  {
    title: "Pending Approvals",
    type: "error",
    message: "5 purchase orders awaiting approval",
  },
  {
    title: "Sync Errors",
    type: "warning",
    message: "2 outlets experiencing data sync issues",
  },
];

const AdminDashboardAlertBox = () => {
  return (
    <div className="space-y-3">
      {alerts.map((alert, index) => (
        <AlertBox
          key={index}
          title={alert.title}
          type={alert.type as "error" | "warning" | "success"}
          message={alert.message}
        />
      ))}
    </div>
  );
};

export default AdminDashboardAlertBox;
