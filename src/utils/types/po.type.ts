export interface PurchaseOrder {
  po_id: number;
  supplier: string;
  items: number;
  cost: number;
  created_at: string;
  status: string;
}
