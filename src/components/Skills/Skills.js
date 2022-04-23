import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Skills() {
  return (
    <section className="page-section skills bg-primary text-white" id="skills">
            <div className="container">
                <h2 className="page-section-heading text-center text-uppercase text-white mb-0">Skills</h2>
                
                <div className="divider-custom divider-light">
                    <div className="divider-custom-line"></div>
                    <div className="divider-custom-icon"><i className="fa-solid fa-laptop-code"></i></div>
                    <div className="divider-custom-line"></div>
                </div>

                <div className="row justify-content-center">

                    <div className="col-lg-3 col-md-3 col-sm-6 col-xs-6 text-center">
                        <div className="mt-5">
                            <div className="mb-2">
                              <img src='./assets/img/html.svg' style={{width: '30%'}}/>
                            </div>
                            <h3 className="h4 mb-2">HTML</h3>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-3 col-sm-6  col-xs-6 text-center">
                        <div className="mt-5">
                            <img src='./assets/img/css.svg' style={{width: '30%'}}/>
                            <h3 className="h4 mb-2">CSS</h3>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-3 col-sm-6  col-xs-6 text-center">
                        <div className="mt-5">
                            <img src='./assets/img/bootstrap.svg' style={{width: '30%'}}/>
                            <h3 className="h4 mb-2">Bootstrap</h3>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-3 col-sm-6  col-xs-6 text-center">
                        <div className="mt-5">
                        <img src='./assets/img/react.svg' style={{width:'30%'}}/>
                            <h3 className="h4 mb-2">Javascript</h3>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-3 col-sm-6  col-xs-6 text-center">
                        <div className="mt-5">
                        <img src='./assets/img/js.svg' style={{width: '30%'}}/>
                            <h3 className="h4 mb-2">React Js</h3>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-3 col-sm-6  col-xs-6 text-center">
                        <div className="mt-5">
                        <img src='./assets/img/node.svg' style={{width: '30%'}}/>
                            <h3 className="h4 mb-2">Node Js</h3>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-3 col-sm-6  col-xs-6 text-center">
                        <div className="mt-5">
                        <img src='./assets/img/mongo.svg' style={{width: '30%'}}/>
                            <h3 className="h4 mb-2">MongoDB</h3>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-3 col-sm-6  col-xs-6 text-center">
                        <div className="mt-5">
                        <img src='./assets/img/firebase.svg' style={{width: '30%'}}/>
                            <h3 className="h4 mb-2">Firebase</h3>
                        </div>
                    </div>

                   

                   
                   
                </div>
            </div>
        </section>




















    
  )
}


