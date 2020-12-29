describe("Log In", () => {
  it("should see login page", () => {
    cy.visit("/").title().should("eq", "Login | Uber Eats");
  });
  it("can fill out the form", () => {
    cy.visit("/")
      .findByPlaceholderText(/email/i)
      .type("samm162@code.com")
      .findByPlaceholderText(/password/i)
      .type("12345")
      .findByRole("button")
      .should("not.have.class", "pointer-events-none");
    // to do (can log in)
  });
  it("can see email / password validation errors", () => {
    cy.visit("/")
      .findByPlaceholderText(/email/i)
      .type("bad@email")
      .findByRole("alert")
      .should("have.text", "Please enter a valid email");
  });
});
