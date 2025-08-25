"use client";
import { useWasteContext } from "@/context/WasteContext";
import { useGetWaste } from "@/queries/waste/useGetWaste.query";
import { updateQueryParams } from "@/utils/UpdateQueryParams";
import { ProtectedUrls } from "@/utils/urls/urls";
import { useRouter, useSearchParams } from "next/navigation";
import React, { memo, useEffect, useState } from "react";
import WasteMultipleFilter from "./WasteMultipleFilter";

type queryParams = string;

const WasteFilter: React.FC = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { setWaste, setLoading } = useWasteContext();
  const { data: wasteData, status } = useGetWaste({});
  const today = new Date().toISOString().split("T")[0];
  const [startDate, setStartDate] = useState<queryParams>(today);
  const [endDate, setEndDate] = useState<queryParams>(today);
  const [category, setCategory] = useState<queryParams>("");
  const [reason, setReason] = useState<queryParams>("");
  const [staff, setStaff] = useState<queryParams>("");

  useEffect(() => {
    setStartDate(searchParams.get("startDate") || "");
    setEndDate(searchParams.get("endDate") || "");
    setCategory(searchParams.get("category") || "");
    setReason(searchParams.get("reason") || "");
    setStaff(searchParams.get("staff") || "");
  }, [searchParams]);

  const handleUpdateQuery = (
    s?: string,
    e?: string,
    c?: string,
    r?: string,
    m?: string,
  ) => {
    updateQueryParams({
      router: router,
      basePath: ProtectedUrls.common.manageWaste,
      queryParams: {
        startDate: s || "",
        endDate: e || "",
        category: c || "",
        reason: r || "",
        staff: m || "",
      },
    });
  };
  useEffect(() => {
    if (wasteData) {
      setWaste(wasteData.body.data);
      setLoading(status === "pending");
    }
  }, [wasteData]);
  return (
    <div className="flex gap-6">
      <WasteMultipleFilter
        selectedStartDate={startDate}
        selectedEndDate={endDate}
        selectedCategory={category}
        selectedReason={reason}
        selectedStaff={staff}
        setSelectedStartDate={setStartDate}
        setSelectedEndDate={setEndDate}
        setSelectedCategory={setCategory}
        setSelectedReason={setReason}
        setSelectedStaff={setStaff}
        handleUpdateQuery={(startDate, endDate, category, reason, staff) =>
          handleUpdateQuery(startDate, endDate, category, reason, staff)
        }
      />
    </div>
  );
};

export default memo(WasteFilter);
