import BrandEdit from "@/app-pages/brand-edit/BrandEdit";
import { PageProps } from "@/utils/types/common.type";

const Page = async ({ params }: PageProps) => {
  const { id } = await params;
  return <BrandEdit id={id} />;
};

export default Page;
