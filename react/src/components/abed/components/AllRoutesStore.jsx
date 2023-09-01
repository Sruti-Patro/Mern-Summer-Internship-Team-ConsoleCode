import { Route, Routes } from "react-router-dom";
import SingleProduct from "./SingleProduct";
import ProductPage from "../ProductPage"
import ViewAllTshirt from "./ViewAllTshirt"
import ViewAllPants from "./ViewAllPants"
import ViewAllFootWear from "./ViewAllFootWear"
function AllRoutesStore() {
  return (
    <Routes>
      <Route path="/store" element={<ProductPage/>}></Route>
      <Route path="/tshirt" element={<ViewAllTshirt/>}></Route>
      <Route path="/tights" element={<ViewAllPants/>}></Route>
      <Route path="/footwear" element={<ViewAllFootWear/>}></Route>
      <Route path="/singleproduct/:id" element={<SingleProduct/>}></Route>
      {/* <Route path="/cart" element={<ViewCart />}></Route> */}
    </Routes>
  );
}

export default AllRoutesStore;