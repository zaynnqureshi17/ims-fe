export interface ISupplier {
  supplier_id: number;
  supplier_image_url: string;
  category: string;
  company_name: string;
  contact_number: string;
  email: string;
  // optional fields
  registration_code?: string;
  pic?: string;
  supplier_code?: string;
  finance_code?: string;
  area_short: string[];
  status: string;
  created_at?: Date;
  updated_at?: Date;
}
