import React from 'react'
import './footer.css'

const Footer = () => {
  return (
    <footer className='footer'>
        <div className='footer__container container'>
            <h1 className='footer__title'>Sanjay Peringayil</h1>

            <ul className='footer__list'>
                <li>
                    <a href='#about' className='footer__link'>About</a>
                </li>

                <li>
                    <a href='#portfolio' className='footer__link'>Projects</a>
                </li>

                <li>
                    <a href='#testimonials' className='footer__link'>Testimonials</a>
                </li>
            </ul>

            <div className='footer__social'>
                <a href="https://www.instagram.com/sanjayperingayil?igsh=eGJmMzgzcThyMmZm" className='footer__social-link' target="_blank" rel='noreferrer'>
                {/* <i className="bx bxl-facebook"></i> */}
                <i className="uil uil-facebook-f"></i>
            </a>

            <a href="https://www.instagram.com/sanjayperingayil?igsh=eGJmMzgzcThyMmZm" className='footer__social-link' target="_blank" rel='noreferrer'>
                {/* <i className="bx bxl-instagram"></i> */}
                <i className="uil uil-instagram"></i>
            </a>

            <a href="https://www.linkedin.com/in/sanjay-purushothaman-5223aa224/" className='footer__social-link' target="_blank" rel='noreferrer'>
                {/* <i className="bx bxl-twitter"></i> */}
                {/* <i className="bx bx-x-twitter"></i> */}
                {/* <i class="uil uil-twitter-alt"></i> */}
                      {/* <svg
                          width="13"
                          height="13"
                          viewBox="0 0 1200 1227"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className='uil'
                      >
                          <path
                              fill="currentColor"
                              d="M714.204 492.864L1175.27 0H1067.76L663.464 437.76L337.632 0H0.599976L486.6 673.056L0.599976 1226.4H108.024L534.36 758.016L882.12 1226.4H1219.56L714.204 492.864ZM588.336 699.408L543.432 641.76L160.56 84.144H297.384L600.12 488.448L644.712 546.096L1061.76 1143.6H924.024L588.336 699.408Z"
                          />
                      </svg> */}
                <i className="uil uil-linkedin-alt"></i>

            </a>
            </div>

            <span className='footer__copy'>&#169; Crypticalcoder. All rigths reserved</span>
        </div>
    </footer>
  )
}

export default Footer