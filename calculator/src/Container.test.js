import { render, screen } from "@testing-library/react"
import Container from './Container'

it("rendered Container", () => {
    render(<Container/>);
    const container2 = screen.getAllByTestId("Container");
    expect(container2).toBeTruthy()
})