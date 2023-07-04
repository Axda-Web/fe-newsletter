import { describe, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import ButttonCta from "./ButttonCta";

describe("ButttonCta", () => {
  describe("Subscribe newsletter button", () => {
    it("should render successfully", () => {
      render(
        <MemoryRouter>
          <ButttonCta type="submit" text="Subscribe to monthly newsletter" />
        </MemoryRouter>
      );
      const button = screen.getByRole("button");
      expect(button).toBeInTheDocument();
      expect(button).toHaveTextContent("Subscribe to monthly newsletter");
    });
  });
  describe("Dismiss message button", () => {
    it("should render successfully", () => {
      render(
        <MemoryRouter>
          <ButttonCta type="button" text="Dismiss message" />
        </MemoryRouter>
      );
      const button = screen.getByRole("button");
      expect(button).toBeDefined();
    });
  });
});
