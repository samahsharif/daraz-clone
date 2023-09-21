import React from 'react'
import { NavLink } from 'react-router-dom'
import Navbar from './Navbar'

function Header() {
  return (
    <>
      <header className="text-white  body-font ">
        <div className="header-top container mx-auto flex flex-wrap  items-center">

          <nav className="md:mr-auto md:ml-4 md:py-1   md:border-gray-400	flex flex-wrap items-center text-xs justify-center">

            <NavLink className="mr-5 nav-hover" to="/Sell">Sell on Daraz</NavLink>
            <NavLink className="mr-5 nav-hover" to="/Affiliate">Daraz Affiliate Program</NavLink>
            <div className="help-ul">
              <div className=" dropdown">
                <NavLink className="mr-5 nav-hover" to="/" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">Help & Support</NavLink>
                <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                  <li><a className="dropdown-item" href="#"><i className="fa fa-users me-2" aria-hidden="true"></i>Help Center</a></li>
                  <li><a className="dropdown-item" href="#"><i className="fa fa-comment me-2" aria-hidden="true"></i>Chat with us</a></li>
                  <li><a className="dropdown-item" href="#"><i className="fa fa-archive me-2" aria-hidden="true"></i>Order</a></li>
                  <li><a className="dropdown-item" href="#"><i className="fa fa-truck me-2"  aria-hidden="true"></i>Shipping & Delivery</a></li>
                  <li><a className="dropdown-item" href="#"><i className="fa fa-credit-card me-2" aria-hidden="true"></i>Payment</a></li>
                  <li><a className="dropdown-item" href="#"><i className="fa fa-repeat me-2" aria-hidden="true"></i>Returns & Refunds</a></li>
                  <li><a className="dropdown-item" href="#"><i class="fa fa-envelope-open me-2" aria-hidden="true"></i>Purchase Protection</a></li>
                </ul>
              </div>
            </div>

          </nav>

          <div className="google-play nav-bg   rounded inline-flex  py-1 px-3 text-xs ms-0 me-0">
            <div className='dropown'>
              <NavLink className="nav-hover d-flex" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false"><img className='me-2' src='https://img.alicdn.com/imgextra/i1/O1CN01Ie2YnK1JmZ1mL3fY5_!!6000000001071-2-tps-60-60.png'></img>SAVE MORE ON APP</NavLink>
              <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                <img className="mbl-app" src='https://icms-image.slatic.net/images/ims-web/d19edbfe-4ab9-486f-ba66-b29d80483a50.png'></img>
                <h5 className='app-h3'>Enjoy More Discount With Daraz App</h5>
                <div>
                  <div className='navApp-img d-flex m-1'>
                    <img src='https://icms-image.slatic.net/images/ims-web/8f2bd105-9cf3-45ba-af3d-ba979a63cc3c.png'></img>
                    <div className='app-img d-block '>
                      <NavLink><img src='https://1000logos.net/wp-content/uploads/2020/08/apple-app-store-logo.jpg'></img></NavLink>
                      <NavLink><img className='App-app' src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png"></img></NavLink>
                      <NavLink><img src='https://money.pro/blog/2022/11/16/money-pro-on-appgallery/huawei.jpg'></img></NavLink>
                    </div>
                  </div>
                </div>
              </ul>
            </div>
          </div>

        </div>
        <Navbar />
      </header>


    </>

  )
}

export default Header