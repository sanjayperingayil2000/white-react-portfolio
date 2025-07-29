import React from 'react'

const Info = () => {
    return (
        <div className='about__info grid'>
            <div className='about__box'>
                <i className="uil uil-award about__icon"></i>

                <h3 className='about__title'>Experience</h3>
                <span className='about__subtitle'>4+ Years Working</span>
            </div>

            <div className='about__box'>
                <i className="uil uil-briefcase-alt about__icon"></i>

                <h3 className='about__title'>Completed</h3>
                <span className='about__subtitle'>18 + Projects</span>
            </div>

            <div className='about__box'>
                <i className='bx bx-headphone-mic about__icon'></i> 

                <h3 className='about__title'>Support</h3>
                <span className='about__subtitle'>Online 24/7</span>
            </div>

        </div>
    )
}

export default Info