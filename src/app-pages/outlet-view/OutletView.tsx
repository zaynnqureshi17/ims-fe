"use client";
import ProtectedLayoutWrapper from "@/components/layout/ProtectedLayout";
import StateWrapper from "@/components/wrapper/StateWrapper";
import { OutletProvider } from "@/context/OutletContext";
import { useGetOutletById } from "@/queries/outlets/useGetOutletById.query";
import { IOutlet } from "@/utils/types/outlet.type";
import { useEffect, useState } from "react";
import OutletDetailView from "./OutletDetailView";
import OutletViewTab from "./OutletViewTab";
import OutletViewTopBar from "./OutletViewTopBar";

const OutletView = ({ id }: { id: string }) => {
  const { data: outletData, status, error } = useGetOutletById(id);
  const [outletView, setOutletView] = useState<IOutlet>();

  useEffect(() => {
    if (outletData?.body.data) {
      setOutletView(outletData.body.data);
    }
  }, [outletData]);

  const isError = status === "error";
  const outlet = outletData?.body?.data;
  const isLoading = status === "pending";
  const notFound = !isLoading && !isError && !outlet;

  return (
    <OutletProvider outletView={outletView}>
      <StateWrapper
        loading={isLoading}
        error={
          isError ? ((error as Error)?.message ?? "Failed to load data") : null
        }
        notFound={notFound}
      >
        {" "}
        <ProtectedLayoutWrapper topBar={<OutletViewTopBar />}>
          <OutletDetailView outletData={outletData?.body.data} />
          <OutletViewTab />
        </ProtectedLayoutWrapper>
      </StateWrapper>
    </OutletProvider>
  );
};

export default OutletView;
