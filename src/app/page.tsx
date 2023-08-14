import Image from "next/image";
import Button from "../components/button/Button";

export default function Home() {
  return (
    <div data-testid="home" className="flex items-center gap-24">
      <div className="flex flex-col flex-1 gap-12">
        {/* give bg gradient then make it only visible where the text is and make the text transparent to give text the gradient */}
        <p className="text-[72px] bg-gradient-to-b from-[#194c33] to-[#bbb]" style={{ WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Blah blah blah blah.</p>
        <p className="text-[24px] font-light">Blah blah blah blah blah blah blah blah blah blah.</p>
        <Button text="See my stuff" url="portfolio" />
      </div>
      <div className="flex flex-col flex-1 gap-12">
        <Image src="/assets/hero.png" alt="" width={500} height={500} />
      </div>
    </div>
  );
}
