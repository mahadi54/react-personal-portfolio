import React from 'react'
import '../../css/styles.css'

function Footer() {
  return (
    <footer className="footer text-center">
            <div className="container">
                <div className="row">
                  
                    <div className="col-lg-4 mb-5 mb-lg-0">
                        <h4 className="text-uppercase mb-4">Location</h4>
                        <p className="lead mb-0">
                            129/B (JAMUNA), CDA R/A
                            <br />
                            Agrabad, Chattogram, Bangladesh
                        </p>
                    </div>
           
                    <div className="col-lg-4 mb-5 mb-lg-0">
                        <h4 className="text-uppercase mb-4">Around the Web</h4>
                        <a className="btn btn-outline-light btn-social mx-1" target='_blank' href="https://facebook.com/johnn.hasan"><i class="fab fa-fw fa-facebook-f"></i></a>
                        <a className="btn btn-outline-light btn-social mx-1" target='_blank' href="https://github.com/mahadi54"><i class="fab fa-fw fa-github"></i></a>
                        <a className="btn btn-outline-light btn-social mx-1" target='_blank' href="https://linkedin.com/mahadi54"><i class="fab fa-fw fa-linkedin-in"></i></a>
                        <a className="btn btn-outline-light btn-social mx-1" target='_blank' href="#!"><i class="fab fa-fw fa-dribbble"></i></a>
                    </div>
             
                    <div className="col-lg-4">
                        <h4 className="text-uppercase mb-4">Quick Contact</h4>
                        <p className="lead mb-0">
                            hmahadi505@gmail.com
                            <br />
                            +8801628486080
                        </p>
                    </div>
                </div>
            </div>
        </footer>
  )
}

export default Footer