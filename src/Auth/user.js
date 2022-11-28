import { async } from "@firebase/util";


//delete a buyer
export const deleteAUser=async(id)=>{
    const url=`http://localhost:5000/all-buyer/${id}`
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
  const url = `http://localhost:5000/verify-seller/${id}`;
  const response = await fetch(url, { method: "PUT" });
  const data = await response.json();
  return data;
}


//get a user data
export const getAUserData=async(email)=>{
  const url = `http://localhost:5000/userData?email=${email}`;
  const response = await fetch(url);
  const data = await response.json();
  return data;
}