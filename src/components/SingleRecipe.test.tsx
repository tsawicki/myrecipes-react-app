import React from "react";
import { render } from "@testing-library/react";
import SingleRecipe from "./SingleRecipe";

test("SingleRecipe component should match snapshot", () => {
  describe("for not extended component", () => {
    const wrapper = render(
      <SingleRecipe
        recipe={{
          id: "1234",
          name: "test recipe",
          ingredients: "test ingredients",
          directions: ""
        }}
        isExpanded={false}
        setExpanded={jest.fn()}
        onEdit={jest.fn()}
        onDelete={jest.fn()}
      />
    );
    expect(wrapper).toMatchSnapshot();
  });
  describe("for not extended component", () => {
    const wrapper = render(
      <SingleRecipe
        recipe={{
          id: "1234",
          name: "test recipe",
          ingredients: "test ingredients",
          directions: "test directions"
        }}
        isExpanded={true}
        setExpanded={() => {}}
        onEdit={() => {}}
        onDelete={() => {}}
      />
    );
    expect(wrapper).toMatchSnapshot();
  });
});

test("SingleRecipe should call onEdit function on link click", () => {
  const onEdit = jest.fn();
  const wrapper = render(
    <SingleRecipe
      recipe={{
        id: "1234",
        name: "test recipe",
        ingredients: "test ingredients",
        directions: ""
      }}
      isExpanded={true}
      setExpanded={() => {}}
      onEdit={onEdit}
      onDelete={() => {}}
    />
  );
  wrapper.getByTestId("edit-link").click();
  expect(onEdit).toHaveBeenCalledWith("1234");
});

test("SingleRecipe should call onEdit function on link click", () => {
  const onDelete = jest.fn();
  const wrapper = render(
    <SingleRecipe
      recipe={{
        id: "1234",
        name: "test recipe",
        ingredients: "test ingredients",
        directions: ""
      }}
      isExpanded={true}
      setExpanded={() => {}}
      onEdit={() => {}}
      onDelete={onDelete}
    />
  );
  wrapper.getByTestId("delete-link").click();
  expect(onDelete).toHaveBeenCalledWith("1234");
});

test("SingleRecipe should call setExpanded on header click", () => {
  const setExpanded = jest.fn();
  const wrapper = render(
    <SingleRecipe
      recipe={{
        id: "1234",
        name: "test recipe",
        ingredients: "test ingredients",
        directions: ""
      }}
      isExpanded={true}
      setExpanded={setExpanded}
      onEdit={() => {}}
      onDelete={() => {}}
    />
  );
  wrapper.getByTestId("recipe-title").click();
  expect(setExpanded).toHaveBeenCalledWith("1234");
});
