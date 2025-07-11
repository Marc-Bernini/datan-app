describe("Home Page", () => {
    beforeEach(() => {
        cy.visit(Cypress.env("homePath"));
    });

    it("Should contains ionContent and ionTitle", () => {
        cy.contains("ion-title", "Rechercher");
        cy.contains("ion-content", "Accueil");
    });
});
