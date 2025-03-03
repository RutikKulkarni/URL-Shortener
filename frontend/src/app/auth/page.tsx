"use client";

import { useState } from "react";
import { Signin } from "@/components/forms/signin";
import { Signup } from "@/components/forms/signup";

const AuthPage = () => {
  const [isSignin, setIsSignin] = useState(true);

  return (
    <div className="flex min-h-screen items-center justify-center px-4 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
      <div className="w-full max-w-md bg-gradient-to-br from-blue-500 to-purple-600 p-8 rounded-xl shadow-2xl text-center border border-white/20 backdrop-blur-lg">
        <h2 className="text-3xl font-bold text-white drop-shadow-md">
          {isSignin ? "Sign In" : "Sign Up"}
        </h2>

        {isSignin ? <Signin /> : <Signup />}

        <p className="mt-4 text-sm text-white/80">
          {isSignin ? "Don't have an account?" : "Already have an account?"}{" "}
          <button
            onClick={() => setIsSignin(!isSignin)}
            className="text-white font-semibold hover:underline cursor-pointer"
          >
            {isSignin ? "Sign Up" : "Sign In"}
          </button>
        </p>
      </div>
    </div>
  );
};

export default AuthPage;
