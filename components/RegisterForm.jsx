"use client";

import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import FormContainer from "./FormContainer";

const RegisterForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name || !email || !password) {
      setError("All fields are necessary.");
      return;
    }

    try {
      const resUserExists = await fetch("api/userExists", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const { user } = await resUserExists.json();

      if (user) {
        setError("User already exists");
        return;
      }

      const res = await fetch("api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, password }),
      });

      if (res.ok) {
        const form = e.target;
        form.reset();
        router.push("/");
      } else {
        console.log("User registration failed.");
      }
    } catch (error) {
      console.log("Error during registration: ", error);
    }
  };

  return (
    <>
      <FormContainer>
        <h1 className="text-xl mb-5 font-nosifer text-center">Sign Up 📝</h1>
        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
          <input
            type="text"
            placeholder="Enter your name"
            onChange={(e) => setName(e.target.value)}
            className="form__input"
          />
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
            Sign Up
          </button>

          {error && <div className="text-red-500 text-sm">{error}</div>}
          <Link className="text-xs mt-3 text-center" href={"/"}>
            Already have an account? <span className="underline">Login</span>
          </Link>
        </form>
      </FormContainer>
    </>
  );
};

export default RegisterForm;
