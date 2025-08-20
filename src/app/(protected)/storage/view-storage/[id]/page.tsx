import StorageView from "@/app-pages/storage-view/StorageView";
import { PageProps } from "@/utils/types/common.type";

const Page = async ({ params }: PageProps) => {
  const { id } = await params;
  return <StorageView id={id} />;
};

export default Page;
