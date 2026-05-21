function DataTable() {
  const users = [
    {
      id: 1,
      name: 'John Doe',
      email: 'john@example.com',
      status: 'Active',
    },
    {
      id: 2,
      name: 'Sarah Smith',
      email: 'sarah@example.com',
      status: 'Pending',
    },
    {
      id: 3,
      name: 'Michael Brown',
      email: 'michael@example.com',
      status: 'Inactive',
    },
  ]

  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 mt-8 overflow-x-auto">
      <h2 className="text-xl font-semibold mb-4">
        Users Table
      </h2>

      <table className="w-full border-collapse">
        <thead>
          <tr className="border-b border-gray-200 text-left">
            <th className="py-3">Name</th>
            <th className="py-3">Email</th>
            <th className="py-3">Status</th>
          </tr>
        </thead>

        <tbody>
          {users.map((user) => (
            <tr
              key={user.id}
              className="border-b border-gray-100 hover:bg-gray-50 transition"
            >
              <td className="py-4">{user.name}</td>

              <td className="py-4">{user.email}</td>

              <td className="py-4">
                <span
                  className={`
                    px-3 py-1 rounded-full text-sm
                    ${
                      user.status === 'Active'
                        ? 'bg-green-100 text-green-700'
                        : user.status === 'Pending'
                        ? 'bg-yellow-100 text-yellow-700'
                        : 'bg-red-100 text-red-700'
                    }
                  `}
                >
                  {user.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default DataTable