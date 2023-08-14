"use client";

import { useSession } from "next-auth/react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import useSWR from "swr";

const Dashboard = () => {
  const session = useSession();
  const router = useRouter();

  // const fetcher = (...args: any) => fetch(...args).then((res) => res.json());

  // ts way?
  const fetcher = async (...args: Parameters<typeof fetch>) => {
    const res = await fetch(...args);
    const data = await res.json();
    return data;
  };

  const { data, error, mutate, isLoading } = useSWR(
    `/api/posts?username=${session?.data?.user?.name}`,
    fetcher
  );

  useEffect(() => {
    if (session.status === "unauthenticated") {
      router?.push("/dashboard/login");
    }
  }, [session.status, router]);

  if (session.status === "loading") {
    return <p>Loading...</p>;
  }

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const title = e.target[0].value;
    const desc = e.target[1].value;
    const img = e.target[2].value;
    const content = e.target[3].value;
    const username = session?.data?.user?.name;

    try {
      await fetch("/api/posts", {
        method: "POST",
        body: JSON.stringify({ title, desc, img, content, username }),
      });
      mutate();
      e.target.reset();
    } catch (error) {
      console.log(error);
    }
  };

  const handleDelete = async (id: string) => {
    try {
      await fetch(`/api/posts/${id}`, {
        method: "DELETE",
      });
      mutate();
    } catch (error) {}
  };

  if (session.status === "authenticated") {
    return (
      <div className="flex gap-[100px]">
        <div className="flex-1">
          {isLoading
            ? "Loading..."
            : data?.map((post: PostType) => (
                <div
                  className="flex items-center justify-between my-[50px]"
                  key={post._id}
                >
                  <div className="relative">
                    <Image src={post.img} alt="" width={200} height={100} />
                  </div>
                  <h2 className="">{post.title}</h2>
                  <span
                    onClick={() => handleDelete(post._id)}
                    className="cursor-pointer text-red-700"
                  >
                    X
                  </span>
                </div>
              ))}
        </div>
        <form
          onSubmit={handleSubmit}
          className="flex flex-1 flex-col gap-[20px]"
        >
          <h1>Add New Post</h1>
          <input placeholder="Title" />
          <input placeholder="Description" />
          <input placeholder="Image" />
          <textarea placeholder="Content" cols={30} rows={10} />
          <button className="p-5 cursor-pointer bg-primary border-none text-white rounded-md hover:bg-green-800 transition duration-300">
            Send
          </button>
        </form>
      </div>
    );
  }
};

export default Dashboard;
