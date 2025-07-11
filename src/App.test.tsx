import App from "./App";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

describe("App component", () => {
    test("Render App without crashing", () => {
        const { baseElement } = render(<App />);
        expect(baseElement).toBeDefined();
    });

    test("Display Home component by default", () => {
        render(<App />);

        const homeTexts = screen.getAllByText("Accueil");
        expect(homeTexts).toHaveLength(2);

        const searchText = screen.getByText("Rechercher");
        expect(searchText).toBeDefined();

        const supportText = screen.getByText("Nous soutenir");
        expect(supportText).toBeDefined();
    });

    test("Navigate to Support page when user click on support tab", async () => {
        render(<App />);

        const supportTabButton = screen.getByText("Nous soutenir");
        await userEvent.click(supportTabButton);
        const supportText = screen.getAllByText(/nous soutenir/i);
        expect(supportText).toHaveLength(3); // header, button and tab
    });
});
