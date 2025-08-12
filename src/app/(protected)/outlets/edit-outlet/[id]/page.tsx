import OutletEdit from "@/app-pages/outlet-edit/OutletEdit";
import { PageProps } from "@/utils/types/common.type";

const Page = async ({ params }: PageProps) => {
  const { id } = await params;
  return <OutletEdit id={id} />;
};

export default Page;
