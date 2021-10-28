import { render, screen } from "@testing-library/react";
import Grilla from "./Grilla";

test('Crear Grilla', () => {

    render(<Grilla rango={"juan"}/>);

    expect(screen).toBeTruthy();

})

test('Grilla tiene 25 casillas', () => {

    render(<Grilla rango={"juano"}/>);

    const cards = screen.getAllByText(/-/i);

    expect(cards.length).toBe(25);

})