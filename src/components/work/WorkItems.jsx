import React from 'react'
import './work.css'

const WorkItems = ({item}) => {
  return (
    <div className='work__card' key={item.id}>
        <img src={item.image} alt='' className='work__img' />
        <h3 className='work__title'>{item.title}</h3>
        <a href='#' className='work__button' >
            Demo <i className='uil uil-arrow-right work__button-icon'></i>
        </a>
    </div>
  )
}

export default WorkItems