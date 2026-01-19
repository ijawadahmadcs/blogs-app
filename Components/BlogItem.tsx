import Image from "next/image";
import Link from "next/link";

const BlogItem = ({
  title,
  description,
  country,
  image,
  id,
}: {
  title: string;
  description: string;
  country: string;
  image: string;
  id: number;
}) => {
  return (
    <div className="max-w-82.5 sm:max-w-75 bg-white border border-black hover:shadow-lg rounded-lg p-4 m-4 ">
      <Link href={`/blogs/${id}`}>
        <Image
          src={image}
          alt={title}
          width={400}
          height={400}
          className="border-b border-black mb-4 "
        />
      </Link>
      <p className="ml-5 mt-5 px-1 inline-block text-2xl">{country}</p>
      <div className="p-5">
        <p className="font-bold mb-2">{title}</p>
        <p className="mb-3 text-sm">
          {description.length > 300
            ? description.slice(0, 300) + "..."
            : description}
        </p>

        <Link href={`/blogs/${id}`}>
          <button className="text-black cursor-pointer border border-black px-2 py-1 rounded-2xl hover:bg-black hover:text-white transition duration-300">
            Read more
          </button>
        </Link>
      </div>
    </div>
  );
};

export default BlogItem;
