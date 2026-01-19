"use client";
import Image from "next/image";

const Footer = () => {
  return (
    <div className="flex justify-around flex-row gap-2 sm:gap-0 sm:flex-row bg-black py-5 items-center">
      <Image src={"/images/logo.png"} alt="Logo" width={50} height={50} />
      <p className="text-white">© 2024 Blogs App. All rights reserved.</p>
      <div className="flex gap-4 bg-blend-color-burn ">
        <Image
          src={"/images/instagram.jfif"}
          alt="Social Icons"
          width={30}
          height={30}
        />
        <Image
          src={"/images/facebook.png"}
          alt="Social Icons"
          width={30}
          height={30}
        />
        <Image
          src={"/images/x.png"}
          alt="Social Icons"
          width={30}
          height={30}
        />
      </div>
    </div>
  );
};

export default Footer;
