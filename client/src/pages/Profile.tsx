import { useEffect, useState } from 'react'
import { FaUserCircle } from 'react-icons/fa'
import { motion } from 'framer-motion'

interface UserProfile {
  name: string
  email: string
  phone: string
  joinedDate: string
}

const Profile = () => {
  const [user, setUser] = useState<UserProfile | null>(null)

  useEffect(() => {
    // TODO: Replace with API call
    const fakeUser: UserProfile = {
      name: 'Appu DevOps',
      email: 'appu@example.com',
      phone: '+91-9876543210',
      joinedDate: '2024-12-01',
    }
    setUser(fakeUser)
  }, [])

  return (
    <div className="relative">
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-indigo-500 to-blue-500 h-40 rounded-b-2xl shadow-lg"></div>

      {/* Profile Card */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-2xl mx-auto bg-white rounded-xl shadow-lg p-6 -mt-20 relative z-10"
      >
        <div className="flex flex-col items-center">
          <FaUserCircle className="text-6xl text-indigo-600 mb-2" />
          <h2 className="text-2xl font-bold text-gray-800">{user?.name || 'Loading...'}</h2>
          <p className="text-sm text-gray-500">Joined on {user ? new Date(user.joinedDate).toLocaleDateString() : '--'}</p>
        </div>

        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="bg-gray-50 rounded-lg p-4">
            <p className="text-xs text-gray-500">Email</p>
            <p className="text-sm font-medium text-gray-800">{user?.email}</p>
          </div>
          <div className="bg-gray-50 rounded-lg p-4">
            <p className="text-xs text-gray-500">Phone</p>
            <p className="text-sm font-medium text-gray-800">{user?.phone}</p>
          </div>
        </div>

        <div className="mt-6 flex flex-col sm:flex-row gap-3">
          <button className="w-full bg-indigo-600 text-white py-2 rounded-lg font-semibold hover:bg-indigo-700 transition">
            Edit Profile
          </button>
          <button className="w-full bg-gray-100 text-gray-700 py-2 rounded-lg font-semibold hover:bg-gray-200 transition">
            Change Password
          </button>
        </div>
      </motion.div>
    </div>
  )
}

export default Profile
