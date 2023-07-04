import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
// import userEvent from "@testing-library/user-event";
import { MemoryRouter } from "react-router-dom";

import ConfirmationModal from "./ConfirmationModal";

describe("ConfirmationModal", () => {
  it("should render successfully", () => {
    render(
      <MemoryRouter>
        <ConfirmationModal />
      </MemoryRouter>
    );
    const button = screen.getByRole("button", { name: "Dismiss message" });
    expect(button).toBeInTheDocument();
  });
});
