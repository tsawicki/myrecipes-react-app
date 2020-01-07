import React from "react";
import { render } from "@testing-library/react";
import Header from "./Header";

test("Header component", () => {
  describe("matches the snapshot", () => {
    const wrapper = render(<Header />);
    expect(wrapper).toMatchSnapshot();
  });
});
