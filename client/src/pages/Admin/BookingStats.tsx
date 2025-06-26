import { useEffect, useState } from 'react'
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
  Legend
} from 'recharts'

type BookingStat = {
  month: string
  bookings: number
}

const BookingStats = () => {
  const [bookingData, setBookingData] = useState<BookingStat[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Simulated API delay — replace with real data fetch later
    const fetchData = () => {
      const mockData: BookingStat[] = [
        { month: 'January', bookings: 45 },
        { month: 'February', bookings: 68 },
        { month: 'March', bookings: 80 },
        { month: 'April', bookings: 55 },
        { month: 'May', bookings: 95 },
        { month: 'June', bookings: 70 }
      ]
      setBookingData(mockData)
      setLoading(false)
    }

    setTimeout(fetchData, 1000)
  }, [])

  return (
    <section className="max-w-6xl mx-auto mt-12 px-4">
      <h2 className="text-4xl font-extrabold text-indigo-700 text-center mb-10 drop-shadow">
        📅 Monthly Booking Stats
      </h2>

      <div className="bg-white dark:bg-zinc-800 p-6 rounded-2xl shadow-lg transition-all duration-300">
        {loading ? (
          <p className="text-center text-gray-500 dark:text-gray-300">Loading chart data...</p>
        ) : bookingData.length === 0 ? (
          <p className="text-center text-red-500 font-medium">No booking data available 🥲</p>
        ) : (
          <ResponsiveContainer width="100%" height={300}>
            <BarChart
              data={bookingData}
              margin={{ top: 10, right: 30, left: 0, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" strokeOpacity={0.3} />
              <XAxis dataKey="month" stroke="#6b7280" />
              <YAxis stroke="#6b7280" />
              <Tooltip contentStyle={{ backgroundColor: '#f9fafb', borderRadius: '10px' }} />
              <Legend />
              <Bar
                dataKey="bookings"
                fill="#4f46e5"
                name="Bookings"
                radius={[4, 4, 0, 0]}
              />
            </BarChart>
          </ResponsiveContainer>
        )}
      </div>
    </section>
  )
}

export default BookingStats
