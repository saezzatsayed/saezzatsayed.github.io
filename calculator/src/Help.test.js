import { render, screen } from "@testing-library/react"
import Help from './Help'

it("rendered HelpBtn", () => {
    render(<Help/>);
    const Help2 = screen.getAllByTestId("HelpBtn");
    expect(Help2).toBeTruthy()
})