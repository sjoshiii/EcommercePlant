import { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "../components/Title";

const Orders = () => {
  const { orders, products, currency } = useContext(ShopContext);

  return (
    <div className="border-t border-sage pt-16 font-outfit text-charcoal px-4 sm:px-8 md:px-16">
      <div className="text-2xl mb-6">
        <Title text1={"MY"} text2={"ORDERS"} />
      </div>

      {orders.length === 0 ? (
        <p className="text-center text-charcoal/70 py-20">You have no orders yet.</p>
      ) : (
        orders.map((item, index) => {
          const product = products.find(p => p._id === item._id);
          if (!product) return null;
          return (
            <div key={index} className="py-4 border-b border-sage flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
              <div className="flex gap-4">
                <img className="w-16 sm:w-20 rounded-md shadow-sm" src={product.image[0]} alt={product.name} />
                <div>
                  <p className="font-medium">{product.name}</p>
                  <div className="flex gap-4 text-sm mt-1">
                    <p>{currency}{product.price}</p>
                    <p>Qty: {item.quantity}</p>
                    <p>Size: {item.size}</p>
                  </div>
                  <p className="text-gray-500 text-sm mt-1">Date: {item.date}</p>
                </div>
              </div>

              <button className="border border-forest px-4 py-2 text-sm text-forest rounded hover:bg-forest hover:text-white transition">
                Track Order
              </button>
            </div>
          );
        })
      )}
    </div>
  );
};

export default Orders;
