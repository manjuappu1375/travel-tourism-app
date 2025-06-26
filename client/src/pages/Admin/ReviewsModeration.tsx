import { useEffect, useState } from 'react'

// Types
type ReviewStatus = 'pending' | 'approved' | 'rejected'

interface Review {
  id: string
  user: string
  tourTitle: string
  rating: number
  comment: string
  status: ReviewStatus
}

const ReviewsModeration = () => {
  const [reviews, setReviews] = useState<Review[]>([])

  useEffect(() => {
    // 🔄 Replace this with real API call later
    const mockReviews: Review[] = [
      {
        id: 'rev1',
        user: 'Anjali M.',
        tourTitle: 'Goa Beach Vibes',
        rating: 4,
        comment: 'Loved the food and stay!',
        status: 'pending',
      },
      {
        id: 'rev2',
        user: 'Rahul K.',
        tourTitle: 'Ladakh Adventure',
        rating: 5,
        comment: 'Thrilling and well-organized tour!',
        status: 'pending',
      },
    ]
    setReviews(mockReviews)
  }, [])

  const updateReviewStatus = (id: string, newStatus: ReviewStatus) => {
    const updated = reviews.map((review) =>
      review.id === id ? { ...review, status: newStatus } : review
    )
    setReviews(updated)

    // 👉 Replace with actual API call to reviewService.updateStatus(id, newStatus)
    console.log(`Review ${id} marked as ${newStatus}`)
  }

  const statusBadge = (status: ReviewStatus) => {
    const base = 'text-xs font-medium px-2 py-1 rounded-full'
    switch (status) {
      case 'approved':
        return `${base} bg-green-100 text-green-700`
      case 'rejected':
        return `${base} bg-red-100 text-red-700`
      default:
        return `${base} bg-yellow-100 text-yellow-700`
    }
  }

  return (
    <section className="max-w-6xl mx-auto mt-12 px-4">
      <h2 className="text-4xl font-extrabold text-indigo-700 text-center mb-10 drop-shadow">
        🛡️ Reviews Moderation
      </h2>

      {reviews.length === 0 ? (
        <div className="text-center text-gray-500 dark:text-gray-300 text-lg">
          💤 No reviews to moderate right now!
        </div>
      ) : (
        <div className="space-y-6">
          {reviews.map((review) => (
            <div
              key={review.id}
              className="bg-white dark:bg-zinc-800 p-6 rounded-xl shadow-md transition-all duration-300 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4"
            >
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
                  {review.tourTitle}
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">By {review.user}</p>
                <p className="mt-2 text-gray-700 dark:text-gray-200">Rating: ⭐ {review.rating}</p>
                <p className="mt-2 text-gray-700 dark:text-gray-200">"{review.comment}"</p>
                <p className="mt-2">
                  <span className={statusBadge(review.status)}>Status: {review.status}</span>
                </p>
              </div>

              {review.status === 'pending' && (
                <div className="flex gap-2 mt-4 sm:mt-0">
                  <button
                    onClick={() => updateReviewStatus(review.id, 'approved')}
                    className="bg-green-600 hover:bg-green-700 text-white text-sm px-4 py-2 rounded-md transition"
                  >
                    Approve
                  </button>
                  <button
                    onClick={() => updateReviewStatus(review.id, 'rejected')}
                    className="bg-red-600 hover:bg-red-700 text-white text-sm px-4 py-2 rounded-md transition"
                  >
                    Reject
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </section>
  )
}

export default ReviewsModeration
