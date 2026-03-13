import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders Persona Initialization Hub header", () => {
  render(<App />);
  const heading = screen.getByText(/Persona Initialization Hub/i);
  expect(heading).toBeInTheDocument();
});
