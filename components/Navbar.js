import Link from "next/link";
import { BiSun, BiMoon } from "react-icons/bi";

export default function Navbar() {
  return (
    <header className="w-screen container max-w-[600px] mx-auto py-4 flex justify-between mb-4">
      <div className="flex gap-2">
        <Link href={"/"}>
          <div className="px-4 py-1 rounded text-white/50 hover:text-white hover:bg-white/20 cursor-pointer duration-[50ms] ease-in">
            Project
          </div>
        </Link>
        <Link href={"/"}>
          <div className="px-4 py-1 rounded text-white/50 hover:text-white hover:bg-white/20 cursor-pointer duration-[50ms] ease-in">
            Resume
          </div>
        </Link>
        <Link href={"/"}>
          <div className="px-4 py-1 rounded text-white/50 hover:text-white hover:bg-white/20 cursor-pointer duration-[50ms] ease-in">
            Blog
          </div>
        </Link>
      </div>
      <div className="text-white/40">
        <div className="p-2 rounded-full bg-white/10 cursor-pointer">
          <BiMoon />
        </div>
      </div>
    </header>
  );
}
