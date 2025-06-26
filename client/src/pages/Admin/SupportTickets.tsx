import { useEffect, useState } from 'react'

type TicketStatus = 'open' | 'closed'

interface Ticket {
  id: string
  user: string
  subject: string
  message: string
  status: TicketStatus
}

const SupportTickets = () => {
  const [tickets, setTickets] = useState<Ticket[]>([])

  useEffect(() => {
    const mockTickets = [
      {
        id: 't1',
        user: 'Kavya R.',
        subject: 'Booking not showing up',
        message: 'My Goa booking isn’t appearing in the dashboard.',
        status: 'open' as const,
      },
      {
        id: 't2',
        user: 'Vikram N.',
        subject: 'Payment not confirmed',
        message: 'Paid but no confirmation email.',
        status: 'closed' as const,
      },
    ] satisfies Ticket[]

    setTickets(mockTickets)
  }, [])

  const handleResolve = (id: string) => {
    setTickets((prev) =>
      prev.map((ticket) =>
        ticket.id === id ? { ...ticket, status: 'closed' } : ticket
      )
    )
    console.log(`Ticket ${id} marked as resolved ✅`)
  }

  const getStatusBadge = (status: TicketStatus) => {
    const base = 'px-3 py-1 rounded-full text-xs font-semibold'
    return status === 'open'
      ? `${base} bg-yellow-100 text-yellow-800`
      : `${base} bg-green-100 text-green-800`
  }

  return (
    <section className="max-w-5xl mx-auto mt-12 px-4">
      <h2 className="text-4xl font-extrabold text-indigo-700 text-center mb-10">
        🛠️ Support Tickets
      </h2>

      {tickets.length === 0 ? (
        <p className="text-center text-gray-500 dark:text-gray-300 text-lg">
          🎉 No active support tickets right now.
        </p>
      ) : (
        <div className="space-y-6">
          {tickets.map((ticket) => (
            <div
              key={ticket.id}
              className="bg-white dark:bg-zinc-800 p-6 rounded-xl shadow-md flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4"
            >
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  {ticket.subject}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  From: {ticket.user}
                </p>
                <p className="mt-2 text-gray-800 dark:text-gray-200">
                  {ticket.message}
                </p>
                <p className="mt-3">
                  <span className={getStatusBadge(ticket.status)}>
                    {ticket.status.toUpperCase()}
                  </span>
                </p>
              </div>

              {ticket.status === 'open' && (
                <button
                  onClick={() => handleResolve(ticket.id)}
                  className="bg-green-600 hover:bg-green-700 text-white text-sm font-medium px-4 py-2 rounded-md transition"
                >
                  ✅ Mark Resolved
                </button>
              )}
            </div>
          ))}
        </div>
      )}
    </section>
  )
}

export default SupportTickets
