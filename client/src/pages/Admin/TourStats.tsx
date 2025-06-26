import { useEffect, useState } from 'react'
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid
} from 'recharts'

// --- Types ---
type TourBooking = {
  name: string
  bookings: number
}

type TourCategory = {
  name: string
  value: number
}

// --- Colors ---
const COLORS = ['#6366f1', '#10b981', '#f59e0b', '#ef4444', '#3b82f6']

const TourStats = () => {
  const [popularTours, setPopularTours] = useState<TourBooking[]>([])
  const [tourCategoryData, setTourCategoryData] = useState<TourCategory[]>([])

  useEffect(() => {
    const mockPopularTours: TourBooking[] = [
      { name: 'Goa Escape', bookings: 120 },
      { name: 'Leh-Ladakh Ride', bookings: 95 },
      { name: 'Kerala Backwaters', bookings: 80 },
      { name: 'Jaipur Heritage', bookings: 60 }
    ]

    const mockCategoryData: TourCategory[] = [
      { name: 'Beach', value: 140 },
      { name: 'Adventure', value: 110 },
      { name: 'Culture', value: 90 },
      { name: 'Wildlife', value: 70 },
      { name: 'Luxury', value: 50 }
    ]

    setPopularTours(mockPopularTours)
    setTourCategoryData(mockCategoryData)
  }, [])

  return (
    <section className="max-w-6xl mx-auto mt-12 px-4">
      <h2 className="text-4xl font-bold text-indigo-700 mb-10 text-center">
        📊 Tour Analytics Dashboard
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Booked Tours - Bar Chart */}
        <div className="bg-white dark:bg-zinc-800 p-6 rounded-xl shadow-md">
          <h3 className="text-xl font-semibold text-indigo-600 mb-4">
            Top Booked Tours
          </h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={popularTours}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar
                dataKey="bookings"
                fill="#6366f1"
                name="Bookings"
                radius={[6, 6, 0, 0]}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Category Distribution - Pie Chart */}
        <div className="bg-white dark:bg-zinc-800 p-6 rounded-xl shadow-md">
          <h3 className="text-xl font-semibold text-indigo-600 mb-4">
            Tours by Category
          </h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={tourCategoryData}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ name }) => name}
                outerRadius={100}
                dataKey="value"
                nameKey="name"
              >
                {tourCategoryData.map((_, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </section>
  )
}

export default TourStats
