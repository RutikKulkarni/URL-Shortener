const Signin = () => {
  return (
    <form className="mt-6 space-y-4">
      <div>
        <input
          type="email"
          placeholder="Email"
          className="w-full p-3 bg-white/80 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 text-gray-900 shadow-md backdrop-blur-md"
          required
        />
      </div>
      <div>
        <input
          type="password"
          placeholder="Password"
          className="w-full p-3 bg-white/80 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 text-gray-900 shadow-md backdrop-blur-md"
          required
        />
      </div>
      <button
        type="submit"
        className="w-full py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-lg hover:bg-blue-700 transition-transform transform hover:scale-105 active:scale-95"
      >
        Sign In
      </button>
    </form>
  );
};

export { Signin };
