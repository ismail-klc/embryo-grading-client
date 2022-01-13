describe("Navigation", () => {
  it("should navigate to the register page", () => {
    // Start from the index page
    cy.visit("http://localhost:3000/login");

    cy.get('a[href*="/register"]').click();
    cy.url().should("include", "/register");
    cy.get("h1").contains("Hesap Oluştur");
  });
});

describe("The Register Page", () => {
  it("logs in programmatically without using the UI", () => {
    cy.visit("http://localhost:3000/login");

    cy.request("POST", "/login", {
      username: "ozkan3@gmail.com",
      password: "123456789",
    }).then((res) => {
      /*    expect(res.body.username).to.eq(username); */
      expect(res.status).to.eq(200);
    });
  });
});
