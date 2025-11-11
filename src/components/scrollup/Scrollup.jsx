import React from 'react'
import './scrollup.css'

const Scrollup = () => {
    // 1. Logic to show/hide the button
    window.addEventListener("scroll", function () {
        const scrollUp = document.querySelector(".scrollup");
        if (this.scrollY >= 560) scrollUp.classList.add("show-scroll");
        else scrollUp.classList.remove("show-scroll")
    });
    
    // 2. Function to handle the click (scroll to top)
    const scrollUpToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth' 
        });
    };

    return (
        <button className='scrollup' onClick={scrollUpToTop}> 
            <i className='uil uil-arrow-up scrollup__icon'></i>
        </button>
    )
}

export default Scrollup