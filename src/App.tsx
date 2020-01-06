import React, { useState, useEffect } from "react";
import "./App.css";
import { Recipe } from "./models/Recipe.model";
import { recipesService } from "./services/recipesService";
import { utils } from "./utils/utils";
import Header from "./components/Header";
import Modal from "./components/Modal";
import RecipesList from "./components/RecipesList";

const App: React.FunctionComponent = () => {
  const newRecipe: Recipe = {
    id: utils.generateId(),
    name: "",
    ingredients: "",
    directions: ""
  };

  const [recipes, setRecipes] = useState();

  useEffect(() => {
    setRecipes(recipesService.loadRecipes());
  }, []);

  const [modalSettings, setModalSettings] = useState({
    isVisible: false,
    isEdit: false,
    editedRecipe: newRecipe
  });

  const removeRecipe = (recipeId: string): void => {
    let newRecipes = [...recipes];
    let givenRecipe = newRecipes.find(
      (x: Recipe): boolean => x.id === recipeId
    );
    if (givenRecipe) {
      newRecipes.splice(newRecipes.indexOf(givenRecipe), 1);
      setRecipes(newRecipes);
      recipesService.saveRecipes(newRecipes);
    }
  };

  const addEditRecipe = (recipe: Recipe): void => {
    let newRecipes = [...recipes];
    let givenRecipe = newRecipes.find(
      (x: Recipe): boolean => x.id === recipe.id
    );
    if (givenRecipe) {
      newRecipes[newRecipes.indexOf(givenRecipe)] = recipe;
    } else {
      newRecipes.push(recipe);
    }
    setRecipes(newRecipes);
    recipesService.saveRecipes(newRecipes);
  };

  const findRecipe = (recipeId: string): Recipe => {
    return recipes.find((x: Recipe): boolean => x.id === recipeId) || newRecipe;
  };

  const handleAddNew = () => {
    setModalSettings({
      isVisible: true,
      isEdit: false,
      editedRecipe: newRecipe
    });
  };

  const handleEdit = (recipeId: string) => {
    setModalSettings({
      isVisible: true,
      isEdit: true,
      editedRecipe: findRecipe(recipeId)
    });
  };

  const handleDelete = (recipeId: string) => {
    if (window.confirm("Are you sure you want to delete this recipe?")) {
      removeRecipe(recipeId);
    }
  };

  return (
    <div className="main-container">
      <Header onAddNew={handleAddNew} />
      {recipes && (
        <RecipesList
          recipes={recipes}
          onEdit={handleEdit}
          onDelete={handleDelete}
        />
      )}
      {modalSettings.isVisible && (
        <Modal
          onClose={() =>
            setModalSettings({
              ...modalSettings,
              isVisible: false
            })
          }
          onConfirm={addEditRecipe}
          recipe={modalSettings.editedRecipe}
          isEdit={modalSettings.isEdit}
        />
      )}
    </div>
  );
};

export default App;
