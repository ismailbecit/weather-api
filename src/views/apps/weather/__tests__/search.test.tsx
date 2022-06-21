import React from "react"
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react';
import Search from "../components/search"
import { Provider } from 'react-redux'
import { store } from "../../../../redux/store"

const ReduxProvider = ({ children }) => (
    <Provider store={store}>{children}</Provider>
)

beforeEach(() => {
    render(<ReduxProvider><Search /></ReduxProvider>)
})

test('is there select ', async () => {
    const select = screen.getByRole(/combobox/i)
    expect(select).toBeInTheDocument()
});

test("is select's options empty", (() => {
    const select = screen.getByRole(/combobox/i)
    expect(select).toHaveTextContent("")
}))
