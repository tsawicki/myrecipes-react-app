import { recipesService } from "./recipesService";
import { Recipe } from "../models/Recipe.model";

window.localStorage.__proto__.setItem = jest.fn();
window.localStorage.__proto__.getItem = jest.fn();

describe("recipesService", () => {
  describe("saveRecipes", () => {
    it("should call window.localStorage.setItem", () => {
      const recipes: Recipe[] = [
        {
          id: "1234",
          name: "test recipe 1",
          ingredients: "test ingredients 2",
          directions: ""
        },
        {
          id: "4321",
          name: "test recipe 2",
          ingredients: "test ingredients 2",
          directions: "test value"
        }
      ];
      recipesService.saveRecipes(recipes);
      expect(window.localStorage.setItem).toHaveBeenCalledWith(
        "my-react-recipes",
        JSON.stringify(recipes)
      );
    });
  });
  describe("loadRecipes", () => {
    it("should call window.localStorage.getItem", () => {
      recipesService.loadRecipes();
      expect(window.localStorage.getItem).toHaveBeenCalledWith(
        "my-react-recipes"
      );
    });
  });
});
