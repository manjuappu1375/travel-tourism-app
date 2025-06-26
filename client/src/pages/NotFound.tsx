import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-indigo-100 to-blue-50 text-center px-4">
      <h1 className="text-6xl font-bold text-indigo-700 mb-4">404</h1>
      <h2 className="text-2xl font-semibold text-gray-800 mb-2">Page Not Found</h2>
      <p className="text-gray-600 mb-6">
        Sorry, the page you're looking for doesn't exist or has been moved.
      </p>
      <Link
        to="/"
        className="bg-indigo-600 text-white px-6 py-2 rounded-md hover:bg-indigo-700 transition"
      >
        Go to Homepage
      </Link>
    </div>
  )
}

export default NotFound
