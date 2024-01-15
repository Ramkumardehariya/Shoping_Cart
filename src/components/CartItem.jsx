
import {FcDeleteDatabase} from "react-icons/fc"
import { useDispatch } from "react-redux";
import { remove } from "../redux/Slices/CartSlice";
import { toast } from "react-hot-toast";

const CartItem = ({item, itemIndex}) => {
  const dispatch = useDispatch();

  const removeFromCart = () => {
    dispatch(remove(item.id));
    toast.success("Item Removed");
  }

  return (
    <div >

      <div className="min-h-[200px] w-[70%] mt-4 flex flex-row justify-between items-center border-b-2 border-black ">

        <div className="w-[150px] ">
          <img  src={item.image} />
        </div>
        <div className="w-[60%] flex flex-col gap-3">
          <h1 className="font-bold text-[18px]">{item.title}</h1>
          <h1>{item.description.split(" ").slice(0,15).join(" ") + "..."}</h1>
          <div className="flex flex-row justify-between">
            <p className="text-green-600 font-bold">${item.price}</p>
            <button className="bg-red-300 w-10 h-10 rounded-full text-white text-center pl-3"
            onClick={removeFromCart}>
              <FcDeleteDatabase/>
            </button>
          </div>

        </div>


      </div>

    </div>
  );
};

export default CartItem;
