import SupplierView from "@/app-pages/supplier-view/SupplierView";
import { PageProps } from "@/utils/types/common.type";

const Page = async ({ params }: PageProps) => {
  const { id } = await params;

  return <SupplierView id={id} />;
};

export default Page;
