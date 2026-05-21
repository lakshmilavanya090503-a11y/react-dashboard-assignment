function Card({ title, value }) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-lg transition duration-300">
      <h3 className="text-gray-500 text-sm">
        {title}
      </h3>

      <p className="text-3xl font-bold mt-3">
        {value}
      </p>
    </div>
  )
}

export default Card