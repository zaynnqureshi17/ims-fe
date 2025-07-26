import ProtectedLayoutWrapper from "@/components/layout/ProtectedLayout";
import PageHeader from "@/components/page-header";
import StuffQuickAction from "./StuffQuickAction";
import StuffRecentActivities from "./StuffRecentActivities";
import StuffStat from "./StuffStat";
import SuffTopBar from "./SuffTopBar";

const Stuff = () => {
  return (
    <ProtectedLayoutWrapper topBar={<SuffTopBar />}>
      <PageHeader
        heading="Welcome Back, john"
        description="Here's what need your attention today."
      />
      <StuffStat />
      <StuffQuickAction />
      <StuffRecentActivities />
    </ProtectedLayoutWrapper>
  );
};

export default Stuff;
