describe("search product", () => {
  it("should be able to search products", () => {
    cy.visit("/");
    cy.get("input[name=q").type("moletom").parent("form").submit();

    cy.location("pathname").should("include", "/search");
    cy.location("search").should("include", "q=moletom");

    cy.get('a[href^="product"]').should("exist");
  });

  it("should not be able to visit search page without a query params", () => {
    cy.on("uncaught:exception", () => {
      return false;
    });

    cy.visit("/search");

    cy.location("pathname").should("equal", "/");
  });
});
