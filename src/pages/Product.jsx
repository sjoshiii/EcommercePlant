import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";
import { assets } from "../assets/assets";
import RelatedProducts from "../components/RelatedProducts";

const Product = () => {
  const { productId } = useParams();
  const { products, currency, addToCart } = useContext(ShopContext);
  const [productData, setProductData] = useState(null);
  const [image, setImage] = useState("");
  const [size, setSize] = useState("");

  const fetchProductData = () => {
    const product = products.find((item) => item._id === productId);
    if (product) {
      setProductData(product);
      setImage(product.image[0]);
    }
  };

  useEffect(() => {
    if (products.length > 0) {
      fetchProductData();
    }
  }, [productId, products]);

  if (!productData) {
    return <div className="opacity-0">Loading...</div>;
  }

  return (
    <div className="border-t-2 border-sage pt-10 transition-opacity ease-in duration-500 opacity-100 font-outfit text-charcoal">
      {/* Product data */}
      <div className="flex flex-col sm:flex-row gap-8 sm:gap-12">
        {/* product images */}
        <div className="flex-1 flex flex-col-reverse gap-3 sm:flex-row">
          <div className="w-full sm:w-[80%] ml-auto">
            <img
              src={image}
              alt={productData.name}
              className="w-[300px] h-[400px] object-contain rounded-md shadow-md"
            />
          </div>
        </div>

        {/* product info */}
        <div className="flex-1">
          <h1 className="font-medium text-2xl mt-2">{productData.name}</h1>
          <div className="flex items-center gap-1 mt-2">
            {[...Array(4)].map((_, idx) => (
              <img
                key={idx}
                src={assets.star_icon}
                alt="star icon"
                className="w-3.5"
              />
            ))}
            <img
              src={assets.star_dull_icon}
              alt="star icon"
              className="w-3.5"
            />
            <p className="pl-2 text-charcoal/70">(133)</p>
          </div>
          <p className="mt-5 text-xl font-semibold">
            {productData.price} {currency}
          </p>
          <p className="mt-5 text-gray-600 md:w-4/5">{productData.description}</p>

          <div className="flex flex-col gap-4 my-8">
            <p className="font-semibold">Select Pot Size</p>
            <div className="flex gap-2">
              {productData.sizes.map((item, index) => (
                <button
                  key={index}
                  onClick={() => setSize(item)}
                  className={`border border-sage rounded-md py-2 px-4 transition-colors ${
                    item === size
                      ? "bg-forest text-softwhite"
                      : "bg-transparent text-charcoal hover:bg-mint hover:text-forest"
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          <button
  onClick={() => addToCart(productData._id, size)}
  disabled={!size}
  className={`px-8 py-3 text-sm rounded transition duration-100 ease-in-out
    ${
      size
        ? "bg-forest text-softwhite hover:bg-mint hover:text-forest hover:border hover:border-forest active:scale-95 focus:ring-2 focus:ring-mint"
        : "bg-gray-300 text-gray-500 cursor-not-allowed"
    }
  `}
>
  ADD TO CART
</button>


          <hr className="mt-10 mb-8 sm:w-4/5 border-sage" />

          <div className="text-sm text-charcoal/70 mt-5 flex flex-col gap-1">
            <p>Authentic plants guaranteed — shop with confidence.</p>
            <p>Enjoy secure doorstep delivery with Cash on Delivery.</p>
            <p>7-day easy returns and smooth exchanges.</p>
          </div>
        </div>
      </div>

      {/* Description & Review Section */}
      <div className="mt-20">
        <div className="flex border-b border-sage">
          <b className="border-b-2 border-forest px-5 py-3 text-sm cursor-pointer">
            Description
          </b>
          <p className="px-5 py-3 text-sm text-charcoal/60 cursor-pointer">
            Reviews (122)
          </p>
        </div>

        <div className="flex flex-col gap-4 border border-sage px-6 py-4 text-sm text-charcoal/70 rounded-b-md">
          <p>
            Our plant collection is curated to bring freshness, beauty, and
            greenery into your home and garden. Whether you’re looking for easy-care
            indoor plants, vibrant flowering varieties, or air-purifying greens,
            each plant is carefully selected to thrive and brighten your space.
          </p>
          <p>
            From small succulents perfect for desks to large statement plants for
            living rooms, we provide detailed care tips and quality plants that
            fit your lifestyle. Explore a world of natural beauty, one plant at a
            time.
          </p>
        </div>
      </div>

      {/* Display related products */}
      <RelatedProducts
        category={productData.category}
        subCategory={productData.subCategory}
      />
    </div>
  );
};

export default Product;
