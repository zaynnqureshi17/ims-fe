"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

type Timeline = {
  createdOn: string;
  submittedOn: string;
};

type ActionsProps = {
  onApprove?: () => void;
  onEdit?: () => void;
  onExport?: () => void;
  onDelete?: () => void;
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

const TransferTimeline = ({ data }: { data: Timeline }) => {
  return (
    <Card className="w-full">
      <CardHeader className="pb-2">
        <CardTitle className="text-lg">Transfer Timeline</CardTitle>
      </CardHeader>
      <CardContent className="space-y-1">
        <KeyValue label="Created" value={data.createdOn} />
        <KeyValue label="Submitted" value={data.submittedOn} />
      </CardContent>
    </Card>
  );
};

const TransferActions = ({
  onApprove,
  onEdit,
  onExport,
  onDelete,
}: ActionsProps) => {
  return (
    <Card className="w-full">
      <CardHeader className="pb-2">
        <CardTitle className="text-lg">Actions</CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        <Button
          className="w-full h-9 rounded-md bg-[#241B4D] text-white hover:opacity-90"
          onClick={onApprove}
        >
          Approve
        </Button>
        <Button
          variant="outline"
          className="w-full h-9 rounded-md"
          onClick={onEdit}
        >
          Edit
        </Button>
        <Button
          className="w-full h-9 rounded-md bg-[#16A34A] text-white hover:opacity-90"
          onClick={onExport}
        >
          Export
        </Button>
        <Button
          className="w-full h-9 rounded-md bg-[#EF4444] text-white hover:opacity-90"
          onClick={onDelete}
        >
          Delete
        </Button>
      </CardContent>
    </Card>
  );
};

const TransferViewActivity = () => {
  return (
    <div className="space-y-4">
      <TransferTimeline data={timeline} />
      <TransferActions />
    </div>
  );
};

export default TransferViewActivity;

const timeline: Timeline = {
  createdOn: "08/10/2025",
  submittedOn: "08/10/2025",
};
