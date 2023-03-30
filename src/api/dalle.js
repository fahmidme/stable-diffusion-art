import axios from 'axios';

const BASE_URL = `http://localhost:${process.env.PORT || 3001}`;

export const generateImage = async (prompt) => {
  try {
    const response = await axios.post(`${BASE_URL}/generate-image`, { prompt });
    const imageURL = response.data.data[0].url;
    return imageURL;
  } catch (error) {
    console.error(error);
  }
};
