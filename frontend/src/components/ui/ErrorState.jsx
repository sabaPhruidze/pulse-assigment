const ErrorState = ({ message }) => {
  if (!message) return null
  return (
    <div className="rounded-lg border border-red-200 bg-red-50 p-4 text-red-700">
      {message}
    </div>
  )
}

export default ErrorState