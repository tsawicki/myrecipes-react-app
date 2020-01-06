import { Recipe } from "../models/Recipe.model";
export const KEY = "my-react-recipes";

export const recipesService = {
  loadRecipes: (): Recipe[] => {
    return JSON.parse(window.localStorage.getItem(KEY) || "[]");
  },

  saveRecipes: (recipes: Recipe[]): void => {
    window.localStorage.setItem(KEY, JSON.stringify(recipes));
  }
};
