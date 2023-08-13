import Button from "@/src/components/button/Button";
import Image from "next/image";
import { notFound } from "next/navigation";

import { items } from "./data";

interface CategoryProps {
  params: {
    category: string;
  };
}

const getData = (category: any): CategoryItemType[] => {
  const data = items[category as keyof CategoryDataType];

  if (data) {
    return data;
  }

  return notFound();
};

const Category = ({ params: { category } }: CategoryProps) => {
  const data: CategoryItemType[] = getData(category);

  return (
    <div className="mt-20">
      <h1 className="text-primary">{category}</h1>

      {data.map((item: CategoryItemType, index: number) => (
        <div
          key={item.id}
          className={`flex gap-[50px] mt-[50px] mb-[100px] ${
            index % 2 === 0 && "flex-row-reverse"
          }`}
        >
          <div className="flex-1 flex flex-col gap-[20px] justify-center">
            <h1 className="text-[50px]">{item.title}</h1>
            <p className="text-[20px] font-light">{item.desc}</p>
            <Button text="See more" url="#" />
          </div>
          <div className="flex-1 h-[500px] relative">
            <Image
              src={item.image}
              fill={true}
              alt=""
              className="object-cover"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Category;
