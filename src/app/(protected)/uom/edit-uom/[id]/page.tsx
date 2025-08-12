import OutletEdit from "@/app-pages/outlet-edit/OutletEdit";
import UnitOfMeasurementEdit from "@/app-pages/unit-of-measurement-edit/UnitOfMeasurementEdit";
import { PageProps } from "@/utils/types/common.type";

const Page = async ({ params }: PageProps) => {
  const { id } = await params;
  return <UnitOfMeasurementEdit id={id} />;
};

export default Page;
