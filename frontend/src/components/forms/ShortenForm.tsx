"use client";
import { useState } from "react";
import { shortenUrl } from "@/utils/api";
import { FiCopy, FiCheck } from "react-icons/fi";

export default function ShortenForm() {
  const [longUrl, setLongUrl] = useState("");
  const [shortUrl, setShortUrl] = useState("");
  const [copied, setCopied] = useState(false);
  const [error, setError] = useState("");

  const isValidUrl = (url: string) => {
    const pattern = /^(https?:\/\/|www\.)[^\s/$.?#].[^\s]*$/i;
    return pattern.test(url);
  };

  const handleShorten = async () => {
    if (!longUrl.trim()) {
      setError("URL is required!");
      setShortUrl("");
      return;
    }
    if (!isValidUrl(longUrl)) {
      setError("Please enter a valid URL!");
      setShortUrl("");
      return;
    }

    setError("");
    const url = await shortenUrl(longUrl);
    if (url) {
      setShortUrl(url);
      setCopied(false);
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(shortUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="bg-gradient-to-br from-blue-500 to-purple-600 p-8 rounded-xl shadow-2xl text-center w-[400px] border border-white/20 backdrop-blur-lg">
      <h1 className="text-3xl font-bold text-white mb-4 drop-shadow-md">
        Shorten Your URL
      </h1>

      <input
        type="text"
        placeholder="Paste your long URL here..."
        className={`w-full p-3 bg-white/80 border ${
          error ? "border-red-500" : "border-gray-300"
        } rounded-lg focus:outline-none focus:ring-2 ${
          error ? "focus:ring-red-400" : "focus:ring-blue-400"
        } text-gray-900 shadow-md transition-all duration-300`}
        value={longUrl}
        onChange={(e) => {
          setLongUrl(e.target.value);
          setError("");
          setShortUrl("");
        }}
      />

      {error && <p className="text-red-400 text-sm mt-2">{error}</p>}

      <button
        className="mt-4 w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-4 rounded-lg shadow-lg transition-transform transform hover:scale-105 active:scale-95 cursor-pointer"
        onClick={handleShorten}
      >
        🔗 Shorten URL
      </button>

      {shortUrl && (
        <div className="mt-4 flex items-center justify-between bg-white/10 backdrop-blur-md text-white p-3 rounded-lg shadow-md border border-white/20">
          <a href={shortUrl} target="_blank" className="truncate text-sm">
            {shortUrl}
          </a>
          <button
            onClick={handleCopy}
            className="ml-2 text-gray-300 hover:text-white transition"
          >
            {copied ? (
              <FiCheck className="text-green-400 text-lg" />
            ) : (
              <FiCopy className="text-lg" />
            )}
          </button>
        </div>
      )}
    </div>
  );
}
