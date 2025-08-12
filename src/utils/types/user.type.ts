export interface IUser {
  user_id: number;
  user_image_url?: string;
  name: string;
  email: string;
  role_name: string;
  outlet_name: string | undefined;
  brand_name: string | undefined;
  department_name: string | undefined;
  created_at: string;
  status: string;
}

export type IUserWithID = IUser & {
  password: string;
  role_id: number;
  outlet_id: number | undefined;
  department_id: number | undefined;
  brand_id: number | undefined;
  permissions: string[];
};
