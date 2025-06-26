import { useNavigate } from 'react-router-dom'

const AdminDashboard = () => {
  const navigate = useNavigate()

  const dashboardCards = [
    {
      title: 'Total Tours',
      count: 45,
      link: '/admin/tour-stats',
      bg: 'bg-indigo-100',
      text: 'text-indigo-800',
    },
    {
      title: 'Total Bookings',
      count: 132,
      link: '/admin/booking-stats',
      bg: 'bg-emerald-100',
      text: 'text-emerald-800',
    },
    {
      title: 'User Reviews',
      count: 87,
      link: '/admin/reviews',
      bg: 'bg-yellow-100',
      text: 'text-yellow-800',
    },
    {
      title: 'Support Tickets',
      count: 9,
      link: '/admin/support',
      bg: 'bg-rose-100',
      text: 'text-rose-800',
    },
  ]

  return (
    <section className="max-w-7xl mx-auto mt-12 px-4">
      <h2 className="text-4xl font-extrabold text-indigo-700 mb-10 text-center drop-shadow-md">
        Admin Dashboard 🛠️
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {dashboardCards.map((card) => (
          <div
            key={card.title}
            role="button"
            tabIndex={0}
            onClick={() => navigate(card.link)}
            onKeyDown={(e) => e.key === 'Enter' && navigate(card.link)}
            className={`${card.bg} ${card.text} p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-105 cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-400`}
          >
            <h3 className="text-xl font-semibold mb-2">{card.title}</h3>
            <p className="text-4xl font-black">{card.count}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default AdminDashboard
