import React from 'react'
import '../../css/styles.css'
import { Container, Navbar, Nav ,NavDropdown} from 'react-bootstrap'

function NavBar() {
  return (  
    <Navbar sticky='top' collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container className=''>
            <Navbar.Brand href="#home">
                <img className='navbar-logo' src='./assets/img/mahadi-logo3.png' />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                <Nav.Link href="#header" className='fs-5'>Home</Nav.Link>
                <Nav.Link href="#portfolio"  className='fs-5'>Project</Nav.Link>
                <Nav.Link href="#skills"  className='fs-5'>Skills</Nav.Link>
                <Nav.Link href="#about"  className='fs-5'>About</Nav.Link>
                <Nav.Link href="#contact"  className='fs-5'>Contact</Nav.Link>
                </Nav>
                <Nav>
                <Nav.Link  className='fs-5' target='_blank' href="https://facebook.com/johnn.hasan"><i className="fab fa-fw fa-facebook-f"/></Nav.Link>
                <Nav.Link  className='fs-5' target='_blank' href="https://github.com/mahadi54"><i className="fab fa-fw fa-github"/></Nav.Link>
                <Nav.Link  className='fs-5' target='_blank' href="https://linkedin.com/mahadi54"><i className="fab fa-fw fa-linkedin-in"/></Nav.Link>
                <Nav.Link  className='fs-5' target='_blank' href="https://dribble.com/mahadi54"><i className="fab fa-fw fa-dribbble"/></Nav.Link>
               
                </Nav>
            </Navbar.Collapse>  
        </Container>
    </Navbar>

  )
}

export default NavBar


// <nav className="navbar navbar-expand-lg bg-secondary text-uppercase fixed-top" id="mainNav">
    //     <div className="container">
    //         <a className="navbar-brand" href="#page-top">
    //             <img className='navbar-logo' src='./assets/img/mahadi-logo3.png' />
    //         </a>
    //         <button className="navbar-toggler text-uppercase font-weight-bold bg-primary text-white rounded" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
    //             Menu
    //             <i className="fas fa-bars"></i>
    //         </button>
    //         <div className="collapse navbar-collapse" id="navbarResponsive">
    //             <ul className="navbar-nav ms-auto">
    //                 <li className="nav-item mx-0 mx-lg-1"><a className="nav-link py-3 px-0 px-lg-3 rounded" href="#header">Home</a></li>
    //                 <li className="nav-item mx-0 mx-lg-1"><a className="nav-link py-3 px-0 px-lg-3 rounded" href="#portfolio">Project</a></li>
    //                 <li className="nav-item mx-0 mx-lg-1"><a className="nav-link py-3 px-0 px-lg-3 rounded" href="#skills">Skills</a></li>
    //                 <li className="nav-item mx-0 mx-lg-1"><a className="nav-link py-3 px-0 px-lg-3 rounded" href="#about">About</a></li>
    //                 <li className="nav-item mx-0 mx-lg-1"><a className="nav-link py-3 px-0 px-lg-3 rounded" href="#contact">Contact</a></li>
    //             </ul>
    //         </div>
    //     </div>
    // </nav>