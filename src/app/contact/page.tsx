import Image from "next/image";

import Button from "@/src/components/button/Button";

const Contact = () => {
  return (
    <div>
      <h1 className="mb-[100px] text-4xl text-center">Send Me a Message</h1>
      <div className="flex gap-[100px] items-center">
        <div className="flex-1 h-[500px] relative max-lg:hidden">
          <Image
            src="/assets/contact.png"
            alt=""
            fill={true}
            className="object-contain"
          />
        </div>
        <form className="flex-1 flex flex-col gap-5">
          <input placeholder="name" />
          <input placeholder="email" type="email" />
          <textarea cols={30} rows={10} placeholder="message" />
          <Button url="#" text="Send" isLong />
        </form>
      </div>
    </div>
  );
};

export default Contact;
