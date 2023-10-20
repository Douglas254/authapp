"use client";

import { signOut } from "next-auth/react";
import React from "react";

import { useSession } from "next-auth/react";
import FormContainer from "./FormContainer";

const UserInfo = () => {
  const { data: session } = useSession();

  return (
    <FormContainer>
      {" "}
      <div className="shadow-lg p-8 bg-zinc-300/10 flex flex-col gap-2 my-6">
        <h1 className="text-xl mb-5 font-nosifer text-center">
          Welcome <span className="animate-pulse">🎉</span>
        </h1>

        <div>
          Name: <span className="font-bold">{session?.user?.name}</span>
        </div>
        <div>
          Email: <span className="font-bold">{session?.user?.email}</span>
        </div>
        <button
          onClick={() => signOut()}
          className="bg-red-500 hover:bg-primary/80 hover:font-extrabold transition-all duration-700 text-[14px] rounded-sm mt-3 text-white font-bold py-1 cursor-pointer"
        >
          Log Out
        </button>
      </div>
    </FormContainer>
  );
};

export default UserInfo;
