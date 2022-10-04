import { render, screen, fireEvent } from "@testing-library/react";
import Card from ".";
import { ThemeProvider } from '../../utils/context';

describe('Card', () => {
    it('Should render title and image', async () => {
        render(
            <ThemeProvider>
                <Card title="Harry Potter"
                    label="Magicien frontend"
                    picture="../../assets/profile.png"
                />
            </ThemeProvider>
        );
        const cardPicture = screen.getByRole('img');
        const cardTitle = screen.getByText(/Harry/i);
        expect(cardPicture.src).toBe('http://localhost/assets/profile.png');
        expect(cardTitle.textContent).toBe(' Harry Potter ');
    });
    it('Should add ⭐️ around title', async () => {
        render(
            <ThemeProvider>
                <Card title="Harry Potter"
                    label="Magicien frontend"
                    picture="../../assets/profile.png"
                />
            </ThemeProvider>
        );
        const cardTitle = screen.getByText(/Harry/i);
        const parentNode = cardTitle.closest('div');
        fireEvent.click(parentNode);
        expect(cardTitle.textContent).toBe('⭐️ Harry Potter ⭐️');
    });
});