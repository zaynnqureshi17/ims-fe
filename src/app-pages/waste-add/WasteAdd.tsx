"use client";
import ProtectedLayoutWrapper from "@/components/layout/ProtectedLayout";
import StateWrapper from "@/components/wrapper/StateWrapper";
import { useMultiOptions } from "@/hooks/useMultiOptions";
import { useGetDepartment } from "@/queries/departments/useGetDepartment.query";
import { useGetItem } from "@/queries/item/useGetItem.query";
import { useGetOutlets } from "@/queries/outlets/useGetOutlets.query";
import { useGetWaste } from "@/queries/waste/useGetWaste.query";
import { IWaste } from "@/utils/types/waste.type";
import { Suspense } from "react";
import WasteAddItem from "./WasteAddItem";
import WasteAddListTable from "./WasteAddListTable";
import WasteAddPageHeader from "./WasteAddPageHeader";
import WasteAddTopBar from "./WasteAddTopBar";

const WasteAdd = () => {
  const { data: items, status } = useGetItem({});
  const { data: wastes, status: wastesStatus, error } = useGetWaste({});
  const { data: outlets, status: outletsStatus } = useGetOutlets({});
  const { data: departments, status: departmentsStatus } = useGetDepartment();
  const { itemOptions, outletOptions, departmentOptions } = useMultiOptions({
    items: items?.body?.data,
    outlets: outlets?.body?.data,
    departments: departments?.body?.departments,
  });

  const isLoading =
    status === "pending" ||
    wastesStatus === "pending" ||
    outletsStatus === "pending" ||
    departmentsStatus === "pending";
  const waste = wastes?.body?.data;
  const isError = status === "error";
  const notFound = !isLoading && !isError && !waste;

  const mapWaste = (w: any): IWaste => ({
    waste_id: w.id,
    date: w.date,
    item: w.item,
    outlet: w.outlet,
    department: w.department,
    reason: w.reason,
    quantity: `${w.quantity} ${w.uom}`,
    uom: w.uom,
    cost: w.cost,
    total_value: w.cost * w.quantity,
  });

  const wasteData = wastes?.body?.data.map(mapWaste) || [];

  return (
    <ProtectedLayoutWrapper topBar={<WasteAddTopBar />}>
      <StateWrapper
        loading={isLoading}
        error={
          isError ? ((error as Error)?.message ?? "Failed to load data") : null
        }
        notFound={notFound}
      >
        <WasteAddPageHeader />
        <WasteAddItem
          itemOptions={itemOptions}
          outletOptions={outletOptions}
          departmentOptions={departmentOptions}
        />
        <Suspense fallback={<div>Loading table...</div>}>
          <WasteAddListTable waste={wasteData} />
        </Suspense>
      </StateWrapper>
    </ProtectedLayoutWrapper>
  );
};

export default WasteAdd;
