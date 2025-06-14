function Card({ children, className = "" }) {
    return <div className={`bg-[#353535] overflow-hidden shadow rounded-lg ${className}`}>{children}</div>
  }
  
  export default Card
  
  