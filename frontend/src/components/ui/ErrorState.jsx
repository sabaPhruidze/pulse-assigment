const ErrorState = ({ message }) => {
  return (
    <div className="rounded-lg border border-red-200 bg-red-50 p-4 text-red-700 dark:border-red-900/40 dark:bg-red-950/40 dark:text-red-200">
      {message || 'Something went wrong.'}
    </div>
  )
}

export default ErrorState
