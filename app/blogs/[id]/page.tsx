import { blog_data } from "@/Assets/BlogData";
import Image from "next/image";

const Page = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id: paramId } = await params;
  const id = Number(paramId);
  const foundBlog = blog_data
    .map((blog) => ({
      ...blog,
    }))
    .find((blog) => blog.id === id);

  if (!foundBlog) {
    return <div className="p-10 text-center">Blog not found</div>;
  }

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4 sm:px-8 lg:px-28">
      <article className="bg-white border border-gray-300 p-6 sm:p-8">
        {/* Title & Date */}
        <h1 className="text-3xl font-bold mb-2">{foundBlog.title}</h1>
        <p className="text-sm text-gray-600 mb-6">{foundBlog.date}</p>

        {/* Content Layout */}
        <div className="flex flex-col md:flex-row gap-6">
          {/* Image Section */}
          <div className="md:w-1/3">
            <Image
              src={foundBlog.image}
              alt={foundBlog.title}
              width={400}
              height={400}
              className="border border-gray-400"
            />
          </div>

          {/* Text Section */}
          <div className="md:w-2/3">
            <p className="text-base leading-relaxed text-gray-800">
              {foundBlog.description}
            </p>
          </div>
        </div>
      </article>
    </div>
  );
};

export default Page;
