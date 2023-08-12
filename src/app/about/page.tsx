import Button from "@/src/components/button/Button";
import Image from "next/image";

const About = () => {
  return (
    <div>
      <div className="w-full h-[300px] relative">
        <Image
          src="https://www.pexels.com/photo/2662116/download/"
          alt="about"
          fill={true}
          className="object-cover"
        />
        <div className="absolute bottom-5 left-5 bg-primary p-1.5 text-white rounded-sm">
          <h1 className="text-lg font-semibold">Jonny Abrams</h1>
          <h2 className="text-sm">World&apos;s 5th greatest Jonny</h2>
        </div>
      </div>
      <div className="flex gap-[100px]">
        <div className="flex-1 mt-[50px] flex flex-col gap-[30px]">
          <h1>Who is Jonny?</h1>
          <p className="text-justify font-light">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero, ex
            sint. Itaque id eos in fugiat eius, soluta vero pariatur ad alias,
            quae similique quos, aut veritatis fuga officiis nulla?
            <br />
            <br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
            quidem laboriosam error architecto veritatis quo, nobis sit tenetur
            amet assumenda incidunt vel fugit? Aperiam in repellat quod sed
            deleniti expedita enim perferendis error eius non voluptates, modi
            totam tempore quos eaque reiciendis, sit nisi aliquid, veniam ab
          </p>
        </div>
        <div className="flex-1 mt-[50px] flex flex-col gap-[30px]">
          <h1>Why is Jonny?</h1>
          <p className="text-justify font-light">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero, ex
            sint. Itaque id eos in fugiat eius, soluta vero pariatur ad alias,
            quae similique quos, aut veritatis fuga officiis nulla?
            <br />
            <br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
            quidem laboriosam error architecto veritatis quo, nobis sit tenetur
            amet assumenda incidunt vel fugit? Aperiam in repellat quod sed
            deleniti expedita enim perferendis error eius non voluptates, modi
            totam tempore quos eaque reiciendis, sit nisi aliquid, veniam ab
          </p>
          <Button url="contact" text="Get in touch" />
        </div>
      </div>
    </div>
  );
};

export default About;
