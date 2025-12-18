import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { ArrowLeft, ArrowRight, Minus, Plus, Trash2 } from 'lucide-react'
import { removeFromCart, updateQuantity } from '../features/cart/cartSlice'

function CartPage() {

  const dispatch = useDispatch()
  const cartItems = useSelector((state) => state.cart.items)
  
  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)

  if (cartItems.length === 0) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="text-center ">
           <h2>Cart is Empty</h2>
           <p className="text-gray-600 mb-4">Add Some Products To Your Cart</p>
           <Link to="/"
             className="inline-flex items-center gap-3 py-2 px-3 rounded-md bg-white border shadow-sm
             hover:shadow-md transition focus:outline-none"
>
           <div className="flex h-8 w-8 items-center justify-center rounded-md bg-zinc-100">
            <ArrowLeft className="w-5 h-5 text-sky-700" />
           </div>

            <span className="text-sm font-semibold text-sky-700">
              Continue Shopping
            </span>
        </Link>
        </div>
      </div>
    )
  }


  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-8">Shopping Cart</h2>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 shadow-md p-4 rounded-md">

          {cartItems.map((item) => (
            <div
            key={item.id}
               className="flex items-center p-4 py-4 border-b"
            >
            <Link to={`/product/${item.id}`}>
              <img
                src={item.image}
                alt={item.title}
                className="w-24 h-24 object-cover rounded"
              />
            </Link>

            <div className="flex-1">
              <Link to={`/product/${item.id}`} className="font-semibold hover:text-sky-600 pl-4">
                {item.title}
            </Link>
             <p className="text-gray-600 font-semibold pl-4">${item.price}</p>
             <div className="flex items-center gap-2 mt-2 ml-4">
                <button className="p-1 rounded-sm bg-gray-200 hover:bg-gray-400" onClick={()=> dispatch (updateQuantity({id: item.id, quantity: Math.max(0, item.quantity -1)}))}>
                  <Minus size={16}/>
                </button>
                <span>{item.quantity}</span>
                <button className="p-1 rounded-sm bg-gray-200 hover:bg-gray-400" onClick={()=> dispatch (updateQuantity({id: item.id, quantity: Math.max(0, item.quantity +1)}))}>
                  <Plus size={16} />
                </button>
                 <div className="ml-4 text-red-500 hover:text-red-700 cursor-pointer" onClick={()=>
                  dispatch(removeFromCart(item.id))
                 }>
                   <Trash2 size ={20} /> 
                </div>
              </div>
            </div>

            <div className="text-right">
               <p className="font-bold">
                ${(item.price * item.quantity).toFixed(2)}
              </p>
            </div>
         </div>
       ))}

        </div>
        <div className="lg:col-span-1 ">
          <div className="bg-white shadow-md p-6 rounded-md">
           <h3 className="text-xl font-bold mb-4">Order Summary</h3>
           <div className="space-y-2 mb-4">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>${total.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span>Free</span>
                <span>Shipping</span>
              </div>
              <div className="border-t font-bold pt-2">
                <div className="flex justify-between">
                  <span>Total</span>
                  <span>${total.toFixed(2)}</span>
                </div>
              </div>
           </div>
           <button className="inline-flex items-center gap-3 py-2 px-3 rounded-md bg-white border shadow-sm
                        hover:shadow-md transition focus:outline-none"
           >
                   <div className="flex h-8 w-8 items-center justify-center rounded-md bg-zinc-100">
                       <ArrowRight className="w-5 h-5 text-sky-700" />
                   </div>
           
                    <span className="text-sm font-semibold text-sky-700">
                        Checkout
                       </span>
           </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CartPage
