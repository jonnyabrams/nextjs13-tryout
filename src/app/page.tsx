import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Image src="/assets/hero.png" alt="" width={500} height={500} />
    </div>
  );
}
