function Header({ toggleSidebar }) {
  return (
    <div className="bg-white shadow px-6 py-4 flex justify-between items-center">
      <div className="flex items-center gap-4">
        <button
          onClick={toggleSidebar}
          className="md:hidden text-2xl"
        >
          ☰
        </button>

        <h2 className="text-xl font-semibold">
          Welcome Back
        </h2>
      </div>

      <button className="bg-blue-500 text-white px-4 py-2 rounded-lg">
        Profile
      </button>
    </div>
  )
}

export default Header