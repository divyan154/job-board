import React from "react";
import Image from "next/image";
import { getCompactTimeAgo } from "../utils/time";

export default function joblisting({ job }) {
  const Imagearray = [
    { id: "Amazon", src: "/amazon.png" },
    { id: "Swiggy", src: "/swiggy.png" },
    { id: "Tesla", src: "/tesla.png" },
  ];

  return (
    <div
      key={job.id}
      className="text-black bg-white border border-gray-200 shadow-md rounded-xl p-4 xl:w-[316px] w-full hover:shadow-lg transition flex flex-col justify-between gap-2 h-full min-h-[300px]"
    >
      {/* Top Content */}
      <div className="flex flex-col flex-grow">
        <div className="flex justify-between items-start mb-2">
          {Imagearray.map((image) =>
            image.id === job.company ? (
              <div
                key={image.id}
                className="bg-gradient-to-b from-[#FEFEFD] to-[#F1F1F1] rounded-[13px] w-[83px] h-[82px] flex items-center justify-center"
              >
                <Image
                  src={image.src}
                  alt="Company Logo"
                  width={40}
                  height={40}
                  className="rounded-full h-[65px] w-[65px] object-cover hover:scale-110 transition-transform duration-300"
                />
              </div>
            ) : null
          )}
          <span className="text-xs bg-[#B0D9FF] text-black-500 px-2 py-1 rounded-full">
            {job.createdAt ? getCompactTimeAgo(job.createdAt) : "New"}
          </span>
        </div>

        <h3 className="font-bold text-lg text-gray-900">{job.title}</h3>
        <div className="flex items-center text-sm text-gray-600 mt-2 justify-between">
          {/* Experience */}
          <div className="flex items-center gap-1">
            <Image src="/exp.png" alt="Experience" width={16} height={16} />
            <span>{job.experience || "1–3 yr Exp"}</span>
          </div>

          {/* Type */}
          <div className="flex items-center gap-1">
            <Image src="/locIcon.png" alt="Job Type" width={16} height={16} />
            <span>{job.type || "Onsite"}</span>
          </div>

          {/* Salary */}
          <div className="flex items-center gap-1">
            <Image src="/salary.png" alt="Salary" width={16} height={16} />
            <span>{(job.salary / 100000).toFixed(0)} LPA</span>
          </div>
        </div>

        <p className="text-gray-500 text-sm mt-4 leading-tight line-clamp-3">
          {job.description}
        </p>
      </div>

      {/* Bottom Apply Button */}
      <div className="mt-4">
        <button className="font-satoshi w-full h-[46px] px-[10px] py-[12px] border rounded-[10px] bg-blue-500 text-white font-semibold text-[16px] leading-none text-center hover:bg-blue-600 transition">
          Apply Now
        </button>
      </div>
    </div>
  );
}
