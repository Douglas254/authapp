"use client";

import { signIn } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import FormContainer from "./FormContainer";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await signIn("credentials", {
        email,
        password,
        redirect: false,
      });

      if (res.error) {
        setError("Invalid Credentials");
        return;
      }

      router.replace("dashboard");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <FormContainer>
        <h1 className="text-xl mb-5 font-nosifer text-center">Login 🔑</h1>
        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
          <input
            type="text"
            placeholder="Enter your email"
            onChange={(e) => setEmail(e.target.value)}
            className="form__input"
          />
          <input
            type="password"
            placeholder="Enter your password"
            onChange={(e) => setPassword(e.target.value)}
            className="form__input"
          />
          <button className="bg-[#B08642] hover:bg-primary/80 hover:font-extrabold transition-all duration-700 text-[14px] rounded-md mt-3 text-white font-bold py-1 cursor-pointer">
            Login
          </button>

          {error && <div className="text-red-500 text-sm">{error}</div>}
          <Link className="text-xs mt-3 text-center" href={"/register"}>
            Don't have an account? <span className="underline">Register</span>
          </Link>
        </form>
      </FormContainer>
    </>
  );
};

export default LoginForm;
