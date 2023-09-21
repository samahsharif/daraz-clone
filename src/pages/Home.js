import React, {useEffect, useState}from 'react'
import FooterBottom from '../components/FooterBottom';
import Product from './Product';
import HeroCarousel from '../components/HeroCarousel';


function Home() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch('https://dummyjson.com/products?limit=96')
      .then((res) => res.json())
      .then((data) => setProducts(data.products));
    //  .then(console.log)


  }, [])
  return (
    <>
      <main className='main-sec container '>
       <HeroCarousel />
      
      
       <div class=" px-2 py-5 mx-auto">
        <div className='hero-sec'>Just For You</div>
   
       <div className="flex justify-center row -m-4">
                  {
                    products.length === 0 ?
                      <div className='text-center'>Loading...</div>
                      :

                      products.map((item, index) => {
                        return <Product key={index} item={item} />
                      })
                      
                  }
                  
              </div>
              </div>
      
    </main >

      <FooterBottom />
   </>
  )
}

export default Home