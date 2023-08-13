import Image from "next/image";
import { notFound } from "next/navigation";

async function getData(id: string) {
  const res = await fetch(`http://localhost:3000/api/posts/${id}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    return notFound();
  }

  return res.json();
}

interface Props {
  params: {
    id: string;
  };
}

const BlogPost = async ({ params: { id } }: Props) => {
  const data: PostType = await getData(id);

  return (
    <div>
      <div className="flex gap-6">
        <div className="flex flex-1 flex-col gap-6 justify-between">
          <h1 className="text-[40px]">{data.title}</h1>
          <p className="text-[18px] font-light">{data.desc}</p>
          <div className="flex items-center gap-2.5">
            <Image
              src="https://images.pexels.com/photos/214574/pexels-photo-214574.jpeg?cs=srgb&dl=pexels-sebastian-voortman-214574.jpg&fm=jpg"
              width={40}
              height={40}
              alt=""
              className="object-fit rounded-full"
            />
            <span>{data.username}</span>
          </div>
        </div>
        <div className="flex-1 h-[300px] relative">
          <Image src={data.img} fill={true} alt="" className="object-cover" />
        </div>
      </div>
      <div className="mt-[50px] text-xl font-light text-[#999] text-justify">
        <p>{data.content}</p>
      </div>
    </div>
  );
};

export default BlogPost;
