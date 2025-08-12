export interface IUOM {
  preset_uom_id: number;
  uom: string;
  for_category: string;
  quantity: number;
  baseUOM: string;
  status: string;
  created_at?: Date;
  updated_at?: Date;
}
