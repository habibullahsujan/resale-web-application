import { async } from "@firebase/util";


///upload new products
export const uploadNewProductData = async (product) => {
  const url = "http://localhost:5000/product";
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
//get seller all products
// export const getSellerUploadedProduct = async (email) => {
//   const url = `http://localhost:5000/products?email=${email}`;
//   const response = await fetch(url);
//   const data = await response.json();
//   return data;
// };
//get advertised products
export const getAdvertisedProducts = async () => {
  const url = `http://localhost:5000/advertised/products`;
  const response = await fetch(url);
  const data = await response.json();
  return data;
};
//delete a single product
export const deleteProduct = async (id) => {
  const url = `http://localhost:5000/product/delete/${id}`;
  const response = await fetch(url, { method: "DELETE" });
  const data = await response.json();
  return data;
};

//get a single product
export const advertisedAProduct = async (id) => {
  const url = `http://localhost:5000/advertised/product/${id}`;
  const response = await fetch(url, { method: "PUT" });
  const data = await response.json();
  return data;
};


//store sold product data;
export const soldProduct=async(product)=>{
  const url = "http://localhost:5000/sold-product";
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(product),
  });
  const data = await response.json();
  return data;
}

//after sold product change product sellStatus
export const updateSellStatus=async(id)=>{
  const url = `http://localhost:5000/sold-product/${id}`;
  const response = await fetch(url, { method: "PUT" });
  const data = await response.json();
  return data;
}
//add a product in the wishlist
export const addProductAWishlist=async(wishListData)=>{

  const url = `http://localhost:5000/wishlist-product`;
  const response = await fetch(url, { 
    method: "POST",
    headers:{
      'content-type':'application/json',
    },
    body:JSON.stringify(wishListData)
  
  });
  const data = await response.json();
  return data;
}
//report a product
export const reportProduct=async(reportedProductData)=>{
  const url = `http://localhost:5000/report-product`;
  const response = await fetch(url, { 
    method: "POST",
    headers:{
      'content-type':'application/json',
    },
    body:JSON.stringify(reportedProductData)
  
  });
  const data = await response.json();
  return data;
}
//get reported  product
export const getAllReportedProduct=async()=>{
  const url = `http://localhost:5000/reported-products`;
  const response = await fetch(url);
  const data = await response.json();
  return data;
}