import React from "react";
import Image from "next/image";
import Link from "next/link";
export default function Navbar({
  setShowForm,
}: {
  setShowForm: (val: boolean) => void;
}) {
  return (
    <div className="flex justify-center mt-6 mb-10">
      <nav className="bg-white w-[890px] h-[80px] shadow-lg py-4 px-8 flex items-center justify-between rounded-full">
        <div className="flex items-center space-x-10">
          <Image
            src="/logo.png" // Use your local logo path
            alt="Logo"
            width={40}
            height={40}
          />
          <Link href="#" className="text-black font-medium">
            Home
          </Link>

          <Link href="#" className="text-black font-medium">
            Find Jobs
          </Link>
          <Link href="#" className="text-black font-medium">
            Find Talents
          </Link>
          <Link href="#" className="text-black font-medium">
            About us
          </Link>
          <Link href="#" className="text-black font-medium">
            Testimononials
          </Link>
          
        </div>
        <button
          onClick={() => setShowForm(true)}
          className="bg-gradient-to-r from-[#7B2FF7] to-[#F107A3] text-white px-6 py-2 rounded-full font-semibold shadow-md hover:opacity-90 transition"
        >
          Create Jobs
        </button>
      </nav>
    </div>
  );
}
