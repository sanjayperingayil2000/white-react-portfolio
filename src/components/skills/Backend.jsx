import React from 'react'
import './skills.css'

const Backend = () => {
  return (
    <div className='skills__content'>
            <h3 className='skills__title'>Backend Developer</h3>

            <div className='skills__box'>
                <div className='skills__group'>
                    <div className='skills__data'>
                        <i className='bx bx-badge-check'></i>

                        <div>
                            <h3 className='skills__name'>Node Js</h3>
                            <span className='skills__level'>Advanced</span>
                        </div>
                    </div>

                    <div className='skills__data'>
                        <i className='bx bx-badge-check'></i>

                        <div>
                            <h3 className='skills__name'>Express</h3>
                            <span className='skills__level'>Intermediate</span>
                        </div>
                    </div>

                    <div className='skills__data'>
                        <i className='bx bx-badge-check'></i>

                        <div>
                            <h3 className='skills__name'>Nest Js</h3>
                            <span className='skills__level'>Basic</span>
                        </div>
                    </div>

                    <div className='skills__data'>
                        <i className='bx bx-badge-check'></i>

                        <div>
                            <h3 className='skills__name'>AWS</h3>
                            <span className='skills__level'>Intermediate</span>
                        </div>
                    </div>
                </div>

                <div className='skills__group'>
                    <div className='skills__data'>
                        <i className='bx bx-badge-check'></i>

                        <div>
                            <h3 className='skills__name'>Mongodb</h3>
                            <span className='skills__level'>Advanced</span>
                        </div>
                    </div>

                    <div className='skills__data'>
                        <i className='bx bx-badge-check'></i>

                        <div>
                            <h3 className='skills__name'>Postgresql</h3>
                            <span className='skills__level'>Intermediate</span>
                        </div>
                    </div>

                    <div className='skills__data'>
                        <i className='bx bx-badge-check'></i>

                        <div>
                            <h3 className='skills__name'>GraphQL</h3>
                            <span className='skills__level'>Intermediate</span>
                        </div>
                    </div>
                    
                    <div className='skills__data'>
                        <i className='bx bx-badge-check'></i>

                        <div>
                            <h3 className='skills__name'>REST API</h3>
                            <span className='skills__level'>Advanced</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default Backend