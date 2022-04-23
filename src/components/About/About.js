import React from 'react'
import '../../css/styles.css'

function About() {
  return (
    <section className="page-section about bg-dark text-white mb-0" id="about">
            <div className="container">
              
                <h2 className="page-section-heading text-center text-uppercase text-white">About</h2>
                
                <div className="divider-custom divider-light">
                    <div className="divider-custom-line"></div>
                    <div className="divider-custom-icon"><i className="fa-solid fa-address-card"></i></div>
                    <div className="divider-custom-line"></div>
                </div>
                
                <div className="row">
                    <div className="col-lg-4 ms-auto"><p style={{textAlign: 'justify'}} className="lead">Hi!  I am a computer science engineer. I have very good knowledge in web design and development. I know how to make websites and web apps with HTML, CSS, Bootstrap, Javascript, React js. I also have very good knowledge about ethical hacking.</p></div>
                    <div className="col-lg-4 me-auto"><p style={{textAlign: 'justify'}} className="lead">Seeking a full time position in a well-established IT company that offers professional growth and opportunity to learn and enrich my ability!</p></div>
                </div>
              
                <div className="text-center mt-4">
                    <a className="btn btn-xl btn-outline-light" href="">
                        <i className="fas fa-download me-2"></i>
                        Download CV!
                    </a>
                </div>
            </div>
        </section>
  )
}

export default About