import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

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
    // TODO: Replace with API call from wishlistService.getWishlist()
    const fakeWishlist: Tour[] = [
      {
        id: '1',
        title: 'Leh Ladakh Bike Trip',
        location: 'Ladakh, India',
        price: 12999,
        image: '/src/assets/banner.jpg',
      },
      {
        id: '2',
        title: 'Backwaters of Kerala',
        location: 'Alleppey, India',
        price: 9999,
        image: '/src/assets/banner.jpg',
      },
    ]

    setWishlist(fakeWishlist)
    setLoading(false)
  }, [])

  const handleRemove = (id: string) => {
    const updated = wishlist.filter((tour) => tour.id !== id)
    setWishlist(updated)
    // TODO: Call wishlistService.removeFromWishlist(id)
  }

  return (
    <div className="max-w-5xl mx-auto mt-10 p-4">
      <h2 className="text-3xl font-bold text-indigo-700 mb-6 text-center">Your Wishlist ❤️</h2>

      {loading ? (
        <p className="text-center text-gray-600">Loading wishlist...</p>
      ) : wishlist.length === 0 ? (
        <p className="text-center text-gray-500">You have no tours in your wishlist.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {wishlist.map((tour) => (
            <div
              key={tour.id}
              className="bg-white rounded-lg shadow hover:shadow-md transition overflow-hidden"
            >
              <img src={tour.image} alt={tour.title} className="h-40 w-full object-cover" />
              <div className="p-4">
                <h3 className="text-xl font-semibold text-gray-800">{tour.title}</h3>
                <p className="text-gray-500 text-sm">{tour.location}</p>
                <p className="text-indigo-600 font-bold mt-2">₹{tour.price}</p>
                <div className="flex justify-between mt-4">
                  <button
                    onClick={() => navigate(`/tour/${tour.id}`)}
                    className="text-sm bg-indigo-600 text-white px-3 py-1 rounded hover:bg-indigo-700"
                  >
                    View
                  </button>
                  <button
                    onClick={() => handleRemove(tour.id)}
                    className="text-sm bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                  >
                    Remove
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
