"use client";

import { useEffect, useState } from "react";
import { signIn, useSession } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Login = () => {
  const [err, setErr] = useState(false);

  const session = useSession();
  const router = useRouter();

  useEffect(() => {
    if (session.status === "authenticated") {
      router?.push("/dashboard");
    }
  }, [session.status, router]);

  if (session.status === "loading") {
    return <p>Loading...</p>;
  }

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;

    signIn("credentials", {
      email,
      password,
    });
  };
  return (
    <div className="flex flex-col items-center justify-center gap-5">
      <form onSubmit={handleSubmit} className="w-[300px] flex flex-col gap-5">
        <input placeholder="email" type="email" required />
        <input placeholder="password" type="password" required />
        <button
          className="p-5 cursor-pointer bg-primary border-none text-white rounded-md hover:bg-green-800 transition duration-300"
          type="submit"
        >
          Log in
        </button>
        {err && "Something went wrong"}
      </form>
      <Link href="register">Not a member? Sign up!</Link>
    </div>
  );
};

export default Login;
