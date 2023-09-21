import React from 'react'
import { NavLink } from 'react-router-dom'

function Footer() {
  return (
    
      <footer className='container mb-4 f-size'>
      <div className='row'>
      <div className='  col-lg-3'>
       <h3 className='footer-h3'>Customer Care</h3>
       <ul className='footer-li d-block navbar-nav'>
        <li className='nav-item'><NavLink className="nav-link">Help Center</NavLink></li>
        <li className='nav-item'><NavLink className="nav-link">How to Buy</NavLink></li>
        <li className='nav-item'><NavLink className="nav-link">Corporate & Bulk Purchasing</NavLink></li>
        <li className='nav-item'><NavLink className="nav-link">Returns & Refunds</NavLink></li>
        <li className='nav-item'><NavLink className="nav-link">Daraz Shop</NavLink></li>
        <li className='nav-item'><NavLink className="nav-link">Contact Us</NavLink></li>
        <li className='nav-item'> <NavLink className="nav-link">Purchase Protection</NavLink></li>
        <li className='nav-item'><NavLink className="nav-link">Daraz Pick up Points</NavLink></li>
        <h3 className='footer-h3 mt-3'>Make Money With Us</h3>
        <ul className='footer-li navbar-nav d-block'>
          <li className='nav-item'><NavLink className="nav-link">Daraz University</NavLink></li>
          <li className='nav-item'><NavLink className="nav-link">Sell on Daraz</NavLink></li>
          <li className='nav-item'><NavLink className="nav-link">Join Daraz Affiliate Program</NavLink></li>
        </ul>

       </ul>
      </div>
      <div className='col-lg-3'>
        <h3 className='footer-h3'>Daraz</h3>
        <ul className='footer-li d-block navbar-nav'>
          <li className='nav-item'><NavLink className="nav-link">About Us</NavLink></li>
          <li className='nav-item'><NavLink className="nav-link">Digital Payments</NavLink></li>
          <li className='nav-item'><NavLink className="nav-link">Daraz Donates</NavLink></li>
          <li className='nav-item'><NavLink className="nav-link">Daraz Blog</NavLink></li>
          <li className='nav-item'><NavLink className="nav-link">Terms & Conditions</NavLink></li>
          <li className='nav-item'><NavLink className="nav-link">Privacy Policy</NavLink></li>
          <li className='nav-item'><NavLink className="nav-link">NTN Number : 4012118-6</NavLink></li>
          <li className='nav-item'><NavLink className="nav-link">STRN Number : 1700401211818</NavLink></li>
          <li className='nav-item'><NavLink className="nav-link">Online Shopping App</NavLink></li>
          <li className='nav-item'><NavLink className="nav-link">Online Grocery Shopping</NavLink></li>
          <li className='nav-item'><NavLink className="nav-link">Daraz Exclusive</NavLink></li>
        </ul>
      </div>
      <div className='col-lg-3'>
        <h3 className='footer-h3'>Daraz International</h3>
        <div className='footer-img d-flex flex-wrap'>
          <NavLink className="nav-link d-flex">
            < img  alt="img" src='https://cdn.britannica.com/46/3346-004-D3BDE016/flag-symbolism-Pakistan-design-Islamic.jpg' className=' rounded-circle'></img>
            <span className='text-dark'>Pakistan</span>
          </NavLink>
          <NavLink className="nav-link d-flex">
            < img  alt="img" src='https://cdn.britannica.com/67/6267-004-10A21DF0/Flag-Bangladesh.jpg' className='rounded-circle'></img>
            <span className='text-dark'>Bangladesh</span>
          </NavLink>
          <NavLink className="nav-link d-flex">
            < img  alt="img" src='https://cdn.britannica.com/13/4413-004-3277D2EF/Flag-Sri-Lanka.jpg' className='w-25 rounded-circle'></img>
            <span className='text-dark'>Sri Lanka</span>
          </NavLink>
          <NavLink className="nav-link d-flex">
            < img  alt="img" src='https://cdn.britannica.com/34/4034-004-B478631E/Flag-Myanmar.jpg' className=' rounded-circle'></img>
            <span className='text-dark'>Myanmar</span>
          </NavLink>
          <NavLink className="nav-link d-flex ms-2">
            < img  alt="img" src='https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/Flag_of_Nepal.svg/1200px-Flag_of_Nepal.svg.png' className=' rounded-circle'></img>
            <span className='text-dark'>Nepal</span>
          </NavLink>
        </div>
        <h3 className='footer-h3 mt-3'>Payment Methods</h3>
        <div className='payment-img'>
          <span>< img  alt="img" src='https://t3.ftcdn.net/jpg/05/38/53/76/360_F_538537674_qpvDKu7W7XlMgCdJsmd7Bk9NpWIacy4X.jpg' className='ms-0 mt-2'></img></span>
        </div>
     
      <h3 className='footer-h3 mt-3'>Verified by</h3>
      <div className='verified-img'>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9kGtuYL_4oWjNUlg06_68HXNM9brC2P9KsOCgNTBEb5CHjPRIekxU22RvyBeKpDDLPm0&usqp=CAU" className='ms-0 mt-2'></img>
      </div >
      </div>
      <div className='col-lg-3'>
        <h3 className='footer-h3'>Exclusive Deals and Offers!</h3>
        <div className='app-img d-flex'>
          <img src='https://laz-img-cdn.alicdn.com/images/ims-web/TB18aqePBLoK1RjSZFuXXXn0XXa.png' className='m-0'></img>
          <div className='app-img d-block ms-3'>
            <NavLink><img src='https://1000logos.net/wp-content/uploads/2020/08/apple-app-store-logo.jpg'></img></NavLink>
            <NavLink><img className='play-100' src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png"></img></NavLink>
            <NavLink><img src='https://money.pro/blog/2022/11/16/money-pro-on-appgallery/huawei.jpg'></img></NavLink>
          </div>
        </div>
        <div className='shop-img d-flex mt-3'>
        <img src='https://img.alicdn.com/imgextra/i1/O1CN01Ie2YnK1JmZ1mL3fY5_!!6000000001071-2-tps-60-60.png'></img>
        <div className='d-block ms-2'>
        <p className='footer-h3 m-0'>Happy Shopping</p>
        <span className='text-dark m-0'>Download App</span>
        </div>
        </div>
        <h3 className=' footer-h3 mt-5'>Follow Us</h3>
        <div className='social-img d-flex'>
        <NavLink className="m-0 "  to="https://www.facebook.com"><img target="blank" src='https://www.facebook.com/images/fb_icon_325x325.png'></img></NavLink>
        <NavLink className="m-0" to="https://www.twitter.com"><img target="blank" src='https://help.twitter.com/content/dam/help-twitter/brand/logo.png'></img></NavLink>
        <NavLink className="m-0" to="https://www.instagram.com"><img target="blank" src='https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Instagram_logo_2022.svg/1200px-Instagram_logo_2022.svg.png'></img></NavLink>
        <NavLink className="m-0" to="https://www.youtube.com"><img  target="blank" src='https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/YouTube_social_white_square_%282017%29.svg/1200px-YouTube_social_white_square_%282017%29.svg.png'></img></NavLink>
        </div>
       
      </div>

    </div>
    </footer>
    
  )
}

export default Footer