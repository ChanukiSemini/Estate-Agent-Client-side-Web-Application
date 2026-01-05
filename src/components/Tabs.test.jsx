import { render, screen } from '@testing-library/react'
import { Tabs } from 'react-tabs'

it('renders Description tab', () => {
  render(
    <Tabs>
      <div>Description</div>
    </Tabs>
  )

  expect(screen.getByText(/Description/i)).toBeInTheDocument()
})
