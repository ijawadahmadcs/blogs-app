"use client";
import { blog_data } from "@/Assets/BlogData";
import BlogItem from "./BlogItem";
import { useState } from "react";

const BlogList = () => {
  const [menu, setMenu] = useState("All");
  return (
    <div>
      <div className="flex justify-center gap-6 my-10">
        <button
          onClick={() => setMenu("All")}
          className={
            menu === "All" ? "bg-black text-white py-1 px-4 rounded-b-sm" : ""
          }
        >
          All
        </button>
        <button
          onClick={() => setMenu("Pakistan")}
          className={
            menu === "Pakistan"
              ? "bg-black text-white py-1 px-4 rounded-b-sm"
              : ""
          }
        >
          Pakistan
        </button>
        <button
          onClick={() => setMenu("Australia")}
          className={
            menu === "Australia"
              ? "bg-black text-white py-1 px-4 rounded-b-sm"
              : ""
          }
        >
          Australia
        </button>
        <button
          onClick={() => setMenu("England")}
          className={
            menu === "England"
              ? "bg-black text-white py-1 px-4 rounded-b-sm"
              : ""
          }
        >
          England
        </button>
        <button
          onClick={() => setMenu("India")}
          className={
            menu === "India" ? "bg-black text-white py-1 px-4 rounded-b-sm" : ""
          }
        >
          India
        </button>
      </div>
      <div className="flex flex-wrap justify-around gap-1 gap-y-10 mb-16 xl:mx-24 lg:mx-16 md:mx-8 sm:mx-4">
        {blog_data
          .filter((item) => (menu === "All" ? true : item.country === menu))
          .map((item) => {
            return (
              <BlogItem
                image={item.image}
                title={item.title}
                description={item.description}
                country={item.country}
                key={item.id}
                id={item.id}
              />
            );
          })}
      </div>
    </div>
  );
};

export default BlogList;
