import BrandView from "@/app-pages/brand-view/BrandView";

const Page = async ({ params }: { params: Promise<{ id: string }> }) => {
  const id = (await params).id;

  return <BrandView id={id} />;
};

export default Page;
