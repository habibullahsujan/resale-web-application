export const uploadImage = async (image) => {
  const formData = new FormData();
  formData.append("image", image);
  const url =
    "https://api.imgbb.com/1/upload?key=ed10d9b0c9f2caf53afe65dfd8a4c97f";
  const response = await fetch(url, { method: "POST", body: formData });
  const imgData = await response.json();
  return imgData;
};
