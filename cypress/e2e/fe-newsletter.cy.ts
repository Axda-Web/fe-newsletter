describe("FE Newsletter", function () {
  it("front page can be opened", function () {
    cy.visit("http://localhost:5173/");
    cy.contains("Stay updated!");
    cy.contains("Subscribe to monthly newsletter");
  });

  it("Error if no email provided or wrong format", function () {
    cy.visit("http://localhost:5173/");

    // No email
    cy.contains("Subscribe to monthly newsletter").click();
    cy.contains("Valid email required");
    cy.get("#email").should("have.css", "border-color", "rgb(248, 113, 113)");
    cy.url().should("eq", "http://localhost:5173/");

    // Wrong format
    cy.get("#email").type("invalid mail");
    cy.contains("Valid email required");
    cy.get("#email").should("have.css", "border-color", "rgb(248, 113, 113)");
    cy.url().should("eq", "http://localhost:5173/");
  });

  it("Navigate to confirmation page if valid email provided", function () {
    cy.visit("http://localhost:5173/");
    cy.get("#email").type("valid@email.com");
    cy.contains("Subscribe to monthly newsletter").click();
    cy.contains("Thanks for subscribing!");
    cy.url().should("eq", "http://localhost:5173/success");
  });

  it("Navigate to newsletter page when Dismiss message is clicked", function () {
    cy.visit("http://localhost:5173/success");
    cy.contains("Dismiss message").click();
    cy.contains("Stay updated!");
    cy.url().should("eq", "http://localhost:5173/");
  });
});
