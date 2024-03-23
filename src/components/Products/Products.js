import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import apiHandler from "../api/apiHandle";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, allProducts } from "../../store/cartSlice";

const Products = () => {
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.cart);

  useEffect(() => {
    const fetchData = async () => {
      const data = await apiHandler();
      dispatch(allProducts(data));
    };
    fetchData();
  }, []);

  console.log(products);

  return (
    <div>
      <section>
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
          <header className="text-center">
            <h2 className="text-xl font-bold text-gray-900 sm:text-3xl">
              New Collection
            </h2>

            <p className="mx-auto mt-4 max-w-md text-gray-500">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque
              praesentium cumque iure dicta incidunt est ipsam, officia dolor
              fugit natus?
            </p>
          </header>

          <ul className="mt-8 grid grid-cols-1 gap-4 lg:grid-cols-3">
            {products?.map((product) => (
              <li key={product.id}>
                <Link
                  to={`/products/${product.id}`}
                  className="group relative block"
                >
                  <img
                    src={product.thumbnail}
                    alt="logo"
                    className="aspect-square w-full object-cover transition duration-500 group-hover:opacity-90 rounded-lg"
                  />

                  <div className="absolute inset-0 flex flex-col items-start justify-end p-6">
                    <h3 className="text-xl font-medium text-white">
                      {product.category}
                    </h3>

                    <div>
                      <span className="mt-1.5 inline-block bg-black hover:bg-black-700 px-5 py-3 text-xs font-medium  rounded uppercase tracking-wide text-white cursor-pointer">
                        Shop Now
                      </span>
                      <span
                        onClick={() => dispatch(addToCart(product))}
                        className="mt-1.5 ml-4 inline-block bg-teal-700 hover:bg-teal-600 px-5 rounded py-3 text-xs font-medium uppercase tracking-wide text-white cursor-pointer"
                      >
                        Add To Cart
                      </span>
                    </div>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
};

export default Products;
