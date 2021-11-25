import axios from "axios";

const mockapi = async () => {
  return await axios.get(
    "https://6198dbca164fa60017c231e4.mockapi.io/products"
  );
};

export default mockapi;
