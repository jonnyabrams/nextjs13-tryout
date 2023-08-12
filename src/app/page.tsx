import Image from "next/image";

export default function Home() {
  return (
    <div className="flex items-center gap-24">
      <div className="flex flex-col flex-1 gap-12">
        {/* give bg gradient then make it only visible where the text is and make the text transparent to give text the gradient */}
        <h1 className="text-[72px] bg-gradient-to-b from-[#194c33] to-[#bbb]" style={{ WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Blah blah blah blah.</h1>
        <p className="text-[24px] font-light">Blah blah blah blah blah blah blah blah blah blah.</p>
        <button className="p-5 cursor-pointer bg-[#53c28b] border-none text-white rounded-md hover:scale-105 transition" style={{width: "max-content"}}>See my stuff.</button>
      </div>
      <div className="flex flex-col flex-1 gap-12">
        <Image src="/assets/hero.png" alt="" width={500} height={500} />
      </div>
    </div>
  );
}
