import React, { useState } from 'react'
import '../../css/styles.css'
import PortfolioData from '../../PortfolioData/PortfolioData'
import SinglePortfolio from '../SinglePortfolio/SinglePortfolio'

function Portfolio(props) {
    
  return (


    <section className="page-section portfolio bg-info" id="portfolio">
            <div className="container" >
                <h2 className="page-section-heading text-center text-uppercase text-secondary mb-0">Project</h2>
                
                <div className="divider-custom">
                    <div className="divider-custom-line"></div>
                    <div className="divider-custom-icon"><i className="fa-solid fa-list-check"></i></div>
                    <div className="divider-custom-line"></div>
                </div>

               <div className='row card-body'>
               
                    {props.elements} 
                

               </div>
            </div>
        </section>

  )
}

export default Portfolio