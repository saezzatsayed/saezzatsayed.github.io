import { getByTestId, render } from '@testing-library/react';
import React from 'react';
import App from './App';

describe('Testing App', () => {

    it('renderd Application', () => {
        render(<App />);
        });

    it('Equal Button works', () => {
        const { container } = render(<App />);
        const input = getByTestId(container, "Screen");
        expect(input.textContent).toBe("0");
})

})