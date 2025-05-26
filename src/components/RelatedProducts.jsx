import { useContext, useEffect, useState } from "react";
import { ShopContext } from '../context/ShopContext';
import Title from './Title';
import ProductItem from "./ProductItem";

const RelatedProducts = ({ category, subCategory }) => {
  const { products } = useContext(ShopContext);
  const [related, setRelated] = useState([]);

  useEffect(() => {
    if (products && products.length > 0 && category && subCategory) {
      const relatedProducts = products.filter(
        (item) => item.category === category && item.subCategory === subCategory
      );
      setRelated(relatedProducts.slice(0, 5));
    }
  }, [products, category, subCategory]);

  return (
    <div className="my-24">
      <div className="text-center text-3xl py-2">
        <Title text1={'LEAFY'} text2={'SUGGESTIONS'} />
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-5">
        {related.map((item, index) => (
          <ProductItem key={item._id || index} id={item._id} name={item.name} price={item.price} image={item.image} />
        ))}
      </div>
    </div>
  );
};

export default RelatedProducts;
