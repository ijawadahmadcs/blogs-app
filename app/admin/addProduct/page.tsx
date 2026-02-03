"use client";
import Image from "next/image";
import { useState } from "react";

const Page = () => {
  const [image, setImage] = useState<File | null>(null);
  return (
    <>
      <form className="pt-5 px-5 sm:pt-12">
        <p className="text-xl">Upload Thumbnail</p>
        <label htmlFor="image">
          <Image
            className="mt-4"
            src={!image ? "/images/upload.png" : URL.createObjectURL(image)}
            alt="thumbnail"
            width={150}
            height={150}
          />
        </label>
        <input
          onChange={(e) => setImage(e.target.files?.[0] ?? null)}
          type="file"
          id="image"
          className="hidden"
        />
        <p className="text-xl mt-4">Blog title</p>
        <input
          type="text"
          placeholder="type here"
          required
          className="border rounded-md p-2 w-full sm:w-1/2 mt-2"
        />
        <p className="text-xl mt-4">Blog content</p>
        <textarea
          placeholder="type here"
          required
          className="border rounded-md p-2 w-full sm:w-1/2 h-40 mt-2"
        />
        <p className="text-xl mt-4">Player Country</p>
        <select
          name="country"
          className="w-40 mt-4 px-4 py-3 border rounded-md"
        >
          <option value="Pakistan">Pakistan</option>
          <option value="India">India</option>
          <option value="Australia">Australia</option>
          <option value="England">England</option>
        </select>
        <br />
        <button
          type="submit"
          className="bg-black text-white w-40 mt-4 px-4 py-3 border rounded-md"
        >
          Add Product
        </button>
      </form>
    </>
  );
};

export default Page;
