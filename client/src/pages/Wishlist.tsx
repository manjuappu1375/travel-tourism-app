import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { FaEye, FaTrash } from 'react-icons/fa'

interface Tour {
  id: string
  title: string
  location: string
  price: number
  image: string
}

const Wishlist = () => {
  const [wishlist, setWishlist] = useState<Tour[]>([])
  const [loading, setLoading] = useState(true)
  const navigate = useNavigate()

  useEffect(() => {
    // Replace this with API call
    const fakeWishlist: Tour[] = [
      {
        id: '1',
        title: 'Leh Ladakh Bike Trip',
        location: 'Ladakh, India',
        price: 12999,
        image: 'https://source.unsplash.com/400x300/?ladakh',
      },
      {
        id: '2',
        title: 'Backwaters of Kerala',
        location: 'Alleppey, India',
        price: 9999,
        image: 'https://source.unsplash.com/400x300/?kerala',
      },
    ]

    setTimeout(() => {
      setWishlist(fakeWishlist)
      setLoading(false)
    }, 1000)
  }, [])

  const handleRemove = (id: string) => {
    const updated = wishlist.filter((tour) => tour.id !== id)
    setWishlist(updated)
    // TODO: Call API to remove from wishlist
  }

  return (
    <div className="max-w-6xl mx-auto mt-10 p-4">
      <h2 className="text-3xl font-extrabold text-indigo-700 mb-6 text-center">
        Your Wishlist ❤️
      </h2>

      {loading ? (
        <p className="text-center text-gray-500">Loading your wishlist...</p>
      ) : wishlist.length === 0 ? (
        <div className="text-center text-gray-400">
          <p className="text-lg">Your wishlist is empty!</p>
          <p className="text-sm">Start exploring tours and add your favorites.</p>
        </div>
      ) : (
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
          {wishlist.map((tour) => (
            <div
              key={tour.id}
              className="bg-white rounded-xl shadow-sm hover:shadow-lg transition overflow-hidden transform hover:scale-105"
            >
              <img
                src={tour.image}
                alt={tour.title}
                className="h-48 w-full object-cover rounded-t-xl"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800">{tour.title}</h3>
                <p className="text-sm text-gray-500">{tour.location}</p>
                <p className="mt-2 text-indigo-600 font-bold">₹{tour.price.toLocaleString()}</p>
                <div className="flex justify-between mt-4">
                  <button
                    onClick={() => navigate(`/tour/${tour.id}`)}
                    className="flex items-center gap-1 bg-indigo-600 text-white px-3 py-1 rounded hover:bg-indigo-700 text-sm"
                  >
                    <FaEye /> View
                  </button>
                  <button
                    onClick={() => handleRemove(tour.id)}
                    className="flex items-center gap-1 bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 text-sm"
                  >
                    <FaTrash /> Remove
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default Wishlist
