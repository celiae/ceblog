import { render, screen } from "@testing-library/react";
import AllStories from "../../../components/index/all-stories";

test("should first", () => {
  render(<AllStories />);
  screen.debug();
});
