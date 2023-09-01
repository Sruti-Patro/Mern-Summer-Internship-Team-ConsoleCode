import Navbar from '../sruti/navbar/Navbar';
import './Cart.css';
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
  <div className='bg-black text-white'>
  <Navbar/>
  <div id="title">
      <ul>
        <li ><h1><pre>Cart-Items</pre></h1></li>
      </ul>
    </div>
    <div>
    {arr.map((el) => {        
    <div className='parent'>
        <div className='child'>
        <img src={el.image} height={150} width={150}/>
        </div>
        <div className='child'>
           <h3>{el.title}</h3>
          <p><b>Catagory: </b>{el.category}</p>
          <h4>${el.price}</h4>
        </div> 
        </div>
    }
      )}
      </div>
      
      <ul>
        <li ><h1><pre>Total cost: {tot}</pre></h1></li>
        <Button className="inline-flex m-0 bg-black-400 hover:bg-grey-600 active:bg-grey-300 items-center justify-between text-white" variant="faded"><a href='/order'>Buy Products In The Cart</a></Button>
      </ul>
  </div>
  );
}
export default Cart;