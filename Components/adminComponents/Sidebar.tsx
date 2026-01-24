import Link from "next/link";

const Sidebar = () => {
  return (
    <div className="flex flex-col w-64 h-screen bg-black text-white">
      <div className="p-4 text-2xl font-bold border-b border-gray-700">
        Admin Panel
      </div>
      <nav className="flex-1 p-4">
        <ul>
          <Link href="/admin/addProduct" className="mb-4">
            <p className="hover:underline  font-bold border-2 border-gray-700 p-2 items-center justify-center flex">
              Add Product
            </p>
          </Link>
          <Link href="/admin/blogList" className="mb-4">
            <p className="hover:underline font-bold border-2 border-gray-700 p-2 items-center justify-center flex">
              Blog List
            </p>
          </Link>
          <Link href="/admin/subscription" className="mb-4">
            <p className="hover:underline  font-bold border-2 border-gray-700 p-2 items-center justify-center flex">
              Subscription
            </p>
          </Link>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
