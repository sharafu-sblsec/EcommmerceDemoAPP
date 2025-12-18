import { createSlice } from "@reduxjs/toolkit";
import products from "../../assets/productContent";
import { select } from "framer-motion/client";


const initialState = {
  items: products,
  filteredItems: products,
  searchTerm: "",
  selectedCategory: "All",

};

const filterProducts = (state) => {
  return state.items.filter((product) => {
    const matchSearch = product.title
      .toLowerCase()
      .includes(state.searchTerm.toLowerCase());

    const matchCategory =
      state.selectedCategory === "All" ||
      product.category.toLowerCase() ===
        state.selectedCategory.toLowerCase();

    return matchSearch && matchCategory;
  });
};

const productSlice = createSlice({
    name: "products",
    initialState,
    reducers: {
        setSearchTerm: (state, actions) => {
            state.searchTerm = actions.payload;
            state.filteredItems = filterProducts(state)
        },

        setSelectedCategory: ( state, actions) => {
            state.selectedCategory = actions.payload;
            state.filteredItems = filterProducts(state)
        }
    }
})

export const { setSearchTerm, setSelectedCategory } =
  productSlice.actions;
export default productSlice.reducer;