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

  const { data, error, isLoading } = useSWR(
    `/api/posts?username=${session?.data?.user?.name}`,
    fetcher
  );

  console.log(data);

  useEffect(() => {
    if (session.status === "unauthenticated") {
      router?.push("/dashboard/login");
    }
  }, [session.status, router]);

  if (session.status === "loading") {
    return <p>Loading...</p>;
  }

  const handleSubmit = async (e: any) => {
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
    } catch (error) {
      console.log(error);
    }
  };

  if (session.status === "authenticated") {
    return (
      <div className="">
        <div className="">
          {isLoading
            ? "Loading..."
            : data?.map((post: PostType) => (
                <div key={post._id}>
                  <div className="">
                    <Image src={post.img} alt="" width={200} height={100} />
                  </div>
                  <h2 className="">{post.title}</h2>
                  <span className="">X</span>
                </div>
              ))}
        </div>
        <form onSubmit={handleSubmit} className="">
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
