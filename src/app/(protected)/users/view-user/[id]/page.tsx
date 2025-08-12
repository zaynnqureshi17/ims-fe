import UserView from "@/app-pages/user-view/UserView";
import { PageProps } from "@/utils/types/common.type";

const Page = async ({ params }: PageProps) => {
  const { id } = await params;
  return <UserView id={id} />;
};

export default Page;
