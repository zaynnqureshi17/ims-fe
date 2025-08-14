"use client";
import ProtectedLayoutWrapper from "@/components/layout/ProtectedLayout";
import PageHeader from "@/components/page-header";
import StateWrapper from "@/components/wrapper/StateWrapper";
import { useGetUOMById } from "@/queries/uom/useGetUOMById.query";
import { IdProps } from "@/utils/types/common.type";
import UnitOfMeasurementEditForm from "./UnitOfMeasurementEditForm";
import UnitOfMeasurementEditTopBar from "./UnitOfMeasurementEditTopBar";

const UnitOfMeasurementEdit = ({ id }: IdProps) => {
  const { data: uomData, status, error } = useGetUOMById(id);

  const loading = status === "pending";
  const uom = uomData?.body?.data;
  const isError = status === "error";
  const notFound = !loading && !isError && !uom;

  return (
    <ProtectedLayoutWrapper topBar={<UnitOfMeasurementEditTopBar />}>
      <StateWrapper
        loading={loading}
        error={
          isError ? ((error as Error)?.message ?? "Failed to load data") : null
        }
        notFound={notFound}
      >
        <PageHeader
          heading="Edit Unit"
          description="Update Unit of Measurement information."
        />
        <UnitOfMeasurementEditForm uomData={uom} />
      </StateWrapper>
    </ProtectedLayoutWrapper>
  );
};

export default UnitOfMeasurementEdit;
