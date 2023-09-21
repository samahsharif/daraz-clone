
import ReactStars from 'react-rating-stars-component';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';;



function SingleProduct() {
   const navigate = useNavigate();
  const { id } = useParams();
  const [product, setProduct] = useState([])
  // console.log(id, "id", product, "product")


  useEffect(() => {
    const fetchProduct = async () => {
      const response = await fetch(`https://dummyjson.com/products/${id}`)
      const data = await response.json()
      // console.log(data)
      setProduct(data)  
    }
       fetchProduct() 
  }, [])

  const handleCart = (product) => {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
  
    if (!Array.isArray(cart)) {
      cart = [];
    }
    const isProductExist = cart.find((item) => item.id === product.id);
    if (isProductExist) {
     
      cart = cart.map((item) =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      );
    } else {
      
      cart.push({ ...product, quantity: 1 });
    }
    localStorage.setItem('cart', JSON.stringify(cart));
    navigate('/cart');

    console.log('cart', cart);
    alert('Product added to cart')
      
   }
  
  if (!Array.isArray(product.images) || product.images.length === 0) {
    return <p>No images available for this product</p>;
  }
   if (!Object.keys(product).length > 0) return  <div>product No found</div>
  return (
    <>
   
   
      <section className="single-sec container body-font overflow-hidden ">
        <div className="  mx-auto bg-white">
          <div className="lg:w-full  mx-auto flex res-width">   
            <img alt="ecommerce" className="  lg:w-1/4 h-80 object-cover object-center rounded mt-2"    src={product.images[0]}  />
            <div className="  lg:w-1/2 w-full lg:pl-3 lg:pr-3 mt-2 lg:mt-0 mb-3">
              <h1 className="dec-heading text-xl title-font font-medium mb-1 ">{product.description}</h1>
              <div className='block'>
                <div className="flex ">
                  <span className="flex items-center ms-0"> 
                    <ReactStars
                  count={5}
                  size={24}
                  value="3"
                  edit="false"
                  activeColor="#ffd700"
                  /> 
                    <span className="dec-reviews ml-3 text-xs hover:underline-offset-1">{product.rating}</span>
                    <span className='dec-reviews text-xs title-font  tracking-widest  border-l-2 ml-3 hover:underline-offset-1'>382 Answered Questions</span>
                  </span>
                  <span className="flex ml-3 pl-3 py-2 border-l-2 border-gray-200 space-x-2s">
                    <a className="clr">
                    <i class="fa fa-heart " aria-hidden="true"></i>
                    </a>
                  </span>
                </div>
                <span className="text-xs title-font  tracking-widest mb-3 clr">BRAND </span>
                <span className='text-xs mb-3 dec-reviews'>{product.brand}</span>
              </div>
              <hr></hr>
              <h2 className="leading-relaxed mt-3 text-lg clr-orange">${product.price}</h2>
              <h4 className='line-through clr mb-2 text-sm'>Rs 456</h4>
              <hr></hr>
              <div className="block  items-center border-b-2 border-gray-100 mt-6 ">
               
              <div className="block items-center mb-5">
                  <div className='flex mb-2'>
                    <span className="mr-3 m-0 delivery-heading text-sm font-medium">Color</span>
                   
                  </div>
                  <div className='flex ml-24'>
                    <span className='border py-1 px-3 mx-2 cursor-pointer'>White</span>
                    <span className='border py-1 px-3 mx-2 cursor-pointer'>red</span>
                    <span className='border py-1 px-3 mx-2 cursor-pointer'>Black</span>
                   
                  </div>
                </div>

                <div className="block items-center mb-5">
                  <div className='flex mb-2'>
                    <span className="mr-3 m-0 delivery-heading text-sm font-medium">Size</span>
                    <span className='ml-20 text-sm clr-black'>Int</span>
                  </div>
                  <div className='flex ml-24'>
                    <span className='border py-1 px-3 mx-2 cursor-pointer'>M</span>
                    <span className='border py-1 px-3 mx-2 cursor-pointer'>S</span>
                    <span className='border py-1 px-3 mx-2 cursor-pointer'>L</span>
                    <span className='border py-1 px-3 mx-2 cursor-pointer'>XL</span>
                  </div>
                </div>

                <div className='flex items-center'>

                  <span className="ml-0  mr-8 delivery-heading text-sm font-medium">Quantity</span>
                  <span className='border py-1 px-2 mx-2 plus cursor-pointer'>-</span>
                  <span className=' py-1 px-2 mx-2'>1</span>
                  <span className='border py-1 px-2 mx-2 plus cursor-pointer'>+</span>
                </div>
              </div>

              <div className="flex mt-6">

                <button className="flex  text-white btn-blue border-0 py-2 px-16 focus:outline-none hover:bg-blue-600 rounded"   >BuyNow</button>
                <button className="flex ml-3 text-white btn-orange border-0 py-2 px-16 focus:outline-none hover:bg-orange-600 rounded" onClick={()=> handleCart(product)}>Add To Card</button>
              </div>

            </div>
            <div className='  lg:w-1/3 w-full  lg:pl-3 lg:pr-3 lg:mt-2 mt-0'>
              <div className='block delivery pt-1'>
                <div className=' pl-4 pr-1 pt-0'>
                  <div className='text-xs font-medium delivery-heading mt-4'>Delivery<i className="fa fa-ban ml-60" aria-hidden="true"></i></div>

                </div>
                <div className='flex  py-2 px-4'>
                  <span className='mr-1 text-sm delivery-span'><i className="fa fa-map-marker mr-2" aria-hidden="true"></i>Sindh, Karachi - Gulshan-e-Iqbal, Block 15</span>
                  <span className='m-0 delivery-change'>CHANGE</span>
                </div>
                <hr></hr>
                <div className='flex py-2 px-4'>
                  <span className='font-semibold m-0'><i className="fa fa-folder-open mr-2" aria-hidden="true"></i>Standard Delivery</span>

                  <span className='mr-3'>Rs.99</span>
                </div>
                <div className='text-xs clr ml-6'>4 - 5 day(s)</div>
                <span className='py-2 px-4 text-sm delivery-span'><i className="fa fa-credit-card mr-2" aria-hidden="true"></i>Cash on Delivery Available</span>
                <hr></hr>
                <div className=' pl-4 pr-1 pt-0'>
                  <div className='text-xs font-medium delivery-heading mt-4'>Service<i className="fa fa-ban ml-60" aria-hidden="true"></i></div>
                </div>

                <div className='block py-2 px-4'>
                  <div className='mr-1 text-sm delivery-span'><i className="fa fa-wpexplorer mr-2" aria-hidden="true"></i>7 Day Return</div>
                  <div className='text-xs clr'>Change of mind applicable</div>
                </div>
                <hr></hr>
                <div className='flex'>
                  <span className='py-2 px-4 m-0 text-sm delivery-span'><i className="fa fa-envelope-open-o" aria-hidden="true"></i>Warranty not available</span>
                </div>

              </div>
              <div className='delivery mt-2'>
                <div className='block py-2 px-4'>
                  <div className='flex'>
                    <div className='text-xs clr ml-0'>Sold by</div>
                    <div className='m-0 delivery-change'>CHAT</div>
                  </div>
                  <div className='mr-1 text-sm delivery-span'>Sabs Store.</div>
                </div>
                
                <div className='flex'>
                  <div className='p-3 border border-l-0'>
                    <div className='delivery-heading text-xs mb-3'>Positive Seller Ratings</div>
                    <div className='text-2xl clrr'>88%</div>
                  </div>
                  <div className='p-3 border m-0'>
                    <div className='delivery-heading text-xs mb-3'>Ship on Time</div>
                    <div className='text-2xl clrr'>93%</div>
                  </div>
                  <div className='p-3 border border-r-0'>
                    <div className='delivery-heading text-xs mb-3'>Chat Response Rate</div>
                    <div className='text-2xl clrr'>99%</div>
                  </div>

                </div>
                <div className='m-0 delivery-change hover:underline-offset-4 text-center p-2 mb-3'>Visit  store</div>
              </div>
            </div>
          </div>

        </div>

      </section >
      
    </>

  );
}





export default SingleProduct