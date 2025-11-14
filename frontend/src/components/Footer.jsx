import React from "react";
import { assets } from "../assets/assets";
import manas_logo from "../assets/manas_logo.svg";

const Footer = () => {
  return (
    <div>
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
        <div>
          <img src={manas_logo} className="mb-5 w-32" alt="" />
          <p className="w-full md:w-2/3 text-gray-600">
           Manas is one of the best destinations for online clothing for men, women, and kids. We focus on bringing you the finest fabrics, modern designs, and unmatched style to make your shopping experience effortless and enjoyable.
           Our clothing collection features casual wear, formal wear, party outfits, and everyday essentials, carefully curated to match the latest fashion trends.
           Compared to other online clothing stores, Manas offers premium quality apparel at affordable prices. With exclusive seasonal discounts and a wide variety of trendy options, online shopping for men, women, and kids at Manas becomes stylish, convenient, and budget-friendly!
          </p>
        </div>

        <div>
          <p className="text-xl font-medium mb-5">COMPANY</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li>
              <a href="/">Home</a>
            </li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy policy</li>
          </ul>
        </div>

        <div>
          <p className="text-xl font-medium mb-5">GET IN TOUCH</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li>+91 8999892882</li>
            <li>contact@manasBuy.com</li>
          </ul>
        </div>
      </div>

      <div>
        <hr />
        <p className="py-5 text-sm text-center">
          Copyright 2025@ manas.com - All Right Reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
