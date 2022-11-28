import { async } from "@firebase/util";


//delete a buyer
export const deleteAUser=async(id)=>{
    const url=`https://server-side-phi-lake.vercel.app/all-buyer/${id}`
    const response = await fetch(url, {
        method: "DELETE",
        headers:{
          authorization:`Bearer ${localStorage.getItem('accessToken')}`
        }
      });
      const data = await response.json();
      return data;
}

//verify a seller
export const verifySeller=async(id)=>{
  const url = `https://server-side-phi-lake.vercel.app/verify-seller/${id}`;
  const response = await fetch(url, { method: "PUT" });
  const data = await response.json();
  return data;
}


//get a user data
export const getAUserData=async(email)=>{
  const url = `https://server-side-phi-lake.vercel.app/userData?email=${email}`;
  const response = await fetch(url);
  const data = await response.json();
  return data;
}