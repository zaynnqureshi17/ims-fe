import SupplierEdit from "@/app-pages/supplier-edit/SupplierEdit";
import { PageProps } from "@/utils/types/common.type";

const Page = async ({ params }: PageProps) => {
  const { id } = await params;
  return <SupplierEdit id={id} />;
};

export default Page;
