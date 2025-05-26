import React, { useContext, useState, useEffect } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "../components/Title";
import { assets } from "../assets/assets";
import CartTotal from "../components/CartTotal";

const Cart = () => {
  const { products, currency, cartItems, updateQuantity, navigate } = useContext(ShopContext);
  const [cartData, setCartData] = useState([]);

  useEffect(() => {
    const tempData = [];
    for (const productId in cartItems) {
      for (const size in cartItems[productId]) {
        if (cartItems[productId][size] > 0) {
          tempData.push({
            _id: productId,
            size: size,
            quantity: cartItems[productId][size],
          });
        }
      }
    }
    setCartData(tempData);
  }, [cartItems]);

  return (
    <div className="border-t border-sage pt-14 font-outfit text-charcoal px-4 sm:px-8 md:px-16">
      <div className="text-2xl mb-6">
        <Title text1={"YOUR"} text2={"CART"} />
      </div>

      <div>
        {cartData.length === 0 ? (
          <p className="text-center text-charcoal/70 py-20">Your cart is empty.</p>
        ) : (
          cartData.map((item, index) => {
            const productData = products.find(product => product._id === item._id);

            if (!productData) return null;

            return (
              <div
                key={index}
                className="py-4 border-t border-b border-sage text-charcoal grid grid-cols-[4fr_0.5fr_0.5fr] sm:grid-cols-[4fr_2fr_0.5fr] items-center gap-4"
              >
                <div className="flex items-start gap-6">
                  <img
                    className="w-16 sm:w-20 rounded-md shadow-sm"
                    src={productData.image[0]}
                    alt={productData.name}
                  />

                  <div>
                    <p className="text-xs sm:text-lg font-medium">{productData.name}</p>
                    <div className="flex items-center gap-2 mt-2">
                      <p className="font-semibold">
                        {currency}{productData.price}
                      </p>
                      <p className="px-2 sm:px-3 sm:py-1 border border-sage rounded text-sm bg-softwhite">
                        {item.size}
                      </p>
                    </div>
                  </div>
                </div>

                <input
                  onChange={(e) => {
                    const val = e.target.value;
                    if (val === "" || val === '0') return;
                    updateQuantity(item._id, item.size, Number(val));
                  }}
                  className="max-w-[3rem] sm:max-w-[5rem] px-2 py-1 border border-sage rounded text-center focus:outline-none focus:ring-2 focus:ring-forest"
                  type="number"
                  min={1}
                  defaultValue={item.quantity}
                />

                <img
                  onClick={() => updateQuantity(item._id, item.size, 0)}
                  src={assets.bin_icon}
                  alt="Remove item"
                  className="w-5 sm:w-6 cursor-pointer hover:text-red-600 transition-colors"
                  title="Remove item"
                />
              </div>
            );
          })
        )}
      </div>

      {cartData.length > 0 && (
        <div className="flex justify-end my-20">
          <div className="w-full sm:w-[450px]">
            <CartTotal />

            <div className="w-full text-end">
              <button
                onClick={() => navigate('/place-order')}
                className="bg-forest text-softwhite text-sm my-8 px-8 py-3 rounded hover:bg-mint hover:text-forest transition"
              >
                PROCEED TO CHECKOUT
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
