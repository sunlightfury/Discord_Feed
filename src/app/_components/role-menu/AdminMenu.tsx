import Link from "next/link";

import { LucideGroup } from "lucide-react";

import { SheetTrigger } from "@/app/_components/ui/sheet";

export default function AdminMenu({}) {
  return (
    <>
      <SheetTrigger asChild>
        <Link
          href="/dashboard/users"
          className="flex flex-row items-center gap-2 rounded-lg px-3 py-3 hover:bg-gray-800 hover:text-white dark:hover:text-inherit"
        >
          <LucideGroup className="mr-2 h-5 w-5" />
          <span>Manage Users</span>
        </Link>
      </SheetTrigger>

      {/* <Link
        href="https://platform.openai.com/docs/"
        target="_blank"
        className="flex cursor-pointer flex-row items-center gap-2 rounded-lg px-3 py-3 hover:bg-gray-800 hover:text-white dark:hover:text-inherit"
      >
        <Cloud className="mr-2 h-5 w-5" />
        <span>API</span>
      </Link> */}
    </>
  );
}
