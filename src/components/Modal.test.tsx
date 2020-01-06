import React from "react";
import { render } from "@testing-library/react";
import Modal from "./Modal";

test("Modal component", () => {
  const onConfirm = jest.fn();
  const onClose = jest.fn();
  const recipe = {
    id: "1234",
    name: "test recipe",
    ingredients: "test ingredients",
    directions: ""
  };

  const wrapper = render(
    <Modal
      recipe={recipe}
      isEdit={true}
      onConfirm={onConfirm}
      onClose={onClose}
    />
  );

  expect(wrapper).toMatchSnapshot();

  wrapper.getByTestId("submit-form-btn").click();
  expect(onConfirm).toHaveBeenCalledWith(recipe);

  wrapper.getByTestId("close-modal-btn").click();
  wrapper.getByTestId("modal-overlay").click();
  expect(onClose).toHaveBeenCalledTimes(2);
});
