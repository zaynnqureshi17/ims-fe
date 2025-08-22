"use client";

import SectionWrapper from "@/components/wrapper/SectionWrapper";
import { Download } from "lucide-react";

const attachments = [
  { name: "walk-in-photos.zip", url: "/files/walk-in-photos.zip" },
];

const StockCountViewActivity = () => {
  return (
    <div className="space-y-4">
      <SectionWrapper title="Attachments">
        <div className="space-y-2">
          {attachments.map((file, index) => (
            <a
              key={index}
              href={file.url}
              download
              className="inline-flex items-center gap-2 px-3 py-1.5 text-sm font-medium rounded-full bg-gray-100 text-gray-700 hover:bg-gray-200"
            >
              {file.name}
              <Download className="w-4 h-4 text-gray-500" />
            </a>
          ))}
        </div>
      </SectionWrapper>
    </div>
  );
};

export default StockCountViewActivity;
