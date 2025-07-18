"use client";
import Image from "next/image";


interface FilterProps {
  title: string;
  location: string;
  type: string;
  minSalary: number;
  setTitle: (value: string) => void;
  setLocation: (value: string) => void;
  setType: (value: string) => void;
  setMinSalary: (value: number) => void;
}

export default function Filter({
  title,
  location,
  type,
  minSalary,
  setTitle,
  setLocation,
  setType,
  setMinSalary,
}: FilterProps) {
   
  return (
    
    <div className="text-black bg-white rounded-xl shadow-sm p-4 mb-6 flex flex-col lg:flex-row items-center justify-between gap-4">
      {/* Title */}
      <div className="relative flex-1 w-full">
        <Image
          src="/search.png"
          alt="Search Icon"
          width={20}
          height={20}
          className="absolute left-3 top-1/2 transform -translate-y-1/2"
        />
        <input
          placeholder="Search Job Title"
          className="pl-10 py-2 w-full rounded "
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>

      {/* Divider */}
      <div className="hidden lg:block  h-12 top-[140px] left-[720px] border border-[#EAEAEA] w-0.5" />

      {/* Location */}
      <div className="relative flex-1 w-full">
        <Image
          src="/location.png"
          alt="Location Icon"
          width={20}
          height={20}
          className="absolute left-3 top-1/2 transform -translate-y-1/2"
        />
        <input
          placeholder="Location"
          className="pl-10 py-2 w-full rounded "
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
      </div>

      {/* Divider */}
      <div className="hidden lg:block  h-12 top-[140px] left-[720px] border border-[#EAEAEA] w-0.5" />

      {/* Job Type */}
      <div className="relative flex-1 w-full">
        <Image
          src="/jobType.png"
          alt="Type Icon"
          width={20}
          height={20}
          className="absolute left-3 top-1/2 transform -translate-y-1/2"
        />
        <select
          className="pl-10 py-2 w-full rounded "
          value={type}
          onChange={(e) => setType(e.target.value)}
        >
          <option value="">Job Type</option>
          <option value="Full Time">Full Time</option>
          <option value="Part Time">Part Time</option>
          <option value="Contract">Contract</option>
          <option value="Internship">Internship</option>
        </select>
      </div>

      {/* Divider */}
      <div className="hidden lg:block  h-12 top-[140px] left-[720px] border border-[#EAEAEA] w-0.5" />

      {/* Salary */}
      <div className="flex-1 w-full">
        <label htmlFor="minSalary" className="block mb-1 text-sm">
          Min Salary: ₹
          {minSalary >= 100000 ? (minSalary / 100000).toFixed(0) : 5}L
        </label>

        <input
          id="minSalary"
          type="range"
          min={500000}
          max={4000000}
          step={100000}
          value={minSalary}
          onChange={(e) => setMinSalary(Number(e.target.value))}
          className="w-full"
        />
      </div>
      
    </div>
  );
}
