import './Cart.css';
import React from 'react';
import {Button} from "@nextui-org/react";
function Cart() {
  const arr = [
    {
      id: 1,
      title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
      price: 109.95,
      description:
        "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
      category: "men's clothing",
      image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
      num:0,
    },
    {
      id: 2,
      title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
      price: 109.95,
      description:
        "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
      category: "men's clothing",
      image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    
    },] 
let tot=0;
for (let i = 0; i < arr.length; i++) {
  tot+=arr[i].price;
}
  return(
  <>
  <div id="title">
      <ul>
        <li ><h1><pre>Cart-Items</pre></h1></li>
      </ul>
    </div>
    <div>
    {arr.map((el) => (
        <div class='parent'>
        <div class='child'>
        <img src={el.image} height={150} width={150}/>
        </div>
        <div class='child'>
           <h3>{el.title}</h3>
          <p><b>Catagory: </b>{el.category}</p>
          <h4>${el.price}</h4>
        </div> 
        </div>
      )
      )}
      </div>
      
      <ul>
        <li ><h1><pre>Total cost: {tot}</pre></h1></li>
        <Button classname="inline-flex m-0 bg-indigo-400 hover:bg-indigo-600 active:bg-violet-600 items-center justify-between" variant="ghost">Buy Products In The Cart</Button>
      </ul>
  </>
  );
}
export default Cart;