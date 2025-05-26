import { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import { Link } from "react-router-dom";
// import PropTypes from "prop-types";

const ProductItem = ({ id, image, name, price }) => {
  const { currency } = useContext(ShopContext);
  return (
    <Link className="text-gray-700 cursor-pointer" to={`/product/${id}`}>
      <div className="overflow-hidden">
        <img
          className="hover:scale-110 transition ease-out product-image"
          src={image[0]}
          alt="product_img" 

        />
      </div> 

      <p className="pt-3 pb-1 text-sm">{name}</p>
      <p className="text-sm font-medium">
        {currency}
        {price}
      </p>
    </Link>
  );
};
// ProductItem.propTypes = {
//   id: PropTypes.string.isRequired,
//   image: PropTypes.arrayOf(PropTypes.string).isRequired,
//   name: PropTypes.string.isRequired,
//   price: PropTypes.number.isRequired,
// };

export default ProductItem;

