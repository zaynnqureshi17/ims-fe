export interface IStorage {
  storage_id: number;
  storage_name: string;
  outlet_id: string;
  outlet_name: string;
  department: string[];
  storage_description?: string;
  status: string;
  created_at?: Date;
  updated_at?: Date;
}
