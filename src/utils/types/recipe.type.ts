export interface RecipeIngredientModelAttributes {
  recipe_ingredient_id: number;
  recipe_id: number;
  recipe_version_id: number;
  item_id: number;
  quantity_used: number;
  yield_percentage: number;
  ingredient_base_uom: string;
  final_uom: string;
  final_quantity: number;
  unit_price: number; // fixed (was string)
  cost: number; // fixed (was string)
  created_at?: Date;
  updated_at?: Date;
}
export interface RecipeVersionModelAttributes {
  recipe_version_id: number;
  recipe_id: number; // FK
  start_date: Date;
  yield_percentage: number;
  cost: number;
  cost_per_unit: number;
  created_at?: Date;
  updated_at?: Date;
}
export interface IRecips {
  recipe_id: number;
  recipe_code: string;
  is_production: boolean;
  recipe_category: string;
  recipe_subcategory_1: string;
  recipe_subcategory_2: string;
  recipe_name: string;
  production_inventory_name: string;
  created_at?: Date;
  updated_at?: Date;

  versions?: RecipeVersionModelAttributes[];
  ingredients?: RecipeIngredientModelAttributes[];
}
