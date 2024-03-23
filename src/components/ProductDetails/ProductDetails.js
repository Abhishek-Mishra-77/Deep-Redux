import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import apiHandler from "../api/apiHandle";
import { allProducts } from "../../store/cartSlice";
import {
  increaseQuantity,
  decreaseQuantity,
  addToCart,
} from "../../store/cartSlice";

const ProductDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { products, carts } = useSelector((state) => state.cart);

  console.log(carts);

  useEffect(() => {
    const fetchData = async () => {
      const data = await apiHandler();
      dispatch(allProducts(data));
    };
    fetchData();
  }, []);
  const cartProduct = carts?.find((cart) => cart.id == id);
  const productDetails = products?.find((product) => product.id == id);

  return (
    <div>
      <section>
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:items-stretch">
            <div className="grid place-content-center rounded bg-gray-100 p-6 sm:p-8">
              <div className="mx-auto max-w-md text-center lg:text-left">
                <header>
                  <h2 className="text-xl font-bold text-gray-900 sm:text-3xl">
                    {productDetails?.brand}
                  </h2>
                  <p className="text-xl  text-gray-900  ">
                    {productDetails?.category}
                  </p>

                  <p className="mt-4 text-gray-500">
                    {productDetails?.description}
                  </p>

                  <p className="mt-4 text-gray-500">
                    Price : $ {productDetails?.price}
                  </p>
                  <div className="margoin">
                    <span className="inline-flex -space-x-px overflow-hidden rounded-md border bg-white shadow-sm">
                      <button
                        onClick={() =>
                          dispatch(increaseQuantity(productDetails?.id))
                        }
                        className="inline-block px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 focus:relative"
                      >
                        +
                      </button>

                      <button className="inline-block px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 focus:relative">
                        {cartProduct ? cartProduct?.count : 0}
                      </button>

                      <button
                        onClick={() =>
                          dispatch(decreaseQuantity(productDetails?.id))
                        }
                        className="inline-block px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 focus:relative"
                      >
                        -
                      </button>
                    </span>
                  </div>
                </header>

                <Link
                  to="/products"
                  className="mt-8 inline-block rounded border border-gray-900 bg-gray-900 px-12 py-3 text-sm font-medium text-white transition hover:shadow focus:outline-none focus:ring"
                >
                  Shop All
                </Link>
              </div>
            </div>

            <div className="lg:col-span-2 lg:py-8">
              <ul className="grid grid-cols-2 gap-4">
                <li>
                  <button className="group block">
                    <img
                      src={productDetails?.thumbnail}
                      alt="logo"
                      className="aspect-square w-full rounded object-cover"
                    />

                    <div className="mt-3">
                      <h3 className="font-medium text-gray-900 group-hover:underline group-hover:underline-offset-4">
                        Simple {productDetails?.category}
                      </h3>

                      <p className="mt-1 text-sm text-gray-700">
                        $ {productDetails?.price}
                      </p>
                    </div>
                  </button>
                </li>

                <li>
                  <button className="group block">
                    <img
                      src={productDetails?.thumbnail}
                      alt=""
                      className="aspect-square w-full rounded object-cover"
                    />

                    <div className="mt-3">
                      <h3 className="font-medium text-gray-900 group-hover:underline group-hover:underline-offset-4">
                        Simple {productDetails?.category}
                      </h3>
                      <div className=" inset-0 flex flex-col items-start justify-end p-6">
                        <h3 className="text-xl font-medium text-white">
                          fkmdlkfmdf
                        </h3>
                        <div>
                          <span className="mt-1.5 inline-block bg-black hover:bg-black-700 px-5 py-3 text-xs font-medium  rounded uppercase tracking-wide text-white cursor-pointer">
                            Shop Now
                          </span>
                          <span
                            onClick={() => dispatch(addToCart(productDetails))}
                            className="mt-1.5 ml-4 inline-block bg-teal-700 hover:bg-teal-600 px-5 rounded py-3 text-xs font-medium uppercase tracking-wide text-white cursor-pointer"
                          >
                            Add To Cart
                          </span>
                        </div>
                      </div>
                    </div>
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductDetails;
