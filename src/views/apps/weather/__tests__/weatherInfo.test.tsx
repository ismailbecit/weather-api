import React from "react"
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux'
import { store } from "../../../../redux/store"
import WeatherInfo from "../components/weatherInfo";
import { BrowserRouter as Router } from 'react-router-dom';

const ReduxProvider = ({ children }) => (
    <Provider store={store}>
        <Router>
            {children}
        </Router>
    </Provider>
)

beforeEach(() => {
    render(<ReduxProvider><WeatherInfo /></ReduxProvider>)
})

test('is there icon', async () => {
    const iconEl = screen.getByRole(/icon/i)
    expect(iconEl).toBeInTheDocument()
});

