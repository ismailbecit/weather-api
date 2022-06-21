import React from "react"
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux'
import { store } from "../../../../redux/store"
import { BrowserRouter as Router } from 'react-router-dom';
import TokenEntry from "../components/tokenEntry";

const ReduxProvider = ({ children }) => (
    <Provider store={store}>
        <Router>
            {children}
        </Router>
    </Provider>
)

beforeEach(() => {
    render(<ReduxProvider><TokenEntry /></ReduxProvider>)
})

test('is there a button', async () => {
    const buttonEl = screen.getByRole(/button/i)
    expect(buttonEl).toBeInTheDocument()
});

test("is button's class correct", async () => {
    const buttonEl = screen.getByRole(/button/i)
    expect(buttonEl).toHaveClass("bg-green-600 mt-2 text-white ")
});

test('is there a input', async () => {
    const inputEl = screen.getByRole(/input/i)
    expect(inputEl).toBeInTheDocument()
});

