import Link from "next/link";

interface Props {
  text: string;
  url: string;
  isLong?: boolean;
  type?: string;
}

const Button = ({ text, url, isLong = false }: Props) => {
  return (
    <Link href={url}>
      <button
        className="p-5 cursor-pointer bg-primary border-none text-white rounded-md hover:bg-green-800 transition duration-300"
        style={{ width: isLong ? "100%" : "max-content" }}
      >
        {text}
      </button>
    </Link>
  );
};

export default Button;
