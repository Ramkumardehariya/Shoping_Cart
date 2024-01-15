import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartItem from "../components/CartItem";

const Cart = () => {

  const {cart} = useSelector((state) => state);
  console.log("Printing Cart");
  console.log(cart);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect( () => {
    setTotalAmount( cart.reduce( (acc, curr) => acc + curr.price,0) );
  }, [cart])

  return (
    <div className="w-10/11 max-w-[1080px] mx-auto">
  {
    cart.length > 0  ? 
    (<div className="flex flex-row">


      <div>
        {
          cart.map( (item,index) => {
            return <CartItem key={item.id} item={item} itemIndex={index} />
          } )
        }
      </div>

      <div className="flex flex-col justify-between min-h-[200px] w-[30%] max-h-[600px] ">

        <div>
          <div className="capitalize mt-10 text-green-700 font-semibold text-[18px]">YOUR CART</div>
          <div className="font-extrabold text-green-700 text-[40px] uppercase">Summary</div>
          <p>
            <span className="font-bold">Total Items: {cart.length}</span>
          </p>
        </div>

        <div>
          <span className=" text-lg ">Total Amount: </span>
          <span className="font-bold ">${totalAmount}</span>
          <button className=" bg-green-700  w-80 py-3 font-bold text-white rounded-md hover:bg-white border-2 hover:border-black hover:text-black transition-all duration-500">
            CheckOut Now
          </button>
        </div>

      </div>


    </div>) : 
    (<div className="w-[80vw] h-[80vh] flex flex-col items-center justify-center ">
      <h1 className="font-bold text-[20px]">Cart is Empty</h1>
      <Link to={"/"}>
        <button className="bg-green-700 px-20 py-3 text-white font-bold rounded-md">
          Shop Now
        </button>
      </Link>
    </div>)
  }
    </div>
  );
};

export default Cart;
