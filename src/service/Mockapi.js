import axios from "axios";

const mockapi = async () => {
  return await axios.get(`${process.env.REACT_APP_API_BASE_ENDPOINT}/products`);
};

export default mockapi;
