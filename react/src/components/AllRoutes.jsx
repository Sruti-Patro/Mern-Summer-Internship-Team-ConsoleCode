import { Route, Routes } from "react-router-dom";
import FitnessPage from "./abed/fitness/FitnessPage";
import MainHome from "../pages/MainHome";
import Mind from "../pages/Mind";
import Care from "../pages/Care";
import Cart from "./PgPragnyat/Cart";
import MainCart from "./PgPragnyat/Maincart";
import SignUp from '../pages/SignUp';
import LogIn from '../pages/LogIn'
import Navbar from "./sruti/navbar/Navbar";

export default function AllRoutes() {
  return (
    <>
      <Routes>
        <Route path="/fitness" element={<FitnessPage />}></Route>
        <Route path="/mind" element={<Mind />}></Route>
        <Route path="/care" element={<Care />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
        <Route path="/order" element={<MainCart />}></Route>        
        <Route path="/sign" element={<SignUp />}></Route>
        <Route path="/login" element={<LogIn />}></Route>
        <Route path="/nav" element={<Navbar/>}></Route>
        <Route path="/" element={<MainHome/>}></Route>
      </Routes>
    </>
  );
}
