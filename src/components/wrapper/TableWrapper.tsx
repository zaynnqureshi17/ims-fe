"use client";

import { Button } from "@/components/ui/button";
import React from "react";

interface TableWrapperProps {
  children: React.ReactNode;
  totalItems: number;
  currentPage: number;
  itemsPerPage: number;
  onPageChange: (page: number) => void;
}

export const TableWrapper: React.FC<TableWrapperProps> = ({
  children,
  totalItems,
  currentPage,
  itemsPerPage,
  onPageChange,
}) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const start = (currentPage - 1) * itemsPerPage + 1;
  const end = Math.min(start + itemsPerPage - 1, totalItems);

  const handlePrev = () => {
    if (currentPage > 1) onPageChange(currentPage - 1);
  };

  const handleNext = () => {
    if (currentPage < totalPages) onPageChange(currentPage + 1);
  };

  return (
    <div className="space-y-4 bg-white border rounded-sm">
      {/* Table content */}
      <div className="border-b">{children}</div>

      {/* Footer pagination   */}
      <div className="flex items-center justify-between px-2 mb-2 ">
        <div className="text-sm text-black">
          Showing {start} to {end} of {totalItems}
        </div>

        <div className="flex items-center gap-1 ">
          <Button
            variant="ghost"
            size="sm"
            className="rounded-full bg-pagination-gray text-pagination-icon-gray"
            onClick={handlePrev}
            disabled={currentPage === 1}
          >
            &lt;
          </Button>

          {Array.from({ length: totalPages }, (_, i) => {
            const pageNum = i + 1;
            const isActive = currentPage === pageNum;

            return (
              <Button
                key={pageNum}
                variant={"ghost"}
                size="sm"
                className={`w-8 rounded-full px-2 py-0.5 ${
                  isActive
                    ? "text-accent-orange bg-accent-orange-light hover:text-accent-orange hover:bg-accent-orange-light"
                    : "text-gray-500 cursor-pointer"
                }`}
                onClick={() => onPageChange(pageNum)}
              >
                {String(pageNum).padStart(2, "0")}
              </Button>
            );
          })}
          <Button
            variant="ghost"
            size="sm"
            className="rounded-full bg-pagination-gray text-pagination-icon-gray"
            onClick={handleNext}
            disabled={currentPage === totalPages}
          >
            &gt;
          </Button>
        </div>
      </div>
    </div>
  );
};
