function Tabs({ activeTab, setActiveTab }) {
  const tabs = ['Overview', 'Analytics', 'Reports']

  return (
    <div className="flex gap-4 border-b border-gray-200 mb-6">
      {tabs.map((tab) => (
        <button
          key={tab}
          onClick={() => setActiveTab(tab)}
          className={`pb-3 px-2 font-medium transition ${
            activeTab === tab
              ? 'border-b-2 border-blue-500 text-blue-500'
              : 'text-gray-500'
          }`}
        >
          {tab}
        </button>
      ))}
    </div>
  )
}

export default Tabs