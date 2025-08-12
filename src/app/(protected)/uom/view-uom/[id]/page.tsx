import OutletView from "@/app-pages/outlet-view/OutletView";
import { PageProps } from "@/utils/types/common.type";

const Page = async ({ params }: PageProps) => {
  const { id } = await params;
  return <OutletView id={id} />;
};

export default Page;
