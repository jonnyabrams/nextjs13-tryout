import Link from "next/link";

interface CategoryItemProps {
  link: string;
  title: string;
  img: string;
}

const CategoryItem = ({ link, title, img }: CategoryItemProps) => (
  <Link
    href={`portfolio/${link}`}
    className="border-[5px] border-[#bbb] rounded-sm w-[300px] h-[400px] relative hover:text-primary"
    style={{ background: `url('/assets/${img}')`, backgroundSize: "cover" }}
  >
    <span className="absolute right-[10px] bottom-[10px] text-[40px] max-sm:text-[30px] font-bold">
      {title}
    </span>
  </Link>
);

const Portfolio = () => {
  return (
    <div className="max-sm:px-20">
      <h1 className="my-12">Choose a gallery</h1>
      <div className="flex flex-wrap gap-12">
        <CategoryItem
          link="illustrations"
          title="Illustrations"
          img="illustration.png"
        />
        <CategoryItem link="websites" title="Websites" img="websites.jpg" />
        <CategoryItem link="applications" title="Applications" img="apps.jpg" />
      </div>
    </div>
  );
};

export default Portfolio;
