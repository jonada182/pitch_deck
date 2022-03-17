import React from 'react'

const Slide = ({ slide }) => {
  return (
    <div className="app-slide">
      <img src={import.meta.env.VITE_API_URL + slide.file_path} alt={`Slide ${slide.order}`} />
    </div>
  )
}

export default Slide