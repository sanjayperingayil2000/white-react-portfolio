import React from 'react'
import './skills.css'

const Frontend = () => {
    return (
        <div className='skills__content'>
            <h3 className='skills__title'>Frontend Developer</h3>

            <div className='skills__box'>
                <div className='skills__group'>
                    <div className='skills__data'>
                        <i className='bx bx-badge-check'></i>

                        <div>
                            <h3 className='skills__name'>HTML</h3>
                            <span className='skills__level'>Advanced</span>
                        </div>
                    </div>

                    <div className='skills__data'>
                        <i className='bx bx-badge-check'></i>

                        <div>
                            <h3 className='skills__name'>CSS</h3>
                            <span className='skills__level'>Advanced</span>
                        </div>
                    </div>

                    <div className='skills__data'>
                        <i className='bx bx-badge-check'></i>

                        <div>
                            <h3 className='skills__name'>Javascript</h3>
                            <span className='skills__level'>Professional</span>
                        </div>
                    </div>

                    <div className='skills__data'>
                        <i className='bx bx-badge-check'></i>

                        <div>
                            <h3 className='skills__name'>Wordpress</h3>
                            <span className='skills__level'>Intermediate</span>
                        </div>
                    </div>
                </div>

                <div className='skills__group'>
                    <div className='skills__data'>
                        <i className='bx bx-badge-check'></i>

                        <div>
                            <h3 className='skills__name'>React</h3>
                            <span className='skills__level'>Advanced</span>
                        </div>
                    </div>

                    <div className='skills__data'>
                        <i className='bx bx-badge-check'></i>

                        <div>
                            <h3 className='skills__name'>Next</h3>
                            <span className='skills__level'>Advanced</span>
                        </div>
                    </div>

                    <div className='skills__data'>
                        <i className='bx bx-badge-check'></i>

                        <div>
                            <h3 className='skills__name'>Bootstrap</h3>
                            <span className='skills__level'>Advanced</span>
                        </div>
                    </div>

                    <div className='skills__data'>
                        <i className='bx bx-badge-check'></i>

                        <div>
                            <h3 className='skills__name'>Tailwind</h3>
                            <span className='skills__level'>Intermediate</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Frontend