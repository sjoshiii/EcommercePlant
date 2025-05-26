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
    <div className="border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100">
      {/* Product data */}
      <div className="flex gap-12 sm:gap-12 flex-col sm:flex-row">
        {/* product images */}
        <div className="flex-1 flex flex-col-reverse gap-3 sm:flex-row">
          <div className="w-4 sm:w-[80%] ml-auto">
            <img
              src={image}
              alt="product_img"
              className="w-[300px] h-[400px] object-contain"
            />
          </div>
        </div>

        {/* product info */}
        <div className="flex-1">
          <h1 className="font-medium text-2xl mt-2">{productData.name}</h1>
          <div className="flex items-center gap-1 mt-2">
            <img src={assets.star_icon} alt="star icon" className="w-3.5" />
            <img src={assets.star_icon} alt="star icon" className="w-3.5" />
            <img src={assets.star_icon} alt="star icon" className="w-3.5" />
            <img src={assets.star_icon} alt="star icon" className="w-3.5" />
            <img
              src={assets.star_dull_icon}
              alt="star icon"
              className="w-3.5"
            />
            <p className="pl-2">(133)</p>
          </div>
          <p className="mt-5 text-xl font-medium">
            {productData.price} {currency}
          </p>
          <p className="mt-5 text text-gray-500 md:w-4/5">
            {productData.description}
          </p>
          <div className="flex flex-col gap-4 my-8">
            <p>Select Pot Size</p>
            <div className="flex gap-2">
              {productData.sizes.map((item, index) => (
                <button
                  key={index}
                  onClick={() => setSize(item)}
                  className={`border py-2 px-4 ${
                    item === size ? "bg-white" : ""
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          <button
            onClick={() => addToCart(productData._id, size)}
            className="bg-black text-white px-8 py-3 text-sm active:bg-gray-700
            hover:bg-[rgb(198,196,196)] hover:text-black 
            hover:border hover:border-black
            transition"
          >
            ADD TO CART
          </button>

          <hr className="mt-10 mb-8 sm:w-4/5" />

          <div className="text-sm text-gray-500 mt-5 flex flex-col gap-1">
            <p>Authentic plants guaranteed — shop with confidence.</p>
            <p>Enjoy secure doorstep delivery with Cash on Delivery.</p>
            <p>7-day easy returns and smooth exchanges.</p>
          </div>
        </div>
      </div>

      {/* Description & Review Section */}
      <div className="mt-20">
        <div className="flex">
          <b className="border px-5 py-3 text-sm">Description</b>
          <p className="border px-5 py-3 text-sm">Reviews (122)</p>
        </div>

        <div className="flex flex-col gap-4 border px-6 py-4 text-sm text-gray-500">
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

      {/*  Display related products  */}
      <RelatedProducts
        category={productData.category}
        subCategory={productData.subCategory}
      />
    </div>
  );
};

export default Product;
