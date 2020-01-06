import React, { useState, FormEvent } from "react";
import { Recipe } from "../models/Recipe.model";

interface OwnProps {
  recipe: Recipe;
  onSubmit: (recipe: Recipe) => void;
}

const Form: React.FunctionComponent<OwnProps> = ({
  recipe,
  onSubmit
}: OwnProps): JSX.Element => {
  const noErrors = {
    name: "",
    ingredients: ""
  };

  const [input, setInput] = useState(recipe);
  const [errors, setErrors] = useState(noErrors);

  type input = HTMLInputElement | HTMLTextAreaElement;

  const handleInputChange = (event: React.FormEvent<input>) =>
    setInput({
      ...input,
      [event.currentTarget.name]: event.currentTarget.value
    });

  const validateForm = () => {
    let isFormValid = true;
    let newErrors = noErrors;

    if (input.name === "") {
      newErrors = {
        ...newErrors,
        name: "Name can't be blank"
      };
      isFormValid = false;
    }

    if (input.ingredients === "") {
      newErrors = {
        ...newErrors,
        ingredients: "Add at least one ingredient"
      };
      isFormValid = false;
    }
    setErrors(newErrors);
    return isFormValid;
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    if (validateForm()) {
      onSubmit(input);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Recipe Name*:</label>
        <input
          type="text"
          name="name"
          className={errors.name !== "" ? "has-error" : ""}
          onChange={handleInputChange}
          value={input.name}
        />
        {errors.name !== "" && (
          <small className="error-msg">{errors.name}</small>
        )}
      </div>
      <div>
        <label>Ingredients*:</label>
        <input
          type="text"
          name="ingredients"
          className={errors.ingredients !== "" ? "has-error" : ""}
          onChange={handleInputChange}
          value={input.ingredients}
        />
        {errors.ingredients !== "" && (
          <small className="error-msg">{errors.ingredients}</small>
        )}
      </div>
      <div>
        <label>Directions:</label>
        <textarea
          name="directions"
          rows={5}
          onChange={handleInputChange}
          value={input.directions}
        />
      </div>
      <input
        type="submit"
        className="btn"
        value="Save Recipe"
        data-testid="submit-form-btn"
      />
    </form>
  );
};

export default Form;
