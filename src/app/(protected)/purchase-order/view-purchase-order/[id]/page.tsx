import PurchaseOrderView from "@/app-pages/purchase-order-view/PurchaseOrderView";
import { PageProps } from "@/utils/types/common.type";

const Page = async ({ params }: PageProps) => {
  const { id } = await params;
  return <PurchaseOrderView id={id} />;
};

export default Page;
