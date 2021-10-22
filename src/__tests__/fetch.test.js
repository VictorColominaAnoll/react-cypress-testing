import { render } from '@testing-library/react'

test('renders a message', () => {
    const { container, getByText } = render(<div>Hello, world!</div>)
    expect(getByText('Hello, world!')).toBeInTheDocument()
})