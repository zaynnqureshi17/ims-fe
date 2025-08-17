"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

type Timeline = {
  uploaded: string;
  validated: string;
  aggregated: string;
};

const KeyValue = ({
  label,
  value,
}: {
  label: string;
  value: React.ReactNode;
}) => (
  <div className="flex items-center justify-between py-2">
    <span className="text-sm text-muted-foreground">{label}</span>
    <span className="text-sm font-medium">{value}</span>
  </div>
);

const UploadTimeline = ({ data }: { data: Timeline }) => {
  return (
    <Card className="w-full">
      <CardHeader className="pb-2">
        <CardTitle className="text-lg">Upload Timeline</CardTitle>
      </CardHeader>
      <CardContent className="space-y-1">
        <KeyValue label="Uploaded" value={data.uploaded} />
        <KeyValue label="Validated" value={data.validated} />
        <KeyValue label="Aggregated" value={data.aggregated} />
      </CardContent>
    </Card>
  );
};

const QuickActions = ({
  onDownload,
  onReprocess,
  onDelete,
}: {
  onDownload?: () => void;
  onReprocess?: () => void;
  onDelete?: () => void;
}) => {
  return (
    <Card className="w-full">
      <CardHeader className="pb-2">
        <CardTitle className="text-lg">Quick Actions</CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        <Button variant="outline" className="w-full" onClick={onDownload}>
          Download CSV
        </Button>
        <Button variant="outline" className="w-full" onClick={onReprocess}>
          Reprocess
        </Button>
        <Button variant="destructive" className="w-full" onClick={onDelete}>
          Delete Upload
        </Button>
      </CardContent>
    </Card>
  );
};

const SalesReportViewActivity = () => {
  return (
    <div className="space-y-4">
      <UploadTimeline data={timeline} />
      <QuickActions />
    </div>
  );
};

export default SalesReportViewActivity;

const timeline: Timeline = {
  uploaded: "2024-01-15 10:02",
  validated: "2024-01-15 10:03",
  aggregated: "2024-01-15 10:03",
};
