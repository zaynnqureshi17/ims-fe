import UserEdit from "@/app-pages/user-edit/UserEdit";
import { PageProps } from "@/utils/types/common.type";

const Page = async ({ params }: PageProps) => {
  const { id } = await params;
  return <UserEdit id={id} />;
};

export default Page;
