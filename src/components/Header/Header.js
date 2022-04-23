import React from 'react'
import '../../css/styles.css'
// import Avator from '../../assets/img/avataaars.svg'

function Header() {
  return (
    <header  class=" page-section header  masthead bg-primary text-white text-center" id="header">
            <div class="container d-flex align-items-center flex-column">
               
                <img class="masthead-avatar mb-5" src='./assets/img/mahadi3.png' alt="Mahadi Al Hasan" />
               
                <h1 class="masthead-heading text-uppercase mb-0">Mahadi Al Hasan</h1>
                
                <div class="divider-custom divider-light">
                    <div class="divider-custom-line"></div>
                    <div class="divider-custom-icon"><i class="fa-solid fa-code"></i></div>
                    <div class="divider-custom-line"></div>
                </div>
               
                <p class="masthead-subheading font-weight-light mb-0">Web Designer - Web Developer - Programmer</p>
            </div>
        </header>
  )
}

export default Header