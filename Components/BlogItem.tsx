import { blog_data } from "@/Assets/BlogData";
import Image from "next/image";

const BlogItem = () => {
  return (
    <div className="max-w-82.5 sm:max-w-75 bg-white border border-black hover:shadow-lg rounded-lg p-4 m-4 ">
      <Image
        src={blog_data[0].image}
        alt={blog_data[0].title}
        width={400}
        height={400}
        className="border-b border-black mb-4 "
      />
      <p className="ml-5 mt-5 px-1 inline-block text-2xl">
        {blog_data[0].country}
      </p>
      <div className="p-5">
        <p className="font-bold mb-2">{blog_data[0].title}</p>
        <p className="mb-3 text-sm ">{blog_data[0].description}</p>
        <button className="text-black cursor-pointer border border-black px-2 py-1 rounded-2xl hover:bg-black hover:text-white transition duration-300">
          Read more
        </button>
      </div>
    </div>
  );
};

export default BlogItem;
