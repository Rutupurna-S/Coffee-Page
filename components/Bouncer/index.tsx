import Link from "next/link";

export default function Bouncer() {
  return (
    <div className="mt-10">
      <Link href={"/#about"} target="_self">
        <div
          className="h-14 w-14 border-[1.5px] border-gray-300 rounded-full relative text-gray-300 animate-smoothbounce transition-all duration-300 
            hover:border-[#FAF3E3] hover:text-[#FAF3E3] 
              hover:shadow-[0_0_18px_4px_rgba(250,243,227,0.45)]"
        >
          <div className="absolute top-1/4 left-2/5 text-2xl">&#8595;</div>
        </div>
      </Link>
    </div>
  );
}
