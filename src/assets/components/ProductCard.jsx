import { Link } from 'react-router-dom'
import React from 'react'
import { motion } from "framer-motion";

function ProductCard({ product }) {
  return (

    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.3 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
    <Link className="block" to={`/product/${product.id}`}>
      <div
        className="shadow-lg rounded-md cursor-pointer overflow-hidden 
                   transform transition duration-300 ease-out 
                   hover:scale-105 hover:shadow-2xl group
                   w-full h-[280px] flex flex-col"
      >

        <div className="h-[140px] w-full bg-white flex items-center justify-center p-2">
          <img
            src={product.image}
            alt={product.title}
            className="max-h-full max-w-full object-contain transition-transform duration-300 group-hover:scale-105"
          />
        </div>

        <div className="bg-gray-50 p-3 flex flex-col justify-between flex-1">
          
          <h2 className="text-base font-semibold line-clamp-2 overflow-hidden">
            {product.title}
          </h2>

          <p className="text-xs text-zinc-500 line-clamp-2 overflow-hidden">
            {product.description}
          </p>

          <div className="flex justify-between items-center mt-2">
            <p className="text-lg font-semibold">${product.price}</p>
            <p className="text-xs text-indigo-600 font-bold">View Details</p>
          </div>

        </div>
      </div>
    </Link>
    </motion.div>
  );
}


export default ProductCard
