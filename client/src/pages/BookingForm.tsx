import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const BookingForm = () => {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    guests: 1,
    date: '',
    specialRequests: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Booking submitted:', formData)
    // TODO: Send data to backend via Axios
    navigate('/profile') // or navigate to a payment/success page
  }

  return (
    <div className="max-w-3xl mx-auto bg-white p-6 mt-10 shadow-md rounded-lg">
      <h2 className="text-2xl font-semibold mb-4 text-indigo-600">Book Your Tour 🧳</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block font-medium text-gray-700">Full Name</label>
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            className="mt-1 w-full border border-gray-300 rounded-md p-2"
            required
          />
        </div>

        <div>
          <label className="block font-medium text-gray-700">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="mt-1 w-full border border-gray-300 rounded-md p-2"
            required
          />
        </div>

        <div>
          <label className="block font-medium text-gray-700">Phone Number</label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="mt-1 w-full border border-gray-300 rounded-md p-2"
            required
          />
        </div>

        <div>
          <label className="block font-medium text-gray-700">Guests</label>
          <select
            name="guests"
            value={formData.guests}
            onChange={handleChange}
            className="mt-1 w-full border border-gray-300 rounded-md p-2"
          >
            {[1, 2, 3, 4, 5].map((num) => (
              <option key={num} value={num}>{num}</option>
            ))}
          </select>
        </div>

        <div>
          <label className="block font-medium text-gray-700">Date</label>
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            className="mt-1 w-full border border-gray-300 rounded-md p-2"
            required
          />
        </div>

        <div>
          <label className="block font-medium text-gray-700">Special Requests</label>
          <textarea
            name="specialRequests"
            value={formData.specialRequests}
            onChange={handleChange}
            rows={3}
            className="mt-1 w-full border border-gray-300 rounded-md p-2"
          />
        </div>

        <button
          type="submit"
          className="bg-indigo-600 text-white px-6 py-2 rounded-md hover:bg-indigo-700 transition"
        >
          Confirm Booking
        </button>
      </form>
    </div>
  )
}

export default BookingForm
