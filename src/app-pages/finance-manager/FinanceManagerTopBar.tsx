import TopBar from "@/components/topbar";

const FinanceManagerTopBar = () => {
  const breadcrumbs = [{ label: "Dashboard" }];

  return <TopBar breadcrumbs={breadcrumbs} />;
};

export default FinanceManagerTopBar;
