import { useContext } from "react";
import { ShopContext } from './../context/ShopContext';
import Title from './../components/Title';

const Orders = () => {
  const { products, currency } = useContext(ShopContext);

  return (
    <div className="border-t border-sage pt-16 font-outfit text-charcoal px-4 sm:px-8 md:px-16">
      <div className="text-2xl mb-6">
        <Title text1={'MY'} text2={'ORDERS'} />
      </div>

      <div>
        {products.slice(1, 4).map((item, index) => (
          <div
            key={index}
            className="py-4 border-b border-sage text-charcoal flex flex-col md:flex-row md:items-center md:justify-between gap-6"
          >
            <div className="flex items-start text-sm sm:text-base gap-6">
              <img
                className="w-16 sm:w-20 rounded-md shadow-sm"
                src={item.image[0]}
                alt={`${item.name} image`}
              />

              <div>
                <p className="font-medium">{item.name}</p>
                <div className="flex items-center gap-4 mt-2 text-base text-charcoal">
                  <p className="text-lg font-semibold">{currency}{item.price}</p>
                  <p>Quantity: 1</p>
                  <p>Pot Size: M</p>
                </div>

                <p className="mt-2 text-charcoal/70">
                  Date: <span className="text-charcoal/50">21-Apr-2025</span>
                </p>
              </div>
            </div>

            <div className="md:w-1/2 flex justify-between items-center gap-4">
              <div className="flex items-center gap-2">
                <span className="inline-block w-3 h-3 rounded-full bg-forest"></span>
                <p className="text-sm md:text-base font-medium text-forest">Ready to ship</p>
              </div>
              <button className="border border-forest px-4 py-2 text-sm font-medium rounded-sm text-forest hover:bg-forest hover:text-softwhite transition">
                Track Order
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Orders;
