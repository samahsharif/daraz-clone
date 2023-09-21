import React from "react"
import ReactStars from "react-rating-stars-component";
import { NavLink } from "react-router-dom";


function Product({item}) {
    // console.log(item)
    const {id,price,title,discountPercentage,images}=item;
    
   
   return(
    <>  
      <div className="lg-w  my-3 mx-1 p-0 bg-white ">
     
  
  <NavLink to={`/SingleProduct/${id}`}>
       
          <img alt="images" className=" object-center  block m-0" src={images[0]} />
        <div className="mt-4 p-1">
           <h3 className=" clr-black text-sm tracking-widest  mb-1">{title}</h3>
           <p className="mt-1 clr-orange text-lg">${price}</p>
           <p className="clr  text-xs font-medium line-through">${discountPercentage}</p> 
           <p className="ml-left">
           <ReactStars
                  count={5}
                  size={24}
                  value="3"
                  edit="false"
                  activeColor="#ffd700"
                  />   </p>
   
         </div>
         </NavLink>
      
       </div>
     </>
    )
 }


export default Product;
