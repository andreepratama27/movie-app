import Badge from "..";
import { render, screen } from "@testing-library/react";

describe("Badge", () => {
  it("render Badge", async () => {
    render(<Badge name="badge" />);
    const badgeName = await screen.findByTestId("badge-name");

    expect(badgeName.textContent).toEqual("badge");
  });
});
