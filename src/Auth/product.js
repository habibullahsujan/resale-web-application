//get category product
export const categoryProducts = async (id) => {
  const url = `https://server-side-phi-lake.vercel.app//single_category/${id}`;
  const response = await fetch(url);
  const data = await response.json();
  return data;
};

///upload new products
export const uploadNewProductData = async (product) => {
  const url = "https://server-side-phi-lake.vercel.app/product";
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(product),
  });
  const data = await response.json();
  return data;
};



//delete a single product
export const deleteProduct = async (id, email) => {
  const url = `https://server-side-phi-lake.vercel.app/product/delete/${id}?email=${email}`;
  const response = await fetch(url, {
    method: "DELETE",
    headers: {
      authorization: `Bearer ${localStorage.getItem("accessToken")}`,
    },
  });
  const data = await response.json();
  return data;
};

//get a single product
export const advertisedAProduct = async (id) => {
  const url = `https://server-side-phi-lake.vercel.app/advertised/product/${id}`;
  const response = await fetch(url, { method: "PUT" });
  const data = await response.json();
  return data;
};

//store sold product data;
export const soldProduct = async (product) => {
  const url = "https://server-side-phi-lake.vercel.app/sold-product";
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(product),
  });
  const data = await response.json();
  return data;
};

//update sold status
export const updateSoldStatus = async (id) => {
  const url = `https://server-side-phi-lake.vercel.app/soldProducts/${id}`;
  const response = await fetch(url, { method: "PUT" });
  const data = await response.json();
  return data;
};

//after sold product change product sellStatus
export const updateSellStatus = async (id) => {
  const url = `https://server-side-phi-lake.vercel.app/booked-product/${id}`;
  const response = await fetch(url, { method: "PUT" });
  const data = await response.json();
  return data;
};
//add a product in the wishlist
export const addProductAWishlist = async (wishListData) => {
  const url = `https://server-side-phi-lake.vercel.app/wishlist-product`;
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(wishListData),
  });
  const data = await response.json();
  return data;
};
//report a product
export const reportProduct = async (reportedProductData) => {
  const url = `https://server-side-phi-lake.vercel.app/report-product`;
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(reportedProductData),
  });
  const data = await response.json();
  return data;
};
//get reported  product
export const getAllReportedProduct = async () => {
  const url = `https://server-side-phi-lake.vercel.app/reported-products`;
  const response = await fetch(url);
  const data = await response.json();
  return data;
};

///store booked product
export const storeBookedProduct = async (bookedProductData) => {
  const url = "https://server-side-phi-lake.vercel.app/my-orders";
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(bookedProductData),
  });
  const data = await response.json();
  return data;
};

//remove item form cart
export const removeItemFromCart = async (id, email) => {
  const url = `https://server-side-phi-lake.vercel.app/remove-from-cart/${id}?email=${email}`;
  const response = await fetch(url, {
    method: "DELETE",
    headers: {
      authorization: `Bearer ${localStorage.getItem("accessToken")}`,
    },
  });
  const data = await response.json();
  return data;
};

export const updateBookedProductSoldStatus = async (id) => {
  const url = `https://server-side-phi-lake.vercel.app/bookedProducts/${id}`;
  const response = await fetch(url, { method: "PUT" });
  const data = await response.json();
  return data;
};
//update wishlist product sold status
export const updateWishlistProductSoldStatus = async (id) => {
  const url = `https://server-side-phi-lake.vercel.app/wishlistsProducts/${id}`;
  const response = await fetch(url, { method: "PUT" });
  const data = await response.json();
  return data;
};
//product remove from wishlist
export const removeItemFromWishlist = async (id, email) => {
  const url = `https://server-side-phi-lake.vercel.app/remove-from-wishlist/${id}?email=${email}`;
  const response = await fetch(url, {
    method: "DELETE",
    headers: {
      authorization: `Bearer ${localStorage.getItem("accessToken")}`,
    },
  });
  const data = await response.json();
  return data;
};

//delete from reported product collection
export const deleteFromReportedCollection = async (id) => {
  const url = `https://server-side-phi-lake.vercel.app/delete-report/${id}`;
  const response = await fetch(url, {
    method: "DELETE",
  });
  const data = await response.json();
  return data;
};
