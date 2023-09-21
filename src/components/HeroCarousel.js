import React from 'react'
import { NavLink } from 'react-router-dom'

function HeroCarousel() {
  return (
   <>
   <section>
    <div className=' flex justify-between'>
   <div className='nav-list w-1/5 '>
          <ul className=" list-group  ">
            <li className='list-group-item dropend p-0'><NavLink className=" nav-link" to="/" data-bs-toggle="dropdown" aria-expanded="false"><i class="me-1  ul-icon fa fa-shopping-basket" aria-hidden="true"></i> Groceries & Pets<i class="display-n fa fa-angle-right ml-20" aria-hidden="true"></i></NavLink>
              <ul className=" dropdown-menu">
                <li className="list-group-item p-0 "><NavLink className=" nav-link" to="/">Beverages </NavLink></li>
                <li className="list-group-item p-0 "><NavLink className=" nav-link" to="/">Food Staples </NavLink></li>
                <li className="list-group-item p-0 "><NavLink className=" nav-link" to="/">Laundry & Household</NavLink></li>
                <li className="list-group-item p-0 "><NavLink className=" nav-link" to="/">Frozen Food </NavLink></li>
                <li className="list-group-item p-0 "><NavLink className=" nav-link" to="/">Cat </NavLink></li>
                <li className="list-group-item p-0 "><NavLink className=" nav-link" to="/">Dog </NavLink></li>
                <li className="list-group-item p-0 "><NavLink className=" nav-link" to="/">Fish </NavLink></li>
              </ul>
            </li>
            <li className=" list-group-item dropend  p-0" ><NavLink className=" nav-link" to="/" data-bs-toggle="dropdown" aria-expanded="false"><i class="me-1 ul-icon fa fa-medium" aria-hidden="true"></i>Health & Beauty <i class="display-n fa fa-angle-right ml-20" aria-hidden="true"></i> </NavLink>

              <ul className=" dropdown-menu me-3 ">
                <li className="list-group-item p-0"><NavLink className=" nav-link" to="/"> Makeup </NavLink> </li>
                <li className="list-group-item p-0"><NavLink className=" nav-link" to="/">Beauty Tools </NavLink></li>
                <li className="list-group-item p-0"><NavLink className=" nav-link" to="/">Skin Care </NavLink></li>
                <li className="list-group-item p-0"><NavLink className=" nav-link" to="/">Hair Care </NavLink></li>
                <li className="list-group-item p-0"><NavLink className=" nav-link" to="/">Bath & Body </NavLink></li>
                <li className="list-group-item p-0"><NavLink className=" nav-link" to="/">Men's Care </NavLink></li>
                <li className="list-group-item p-0"><NavLink className=" nav-link" to="/">Personal Care </NavLink></li>
                <li className="list-group-item p-0"><NavLink className=" nav-link" to="/">Fragrances </NavLink></li>
              </ul> 

            </li>
            <li className="list-group-item  dropend p-0"><NavLink className=" nav-link" to="/" data-bs-toggle="dropdown" aria-expanded="false"><i class="me-1 ul-icon fa fa-male" aria-hidden="true"></i>Men's Fashion <i class="display-n fa fa-angle-right ml-24" aria-hidden="true"></i></NavLink>
              <ul className=" dropdown-menu me-3 ">
                <li className="list-group-item p-0"><NavLink className=" nav-link" to="/"> T-Shirts & Tanks </NavLink> </li>
                <li className="list-group-item p-0"><NavLink className=" nav-link" to="/">Shirts & Polo </NavLink></li>
                <li className="list-group-item p-0"><NavLink className=" nav-link" to="/">Pants & Jeans </NavLink></li>
                <li className="list-group-item p-0"><NavLink className=" nav-link" to="/">Shorts, Joggers & Sweats</NavLink></li>
                <li className="list-group-item p-0"><NavLink className=" nav-link" to="/">Kurtas & Shalwar Kameez </NavLink></li>
                <li className="list-group-item p-0"><NavLink className=" nav-link" to="/">Winter Clothig </NavLink></li>
                <li className="list-group-item p-0"><NavLink className=" nav-link" to="/">Inner Wear </NavLink></li>
                <li className="list-group-item p-0"><NavLink className=" nav-link" to="/">Shoes </NavLink></li>
                <li className='list-group-item p-0'><NavLink className=" nav-link" to="/">Accessories </NavLink></li>
              </ul>
            </li>
            <li className=" list-group-item  dropend p-0"><NavLink className=" nav-link" to="/" data-bs-toggle="dropdown" aria-expanded="false"><i class="me-1 ul-icon fa fa-female" aria-hidden="true"></i>Women's Fashion <i class="display-n fa fa-angle-right ml-20" aria-hidden="true"></i></NavLink>
              <ul className=" dropdown-menu me-3 ">
                <li className="list-group-item p-0"><NavLink className=" nav-link" to="/"> Unstitched Fabric </NavLink> </li>
                <li className="list-group-item p-0"><NavLink className=" nav-link" to="/">Kurtas & Shalwar Kameez</NavLink></li>
                <li className="list-group-item p-0"><NavLink className=" nav-link" to="/">Muslim Wear </NavLink></li>
                <li className="list-group-item p-0"><NavLink className=" nav-link" to="/">Tops </NavLink></li>
                <li className="list-group-item p-0"><NavLink className=" nav-link" to="/">Bras, Panties & Lingerie</NavLink></li>
                <li className="list-group-item p-0"><NavLink className=" nav-link" to="/">Sleeppwear </NavLink></li>
                <li className="list-group-item p-0"><NavLink className=" nav-link" to="/">Pants,Jeans</NavLink></li>
                <li className="list-group-item p-0"><NavLink className=" nav-link" to="/">Dresses </NavLink></li>
              </ul>
            </li>
            <li className=" list-group-item dropend p-0"><NavLink className=" nav-link" to="/" data-bs-toggle="dropdown" aria-expanded="false"><i class="me-1 ul-icon fa fa-gamepad" aria-hidden="true"></i>Mother & Baby <i class="display-n fa fa-angle-right ml-20" aria-hidden="true"></i></NavLink>
              <ul className=" dropdown-menu me-3 ">
                <li className="list-group-item p-0"><NavLink className=" nav-link" to="/"> Milk Formula </NavLink> </li>
                <li className="list-group-item p-0"><NavLink className=" nav-link" to="/">Diapering </NavLink></li>
                <li className="list-group-item p-0"><NavLink className= "nav-link" to="/">Feeding </NavLink></li>
                <li className="list-group-item p-0"><NavLink className=" nav-link" to="/">Maternity Care </NavLink></li>
                <li className="list-group-item p-0"><NavLink className=" nav-link" to="/">Baby Gear </NavLink></li>
                <li className="list-group-item p-0"><NavLink className=" nav-link" to="/">Nursery </NavLink></li>
                <li className="list-group-item p-0"><NavLink className=" nav-link" to="/">Baby Personal Care</NavLink></li>
                <li className="list-group-item p-0"><NavLink className=" nav-link" to="/">Remote Control </NavLink></li>
              </ul>
            </li>
            <li className=" list-group-item dropend p-0"><NavLink className=" nav-link" to="/" data-bs-toggle="dropdown" aria-expanded="false"> <i class="me-1 ul-icon fa fa-bed" aria-hidden="true"></i>Home & Lifestyle <i class="display-n fa fa-angle-right ml-16" aria-hidden="true"></i></NavLink>
              <ul className=" dropdown-menu me-3 ">
                <li className="list-group-item p-0"><NavLink className=" nav-link" to="/"> Bath </NavLink> </li>
                <li className="list-group-item p-0"><NavLink className=" nav-link" to="/">Bedding </NavLink></li>
                <li className="list-group-item p-0"><NavLink className=" nav-link" to="/">Decor </NavLink></li>
                <li className="list-group-item p-0"><NavLink className=" nav-link" to="/">Furniture </NavLink></li>
                <li className="list-group-item p-0"><NavLink className=" nav-link" to="/">Kitchen & Dining </NavLink></li>
                <li className="list-group-item p-0"><NavLink className=" nav-link" to="/">Lighting</NavLink></li>
                <li className="list-group-item p-0"><NavLink className=" nav-link" to="/">Laundry & Cleaning </NavLink></li>
                <li className="list-group-item p-0"><NavLink className=" nav-link" to="/">Tools, DIY & Outdoor  </NavLink></li>
              </ul>
            </li>
            <li className=" list-group-item dropend p-0"><NavLink className=" nav-link" to="/" data-bs-toggle="dropdown" aria-expanded="false"><i class="me-1 ul-icon fa fa-assistive-listening-systems" aria-hidden="true"></i>Electronoc Accessories <i class="display-n fa fa-angle-right ml-10" aria-hidden="true"></i></NavLink>
              <ul className=" dropdown-menu me-3 ">
                <li className="list-group-item p-0"><NavLink className=" nav-link" to="/">Mobile Accessories </NavLink> </li>
                <li className="list-group-item p-0"><NavLink className=" nav-link" to="/">Headphones & Headsets </NavLink></li>
                <li className="list-group-item p-0"><NavLink className=" nav-link" to="/">Wearable </NavLink></li>
                <li className="list-group-item p-0"><NavLink className=" nav-link" to="/">Camera Accessoties</NavLink></li>
                <li className="list-group-item p-0"><NavLink className=" nav-link" to="/">Computer Accessories </NavLink></li>
                <li className="list-group-item p-0"><NavLink className=" nav-link" to="/">Storage </NavLink></li>
                <li className="list-group-item p-0"><NavLink className=" nav-link" to="/">Printers </NavLink></li>
                <li className="list-group-item p-0"><NavLink className=" nav-link" to="/">Computer Components </NavLink></li>
              </ul>
            </li>
            <li className="list-group-item dropend p-0"><NavLink className=" nav-link" to="/" data-bs-toggle="dropdown" aria-expanded="false"><i class="me-1 ul-icon fa fa-television " aria-hidden="true"></i>TV & Home Appliances <i class="display-n fa fa-angle-right ml-10" aria-hidden="true"></i></NavLink>
              <ul className=" dropdown-menu me-3 ">
                <li className="list-group-item p-0"><NavLink className=" nav-link" to="/"> Air Conditioner </NavLink> </li>
                <li className="list-group-item p-0"><NavLink className=" nav-link" to="/">Televisons </NavLink></li>
                <li className="list-group-item p-0"><NavLink className=" nav-link" to="/">Refrigerators & Freezers</NavLink></li>
                <li className="list-group-item p-0"><NavLink className=" nav-link" to="/">Home Audio  </NavLink></li>
                <li className="list-group-item p-0"><NavLink className=" nav-link" to="/">Washing Machine </NavLink></li>
                <li className="list-group-item p-0"><NavLink className=" nav-link" to="/">Kitchen Appliances </NavLink></li>
                <li className="list-group-item p-0"><NavLink className=" nav-link" to="/">Cooling & Heating </NavLink></li>
                <li className="list-group-item p-0"><NavLink className=" nav-link" to="/">Irons & Garment Care  </NavLink></li>
              </ul>
            </li>
            <li className=" list-group-item dropend p-0"><NavLink className=" nav-link" to="/" data-bs-toggle="dropdown" aria-expanded="false"><i class="fa fa-globe me-1" aria-hidden="true"></i>Sports & Outdoor <i class="display-n fa fa-angle-right ml-20" aria-hidden="true"></i></NavLink>
              <ul className=" dropdown-menu me-3 ">
                <li className="list-group-item p-0"><NavLink className=" nav-link" to="/"> Exercise & Fitness </NavLink> </li>
                <li className="list-group-item p-0"><NavLink className=" nav-link" to="/">Supplements </NavLink></li>
                <li className="list-group-item p-0"><NavLink className=" nav-link" to="/">Shoes & Clothing </NavLink></li>
                <li className="list-group-item p-0"><NavLink className=" nav-link" to="/">Team Sports </NavLink></li>
                <li className="list-group-item p-0"><NavLink className=" nav-link" to="/">Racket Sports </NavLink></li>
                <li className="list-group-item p-0"><NavLink className=" nav-link" to="/">Outdoor Recreation </NavLink></li>
                <li className="list-group-item p-0"><NavLink className=" nav-link" to="/">Fitness Gadgets</NavLink></li>
                <li className="list-group-item p-0"><NavLink className=" nav-link" to="/">Sports Accessories  </NavLink></li>
              </ul>
            </li>
            <li className=" list-group-item dropend p-0"><NavLink className=" nav-link" to="/" data-bs-toggle="dropdown" aria-expanded="false"><i class="me-1 ul-icon fa fa-briefcase " aria-hidden="true"></i>Watches & Bags<i class="display-n fa fa-angle-right ml-20" aria-hidden="true"></i></NavLink>
              <ul className=" dropdown-menu me-3 ">
                <li className="list-group-item p-0"><NavLink className=" nav-link" to="/"> Men's Watches </NavLink> </li>
                <li className="list-group-item p-0"><NavLink className=" nav-link" to="/">Women's Watches</NavLink></li>
                <li className="list-group-item p-0"><NavLink className=" nav-link" to="/">Kid's Watches </NavLink></li>
                <li className="list-group-item p-0"><NavLink className=" nav-link" to="/">Womens Bags </NavLink></li>
                <li className="list-group-item p-0"><NavLink className=" nav-link" to="/">Mens Bags </NavLink></li>
                <li className="list-group-item p-0"><NavLink className=" nav-link" to="/">Luggage & Suitcase </NavLink></li>
                <li className="list-group-item p-0"><NavLink className=" nav-link" to="/">Womens Jewellery </NavLink></li>
                <li className="list-group-item p-0"><NavLink className=" nav-link" to="/">Mens Accessories  </NavLink></li>
                <li className="list-group-item p-0"><NavLink className=" nav-link" to="/">Sunglasses & Eyewear </NavLink></li>
              </ul>
            </li>
            <li className=" list-group-item dropend p-0"><NavLink className=" nav-link" to="/" data-bs-toggle="dropdown" aria-expanded="false"><i class="me-1 ul-icon fa fa-motorcycle" aria-hidden="true"></i>Automotive & Motorbike<i class="display-n fa fa-angle-right ml-10" aria-hidden="true"></i></NavLink>
              <ul className=" dropdown-menu me-3 ">
                <li className="list-group-item p-0"><NavLink className=" nav-link" to="/">Automotive </NavLink> </li>
                <li className="list-group-item p-0"><NavLink className=" nav-link" to="/">Motorcycle </NavLink></li>
                <li className="list-group-item p-0"><NavLink className=" nav-link" to="/">Loaders & Rickshaw</NavLink></li>
              </ul>
            </li>
          </ul>

        </div> 
  
   <div id="carouselExampleIndicators" className="carousel slide w-4/5" data-bs-ride="carousel">
          <div className="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4" aria-label="Slide 5"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="5" aria-label="Slide 6"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="6" aria-label="Slide 7"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="7" aria-label="Slide 8"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="8" aria-label="Slide 9"></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <NavLink>
                <img src="https://icms-image.slatic.net/images/ims-web/dfda3367-7bf6-4e32-b73e-cfe8bd4ec6e0.jpg_1200x1200.jpg" class="d-block w-100" alt="..." />
              </NavLink>
            </div>
            <div className="carousel-item"><NavLink>
              <img src="https://icms-image.slatic.net/images/ims-web/0cad2d61-40c9-493c-b10b-a98c77a90168.jpg" class="d-block w-100" /></NavLink>
            </div>
            <div className="carousel-item "><NavLink>
              <img src="https://icms-image.slatic.net/images/ims-web/d8c6bb40-8ef9-406c-9f4f-abf848595133.jpg" class="d-block w-100" /></NavLink>
            </div>
            <div className="carousel-item "><NavLink>
              <img src="https://icms-image.slatic.net/images/ims-web/4e248470-b8a2-4c35-a858-f52debf54f4f.jpg" class="d-block w-100" /></NavLink>
            </div>
            <div className="carousel-item "><NavLink>
              <img src="https://icms-image.slatic.net/images/ims-web/d9b4f76e-e7f3-4722-9ca4-828d2d1f5dbe.jpg" class="d-block w-100" /></NavLink>
            </div>
            <div className="carousel-item "><NavLink>
              <img src="//icms-image.slatic.net/images/ims-web/a619da7e-691d-4ee3-8a18-89920dfbc872.jpg" class="d-block w-100" /></NavLink>
            </div>
            <div className="carousel-item "><NavLink>
              <img src="//icms-image.slatic.net/images/ims-web/d6d5d1ba-4bb1-4248-951b-0add8ff70f5d.jpg" class="d-block w-100" /></NavLink>
            </div>
            <div className="carousel-item "><NavLink>
              <img src="https://icms-image.slatic.net/images/ims-web/53966146-5a6d-460f-a350-7de29f8daa32.jpg" class="d-block w-100" /></NavLink>
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
        </div>
        </section>
        <section className="mart-list mt-3">
  <div className="mart container mx-auto flex flex-col  items-center w-5/6 bg-white p-3 rounded-lg">
    
    <nav className="  md:border-gray-400	flex items-center text-base justify-center">
            <NavLink className=" text-gray-500  " to="/">
              <img src="https://icms-image.slatic.net/images/ims-web/1440c427-d3fe-49f7-aa90-09c8eb0b84ea.png" ></img>
              <span className=' ms-4 '>Mart</span>
            </NavLink>
            <NavLink className="text-gray-500" to="/">
              <img src="https://icms-image.slatic.net/images/ims-web/4f250051-aac7-46bd-9bea-c5b836dea844.png"></img>
              <span className=' ms-4 '>Fashion</span>
            </NavLink>
            <NavLink className="text-gray-500 " to="/">
              <img src="https://icms-image.slatic.net/images/ims-web/0ed92f69-d596-458b-bcd6-8d2bb69ef911.png"></img>
              <span className=' ms-4 '>Beauty</span>
            </NavLink>
            <NavLink className="text-gray-500 " to="/">
              <img src="https://icms-image.slatic.net/images/ims-web/d85f0ced-6459-455a-8504-150655bf948c.png" ></img>
              <span className=' ms-4 '>Home</span>
            </NavLink>
            <NavLink className="text-gray-500" to="/">
              <img src='https://icms-image.slatic.net/images/ims-web/9f2cf12a-3899-423e-9273-c752acafa387.png' ></img>
                <span className=' ms-4 '>Daraz</span>
            </NavLink>
            <NavLink className="text-gray-500" to="/">
              <img src="https://icms-image.slatic.net/images/ims-web/cc89e68e-c809-4638-a5a6-2dc7e450d2a1.png" ></img>
              <span className=' ms-4 '>Free</span>
            </NavLink>
            <NavLink className="text-gray-500" to="/">
              <img src="https://icms-image.slatic.net/images/ims-web/62624b46-f8ca-43b7-a5fa-1d31920a6eb5.png" ></img>
              <span className=' ms-4 '>New </span>
            </NavLink>
            <NavLink className="text-gray-500 " to="/">
              <img src="https://icms-image.slatic.net/images/ims-web/a13edb2b-61bf-4dec-a410-f85b63d41490.png" ></img>
              <span className=' ms-4 '>Price</span>
            </NavLink>
            
    </nav>
    
  </div>
  
</section>
   </>
  )
}

export default HeroCarousel