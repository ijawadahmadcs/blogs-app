import { blog_data } from "@/Assets/BlogData";
import Image from "next/image";
import Link from "next/link";

const Page = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id: paramId } = await params;
  const id = Number(paramId);

  const foundBlog = blog_data.find((blog) => blog.id === id);

  if (!foundBlog) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-gray-50 to-gray-100">
        <div className="text-center p-10">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Blog not found
          </h2>
          <p className="text-gray-600 mb-6">
            The blog post you`re looking for doesn`t exist.
          </p>
          <Link
            href="/"
            className="inline-flex items-center px-6 py-3 bg-black text-white rounded-lg hover:bg-black transition-colors"
          >
            ← Back to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-linear-to-br from-gray-50 via-blue-50 to-gray-50 py-12 px-4 sm:px-8 lg:px-16">
      <div className="max-w-5xl mx-auto mb-6">
        <Link
          href="/"
          className="inline-flex items-center text-gray-600 hover:text-black transition-colors group"
        >
          <svg
            className="w-5 h-5 mr-2 transform group-hover:-translate-x-1 transition-transform"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
          Back to Blogs
        </Link>
      </div>

      <article className="max-w-5xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden">
        <div className="relative w-full h-100 sm:h-125 bg-gray-200">
          <Image
            src={foundBlog.image}
            alt={foundBlog.title}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent" />
        </div>

        <div className="p-6 sm:p-10 lg:p-14">
          <div className="mb-4">
            <span className="inline-block px-4 py-1. 5 bg-black text-white text-sm font-semibold rounded-full">
              Article
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 leading-tight">
            {foundBlog.title}
          </h1>

          <div className="flex flex-wrap items-center gap-4 mb-8 text-sm text-gray-600">
            <time className="flex items-center gap-2">
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
              {foundBlog.date}
            </time>
            <span className="text-gray-400">•</span>
            <span className="flex items-center gap-2">
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                />
              </svg>
              5 min read
            </span>
          </div>

          {/* Author Section */}
          <div className="flex items-center gap-4 mb-10 pb-8 border-b border-gray-200">
            <div className="relative">
              <Image
                src={`/images/${foundBlog.author_img}`}
                alt={foundBlog.author}
                width={64}
                height={64}
                className="rounded-full border-2 border-black shadow-md"
              />
              <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-green-500 border-2 border-white rounded-full" />
            </div>
            <div>
              <p className="text-lg font-semibold text-gray-900">
                {foundBlog.author}
              </p>
              <p className="text-sm text-gray-600 flex items-center gap-1">
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17. 657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                {foundBlog.country}
              </p>
            </div>
          </div>

          <div className="prose prose-lg max-w-none">
            <p className="text-lg leading-relaxed text-gray-700 whitespace-pre-line">
              {foundBlog.description}
            </p>
          </div>

          <div className="mt-10 pt-8 border-t border-gray-200 flex flex-wrap gap-4">
            <button className="flex items-center gap-2 px-6 py-3 bg-black text-white rounded-lg hover:bg-black transition-all hover:shadow-lg active:scale-95">
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                />
              </svg>
              Like
            </button>
            <button className="flex items-center gap-2 px-6 py-3 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-all active:scale-95">
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
                />
              </svg>
              Share
            </button>
            <button className="flex items-center gap-2 px-6 py-3 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-all active:scale-95">
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"
                />
              </svg>
              Bookmark
            </button>
          </div>
        </div>
      </article>

      <div className="max-w-5xl mx-auto mt-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">More Articles</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {blog_data
            .filter((blog) => blog.id !== id)
            .slice(0, 3)
            .map((blog) => (
              <Link
                key={blog.id}
                href={`/blog/${blog.id}`}
                className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="relative h-48 bg-gray-200">
                  <Image
                    src={blog.image}
                    alt={blog.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-gray-900 line-clamp-2 group-hover:text-black transition-colors">
                    {blog.title}
                  </h3>
                  <p className="text-sm text-gray-500 mt-2">{blog.date}</p>
                </div>
              </Link>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Page;
