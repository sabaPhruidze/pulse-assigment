// This is for not repeating same code in different components of Dashboard
const Card = ({ title, right, children }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow border border-gray-100">
      <div className="flex items-start justify-between gap-4 mb-4">
        <h2 className="text-lg font-semibold text-gray-900">{title}</h2>
        {right}
      </div>
      {children}
    </div>
  )
}

export default Card