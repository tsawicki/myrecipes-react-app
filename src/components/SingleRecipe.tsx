import React from "react";
import { Recipe } from "../models/Recipe.model";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";

interface OwnProps {
  recipe: Recipe;
  isExpanded: boolean;
  setExpanded: (recipeId: string) => void;
  onEdit: (recipeId: string) => void;
  onDelete: (recipeId: string) => void;
}

const SingleRecipe: React.FunctionComponent<OwnProps> = ({
  recipe,
  isExpanded,
  setExpanded,
  onEdit,
  onDelete
}: OwnProps) => {
  // const [isExpanded, setIsExpanded] = useState(false);

  const EditLink = () => (
    <a
      className="small-link"
      href="#edit"
      onClick={event => {
        event.preventDefault();
        onEdit(recipe.id);
      }}
      data-testid="edit-link"
    >
      <FontAwesomeIcon
        icon={faEdit}
        size="lg"
        style={{ marginRight: "10px" }}
      />
      edit
    </a>
  );

  const DeleteLink = () => (
    <a
      className="small-link"
      href="#delete"
      onClick={event => {
        event.preventDefault();
        onDelete(recipe.id);
      }}
      data-testid="delete-link"
    >
      <FontAwesomeIcon
        icon={faTrash}
        size="lg"
        style={{ marginRight: "10px" }}
      />
      delete
    </a>
  );

  return (
    <div className="recipe-container">
      <h2
        className="recipe-title"
        data-testid="recipe-title"
        onClick={() => setExpanded(recipe.id)}
      >
        {recipe.name}
      </h2>
      {isExpanded && (
        <>
          <div className="links-container">
            <EditLink />
            <DeleteLink />
          </div>
          <h5 className="section-header">Ingredients</h5>
          <ul>
            {recipe.ingredients.split(", ").map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </ul>
          {recipe.directions && (
            <div className="directions-section">
              <h5 className="section-header">Directions</h5>
              <div>{recipe.directions}</div>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default SingleRecipe;
