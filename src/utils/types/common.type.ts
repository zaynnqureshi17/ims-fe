import { IUserWithID } from "./user.type";

export type IdProps = {
  id: string;
};
export interface PageProps {
  params: any;
}

export type optionsType = {
  label: string;
  value: string;
};

export type dropDownOption = {
  roleOptions: optionsType[];
  outletOptions: optionsType[];
  departmentOptions: optionsType[];
};

export type UserEditFormProps = dropDownOption & {
  userData: IUserWithID;
};
