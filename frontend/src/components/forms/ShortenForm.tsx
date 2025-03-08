"use client";
import { useState } from "react";
import { shortenUrl } from "@/utils/api";
import { FiCopy, FiCheck } from "react-icons/fi";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

export default function ShortenForm() {
  const [longUrl, setLongUrl] = useState("");
  const [shortUrl, setShortUrl] = useState("");
  const [copied, setCopied] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [showRenderMessage, setShowRenderMessage] = useState(false);

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
    setLoading(true);
    setShortUrl("");
    setShowRenderMessage(false);

    const timeout = setTimeout(() => {
      setShowRenderMessage(true);
    }, 5000);

    try {
      const url = await shortenUrl(longUrl);
      clearTimeout(timeout);
      setLoading(false);
      setShowRenderMessage(false);

      if (url) {
        setShortUrl(url);
        setCopied(false);
      } else {
        setError("Failed to shorten the URL. Please try again.");
      }
    } catch (error) {
      console.error("Error shortening URL:", error);
      clearTimeout(timeout);
      setLoading(false);
      setShowRenderMessage(false);

      setError(
        "Error connecting to the server. Backend may be starting, or there may be an issue."
      );
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
        className="mt-4 w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-4 rounded-lg shadow-lg transition-transform transform hover:scale-105 active:scale-95 flex justify-center items-center gap-2 cursor-pointer"
        onClick={handleShorten}
        disabled={loading}
      >
        {loading ? (
          <>
            <AiOutlineLoading3Quarters className="animate-spin" />
            Shortening...
          </>
        ) : (
          "🔗 Shorten URL"
        )}
      </button>

      {/* {loading && (
        <p className="text-white text-sm mt-3 animate-pulse">Loading...</p>
      )} */}

      {showRenderMessage && (
        <p className="text-yellow-300 text-sm mt-2">
          Backend is hosted on Render. It may take some time to start.
        </p>
      )}

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
