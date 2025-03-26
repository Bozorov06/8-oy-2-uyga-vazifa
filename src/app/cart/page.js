"use client";

import React from "react";
import { useCart } from "./CartContext";
import Image from "next/image";
import { Trash } from "lucide-react";
import Link from "next/link";

const CartPage = () => {
  const { cart, removeFromCart } = useCart();

  const totalPrice = cart
    .reduce(
      (acc, item) =>
        acc + (item.price - (item.price / 100) * item.discountPercentage),
      0
    )
    .toFixed(2);

  return (
    <div className="mx-auto p-5">
      <h2 className="text-3xl font-bold mb-6 text-center"> Cart</h2>

      {cart.length === 0 ? (
        <p className="text-center text-lg text-gray-500">Savat bo'sh</p>
      ) : (
        <div className=" w-full grid grid-cols-3 gap-10">
          {cart.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center p-5 border rounded-lg shadow-md"
            >
              <div className="w-40 h-40 relative">
                <Image
                  src={item.images[0]}
                  className="rounded-md object-cover"
                  layout="fill"
                  alt={item.title}
                />
              </div>

              <div className="flex-1">
                <h3 className="font-semibold text-lg">{item.title}</h3>
                <p className="text-sm text-gray-500">{item.description}</p>
                <p className="text-sm text-gray-500 line-through">
                  {" "}
                  ${item.price}
                </p>
                <p className="text-green-500 font-bold">
                  $
                  {(
                    item.price -
                    (item.price / 100) * item.discountPercentage
                  ).toFixed(2)}
                </p>
              </div>

              <button
                onClick={() => removeFromCart(index)}
                className="text-red-500 hover:text-red-700 cursor-pointer hover:scale-125 duration-300"
              >
                <Trash size={20} />
              </button>
            </div>
          ))}
        </div>
      )}
      <div className="p-4 w-[470px] mt-2 bg-gray-100 rounded-lg shadow-md flex justify-between items-center">
        <h3 className="text-xl font-bold">Umumiy:</h3>
        <p className="text-xl font-bold text-green-600">${totalPrice}</p>
      </div>

      <div className="p-4 text-center">
        <button className="w-[600px] bg-blue-800 text-white py-3 rounded-lg text-lg hover:bg-gray-800 transition cursor-pointer">
          Xarid qilish
        </button>
      </div>
      <Link href={"/"} className="font-semibold text-blue-600 text-30">
        Yana xarid qilish
      </Link>
    </div>
  );
};

export default CartPage;