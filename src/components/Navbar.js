import React from 'react';
import { NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


function Navbar() {
    const navigate = useNavigate();
const carts = JSON.parse(localStorage.getItem('cart')) || []
const handleCartNavigation = () => {
    navigate('/cart');
  };
    
    return (
        <>
            <div className="header-bottom container mx-auto flex   flex-col md:flex-row  pb-2 items-center">
               

                <NavLink className="display-bottom flex m-0 md:mb-0" to="/Home"><img src='https://icms-image.slatic.net/images/ims-web/e650d6ca-1841-4646-b0e9-4ddbf2beb731.png' className='img-logo'></img></NavLink>

               
                <div className="input-group bg-white w-3/5 ms-4 m-0">
                        <input type="text" className="ms-1 form-control" placeholder="Search in Daraz" aria-label='Search in Daraz' />
                        <button type="button" id="button-addon2" className='rounded-3 m-1' > <i className="fa fa-search" aria-hidden="true"></i></button>
                    </div>
               
                <nav className=" ms-1 display-bottom md:ml-auto md:mr-auto flex  items-center text-lg justify-center m-0  ">
                    
                        <NavLink className=" Navbar-border  mr-5 py-1 px-3  m-0" to="/LOGIN"><i className="fa fa-user me-1" aria-hidden="true"></i>Login</NavLink>
                        <span className='mr-2' >|</span>
                        <NavLink className="Navbar-border mr-5 py-1 px-3 m-0" to="/SIGNUP">Signup</NavLink>
                       
                        <div className="Navbar-border  me-0 p-1 ">
                            <div className="dropdown mr-3">
                                <NavLink className=" Navbar-border  d-flex" href="/" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false"><i className="me-1 awesome-icon fa fa-globe text-white"></i>EN
                                    <i className="fa fa-angle-down text-white" aria-hidden="true"></i></NavLink>
                                <ul className="dropdown-menu bg-white" aria-labelledby="dropdownMenuButton1">
                                    <li className="text-li pt-2 ps-2">Select Language</li>
                                    <li><a className="dropdown-item" href="#"> <input className="form-check-input me-2" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />UR / Urdu</a></li>
                                    <li><a className="dropdown-item pb-2" href="#"><input className="form-check-input me-2" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked />EN / English</a></li>
                                </ul>
                            </div>
                        </div>
                        <NavLink to="/Cart" onClick={handleCartNavigation} className="Navbar-border cart-btn  py-1 px-2">
                                <i className="fa fa-shopping-cart text-white"></i>
                                <span className='cart-item-value'>{carts.length}</span>      
                        </NavLink>
                </nav> 
            </div>
        </>
    )
}

export default Navbar