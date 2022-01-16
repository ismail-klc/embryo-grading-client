describe("Logout", () => {
  it("should navigate to the login page when you click logout button", () => {
    // Start from the index page
    cy.visit("http://localhost:3000/");

    cy.get('a[href*="/logout"]').click();
    cy.url().should("include", "/login");
    cy.get("h1").contains("Giriş Yap");
  });
});

describe("Patients add", () => {
  it("should navigate to the patients add page", () => {
    // Start from the index page
    cy.visit("http://localhost:3000/");

    cy.get('a[href*="/patients/add"]').click();
    cy.url().should("include", "/patients/add");
    cy.get("h2").contains("Hasta Ekle");
    cy.get("input[name='first_name']").should("be.visible");
    cy.get("input[name='last_name']").should("be.visible");

    cy.get("button").contains("Hasta Ekle");
  });
});
