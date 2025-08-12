import ItemReceivingEdit from "@/app-pages/item-receiving-edit/ItemReceivingEdit";
import { PageProps } from "@/utils/types/common.type";

const Page = async ({ params }: PageProps) => {
  const { id } = await params;

  return <ItemReceivingEdit id={id} />;
};

export default Page;
