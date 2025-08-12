import StockCountView from "@/app-pages/stock-count-view/StockCountView";
import { PageProps } from "@/utils/types/common.type";

const Page = async ({ params }: PageProps) => {
  const { id } = await params;
  return <StockCountView id={id} />;
};

export default Page;
