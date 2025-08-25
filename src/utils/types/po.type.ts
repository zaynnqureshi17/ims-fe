import { IItem } from "./item.types";

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

export interface IPurchaseOrderItem {
  category: string;
  unit_price: string;
  quantity: number;
  total_cost: string;
  item: IItem;
}

export interface IPurchaseOrderSummary {
  totalItems: number;
  subtotal: number;
  tax: number;
  delivery_fee: number;
  total: number;
  items_count: number;
}
