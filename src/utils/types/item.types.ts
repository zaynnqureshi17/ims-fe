export interface IItem {
  item_id: number;
  item_code: string;
  category: string;
  sub_category_1: string;
  sub_category_2: string;
  item_name: string;
  specification: string;
  brand_name: string;
  brand_id: number;
  supplier_item_code: string;
  purchase_by_uom: string;
  purchase_quantity: number;
  purchase_unit: string;
  ml_gram_pcs_per_uom: number;
  unit_uom: string;
  unit_price: number;
  tax: number;
  primary_supplier_id: number;
  order_name: string;
  packaging_weight: number;
  created_at?: Date;
  updated_at?: Date;
}
