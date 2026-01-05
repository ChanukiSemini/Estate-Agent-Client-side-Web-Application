import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Favourites from './Favourites'

describe('Favourites', () => {
  it('shows message when no favourites', () => {
    render(
      <Favourites
        favourites={[]}
        removeFavourite={() => {}}
        clearFavourites={() => {}}
        addToFavourites={() => {}}
      />
    )

    expect(
      screen.getByText(/Drag and Drop properties Here/i)
    ).toBeInTheDocument()
  })
  
  it('removes a favourite when remove button clicked', async () => {
  const user = userEvent.setup()
  const removeFavourite = vi.fn()

  render(
    <Favourites
      favourites={[
        { id: '1', price: 1000000, location: 'Kandy', type: 'House', thumbnail: 'a.jpg' }
      ]}
      removeFavourite={removeFavourite}
      clearFavourites={() => {}}
      addToFavourites={() => {}}
    />
  )

  await user.click(screen.getByText('✕'))
  expect(removeFavourite).toHaveBeenCalledWith('1')
})

})
