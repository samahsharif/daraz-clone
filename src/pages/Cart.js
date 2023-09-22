
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

function Cart() {
  const navigate = useNavigate();
  const [total, setTotal] = useState(0)
  const carts = JSON.parse(localStorage.getItem('cart')) || []

  useEffect(() => {
    const total = carts.reduce((acc, item) => {
      return acc + (item.price * item.quantity)
    }, 0)
    setTotal(total)
  }, [carts])

  const handleInc = (id) => {
    const updatedCart = carts.map(item => {
      if (item.id === id) {
        return {
          ...item,
          quantity: item.quantity + 1
        }
      }
      return item
    })

    console.log('Cart before update:', updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
    console.log('Cart after update:', carts);
    navigate('/cart');
  }


  const handleDec = (id) => {
    const updatedCart = carts.map(item => {
      if (item.id === id) {
        return {
          ...item,
          quantity: item.quantity - 1
        }
      }
      return item
    })

    localStorage.setItem('cart', JSON.stringify(updatedCart))
    navigate('/cart');
  }
  const removeProduct = (id) => {
    const updatedCart = carts.filter(item => item.id !== id)
    localStorage.setItem('cart', JSON.stringify(updatedCart))
    navigate('/cart');
  }

  if (!carts.length) <div>Cart is Empty</div>

  return (
    <>

      <div className="card-sec container mx-auto ">
        <div className="flex  row">
          <div className="lg:w-2/3  mt-0  ">
            <div className="flex justify-between border-b pb-8 bg-white mb-2 p-3">
              <h1 className="delivery-heading  text-xs">SELECT ALL</h1>
              <h2 className="delivery-heading  text-xs"><i class="fa fa-trash me-2" aria-hidden="true"></i>DELETE</h2>
            </div>

            {Array.isArray(carts) ? (
              carts.map((cartItem) => {
                if (!Array.isArray(cartItem.images) || cartItem.images.length === 0) {
                  return <p>No images available for this product</p>;
                }
                return (
                  <div className="flex items-center hover:bg-gray-100 px-4 py-2 bg-white">
                    <div className="flex w-1/2 m-0">
                      <div className="w-20 m-0">
                        <img className="h-24" src={cartItem.images[0]} alt={cartItem.title} />
                      </div>
                      <div className="lg:w-4/5 w-full lg:pl-3 lg:pr-3 mt-2 lg:mt-0 m-0">
                        <h1 className="dec-heading text-sm title-font font-medium mb-1 ">{cartItem.description}</h1>
                        <div className='flex'>
                          <span className='text-xs mb-0 m-0 delivery-heading'>{cartItem.brand}</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-lg title-font  tracking-widest ml-0 clr-orange">${cartItem.price} </span>
                      <span className='text-sm ml-0 delivery-heading line-through'>Rs 300</span>
                      <span className='text-sm ml-0 dec-heading'>-39 %</span>
                      <span className="ml-0 py-2 border-gray-200 space-x-2s">
                        <i className="fa fa-heart mr-2 clr cursor-pointer" aria-hidden="true"></i>
                        <i className="fa fa-trash clr cursor-pointer" aria-hidden="true" onClick={() => removeProduct(cartItem.id)}></i>
                      </span>
                    </div>
                    <div className='flex items-center'>
                      <span className='plus border py-1 px-2 mx-2  cursor-pointer' onClick={() => handleDec(cartItem.id)}>-</span>
                      <span className='py-1 px-2 mx-2 cursor-pointer'>{cartItem.quantity}</span>
                      <span className='plus border py-1 px-2 mx-2 cursor-pointer' onClick={() => handleInc(cartItem.id)}>+</span>
                    </div>
                  </div>
                );
              })
            ) : (
              <p>Carts data is not available</p>
            )}


          </div>
          <div className="lg:w-1/3 mt-2  bg-white py-2 px-3  m-0 ">
            <h1 className="font-medium text-lg mb-3 dec-heading ">Order Summary</h1>
            <div className="flex justify-between ">
              <span className=" text-sm delivery-heading ml-0">Subtotal ({total * 10})</span>
              <span className="delivery-span text-lg mr-0">${total}</span>
            </div>
            <div className='flex justify-between mb-2'>
              <span className='input ml-0'>
                <input id="border-clr" type="text" placeholder="Enter Voucher code" className=" clr-black p-2 text-sm w-full " />
              </span>
              <button className=" mr-0 btn-blue px-5 py-2 text-sm text-white uppercase">Apply</button>

            </div>

            <div className=" mb-2">
              <div className="flex  justify-between mb-2 ">
                <span className='text-sm delivery-span ml-0'>Total </span>
                <span className='clr-orange text-sm mr-0'>${total + 10}</span>
              </div>
              <button className="bg-clr font-semibold  py-2 text-sm text-white uppercase w-full">PROCEED TO CHECKOUT</button>
            </div>
          </div>

        </div>
      </div>

    </>
  )
}

export default Cart