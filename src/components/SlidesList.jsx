import React from 'react'
import Slide from './Slide'

const SlidesList = ({ slides }) => {
  
  const slidesList = slides.map((slide) => 
    <Slide key={slide.id} slide={slide} />
  )

  return (
    <div className="app-slides">
      { slidesList }
    </div>
  )
}

export default SlidesList