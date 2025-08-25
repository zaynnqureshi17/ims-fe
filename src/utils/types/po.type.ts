export interface IPurchaseOrder {
  po_id: number;
  deliver_date: string;
  order_date: string;
  po_supplier: any;
  supplier_id: string | number;
  po_number: string | number;
  items: number;
  created_at: string;
}
