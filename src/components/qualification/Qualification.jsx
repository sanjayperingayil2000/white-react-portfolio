import React, { useState } from 'react'
import './qualification.css'

const Qualification = () => {
        const [toggleState, setToggleState] = useState(1);
    
        const toggleTab = (index) => {
            setToggleState(index);
        };
  return (
    <section className='qualification section'>
        <h2 className='section__title'>Qualification</h2>
        <span className='section__subtitle'>My personal journey</span>

        <div className='qualification__container container'>
            <div className='qualification__tabs'>
                <div className={toggleState === 1 ? "qualification__button qualification__active button--flex" : "qualification__button button--flex"} onClick={() => toggleTab(1)}>
                    <i className='uil uil-graduation-cap qualification__icon'></i> Education
                </div>

                <div className={toggleState === 2 ? "qualification__button qualification__active button--flex" : "qualification__button button--flex"} onClick={() => toggleTab(2)}>
                    <i className='uil uil-briefcase-alt qualification__icon'></i> Experience
                </div>
            </div>

            <div className='qualification__sections'>
                <div className={toggleState === 1 ? "qualification__content qualification__content-active" : "qualification__content"}>
                    <div className='qualification__data'>
                        <div>
                            <h3 className='qualification__title'>Bachlor's Degree</h3>
                            <span className='qualification__subtitle'>A.P.J Abdul kalam Technological  university</span>
                            <div className='qualification__calendar'>
                                <i className='uil uil-calendar-alt'></i> 2017 - 2021
                            </div>
                        </div>

                        <div>
                            <span className='qualification__rounder'></span>
                            <span className='qualification__line'></span>
                        </div>
                    </div>

                    <div className='qualification__data'>
                    <div></div>

                    <div>
                        <span className='qualification__rounder'></span>
                        <span className='qualification__line'></span>
                    </div>

                        <div>
                            <h3 className='qualification__title'>Diploma</h3>
                            <span className='qualification__subtitle'>Kerala Academy for Skills Excellence (KASE)</span>
                            <div className='qualification__calendar'>
                                <i className='uil uil-calendar-alt'></i> 2017 - 2019
                            </div>
                        </div>

                    </div>

                    <div className='qualification__data'>
                        <div>
                            <h3 className='qualification__title'>High School</h3>
                            <span className='qualification__subtitle'>Kerala State Board</span>
                            <div className='qualification__calendar'>
                                <i className='uil uil-calendar-alt'></i> 2015 - 2017
                            </div>
                        </div>

                        <div>
                            <span className='qualification__rounder'></span>
                            <span className='qualification__line'></span>
                        </div>
                    </div>
                </div>

                <div className={toggleState === 2 ? "qualification__content qualification__content-active" : "qualification__content"}>
                    <div className='qualification__data'>
                        <div>
                            <h3 className='qualification__title'>Junior Software Engineer</h3>
                            <span className='qualification__subtitle'>Softnotions Technologies Private Limited</span>
                            <div className='qualification__calendar'>
                                <i className='uil uil-calendar-alt'></i> 2023 - 2025
                            </div>
                        </div>

                        <div>
                            <span className='qualification__rounder'></span>
                            <span className='qualification__line'></span>
                        </div>
                    </div>

                    <div className='qualification__data'>
                    <div></div>

                    <div>
                        <span className='qualification__rounder'></span>
                        <span className='qualification__line'></span>
                    </div>

                        <div>
                            <h3 className='qualification__title'>Full Stack developer Program</h3>
                            <span className='qualification__subtitle'>Preb bytes.com</span>
                            <div className='qualification__calendar'>
                                <i className='uil uil-calendar-alt'></i> 2022 - 2023
                            </div>
                        </div>

                    </div>

                    <div className='qualification__data'>
                        <div>
                            <h3 className='qualification__title'>Graphic Designer</h3>
                            <span className='qualification__subtitle'>Calypso Innovative Branding Partner</span>
                            <div className='qualification__calendar'>
                                <i className='uil uil-calendar-alt'></i> 2021 - 2022
                            </div>
                        </div>

                        <div>
                            <span className='qualification__rounder'></span>
                            <span className='qualification__line'></span>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </section>
  )
}

export default Qualification