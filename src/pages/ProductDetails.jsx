import { ShoppingCart, ArrowLeft } from 'lucide-react'
import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import logo from "../assets/imgs/icons/ecom.svg"
import { addToCart } from '../features/cart/cartSlice'

function ProductDetails() {
  
  const { id } = useParams();
  const dispatch = useDispatch();

  const product = useSelector((state) => 
    state.product.items.find((p) => p.id === parseInt(id))
);
  if (!product) {
     return ( 
     <div className="container mx-auto px-4 py-8">
       <div className="text-center">
         <h2 className="text-2xl font-bold mb-4">Product Not Found</h2>
         <Link to="/" className="text-blue-600 hover:text-blue-800">
           Back
         </Link>
       </div>
    </div>
     );
  }


  return (
    <div className="container mx-auto px-4 py-8">
      <div>
        <Link to="/"
             className="inline-flex items-center gap-3 py-2 px-3 rounded-md bg-white border shadow-sm
             hover:shadow-md transition focus:outline-none"
>
        <div className="flex h-8 w-8 items-center justify-center rounded-md bg-zinc-100">
            <ArrowLeft className="w-5 h-5 text-sky-700" />
        </div>

         <span className="text-sm font-semibold text-sky-700">
            Back
            </span>
        </Link>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
           <div className="shadow-md p-4 rounded ">
              <img src={product.image} alt={product.title}/>
           </div>

           <div>
            <img
              src={logo}
              alt="Brand logo"
              className="h-14 w-auto mb-3"
            />
            <h1 className="text-3xl font-bold mb-4">{product.title}</h1>
            <p className="text-gray-600 mb-6">{product.description}</p>
            <div className="mb-6">
               <span className="text-3xl font-bold">${product.price}</span>
            </div>
            <div className="mb-6">
               <h3 className="font-bold text-sky-700 mb-2">Category</h3>
               <span className="font-mono inline-block bg-gray-100 rounded-sm px-3 py-1 text-sm">{product.category}</span>
            </div>
             <button className="w-full md:w-auto bg-white border shadow-sm
             hover:shadow-md transition focus:outline-none px-8 py-3 rounded-md flex items-center justify-center gap-2
             " onClick={() => dispatch(addToCart(product))}>
              <div className="flex h-8 w-8 items-center justify-center rounded-md bg-zinc-100">
                <ShoppingCart className="w-5 h-5 text-sky-700" />
              </div>
              <span className="text-sm font-semibold text-sky-700" >
               Add to Cart
             </span>
               
            </button>
            </div>
           
        </div>
      </div>
    </div>
    
  )
}

export default ProductDetails
ProductDetails