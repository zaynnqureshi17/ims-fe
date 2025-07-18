import TopBar from "@/components/topbar";

const SuffTopBar = () => {
  const breadcrumbs = [{ label: "Dashboard" }];

  return <TopBar breadcrumbs={breadcrumbs} />;
};

export default SuffTopBar;
