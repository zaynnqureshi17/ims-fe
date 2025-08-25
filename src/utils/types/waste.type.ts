export interface IWaste {
  waste_id: number;
  date: string;
  item: string;
  outlet: string;
  department: string;
  reason: string; // allow free text from backend
  quantity: string;
  uom: string;
  total_value: string | number;
  cost: string;
}
