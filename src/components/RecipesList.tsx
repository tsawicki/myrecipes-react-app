import React, { useState } from "react";
import SingleRecipe from "./SingleRecipe";
import { Recipe } from "../models/Recipe.model";

interface OwnProps {
  recipes: Recipe[];
  onEdit: (recipeId: string) => void;
  onDelete: (recipeId: string) => void;
}

const RecipesList: React.FunctionComponent<OwnProps> = ({
  recipes,
  onEdit,
  onDelete
}: OwnProps) => {
  const [expandedId, setExpandedId] = useState();

  const handleExpand = (recipeId: string): void => {
    recipeId === expandedId ? setExpandedId(null) : setExpandedId(recipeId);
  };

  return (
    <div className="recipes-list">
      {recipes && recipes.length > 0 ? (
        recipes.map(
          (recipe): JSX.Element => (
            <SingleRecipe
              key={recipe.id}
              recipe={recipe}
              isExpanded={recipe.id === expandedId}
              setExpanded={handleExpand}
              onEdit={onEdit}
              onDelete={onDelete}
            />
          )
        )
      ) : (
        <p className="text-center">You don't have any recipes yet...</p>
      )}
    </div>
  );
};

export default RecipesList;
