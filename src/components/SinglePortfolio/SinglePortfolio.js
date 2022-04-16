import React from 'react'
import '../../css/styles.css'


function SinglePortfolio(props) {

  return (
    
      <div className="col-md-6 col-lg-4 mb-5">
        <div className="portfolio-item mx-auto" data-bs-toggle="modal" data-bs-target={`#${props.singlePort.port}`}>
            <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                <div className="portfolio-item-caption-content text-center text-white"><i className="fas fa-plus fa-3x"></i></div>
            </div>
            <img className="img-fluid" src={props.singlePort.img} alt="..." />
        </div>
        



        <div className="portfolio-modal modal fade" id={props.singlePort.port} tabIndex="-1" aria-labelledby={props.singlePort.port} aria-hidden="true">
            <div className="modal-dialog modal-xl">
                <div className="modal-content">
                    <div className="modal-header border-0"><button className="btn-close" type="button" data-bs-dismiss="modal" aria-label="Close"></button></div>
                    <div className="modal-body text-center pb-5">
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-lg-7">
                                
                                    <h2 className="portfolio-modal-title text-secondary text-uppercase mb-0">{props.singlePort.title}</h2>
                                  
                                    <div className="divider-custom">
                                        <div className="divider-custom-line"></div>
                                        <div className="divider-custom-icon"><i className="fas fa-star"></i></div>
                                        <div className="divider-custom-line"></div>
                                    </div>
                                
                                    <img className="img-fluid rounded mb-5" src={props.singlePort.img} alt="..." />
                                   
                                    <p className="mb-4">{props.singlePort.des}</p>
                                    <div className='row'>
                                        <div className='column d-flex  justify-content-around'>
                                            <button className="btn btn-primary">  
                                            <a className='modal-button' target='_blank' href={props.singlePort.live}>Live</a>
                                            </button>

                                            <button className="btn btn-primary">
                                              <a className='modal-button' target='_blank' href={props.singlePort.github}>Code</a>
                                            </button>

                                        </div>
                                    </div>
                                    {/* <button className="btn btn-primary" data-bs-dismiss="modal">
                                        <i className="fas fa-xmark fa-fw"></i>
                                        Close Window
                                    </button> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

   


  )
}

export default SinglePortfolio