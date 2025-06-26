import { useState } from 'react'

const Login = () => {
  const [isRegistering, setIsRegistering] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (isRegistering) {
      console.log('Registering user:', formData)
      // TODO: Send POST to /api/auth/register
    } else {
      console.log('Logging in user:', formData)
      // TODO: Send POST to /api/auth/login
    }
  }

  return (
    <div className="max-w-md mx-auto mt-16 bg-white shadow-md p-8 rounded-lg">
      <h2 className="text-2xl font-bold text-center text-indigo-700 mb-6">
        {isRegistering ? 'Create an Account' : 'Welcome Back'}
      </h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        {isRegistering && (
          <div>
            <label className="block text-sm font-medium text-gray-700">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="mt-1 w-full border border-gray-300 p-2 rounded-md"
            />
          </div>
        )}

        <div>
          <label className="block text-sm font-medium text-gray-700">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="mt-1 w-full border border-gray-300 p-2 rounded-md"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Password</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
            className="mt-1 w-full border border-gray-300 p-2 rounded-md"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700 transition"
        >
          {isRegistering ? 'Register' : 'Login'}
        </button>
      </form>

      <p className="text-sm text-center mt-4 text-gray-600">
        {isRegistering ? 'Already have an account?' : "Don't have an account?"}{' '}
        <button
          type="button"
          className="text-indigo-600 hover:underline"
          onClick={() => setIsRegistering(!isRegistering)}
        >
          {isRegistering ? 'Login here' : 'Register here'}
        </button>
      </p>
    </div>
  )
}

export default Login
