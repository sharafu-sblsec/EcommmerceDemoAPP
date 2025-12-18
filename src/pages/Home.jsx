import { Cat } from 'lucide-react';
import React from 'react'
import ProductGrid from '../assets/components/ProductGrid';
import Footer from '../assets/components/Footer';
import AutoFitHero from '../assets/components/AutoFitHero';
import Category from '../assets/components/Category';
import heroSrc from '../assets/imgs/showcase/img12.png'
import { useSelector } from "react-redux";

const categories = [
  "All",
  "Gadgets",
  "Smartphones",
  "laptops",
  "Cameras",
  "Audio",
  "Gaming",
];

function Home() {

  const searchTerm = useSelector((state) => state.product.searchTerm);
  const isSearching = searchTerm.trim().length > 0;


  return (
    <div>
      <div>

      {!isSearching && (
        <AutoFitHero src={heroSrc} minHeight="70vh" />
       )}

      </div>
      <div className="container mx-auto my-4 px-5 md:px-10 md:my-10 lg:px-10 lg:my-10 xl:px-10 xl:my-10">
        <Category />

        <ProductGrid />

      </div>

    </div> 
  )
}

export default Home
