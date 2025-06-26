import React, { useState } from 'react'
import './services.css'

const Services = () => {
    const [toggleState, setToggleState] = useState(0);

    const toggleTab = (index) => {
        setToggleState(index);
    };

  return (
    <section className='services section' id='services'>
        <h2 className='section__title'>Services</h2>
        <span className='section__subtitle'>What i offer</span>

        <div className='services__container container grid'>
            <div className='services__content'>
                <div>
                    <i className='uil uil-web-grid services__icon'></i>
                    <h3 className='services__title'>Full Stack <br/> Web Apps</h3>
                </div>

                <span className='services__button' onClick={() => toggleTab(1)}>View More
                <i className='uil uil-arrow-right services__button-icon'></i>
                </span>

                <div className={toggleState === 1 ? "services__modal active-modal" : "services__modal"}>
                    <div className='services__modal-content'>
                        <i onClick={() => toggleTab(0)} className='uil uil-times services__modal-close'></i>
                        <h3 className='services__modal-title'>Full Stack Web Application</h3>
                        <p className='services__modal-description'>Scalable, responsive, and modern web applications built from scratch using the latest fullstack technologies.</p>

                        <ul className='services__modal-services grid'>
                            <li className='services__modal-service'>
                                <i className='uil uil-check-circle services__modal-icon'></i>
                                <p className='services__modal-info'>End-to-end development with React.js, Next.js, Node.js & databases like MongoDB/PostgreSQL</p>
                            </li>

                            <li className='services__modal-service'>
                                <i className='uil uil-check-circle services__modal-icon'></i>
                                <p className='services__modal-info'>Fully responsive, SEO-friendly, and user-centric designs</p>
                            </li>

                            <li className='services__modal-service'>
                                <i className='uil uil-check-circle services__modal-icon'></i>
                                <p className='services__modal-info'>RESTful & GraphQL API integration with secure authentication</p>
                            </li>

                            <li className='services__modal-service'>
                                <i className='uil uil-check-circle services__modal-icon'></i>
                                <p className='services__modal-info'>Admin dashboards, content management, and analytics-ready setups</p>
                            </li>

                            <li className='services__modal-service'>
                                <i className='uil uil-check-circle services__modal-icon'></i>
                                <p className='services__modal-info'>Clean, maintainable codebase with Git and deployment pipelines</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className='services__content'>
                <div>
                    <i className='uil uil-arrow services__icon'></i>
                    <h3 className='services__title'>Website <br/> Maintenance</h3>
                </div>

                <span className='services__button' onClick={() => toggleTab(2)}>View More
                <i className='uil uil-arrow-right services__button-icon'></i>
                </span>

                <div className={toggleState === 2 ? "services__modal active-modal" : "services__modal"}>
                    <div className='services__modal-content'>
                        <i onClick={() => toggleTab(0)} className='uil uil-times services__modal-close'></i>
                        <h3 className='services__modal-title'>Ensuring Your Website Runs Smoothly 24/7</h3>
                        <p className='services__modal-description'>Reliable ongoing support to keep your website secure, updated, and running smoothly at all times.</p>

                        <ul className='services__modal-services grid'>
                            <li className='services__modal-service'>
                                <i className='uil uil-check-circle services__modal-icon'></i>
                                <p className='services__modal-info'>Regular bug fixes, performance tuning, and content updates</p>
                            </li>

                            <li className='services__modal-service'>
                                <i className='uil uil-check-circle services__modal-icon'></i>
                                <p className='services__modal-info'>Uptime monitoring, backups, and security enhancements</p>
                            </li>

                            <li className='services__modal-service'>
                                <i className='uil uil-check-circle services__modal-icon'></i>
                                <p className='services__modal-info'>CMS adjustments or plugin/module integration</p>
                            </li>

                            <li className='services__modal-service'>
                                <i className='uil uil-check-circle services__modal-icon'></i>
                                <p className='services__modal-info'>Troubleshooting deployment issues and broken functionalities</p>
                            </li>

                            <li className='services__modal-service'>
                                <i className='uil uil-check-circle services__modal-icon'></i>
                                <p className='services__modal-info'>Adding new sections or pages without disrupting existing systems</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className='services__content'>
                <div>
                    <i className='uil uil-edit services__icon'></i>
                    <h3 className='services__title'>Graphic <br /> Design</h3>
                </div>

                <span className='services__button' onClick={() => toggleTab(3)}>View More
                <i className='uil uil-arrow-right services__button-icon'></i>
                </span>

                <div className={toggleState === 3 ? "services__modal active-modal" : "services__modal"}>
                    <div className='services__modal-content'>
                        <i onClick={() => toggleTab(0)} className='uil uil-times services__modal-close'></i>
                        <h3 className='services__modal-title'>Designs That Speak for Your Brand</h3>
                        <p className='services__modal-description'>Creative and brand-aligned visuals for digital and print that leave a lasting impression.</p>

                        <ul className='services__modal-services grid'>
                            <li className='services__modal-service'>
                                <i className='uil uil-check-circle services__modal-icon'></i>
                                <p className='services__modal-info'>Custom logo, poster, and brochure design</p>
                            </li>

                            <li className='services__modal-service'>
                                <i className='uil uil-check-circle services__modal-icon'></i>
                                <p className='services__modal-info'>Social media creatives with consistent visual branding</p>
                            </li>

                            <li className='services__modal-service'>
                                <i className='uil uil-check-circle services__modal-icon'></i>
                                <p className='services__modal-info'>Clean, professional, and pixel-perfect designs</p>
                            </li>

                            <li className='services__modal-service'>
                                <i className='uil uil-check-circle services__modal-icon'></i>
                                <p className='services__modal-info'>Fast delivery with multiple format exports (PNG, PDF, SVG)</p>
                            </li>

                            <li className='services__modal-service'>
                                <i className='uil uil-check-circle services__modal-icon'></i>
                                <p className='services__modal-info'>Social media marketing visuals for brand engagement and promotions</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>        
    </section>
  )
}

export default Services