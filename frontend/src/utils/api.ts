import axios from "axios";

const API_BASE_URL = "https://url-shortener-eore.onrender.com/api/url";

export const shortenUrl = async (longUrl: string): Promise<string | null> => {
  try {
    const { data } = await axios.post(`${API_BASE_URL}/shorten`, { longUrl });
    return `https://url-shortener-eore.onrender.com/${data.shortUrl}`;
  } catch (error) {
    console.error("Error shortening URL:", error);
    return null;
  }
};
