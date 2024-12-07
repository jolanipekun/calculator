describe("Calculator App", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000"); // Adjust the URL if necessary
  });

  it("renders the calculator correctly", () => {
    cy.get(".component-app").should("exist");
    cy.contains("0").should("exist"); // Default display value
    cy.wait(2000); // Wait for 2 seconds
  });

  it("performs addition correctly", () => {
    cy.contains("5").click();
    cy.contains("+").click();
    cy.contains("3").click();
    cy.contains("=").click();
    cy.contains("8").should("exist"); // Result of 5 + 3
    cy.wait(2000); // Wait for 2 seconds
  });

  it("performs substraction correctly", () => {
    cy.contains("5").click();
    cy.contains("-").click();
    cy.contains("3").click();
    cy.contains("=").click();
    cy.contains("2").should("exist"); // Result of 5 + 3
    cy.wait(2000); // Wait for 2 seconds
  });

  it("handles the clear button", () => {
    cy.contains("7").click();
    cy.contains("AC").click();
    cy.contains("0").should("exist"); // Default display value
    cy.wait(2000); // Wait for 2 seconds
  });
});
