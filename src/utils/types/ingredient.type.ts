export interface IIngredient {
  ingredient_id?: number;
  item_code: string;
  category: string;
  sub_category: string;
  item_name: string;
  specification?: string;
  brand?: string;
  supplier_item_code?: string;
  purchase_uom: string;
  unit_price?: number;
  tax?: number;
  supplier_id: number;
  order_name?: string;
  created_at?: Date;
  updated_at?: Date;
}
