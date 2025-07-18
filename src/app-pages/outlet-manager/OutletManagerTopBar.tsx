import TopBar from "@/components/topbar";

const OutletManagerTopBar = () => {
  const breadcrumbs = [{ label: "Dashboard" }];

  return <TopBar breadcrumbs={breadcrumbs} />;
};

export default OutletManagerTopBar;
