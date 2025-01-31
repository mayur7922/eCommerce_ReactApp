import axios from "axios";

const fetchData = async () => {
    const response = await axios.get("https://fakestoreapi.com/products");
    return response;
}

export default fetchData;
