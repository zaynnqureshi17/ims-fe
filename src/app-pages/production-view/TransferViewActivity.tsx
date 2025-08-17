"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle2, Download } from "lucide-react";

type NoteFile = { name: string; onClick?: () => void };
type ActivityItem = { title: string; timestamp: string; by: string };

const FilePill = ({ f }: { f: NoteFile }) => (
  <button
    onClick={f.onClick}
    className="inline-flex items-center gap-2 rounded-full bg-muted px-3 py-1 text-xs hover:opacity-90"
  >
    <span className="truncate max-w-[180px]">{f.name}</span>
    <Download className="size-3.5" />
  </button>
);

const TimelineRow = ({
  item,
  isLast,
}: {
  item: ActivityItem;
  isLast: boolean;
}) => (
  <div className="relative pl-8">
    <div className="absolute left-0 top-1.5">
      <CheckCircle2 className="size-4 text-emerald-500" />
    </div>
    {!isLast && (
      <div className="absolute left-1.5 top-5 h-[calc(100%-1rem)] w-px bg-border" />
    )}
    <div className="space-y-1 pb-6">
      <div className="text-sm font-semibold">{item.title}</div>
      <div className="text-xs text-muted-foreground">
        {item.timestamp} · {item.by}
      </div>
    </div>
  </div>
);

const NotesAndFiles = ({
  note,
  files,
}: {
  note: string;
  files: NoteFile[];
}) => (
  <Card className="w-full">
    <CardHeader className="pb-2">
      <CardTitle className="text-lg">Notes & Files</CardTitle>
    </CardHeader>
    <CardContent className="space-y-4">
      <p className="text-sm text-muted-foreground">{note}</p>
      <div className="flex flex-wrap gap-2">
        {files.map((f, i) => (
          <FilePill key={i} f={f} />
        ))}
      </div>
    </CardContent>
  </Card>
);

const Activity = ({ items }: { items: ActivityItem[] }) => (
  <Card className="w-full">
    <CardHeader className="pb-2">
      <CardTitle className="text-lg">Activity</CardTitle>
    </CardHeader>
    <CardContent className="pt-2">
      {items.map((it, i) => (
        <TimelineRow key={i} item={it} isLast={i === items.length - 1} />
      ))}
    </CardContent>
  </Card>
);

const ProductionViewActivity = () => {
  return (
    <div className="space-y-4">
      <NotesAndFiles
        note="Baked on deck oven #2. Good yield. Docked dough 2x to avoid bubbling."
        files={[{ name: "oven-log-jan15.pdf" }, { name: "batch-photo.jpg" }]}
      />
      <Activity
        items={[
          {
            title: "Batch marked as Completed.",
            timestamp: "15/01/2024, 14:30:00",
            by: "John Smith",
          },
          {
            title: "Baking started (deck oven #2).",
            timestamp: "15/01/2024, 14:05:00",
            by: "John Smith",
          },
          {
            title: "Dough prepped and proofed.",
            timestamp: "15/01/2024, 13:20:00",
            by: "John Smith",
          },
          {
            title: "Ingredients picked from store room.",
            timestamp: "15/01/2024, 13:00:00",
            by: "John Smith",
          },
        ]}
      />
    </div>
  );
};

export default ProductionViewActivity;
