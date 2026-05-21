import { useState } from 'react'
import Sidebar from './components/layout/Sidebar'
import Header from './components/layout/Header'
import Card from './components/dashboard/Card'
import SearchBar from './components/common/SearchBar'
import Tabs from './components/dashboard/Tabs'
import DataTable from './components/dashboard/DataTable'
import AnalyticsChart from './components/dashboard/AnalyticsChart'
import UsersList from './components/dashboard/UsersList'

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  const [activeTab, setActiveTab] = useState('Overview')
  const [darkMode, setDarkMode] = useState(false)

  return (
    <div
  className={`flex min-h-screen ${
    darkMode
      ? 'bg-slate-900 text-white'
      : 'bg-gray-100 text-black'
  }`}
>
      <Sidebar isOpen={isSidebarOpen} />

      <div className="flex-1 md:ml-64">
        <Header
          toggleSidebar={() =>
            setIsSidebarOpen(!isSidebarOpen)
          }
        />

        <div className="p-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6 gap-4">
            <h1 className="text-3xl font-bold">
              Dashboard Overview
            </h1>

            <SearchBar />
            <button
  onClick={() => setDarkMode(!darkMode)}
  className="bg-black text-white px-4 py-2 rounded-lg"
>
  {darkMode ? 'Light Mode ☀️' : 'Dark Mode 🌙'}
</button>
          </div>

          <Tabs
            activeTab={activeTab}
            setActiveTab={setActiveTab}
          />

          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 mb-6">
            {activeTab === 'Overview' && (
              <p className="text-gray-700">
                This is the overview section showing dashboard summary.
              </p>
            )}

            {activeTab === 'Analytics' && (
              <p className="text-gray-700">
                Analytics data and charts will appear here.
              </p>
            )}

            {activeTab === 'Reports' && (
              <p className="text-gray-700">
                Reports and downloadable files appear here.
              </p>
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card title="Revenue" value="$12,500" />

            <Card title="Users" value="1,240" />

            <Card title="Orders" value="320" />

            <Card title="Growth" value="+18%" />
          </div>

          <div className="bg-white mt-8 p-6 rounded-xl shadow-sm border border-gray-100">
            <h2 className="text-xl font-semibold mb-4">
              Recent Activity
            </h2>

            <ul className="space-y-3 text-gray-600">
              <li>User John purchased a product</li>

              <li>New user registered</li>

              <li>Monthly sales report generated</li>

              <li>Admin updated dashboard settings</li>
            </ul>
          </div>

          <DataTable />
          <AnalyticsChart />
          <UsersList />
        </div>
      </div>
    </div>
  )
}

export default App