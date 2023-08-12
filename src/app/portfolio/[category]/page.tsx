import Button from "@/src/components/button/Button";
import Image from "next/image";

interface Props {
  params: {
    category: string;
  };
}

const Category = ({ params: { category } }: Props) => {
  return (
    <div className="mt-20"> 
      <h1 className="text-primary">{category}</h1>
      <div className="flex gap-[50px] mt-[50px] mb-[100px]">
        <div className="flex-1 flex flex-col gap-[20px] justify-center">
          <h1 className="text-[50px]">Test</h1>
          <p className="text-[20px] font-light">Description</p>
          <Button text="See more" url="#" />
        </div>
        <div className="flex-1 h-[500px] relative">
          <Image src="https://images.pexels.com/photos/1563356/pexels-photo-1563356.jpeg?cs=srgb&dl=pexels-craig-adderley-1563356.jpg&fm=jpg" fill={true} alt="" className="object-cover" />
        </div>
      </div>
    </div>
  );
};

export default Category;
