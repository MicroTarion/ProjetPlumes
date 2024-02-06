import { render, screen } from "@testing-library/react";
import Homepage from "../pages/home/index";

test("homepage should render the welcome text", () => {
  render(<Homepage />);

  const header = screen.getByRole("heading", {
    name: /découvrez à quel oiseau appartient cette plume/i,
  });
});
