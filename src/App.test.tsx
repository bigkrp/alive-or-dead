import React from 'react'
import { render } from '@testing-library/react'
import App from './App'

test('renders App', () => {
    const { container } = render(<App />)
    const AppDiv = container.querySelector('.App')
    expect(AppDiv).toBeInTheDocument()
})
