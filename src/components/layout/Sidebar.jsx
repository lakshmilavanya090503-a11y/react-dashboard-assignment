function Sidebar({ isOpen }) {
  return (
    <div
      className={`
        bg-slate-900 text-white w-64 min-h-screen p-5
        fixed md:static top-0 left-0 z-50
        transform transition-transform duration-300
        ${isOpen ? 'translate-x-0' : '-translate-x-full'}
        md:translate-x-0
      `}
    >
      <h1 className="text-2xl font-bold mb-10">
        Dashboard
      </h1>

      <ul className="space-y-4">
        <li className="hover:bg-slate-800 px-3 py-2 rounded-lg cursor-pointer transition">
          Home
        </li>

        <li className="hover:bg-slate-800 px-3 py-2 rounded-lg cursor-pointer transition">
          Analytics
        </li>

        <li className="hover:bg-slate-800 px-3 py-2 rounded-lg cursor-pointer transition">
          Settings
        </li>
      </ul>
    </div> 
  )
}

export default Sidebar
