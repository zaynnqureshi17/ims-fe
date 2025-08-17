import ProtectedLayoutWrapper from "@/components/layout/ProtectedLayout";
import IngredientItemForm from "./IngredientItemForm";
import ProductionActive from "./ProductionActive";
import RecipeAddTopBar from "./RecipeAddTopBar";
import RecipeField from "./RecipeField";
import RecipesAddForm from "./RecipesAddForm";
import RecipesAddNew from "./RecipesAddNew";
import RecipesAddPageHeader from "./RecipesAddPageHeader";

const RecipesAdd = () => {
  return (
    <ProtectedLayoutWrapper topBar={<RecipeAddTopBar />}>
      <RecipesAddPageHeader />
      <RecipesAddForm>
        <RecipeField />
        <ProductionActive />
        <RecipesAddNew />
        <IngredientItemForm />
      </RecipesAddForm>
    </ProtectedLayoutWrapper>
  );
};

export default RecipesAdd;
