"use client";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

type Meta = {
  recipeId: string;
  createdBy: string;
  createdOn: string;
  lastUpdated: string;
  status: "Active" | "Inactive";
};

type Version = {
  version: string;
  note: string;
  date: string;
};

const KeyValue = ({
  label,
  value,
}: {
  label: string;
  value: React.ReactNode;
}) => (
  <div className="flex flex-col gap-1 py-2">
    <span className="text-sm text-muted-foreground">{label}</span>
    <span className="text-sm font-medium">{value}</span>
  </div>
);

const RecipeMetadata = ({ meta }: { meta: Meta }) => {
  return (
    <Card className="w-full">
      <CardHeader className="pb-2">
        <CardTitle className="text-lg">Recipe Metadata</CardTitle>
      </CardHeader>
      <CardContent className="space-y-2">
        <KeyValue
          label="Recipe ID"
          value={<span className="font-semibold">#{meta.recipeId}</span>}
        />
        <KeyValue label="Created By" value={meta.createdBy} />
        <KeyValue label="Created On" value={meta.createdOn} />
        <KeyValue label="Last Updated" value={meta.lastUpdated} />
        <div className="flex items-center justify-between border-t pt-3 mt-2">
          <span className="text-sm text-muted-foreground">Status</span>
          <Badge
            variant="secondary"
            className={
              meta.status === "Active"
                ? "bg-emerald-100 text-emerald-700 hover:bg-emerald-100"
                : ""
            }
          >
            {meta.status}
          </Badge>
        </div>
      </CardContent>
    </Card>
  );
};

const VersionHistory = ({ items }: { items: Version[] }) => {
  return (
    <Card className="w-full">
      <CardHeader className="pb-2">
        <CardTitle className="text-lg">Version History</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {items.map((v, i) => (
          <div key={i} className="grid grid-cols-[1fr_auto] gap-x-4">
            <div className="flex flex-col">
              <span className="text-sm text-muted-foreground">{v.version}</span>
              <span className="text-sm font-medium">{v.note}</span>
            </div>
            <span className="text-sm text-muted-foreground">{v.date}</span>
          </div>
        ))}
      </CardContent>
    </Card>
  );
};

const RecipeViewActivity = () => {
  return (
    <div className="space-y-4">
      <RecipeMetadata meta={meta} />
      <VersionHistory items={versions} />
    </div>
  );
};

export default RecipeViewActivity;

const meta: Meta = {
  recipeId: "RCP-00231",
  createdBy: "Admin User",
  createdOn: "06/10/2025",
  lastUpdated: "08/10/2025 14:35",
  status: "Active",
};

const versions: Version[] = [
  { version: "v2.1", note: "Adjusted butter qty", date: "08/10/2025" },
  { version: "v2.0", note: "Added parsley", date: "08/10/2025" },
  { version: "v1.0", note: "Initial version", date: "08/10/2025" },
];
