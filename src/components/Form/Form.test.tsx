import React from "react";
import { render } from "@testing-library/react";
import Form from "./Form";

test("Form component", () => {
  describe("matches the snapshot", () => {
    const wrapper = render(
      <Form
        onSubmit={() => {}}
        recipe={{
          id: "1234",
          name: "test recipe",
          ingredients: "test ingredients",
          directions: ""
        }}
      />
    );
    expect(wrapper).toMatchSnapshot();
  });
});

test("Form component validates the name field", () => {
  const onSubmit = jest.fn();
  const wrapper = render(
    <Form
      onSubmit={onSubmit}
      recipe={{
        id: "1234",
        name: "",
        ingredients: "test ingredients",
        directions: ""
      }}
    />
  );
  wrapper.getByTestId("submit-form-btn").click();
  expect(onSubmit).not.toBeCalled();
  expect(wrapper.getByText(/Name can't be blank/)).toBeInTheDocument();
});

test("Form component validates the ingredients field", () => {
  const onSubmit = jest.fn();
  const wrapper = render(
    <Form
      onSubmit={onSubmit}
      recipe={{
        id: "1234",
        name: "test recipe",
        ingredients: "",
        directions: ""
      }}
    />
  );
  wrapper.getByTestId("submit-form-btn").click();
  expect(onSubmit).not.toBeCalled();
  expect(wrapper.getByText(/Add at least one ingredient/)).toBeInTheDocument();
});
