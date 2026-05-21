import { useEffect, useState } from 'react'

function UsersList() {
  const [users, setUsers] = useState([])

  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((data) => {
        setUsers(data)
        setLoading(false)
      })
  }, [])

  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 mt-8">
      <h2 className="text-xl font-semibold mb-4">
        API Users
      </h2>

      {loading ? (
        <p>Loading users...</p>
      ) : (
        <div className="space-y-4">
          {users.slice(0, 5).map((user) => (
            <div
              key={user.id}
              className="border border-gray-100 rounded-lg p-4"
            >
              <h3 className="font-semibold">
                {user.name}
              </h3>

              <p className="text-gray-500 text-sm">
                {user.email}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default UsersList