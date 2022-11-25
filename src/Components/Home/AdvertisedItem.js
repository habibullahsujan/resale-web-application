import React from 'react';
import { Link } from 'react-router-dom';

const AdvertisedItem = ({product}) => {
    return (
        <div class="max-w-2xl mx-auto my-10">
        <div class="bg-white shadow-md rounded-lg max-w-sm dark:bg-gray-800 dark:border-gray-700">
          <img
            class="rounded-t-lg p-8"
            src={product?.picture}
            alt=""
          />

          <div class="px-5 pb-5">
            <h3 class="text-gray-900 font-semibold text-lg tracking-tight dark:text-white">
              {product?.productName}
            </h3>

            <div class="flex items-center justify-between">
              <span class="text-xl font-semibold text-gray-900 dark:text-white">
              {product?.price}
              </span>
              <Link
                class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Buy This
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
};

export default AdvertisedItem;