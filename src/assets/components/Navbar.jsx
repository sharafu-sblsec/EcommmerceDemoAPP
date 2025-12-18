import React, {useState} from 'react'
import { Link, useLocation } from "react-router-dom"
import { User } from 'lucide-react'
import logo from "../imgs/icons/mainicon.svg"
import { ShoppingCart, Search } from 'lucide-react';
import { useDispatch, useSelector } from 'react-redux';
import { setSearchTerm } from '../../features/products/ProductSlice';

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const dispatch = useDispatch();
    const searchTerm = useSelector((state) => state.product.searchTerm);

    const location = useLocation();
    const isProductDetailsPage = location.pathname.startsWith("/product/");

    const cartItems = useSelector((state) => state.cart.items)
    const itemCount = cartItems.reduce((total, item) => total + item.quantity, 0);


    const handleUser = () => {
        setIsOpen(!isOpen);
    }


  return (
    <header className="bg-white shadow-md">
        <>
        <div className="py-4 shadow-md">
            <ul className="container mx-auto flex flex-wrap justify-between md:flex-row px-4 md:px-8
            items-center relative ">
                <div className="flex gap-4 ">
                    <li className="hover:font-semibold">
                        <Link to="/">Home</Link>
                    </li>
                    <li className="hover:font-semibold">
                        <button
                         onClick={() => {
                         const footer = document.getElementById("footer");
                         footer?.scrollIntoView({ behavior: "smooth" });
                        }}
                        className="cursor-pointer"
                        >
                         About
                        </button>
                    </li>
                    <li className="hover:font-semibold">
                        <Link to="/faqs">FAQs</Link>
                    </li>
                    <li className="hover:font-semibold">
                        <button
                         onClick={() => {
                         const footer = document.getElementById("footer");
                         footer?.scrollIntoView({ behavior: "smooth" });
                        }}
                        className="cursor-pointer"
                        >
                         Contacts
                        </button>
                    </li>
                </div>
                <div
                   className={`${
                    isOpen
                    ? "flex flex-col absolute right-0 md:right-0 top-12 z-10 bg-zinc-50 p-4 gap-4"
                    : "hidden"
                    }`}
                >
                    <li>
                        <Link to="/">Sign</Link>
                    </li>
                    <li>
                        <Link to="/">My Account</Link>
                    </li>
                </div>
                <User 
                size={40} 
                className="bg-gray-200 p-2 text-black rounded cursor-pointer"
                onClick={handleUser}
                />
            </ul>

        </div>
        <nav className="container mx-auto py-2 md:py-3 px-2 pr-7 md:px-12 lg:px-12 xl:px-12">
            <div className="flex items-center justify-between mb-4">
                <Link to="/" className="py-2 px-4 rounded">
                <img src={logo} alt =""className="h-16 "/>
                </Link>

                <div className="flex items-center gap-3">
        {!isProductDetailsPage && (          
          <button
            type="button"
            aria-expanded={isSearchOpen}
            aria-label={isSearchOpen ? "Close search" : "Open search"}
            onClick={() => setIsSearchOpen((s) => !s)}
            className="inline-flex items-center justify-center cursor-pointer bg-gray-100 px-3 py-2 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-indigo-400"
          >
            <Search size={25} />
          </button>
        )}

        <div className="relative">
            <Link to="/cart">
            <ShoppingCart
              size={54}
              className="cursor-pointer bg-gray-100 px-3 py-2 rounded-full"
            />
            {itemCount > 0 && (
              <span className="absolute -top-2 -right-5 bg-sky-600 text-white text-xs rounded-full w-5 h-5
              flex items-center justify-center">{itemCount}</span>
            )}
          </Link>
        </div>
        </div>
      </div>

      {isSearchOpen && !isProductDetailsPage && (
        <form className="flex-1 mx-6 sm:block" onSubmit={(e) => e.preventDefault()}>
          <input
            type="text"
            className="bg-zinc-100 rounded-md border border-zinc-200 focus:outline-none py-3 px-3 w-full transition-shadow"
            placeholder="Search products..."
            autoFocus
            value={searchTerm}
            onChange={(e)=>dispatch(setSearchTerm(e.target.value))}
          />
        </form>
      )}
        </nav>
        
        </>

    </header>
  )
}

export default Navbar
