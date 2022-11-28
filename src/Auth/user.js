
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