import TopBar from "@/components/topbar";

const BrandManagerTopBar = () => {
  const breadcrumbs = [{ label: "Dashboard" }];

  return <TopBar breadcrumbs={breadcrumbs} />;
};

export default BrandManagerTopBar;
