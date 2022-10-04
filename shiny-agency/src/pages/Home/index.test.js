import { MemoryRouter } from "react-router";
import { getByRole, render, screen } from "@testing-library/react";
import Home from ".";
import { ThemeProvider } from "../../utils/context";

describe('The home component', () => {
    it('should render without crash', () => {
        render(
            <MemoryRouter>
                <ThemeProvider>
                    <Home/>
                </ThemeProvider>
            </MemoryRouter>
        )
        //screen.debug()
        const HomeText = 'Repérez vos besoins, on s’occupe du reste, avec les meilleurs talents';
        // Test sur le texte
        expect(screen.getByText(HomeText))
            .toBeTruthy();
        // Test plus précis (vérification sur la balise et son contenu)
        expect(screen.getByRole('heading', {
            level: 2,
            text: HomeText
        })).toBeTruthy();
    })
});