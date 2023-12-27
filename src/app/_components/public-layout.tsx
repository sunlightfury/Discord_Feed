import Link from "next/link";
import { Linkedin, Instagram, Facebook, PhoneCall, MailIcon, MapPin } from "lucide-react";
import Image from "next/image";

import Logo_img from "@/app/assets/logo.svg";

export function Navbar() {
  return (
    <div className="flex w-full items-center justify-between bg-white p-6 shadow-xl">
      <Link href={'/'}><Image src={Logo_img} alt="logo_img" width={40} /></Link>
      <div>
        <Link
          href={"/public/blogs"}
          className="ml-auto rounded-md bg-transparent px-6 py-2 text-[15px] md:text-[20px] transition-all hover:bg-[#8053FF] hover:text-white"
        >
          Blogs
        </Link>
        <Link
          href={"/public/faqs"}
          className="rounded-md bg-transparent px-6 py-2 text-[15px] md:text-[20px] transition-all hover:bg-[#8053FF] hover:text-white"
        >
          FAQs
        </Link>
        <Link
          href={"/public/about"}
          className="rounded-md bg-transparent px-6 py-2 text-[15px] md:text-[20px] transition-all hover:bg-[#8053FF] hover:text-white"
        >
          About us
        </Link>
      </div>
    </div>
  );
}

export function Footer() {
  return (
    <>
      <div className="w-full bg-[#8053FF] text-white opacity-90 md:px-0 px-4">
        <div className="mx-auto my-12 flex max-w-[1500px] gap-10  md:flex-row flex-col">
          <div className="md:w-[30%] w-full">
            <h2 className="text-[30px] font-bold">APZ-MEMBERSHIP</h2>
            <p className="mt-8">
              We are an organization dedicated to make membership management
              easier than it was. Quickly get started and enjoy our services.
            </p>
            <div className="mt-4 flex gap-6">
              <Linkedin className="h-8 w-8 text-white" />
              <Instagram className="h-8 w-8 text-white" />
              <Facebook className="h-8 w-8 text-white" />
            </div>
          </div>
          <div className="md:w-[70%] w-full">
            <p className="text-[23px] font-bold">Contact Info</p>
            <div className="mt-6 flex gap-4 md:flex-row flex-col">
              <div className="flex gap-2 items-center">
                <PhoneCall className="h-6 w-6 text-white" />
                +554563421432
              </div>
              <div className="flex gap-2 items-center">
                <MailIcon className="h-6 w-6 text-white" />
                support@apzdkyc.com
              </div>
              <div className="flex gap-2 items-center">
                <MapPin className="h-6 w-6 text-white" />
                Somewhere in South Africa.
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full bg-white py-3 text-center">
        © copyright APZ-Memership
      </div>
    </>
  );
}