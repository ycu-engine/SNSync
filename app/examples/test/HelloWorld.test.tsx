import { render } from '@testing-library/react'

const HelloWorld = () => {
  return <h1>Hello World!</h1>
}

describe(HelloWorld, () => {
  it('should render', () => {
    // Given
    const screen = render(<HelloWorld />)

    // When
    const text = screen.getByText('Hello World!')

    // Then
    expect(text).toBeInTheDocument()
  })
})
