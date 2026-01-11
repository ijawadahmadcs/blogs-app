import Image from "next/image";

const Header = () => {
  return (
    <div className="py-5 px-5 md:px-12 lg:px-28">
      <div className="flex justify-between items-center">
        <Image
          src={"/logo.png"}
          alt="logo"
          width={180}
          height={50}
          className="object-contain w-32.5 sm:w-auto"
        />
        <button className="flex items-center gap-2 font-medium py-1 px-3 sm:py-3 sm:px-6 border border-solid border-black ">
          Get Started
        </button>
      </div>
      <div className="text-center my-8">
        <h1 className="text-3xl sm:text-5xl font-medium">Latest Blogs</h1>
        <p className="mt-10 max-w-185 m-auto text-xs sm:text-base ">
          Welcome to the blog section where you can find the latest articles and
          updates.
        </p>
        <form
          action=""
          className="flex justify-between max-w-125 scale-75 sm:scale-100 mx-auto mt-10 border border-black"
        >
          <input
            type="email"
            placeholder="Enter your Email"
            className="pl-4 outline-none"
          />
          <button
            type="submit"
            className="bg-black text-white py-2 px-4 sm:px-8 cursor-pointer"
          >
            Subscribe
          </button>
        </form>
      </div>
    </div>
  );
};

export default Header;
