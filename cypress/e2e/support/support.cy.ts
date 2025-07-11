describe("Support Page", () => {
    beforeEach(() => {
        cy.visit(Cypress.env("supportPath"));
    });

    it("Should contains ionContent and ionTitle", () => {
        cy.contains("ion-title", "Nous soutenir");
        cy.contains("ion-button", "NOUS SOUTENIR");
    });
});
