import StockCountEdit from "@/app-pages/stock-count-edit/StockCountEdit";
import { PageProps } from "@/utils/types/common.type";

const Page = async ({ params }: PageProps) => {
  const { id } = await params;
  return <StockCountEdit id={id} />;
};

export default Page;
