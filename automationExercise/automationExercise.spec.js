describe("AutomationExercise shopOnline", () => {
  it("Adds Products in Cart", () => {
    cy.visit("https://www.automationexercise.com/");
    cy.contains("a", "Products").click();
    cy.get('[data-product-id="1"]').click({ multiple: true, force: true });
    cy.contains("button", "Continue Shopping").click({ force: true });
    cy.get('[data-product-id="8"]').click({ multiple: true, force: true });
    cy.get('[data-product-id="20"]').click({ multiple: true, force: true });
    cy.contains("a", "View Cart").click({ force: true });
  });

  //   it("Register User", () => {
  //     cy.visit("https://www.automationexercise.com/");
  //     cy.contains("a", "Signup").click();
  //     cy.get("input[name='name']").eq(0).type("Jan");
  //     cy.get("input[name='email']")
  //       .eq(1)
  //       .type("jankowalski@gmail.com", { force: true });
  //     cy.contains("button", "Signup").click();
  //     cy.get("input[id='id_gender1']").click();
  //     cy.get("input[id='password']").type("zakupy123");
  //     cy.get("input[id='first_name']").type("Jan");
  //     cy.get("input[id='last_name']").type("Kowalski");
  //     cy.get("input[id='address1']").type(
  //       "Indira Gandhi National Open University"
  //     );
  //     cy.get("input[id='state']").type("New Delphi");
  //     cy.get("input[id='city']").type("New Delphi");
  //     cy.get("input[id='zipcode']").type("12-767");
  //     cy.get("input[id='mobile_number']").type("765433899");
  //     cy.contains("button", "Create Account").click();
  //   });

  it("Contact Us", () => {
    cy.visit("https://www.automationexercise.com/contact_us");
    cy.get("input[name='name']").type("Jan");
    cy.get("input[name='email']").type("jankowalski@gmail.com");
    cy.get("input[name='subject']").type("Zwrot");
    cy.get('[data-qa="message"]').type("Jest na mnie za mała");
    cy.get("input[name='submit']").click();
  });

  it("should have img of girl with bags", () => {
    cy.visit("https://www.automationexercise.com/");
    cy.get(".col-sm-6 img").should("be.visible");
  });
});
