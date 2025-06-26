import { useEffect, useState } from 'react'

interface Tour {
  id: string
  title: string
  location: string
  price: number
  image: string
}

const Explore = () => {
  const [tours, setTours] = useState<Tour[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // TODO: Replace with real API call
    const fetchTours = async () => {
      try {
        // Simulating API call
        const fakeData: Tour[] = [
          {
            id: '1',
            title: 'Manali Mountain Adventure',
            location: 'Himachal Pradesh, India',
            price: 7999,
            image: '/src/assets/banner.jpg',
          },
          {
            id: '2',
            title: 'Goa Beach Escape',
            location: 'Goa, India',
            price: 6999,
            image: '/src/assets/banner.jpg',
          },
        ]
        setTours(fakeData)
        setLoading(false)
      } catch (err) {
        console.error('Error fetching tours', err)
        setLoading(false)
      }
    }

    fetchTours()
  }, [])

  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold text-indigo-700 mb-6 text-center">Explore Tours 🧭</h2>

      {loading ? (
        <p className="text-center text-gray-600">Loading tours...</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {tours.map((tour) => (
            <div
              key={tour.id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition"
            >
              <img src={tour.image} alt={tour.title} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="text-xl font-semibold text-gray-800">{tour.title}</h3>
                <p className="text-gray-500 text-sm">{tour.location}</p>
                <p className="text-indigo-600 font-bold mt-2">₹{tour.price}</p>
                <button
                  onClick={() => alert('Go to details page')}
                  className="mt-4 bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700"
                >
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default Explore
