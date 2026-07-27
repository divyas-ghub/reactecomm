import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders the application successfully", () => {
  render(<App />);

  expect(document.body).toBeInTheDocument();
});