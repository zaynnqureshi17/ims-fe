import PageHeader from "@/components/page-header";
import StuffQuickAction from "./StuffQuickAction";
import StuffRecentActivities from "./StuffRecentActivities";
import StuffStat from "./StuffStat";
import SuffTopBar from "./SuffTopBar";

const Stuff = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <SuffTopBar />
      <main className="px-6 py-3">
        <PageHeader
          heading="Welcome Back, john"
          description="Here's what need your attention today."
        />
        <StuffStat />
        <StuffQuickAction />
        <StuffRecentActivities />
      </main>
    </div>
  );
};

export default Stuff;
