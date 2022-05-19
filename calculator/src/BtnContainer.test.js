import { render, screen } from "@testing-library/react"
import BtnContainer from './BtnContainer'

it("rendered btnContainer", () => {
    render(<BtnContainer/>);
    const BttnContainer = screen.getAllByTestId("btnContainer");
    expect(BttnContainer).toBeTruthy()
})