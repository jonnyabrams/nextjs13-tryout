import Link from "next/link";

interface Props {
  text: string;
  url: string;
}

const Button = ({ text, url }: Props) => {
  return (
    <Link href={url}>
      <button
        className="p-5 cursor-pointer bg-[#53c28b] border-none text-white rounded-md hover:scale-105 transition"
        style={{ width: "max-content" }}
      >
        {text}
      </button>
    </Link>
  );
};

export default Button;
