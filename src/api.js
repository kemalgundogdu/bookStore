import axios from "axios";

export const getBooks = async () => {
  try {
    const response = await axios.get("https://api.itbook.store/1.0/new");
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
