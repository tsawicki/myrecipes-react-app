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
