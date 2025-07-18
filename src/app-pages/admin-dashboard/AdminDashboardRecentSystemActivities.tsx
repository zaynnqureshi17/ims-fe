import RecentActivity from "@/components/recent-activities/RecentActivities";
import GridWrapper from "@/components/wrapper/GridWrapper";
import SectionWrapper from "@/components/wrapper/SectionWrapper";
import { AlertTriangle, CheckCircle, Info, XCircle } from "lucide-react";

const AdminDashboardRecentSystemActivities = () => {
  return (
    <SectionWrapper title="Recent System Activities">
      <GridWrapper className="grid gap-4 grid-cols-1">
        <RecentActivity
          name="Upload Complete"
          des="All files have been successfully uploaded."
          icon={<CheckCircle />}
          variant="success"
        />

        <RecentActivity
          name="Low Disk Space"
          des="You are running out of storage."
          icon={<AlertTriangle />}
          variant="warning"
        />

        <RecentActivity
          name="Server Error"
          des="Could not reach the server."
          icon={<XCircle />}
          variant="error"
        />

        <RecentActivity
          name="New Message"
          des="You have 3 unread messages."
          icon={<Info />}
          variant="info"
        />
      </GridWrapper>
    </SectionWrapper>
  );
};

export default AdminDashboardRecentSystemActivities;
