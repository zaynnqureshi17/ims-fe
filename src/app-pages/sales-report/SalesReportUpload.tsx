"use client";
import { useRef, useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { UploadCloud, FastForward } from "lucide-react";

type UploadSalesDataProps = {
  onFileSelect?: (file: File) => void;
  onSkip?: () => void;
  accept?: string;
  multiple?: boolean;
  title?: string;
  dropLabel?: string;
  subLabel?: string;
  ctaLabel?: string;
};

const UploadSalesData = ({
  onFileSelect,
  onSkip,
  accept = ".xlsx,.xls",
  multiple = false,
  title = "Upload Sales Data",
  dropLabel = "Drop Excel File Here",
  subLabel = "or click to browse files",
  ctaLabel = "Select File",
}: UploadSalesDataProps) => {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [dragActive, setDragActive] = useState(false);

  const handleFiles = (files: FileList | null) => {
    if (!files || files.length === 0) return;
    onFileSelect?.(files[0]);
  };

  const onDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    handleFiles(e.dataTransfer.files);
  };

  return (
    <div className="w-full">
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-sm font-semibold tracking-tight">{title}</h3>
        <Button variant="ghost" size="sm" onClick={onSkip} className="gap-2">
          <FastForward className="size-4" />
          Skip Day
        </Button>
      </div>

      <Card className="p-4">
        <div
          onDragEnter={() => setDragActive(true)}
          onDragOver={(e) => {
            e.preventDefault();
            e.stopPropagation();
          }}
          onDragLeave={() => setDragActive(false)}
          onDrop={onDrop}
          onClick={() => inputRef.current?.click()}
          className={[
            "w-full h-56 rounded-xl border-2 border-dashed flex flex-col items-center justify-center cursor-pointer transition",
            "bg-white",
            dragActive
              ? "border-primary/70 bg-primary/5"
              : "border-muted-foreground/30",
          ].join(" ")}
          aria-label="Upload Excel"
          role="button"
        >
          <UploadCloud className="size-10 mb-3 text-muted-foreground" />
          <p className="text-sm text-gray-700 font-medium">{dropLabel}</p>
          <p className="text-xs text-muted-foreground mt-1">{subLabel}</p>
          <Button size="sm" className="mt-4">
            {ctaLabel}
          </Button>
          <input
            ref={inputRef}
            type="file"
            accept={accept}
            multiple={multiple}
            className="hidden"
            onChange={(e) => handleFiles(e.target.files)}
          />
        </div>
      </Card>
    </div>
  );
};

export default UploadSalesData;
