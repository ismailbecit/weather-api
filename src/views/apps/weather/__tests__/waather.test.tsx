import React from "react"
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux'
import { store } from "../../../../redux/store"
import Weather from "../components/weather";
import { BrowserRouter as Router } from 'react-router-dom';

const ReduxProvider = ({ children }) => (
    <Provider store={store}>
        <Router>
            {children}
        </Router>
    </Provider>
)

beforeEach(() => {
    render(<ReduxProvider><Weather /></ReduxProvider>)
})

test("is there card", (() => {
    const card = screen.getByRole(/card/i)
    expect(card).toBeInTheDocument()
}))

test('is there button', async () => {

    const buttonEl = screen.getByText(/Çıkış/i)
    expect(buttonEl).toBeInTheDocument()
});
test("is button's class correct", async () => {
    const buttonEl = screen.getByText(/Çıkış/i)
    expect(buttonEl).toHaveClass("bg-red-500 text-white")
});

test('is there a button text', async () => {
    const buttonEl = screen.getByRole(/button/i)
    expect(buttonEl).toHaveTextContent(/Çıkış/i)
});

