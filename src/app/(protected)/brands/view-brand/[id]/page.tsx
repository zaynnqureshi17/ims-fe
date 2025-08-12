import BrandView from "@/app-pages/brand-view/BrandView";
import { PageProps } from "@/utils/types/common.type";

const Page = async ({ params }: PageProps) => {
  const { id } = await params;
  return <BrandView id={id} />;
};

export default Page;
