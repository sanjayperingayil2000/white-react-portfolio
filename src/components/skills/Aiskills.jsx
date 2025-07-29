import React from 'react'
import './skills.css'


const Aiskills = () => {
  return (
    <div className='skills__content'>
            <h3 className='skills__title'>AI (No code)</h3>

            <div className='skills__box'>
                <div className='skills__group'>
                    <div className='skills__data'>
                        <i className='bx bx-badge-check'></i>

                        <div>
                            <h3 className='skills__name'>n8n</h3>
                            <span className='skills__level'>Basic</span>
                        </div>
                    </div>

                    <div className='skills__data'>
                        <i className='bx bx-badge-check'></i>

                        <div>
                            <h3 className='skills__name'>Automation</h3>
                            <span className='skills__level'>Basic</span>
                        </div>
                    </div>

                </div>

                <div className='skills__group'>
                    <div className='skills__data'>
                        <i className='bx bx-badge-check'></i>

                        <div>
                            <h3 className='skills__name'>Agent</h3>
                            <span className='skills__level'>Basic</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default Aiskills