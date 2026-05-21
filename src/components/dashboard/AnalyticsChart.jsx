function AnalyticsChart() {
  const data = [
    { month: 'Jan', height: 'h-20' },
    { month: 'Feb', height: 'h-32' },
    { month: 'Mar', height: 'h-24' },
    { month: 'Apr', height: 'h-40' },
    { month: 'May', height: 'h-28' },
    { month: 'Jun', height: 'h-36' },
  ]

  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 mt-8">
      <h2 className="text-xl font-semibold mb-6">
        Analytics Overview
      </h2>

      <div className="flex items-end justify-between h-52 gap-4">
        {data.map((item) => (
          <div
            key={item.month}
            className="flex flex-col items-center flex-1"
          >
            <div
              className={`w-full bg-blue-500 rounded-t-lg ${item.height}`}
            ></div>

            <span className="mt-2 text-sm text-gray-500">
              {item.month}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default AnalyticsChart