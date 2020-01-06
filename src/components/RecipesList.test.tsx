import React from "react";
import { render } from "@testing-library/react";
import RecipesList from "./RecipesList";

const recipes = [
  {
    id: "1234",
    name: "test recipe 1",
    ingredients: "test ingredients 1",
    directions: ""
  },
  {
    id: "3452",
    name: "test recipe 2",
    ingredients: "test ingredients 2",
    directions: ""
  },
  {
    id: "6045",
    name: "test recipe 3",
    ingredients: "test ingredients 3",
    directions: ""
  }
];

test("RecipesList component", () => {
  const wrapper = render(
    <RecipesList recipes={recipes} onDelete={() => {}} onEdit={() => {}} />
  );
  expect(wrapper).toMatchSnapshot();
});
