export interface IStockItem {
  id?: number;
  item_name: string;
  category: string;
  storage_area: string;
  full_price: string | number;
  full_units: string | number;
  loose_units: string | number;
  unit_price: string | number;
  counted_quantity: string | number;
  note_count: string;
  status?: "Draft" | "Completed" | "Approved";
  created_at?: Date;
  updated_at?: Date;
}
