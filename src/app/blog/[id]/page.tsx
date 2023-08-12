import Image from "next/image";

const BlogPost = () => {
  return (
    <div>
      <div className="flex gap-6">
        <div className="flex flex-1 flex-col gap-6 justify-between">
          <h1 className="text-[40px]">Title</h1>
          <p className="text-[18px] font-light">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium ipsam saepe quo autem in amet nobis corrupti officiis facilis voluptatum minima provident at aspernatur ea error perspiciatis quaerat temporibus velit id itaque ad accusantium magnam, tempore voluptas! Provident, officiis quisquam!</p>
          <div className="flex items-center gap-2.5">
            <Image src="https://images.pexels.com/photos/214574/pexels-photo-214574.jpeg?cs=srgb&dl=pexels-sebastian-voortman-214574.jpg&fm=jpg" width={40} height={40} alt="" className="object-fit rounded-full" />
            <span>Author</span>
          </div>
        </div>
        <div className="flex-1 h-[300px] relative">
          <Image src="https://images.pexels.com/photos/214574/pexels-photo-214574.jpeg?cs=srgb&dl=pexels-sebastian-voortman-214574.jpg&fm=jpg" fill={true} alt="" className="object-cover" />
        </div>
      </div>
      <div className="mt-[50px] text-xl font-light text-[#999] text-justify">
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus necessitatibus, nemo itaque nisi facilis assumenda laboriosam aperiam debitis ab animi optio, dicta, consequuntur minus repellat consectetur molestiae illo. Alias iure omnis minima dolorem tenetur voluptates dicta iste, sed nihil. Perferendis tempora iste nisi architecto, nostrum, impedit quam veritatis animi repellendus possimus exercitationem itaque aliquid et perspiciatis unde ea ipsum consequatur quae nihil doloremque cupiditate. Libero, sit fuga quod odit quia adipisci modi! Velit incidunt aspernatur nemo alias laboriosam numquam voluptatibus in similique excepturi expedita quaerat quas tenetur, necessitatibus iste architecto accusamus nesciunt, delectus nobis iure cum dolorem! Pariatur, dolor rerum?</p>
      </div>
    </div>
  );
};

export default BlogPost;
