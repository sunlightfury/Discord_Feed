import Link from "next/link";

import { Cloud, Github } from "lucide-react";

export default function UserMenu() {
  return (
    <>
      <Link
        href="https://github.com/nisabmohd/ChatGPT"
        target="_blank"
        className="flex flex-row items-center gap-2 rounded-lg px-3 py-3 hover:bg-gray-800 hover:text-white dark:hover:text-inherit"
      >
        <Github className="mr-2 h-5 w-5" />
        <span>GitHub</span>
      </Link>
      <Link
        href="https://platform.openai.com/docs/"
        target="_blank"
        className="flex cursor-pointer flex-row items-center gap-2 rounded-lg px-3 py-3 hover:bg-gray-800 hover:text-white dark:hover:text-inherit"
      >
        <Cloud className="mr-2 h-5 w-5" />
        <span>API</span>
      </Link>
    </>
  );
}
