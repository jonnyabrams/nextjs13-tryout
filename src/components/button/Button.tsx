import Link from "next/link";

interface Props {
  text: string;
  url: string;
  isLong?: boolean;
}

const Button = ({ text, url, isLong = false }: Props) => {
  return (
    <Link href={url}>
      <button
        className="p-5 cursor-pointer bg-[#53c28b] border-none text-white rounded-md hover:scale-105 transition"
        style={{ width: isLong ? "100%" : "max-content" }}
      >
        {text}
      </button>
    </Link>
  );
};

export default Button;
