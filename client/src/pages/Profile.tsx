import { useEffect, useState } from 'react'

interface UserProfile {
  name: string
  email: string
  phone: string
  joinedDate: string
}

const Profile = () => {
  const [user, setUser] = useState<UserProfile | null>(null)

  useEffect(() => {
    // TODO: Replace this with real API call
    const fakeUser: UserProfile = {
      name: 'Appu DevOps',
      email: 'appu@example.com',
      phone: '+91-9876543210',
      joinedDate: '2024-12-01',
    }
    setUser(fakeUser)
  }, [])

  return (
    <div className="max-w-3xl mx-auto bg-white p-6 mt-10 shadow-md rounded-lg">
      <h2 className="text-2xl font-semibold mb-4 text-indigo-700">My Profile 👤</h2>

      {user ? (
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-600">Name</label>
            <p className="text-lg font-medium">{user.name}</p>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-600">Email</label>
            <p className="text-lg">{user.email}</p>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-600">Phone</label>
            <p className="text-lg">{user.phone}</p>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-600">Joined On</label>
            <p className="text-lg">{new Date(user.joinedDate).toLocaleDateString()}</p>
          </div>

          <button className="mt-6 bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700">
            Edit Profile
          </button>
        </div>
      ) : (
        <p className="text-gray-500">Loading profile...</p>
      )}
    </div>
  )
}

export default Profile
