import React from "react";
import axios from "axios";

function Mockapi() {
  axios
    .get("https://6198dbca164fa60017c231e4.mockapi.io/products")
    .then((response) => {
      // handle success
      console.log(response);
    })
    .catch((error) => {
      // handle error
      console.log(error);
    })
    .then(() => {
      // always executed
    });

  return <div>Mockapi</div>;
}

export default Mockapi;
