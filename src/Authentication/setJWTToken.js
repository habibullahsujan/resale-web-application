

const setJWTToken = (email) => {
    if (email) {
      fetch(`https://server-side-phi-lake.vercel.app/jwt?email=${email}`)
        .then((res) => res.json())
        .then((data) => {
          if (data.accessToken) {
            localStorage.setItem("accessToken", data.accessToken);
          }
        });
    }
  };
  export default setJWTToken;
  