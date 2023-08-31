describe("Siepomaga", () => {
  it("new donnation", () => {
    cy.visit("https://www.siepomaga.pl/");
    cy.contains("a", "zbiórkę").click();
    cy.contains("div", "Inna osoba").click();
    cy.get(".input textarea").type("daleka podróż");
    cy.get("input[name='submission[funds_aim]']").type(10000);
    cy.contains("label", "Akceptuję").click({ force: true });
    cy.contains("button", "Dalej").click({ force: true });
  });
});
