import baseX from "base-x";

const BASE62_ALPHABET =
  "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
const base62 = baseX(BASE62_ALPHABET);

export function encode(num: number): string {
  let encoded = base62.encode(Buffer.from(num.toString()));

  while (encoded.length < 4) {
    encoded = BASE62_ALPHABET[Math.floor(Math.random() * 62)] + encoded;
  }

  return encoded;
}
