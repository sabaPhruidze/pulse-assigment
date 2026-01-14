// This is for not repeating same code in different components of Dashboard
const Card = ({ title, right, children }) => {
  return (
    <div className="bg-white p-4 sm:p-6 rounded-lg shadow border border-gray-100">
  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 sm:gap-4 mb-4">
    <h2 className="text-base sm:text-lg font-semibold text-gray-900">{title}</h2>
    {right}
  </div>
  {children}
</div>
  )
}

export default Card