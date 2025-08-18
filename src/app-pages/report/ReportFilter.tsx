"use client";
import { Button } from "@/components/ui/button";
import GridWrapper from "@/components/wrapper/GridWrapper";
import { updateQueryParams } from "@/utils/UpdateQueryParams";
import { ProtectedUrls } from "@/utils/urls/urls";
import { useRouter, useSearchParams } from "next/navigation";
import React, { memo, useEffect, useState } from "react";
import ReportMultipleFilter from "./ReportMultipleFilter";

type queryParams = string;

const ReportFilter: React.FC = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
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
      basePath: ProtectedUrls.common.managePurchaseReport,
      queryParams: {
        startDate: s || "",
        endDate: e || "",
        category: c || "",
        reason: r || "",
        staff: m || "",
      },
    });
  };
  const handleExportCSV = () => {
    console.log("Exporting CSV...");
  };
  const handleApplyFilter = () => {
    console.log("Applying filters...");
  };

  return (
    <GridWrapper className="grid grid-cols-3  md:grid-cols-6 gap-6">
      <ReportMultipleFilter
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
      <div className="flex flex-col items-end gap-3 border">
        <Button className="w-full cursor-pointer" onClick={handleApplyFilter}>
          Apply Filter
        </Button>
        <Button className=" w-full cursor-pointer" onClick={handleExportCSV}>
          Export CSV
        </Button>
      </div>
    </GridWrapper>
  );
};

export default memo(ReportFilter);
