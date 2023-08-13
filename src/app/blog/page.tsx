import Image from "next/image";
import Link from "next/link";

async function getData() {
  const res = await fetch("http://localhost:3000/api/posts");

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

const Blog = async () => {
  const data = await getData();

  return (
    <>
      {data.map((item: PostType) => (
        <Link
          key={item._id}
          className="flex items-center gap-[50px] mb-[50px]"
          href={item._id}
        >
          <div>
            <Image
              src={item.img}
              alt=""
              width={400}
              height={250}
              className="object-cover"
            />
          </div>
          <div>
            <h1 className="mb-2.5">{item.title}</h1>
            <p className="text-[18px] font-light">{item.desc}</p>
          </div>
        </Link>
      ))}
    </>
  );
};

export default Blog;
