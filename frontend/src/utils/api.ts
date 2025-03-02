import axios from "axios";

const API_BASE_URL = "http://localhost:8082/api/url";

export const shortenUrl = async (longUrl: string): Promise<string | null> => {
  try {
    const { data } = await axios.post(`${API_BASE_URL}/shorten`, { longUrl });
    return `http://localhost:8082/${data.shortUrl}`;
  } catch (error) {
    console.error("Error shortening URL:", error);
    return null;
  }
};
