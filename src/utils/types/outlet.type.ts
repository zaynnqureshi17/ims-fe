export enum OutletStatus {
  ACTIVE = "active",
  INACTIVE = "inactive",
}
export interface IOutlet {
  outlet_id: number;
  outlet_code: string;
  outlet_name: string;
  company_name: string;
  company_registration_number: string;
  address_line: string;
  country: string;
  state: string;
  city: string;
  postal_code: string;
  finance_code: string;
  status: OutletStatus;
  preferred_delivery_hour?: string | null;
  brand_id?: number;
  brand_name?: string;
  created_at: Date;
  updated_at?: Date;
}
