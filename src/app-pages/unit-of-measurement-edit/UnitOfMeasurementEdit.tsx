"use client";
import ProtectedLayoutWrapper from "@/components/layout/ProtectedLayout";
import PageHeader from "@/components/page-header";
import LoadingWrapper from "@/components/wrapper/LoadingWrapper";
import { useGetUOMById } from "@/queries/uom/useGetUOMById.query";
import { IdProps } from "@/utils/types/common.type";
import UnitOfMeasurementEditForm from "./UnitOfMeasurementEditForm";
import UnitOfMeasurementEditTopBar from "./UnitOfMeasurementEditTopBar";

const UnitOfMeasurementEdit = ({ id }: IdProps) => {
  const { data: uomData, status } = useGetUOMById(id);

  const loading = status === "pending";
  console.log(uomData?.body?.data);
  return (
    <LoadingWrapper loading={loading}>
      <ProtectedLayoutWrapper topBar={<UnitOfMeasurementEditTopBar />}>
        <PageHeader
          heading="Edit Unit"
          description="Update Unit of Measurement information."
        />
        <UnitOfMeasurementEditForm uomData={uomData?.body?.data} />
      </ProtectedLayoutWrapper>
    </LoadingWrapper>
  );
};

export default UnitOfMeasurementEdit;
