import StorageEdit from "@/app-pages/storage-edit/StorageEdit";
import { PageProps } from "@/utils/types/common.type";

const Page = async ({ params }: PageProps) => {
  const { id } = await params;
  return <StorageEdit id={id} />;
};

export default Page;
