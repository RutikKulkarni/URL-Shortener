import { Request, Response } from "express";
import { createShortUrl, getLongUrl } from "../services/url.service";

export const shortenUrl = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { longUrl } = req.body;
    if (!longUrl) {
      res.status(400).json({ error: "URL is required" });
      return;
    }

    const shortUrl = await createShortUrl(longUrl);
    res.json({ shortUrl });
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const redirectUrl = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { shortUrl } = req.params;

    const url = await getLongUrl(shortUrl);

    if (!url) {
      res.status(404).json({ error: "URL not found" });
      return;
    }

    res.redirect(url.longUrl);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};
