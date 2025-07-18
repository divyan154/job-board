"use client";
import Image from "next/image";
// import Twothumbs from "./range-slider";
import DoubleSlider from "./double-slider";
interface FilterProps {
  title: string;
  location: string;
  type: string;
  minSalary: number;
  setTitle: (value: string) => void;
  setLocation: (value: string) => void;
  setType: (value: string) => void;
  setMinSalary: (value: number) => void;
  setMaxSalary: (value: number) => void;
}

export default function Filter({
  title,
  location,
  type,
  minSalary,
  maxSalary,
  setTitle,
  setLocation,
  setType,
  setMinSalary,
  setMaxSalary
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
        <div className="flex justify-between items-center mb-1">
          <label
            htmlFor="minSalary"
            className="text-md font-bold text-gray-800"
          >
            Salary Per Month
          </label>
          <span className="text-sm font-bold text-gray-900">
            ₹{minSalary / 1000}k – ₹{maxSalary / 1000}k
          </span>
        </div>

        <DoubleSlider setMinSalary={setMinSalary} setMaxSalary={setMaxSalary} />
      </div>
    </div>
  );
}
