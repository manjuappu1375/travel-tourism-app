import { useParams, useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'

interface Tour {
  id: string
  title: string
  description: string
  location: string
  price: number
  duration: string
  image: string
}

const TourDetails = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const [tour, setTour] = useState<Tour | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // TODO: Replace with real API call (e.g., tourService.getTourById(id))
    const fetchTourDetails = async () => {
      // Simulate fetch
      const mockTour: Tour = {
        id: '1',
        title: 'Manali Mountain Adventure',
        description:
          'Explore the scenic mountains of Manali with our guided tour. Includes camping, trekking, and local cuisine.',
        location: 'Himachal Pradesh, India',
        price: 7999,
        duration: '4 Days / 3 Nights',
        image: '/src/assets/banner.jpg',
      }
      setTour(mockTour)
      setLoading(false)
    }

    fetchTourDetails()
  }, [id])

  const handleBooking = () => {
    navigate('/book')
  }

  if (loading) {
    return <p className="text-center text-gray-600 mt-10">Loading tour details...</p>
  }

  if (!tour) {
    return <p className="text-center text-red-500 mt-10">Tour not found.</p>
  }

  return (
    <div className="max-w-5xl mx-auto bg-white p-6 mt-10 shadow-md rounded-lg">
      <img
        src={tour.image}
        alt={tour.title}
        className="w-full h-64 object-cover rounded-md mb-6"
      />

      <h1 className="text-3xl font-bold text-indigo-700 mb-2">{tour.title}</h1>
      <p className="text-sm text-gray-500 mb-4">{tour.location} • {tour.duration}</p>

      <p className="text-gray-700 mb-6">{tour.description}</p>

      <div className="flex justify-between items-center">
        <p className="text-xl font-bold text-indigo-600">₹{tour.price}</p>
        <button
          onClick={handleBooking}
          className="bg-indigo-600 text-white px-6 py-2 rounded hover:bg-indigo-700 transition"
        >
          Book Now
        </button>
      </div>
    </div>
  )
}

export default TourDetails
