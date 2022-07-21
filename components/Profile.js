import Image from "next/image";
export default function Profile({ src }) {
  return (
    <div className="container mx-auto flex flex-col items-center py-5">
      <div className="w-[72px] h-[72px] p-1 border border-2 border-blue-800 rounded-full mb-4">
        <div className="relative w-full h-full rounded-full overflow-hidden">
          <Image src={`/img/${src}.jpg`} layout="fill" alt="photo profile"/>
        </div>
      </div>
      <h1 className="text-xl font-semibold text-white mb-2">Mulyana</h1>
      <p className="text-md text-white/40">I&apos;m learning about making thing in web</p>
    </div>
  );
}
