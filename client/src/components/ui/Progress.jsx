function Progress({ value, className = "" }) {
    return (
      <div className={`h-2 w-full bg-gray-200 rounded-full overflow-hidden ${className}`}>
        <div className="h-full bg-blue-600 rounded-full" style={{ width: `${value}%` }}></div>
      </div>
    )
  }
  
  export default Progress
  
  