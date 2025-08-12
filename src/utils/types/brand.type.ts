export interface IBrand {
  brand_id: number;
  brand_name: string;
  logo: string;
  status: "Active" | "Inactive";
  description?: string;
  created_at: Date;
  updated_at?: Date;
}
