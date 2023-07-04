import { describe, it /* vi */ } from "vitest";
import { render, screen /* waitFor */ } from "@testing-library/react";
// import userEvent from "@testing-library/user-event";
// import { MemoryRouter } from "react-router-dom";
// import NewsletterModal from "./NewsletterModal";
import App from "../../App";

describe("NewsletterModal", () => {
  // const onSubmit = vi.fn();
  beforeEach(() => {
    render(<App />);
  });

  it("should render successfully", () => {
    const pageTitle = screen.getByRole("heading", { level: 1 });
    const subscribeButton = screen.getByRole("button");
    expect(pageTitle).toBeInTheDocument();
    expect(pageTitle).toHaveTextContent("Stay updated!");
    expect(subscribeButton).toBeInTheDocument();
    expect(subscribeButton).toHaveTextContent(
      "Subscribe to monthly newsletter"
    );
  });

  // it("should display an error message if email is invalid", async () => {
  //   const errorMessage = screen.queryByText("Valid email required");
  //   const emailInput = screen.getByRole("textbox");
  //   const subscribeButton = screen.getByRole("button", {
  //     name: "Subscribe to monthly newsletter",
  //   });
  //   expect(errorMessage).not.toBeInTheDocument();
  //   expect(emailInput).toBeInTheDocument();
  //   userEvent.type(emailInput, "test@gmail.com");
  //   userEvent.click(subscribeButton);
  //   await waitFor(() => {
  //     expect(onSubmit).toHaveBeenCalled();
  //   });
  //   userEvent.type(emailInput, "invalid");
  //   userEvent.click(subscribeButton);
  //   expect(errorMessage).toBeInTheDocument();
  // });
});
