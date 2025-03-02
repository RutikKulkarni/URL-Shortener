import Url from "../models/url.model";
import { encode } from "../utils/base62";

export const createShortUrl = async (longUrl: string) => {
  const count = await Url.countDocuments();
  const shortUrl = encode(count + 1);

  const url = new Url({ shortUrl, longUrl });
  await url.save();

  return shortUrl;
};

export const getLongUrl = async (shortUrl: string) => {
  return await Url.findOneAndUpdate(
    { shortUrl },
    { $inc: { clickCount: 1 } },
    { new: true }
  );
};
