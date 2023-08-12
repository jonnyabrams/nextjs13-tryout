import Image from "next/image";

const Footer = () => {
  return (
    <div className="h-[50px] flex items-center justify-between text-sm fixed bottom-0 right-0 left-0 bg-black px-10 w-full">
      <div>© Jonny. All rights reserved.</div>
      <div className="flex items-center gap-2.5">
        <Image
          src="/assets/1.png"
          alt=""
          width={15}
          height={15}
          className="opacity-60 cursor-pointer"
        />
        <Image
          src="/assets/2.png"
          alt=""
          width={15}
          height={15}
          className="opacity-60 cursor-pointer"
        />
        <Image
          src="/assets/3.png"
          alt=""
          width={15}
          height={15}
          className="opacity-60 cursor-pointer"
        />
        <Image
          src="/assets/4.png"
          alt=""
          width={15}
          height={15}
          className="opacity-60 cursor-pointer"
        />
      </div>
    </div>
  );
};

export default Footer;
