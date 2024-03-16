import { createSlice } from "@reduxjs/toolkit";
import { getProducts } from "../../Components/utils/getProduct";

const products = getProducts();
function filterData(searchText, data) {
  return data.filter((product) =>
    product.name.toLowerCase().includes(searchText.toLowerCase().trim())
  );
}

const searchSlice = createSlice({
  name: "search",
  initialState: {
    data: [...products],
  },
  reducers: {
    setSearchResults(state, action) {
      const { searchText } = action.payload;
      state.data = filterData(searchText, products);
    },
  },
});

export const { setSearchResults } = searchSlice.actions;
export default searchSlice.reducer;
