import { IOutlet } from "./outlet.type";
import { IUser } from "./user.type";

export interface IBrand {
  brand_id: number;
  brand_name: string;
  logo: string;
  status: string;
  description?: string;
  user?: IUser;
  created_at: Date;
  updated_at?: Date;
}
export type IBrandResponse = IBrand & {
  outlets: IOutlet[];
};
