"use client";

import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";

import Button from "@/src/components/button/Button";

const Register = () => {
  const [err, setErr] = useState(false);

  const router = useRouter();

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const name = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;

    try {
      const res = await fetch("/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          password,
        }),
      });

      res.status === 201 &&
        router.push("login?success=Account has been created");
    } catch (error) {
      setErr(true);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center gap-5">
      <form onSubmit={handleSubmit} className="w-[300px] flex flex-col gap-5">
        <input placeholder="username" required />
        <input placeholder="email" type="email" required />
        <input placeholder="password" type="password" required />
        <button
          className="p-5 cursor-pointer bg-primary border-none text-white rounded-md hover:bg-green-800 transition duration-300"
          type="submit"
        >
          Sign up
        </button>
        {err && "Something went wrong"}
      </form>
      <Link href="login">Already a member? Sign in!</Link>
    </div>
  );
};

export default Register;
