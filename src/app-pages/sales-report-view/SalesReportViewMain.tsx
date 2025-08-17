"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

type FileInfo = {
  name: string;
  subtitle: string;
  status: "Completed" | "Processing" | "Failed";
  uploadedOn: string;
  uploadedBy: string;
  records: number;
  revenue: number;
  errors: number;
  warnings: number;
  notes: string;
};

type IssueRow = {
  row: number | string;
  column: string;
  message: string;
  type: "Error" | "Warning";
};

const currency = (n: number) =>
  `$${n.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;

const Stat = ({
  label,
  value,
  tone,
}: {
  label: string;
  value: string | number;
  tone?: "muted" | "danger";
}) => (
  <div className="flex flex-col">
    <span className="text-xs text-muted-foreground">{label}</span>
    <span
      className={`text-sm font-semibold ${tone === "danger" ? "text-red-500" : ""}`}
    >
      {value}
    </span>
  </div>
);

const Pill = ({
  children,
  variant,
}: {
  children: React.ReactNode;
  variant?: "success" | "error" | "warning";
}) => {
  const map: Record<string, string> = {
    success: "bg-emerald-100 text-emerald-700 hover:bg-emerald-100",
    error: "bg-red-100 text-red-700 hover:bg-red-100",
    warning: "bg-neutral-900 text-white hover:bg-neutral-900",
  };
  return (
    <Badge
      variant="secondary"
      className={`rounded-full px-3 py-1 text-xs ${variant ? map[variant] : ""}`}
    >
      {children}
    </Badge>
  );
};

const IssuesTable = ({ rows }: { rows: IssueRow[] }) => (
  <div className="border rounded-md overflow-hidden">
    <div className="px-5 py-4 text-lg font-semibold">Validation Results</div>
    <div className="border-t">
      <div className="grid grid-cols-12 gap-2 px-5 py-2 text-xs text-muted-foreground">
        <div className="col-span-2">Row</div>
        <div className="col-span-3">Column</div>
        <div className="col-span-5">Message</div>
        <div className="col-span-2">Type</div>
      </div>
      <div className="divide-y">
        {rows.map((r, i) => (
          <div
            key={i}
            className="grid grid-cols-12 gap-2 px-5 py-4 text-sm items-center"
          >
            <div className="col-span-2">{r.row}</div>
            <div className="col-span-3">{r.column}</div>
            <div className="col-span-5">{r.message}</div>
            <div className="col-span-2">
              {r.type === "Error" ? (
                <Pill variant="error">Error</Pill>
              ) : (
                <Pill variant="warning">Warning</Pill>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

const NotesBox = ({ text }: { text: string }) => (
  <div className="border rounded-md overflow-hidden">
    <div className="px-5 py-3 font-semibold">Notes</div>
    <div className="border-t px-5 py-4 text-sm text-muted-foreground bg-muted/20">
      {text}
    </div>
  </div>
);

const SalesReportViewMain = () => {
  const file: FileInfo = {
    name: "Sales_jan15.xlsx",
    subtitle: "Inventory transfer between locations",
    status: "Completed",
    uploadedOn: "2024-01-15",
    uploadedBy: "John Doe",
    records: 1247,
    revenue: 8432.5,
    errors: 2,
    warnings: 1,
    notes: "Imported from POS – day closing.",
  };

  const issues: IssueRow[] = [
    {
      row: 23,
      column: "Item Code",
      message: "Unknown SKU: SLM-200",
      type: "Error",
    },
    {
      row: 89,
      column: "Qty",
      message: "Negative quantity not allowed",
      type: "Error",
    },
    {
      row: 105,
      column: "Price",
      message: "Rounded to 2 decimals",
      type: "Warning",
    },
  ];

  return (
    <div className="col-span-2 space-y-4">
      <Card className="border">
        <CardHeader className="pb-2">
          <div className="flex items-start justify-between">
            <div>
              <CardTitle className="text-2xl">{file.name}</CardTitle>
              <div className="text-sm text-muted-foreground">
                {file.subtitle}
              </div>
            </div>
            <Pill variant="success">{file.status}</Pill>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid grid-cols-2 md:grid-cols-6 gap-6">
            <Stat label="Uploaded On" value={file.uploadedOn} />
            <Stat label="Uploaded By" value={file.uploadedBy} />
            <Stat label="Records" value={file.records.toLocaleString()} />
            <Stat label="Revenue" value={currency(file.revenue)} />
            <Stat label="Errors" value={file.errors} tone="danger" />
            <Stat label="Warnings" value={file.warnings} tone="danger" />
          </div>

          <IssuesTable rows={issues} />

          <div className="flex items-center justify-between">
            <div className="text-xs text-muted-foreground">{`${issues.length} issues found`}</div>
            <div className="flex gap-3">
              <Button variant="secondary" className="px-6 w-fit">
                Reprocess
              </Button>
              <Button className="px-6 w-fit">Mark Resolved</Button>
            </div>
          </div>

          <NotesBox text={file.notes} />
        </CardContent>
      </Card>
    </div>
  );
};

export default SalesReportViewMain;
