export interface IWaste {
  waste_id: number;
  date: string;
  item: string;
  category: string;
  qty: string;
  unit_cost: number;
  total_value: number;
  reason: "Expired" | "Damaged" | "Overproduction" | "Spillage";
  staff: string;
}
