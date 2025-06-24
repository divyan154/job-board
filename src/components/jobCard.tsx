import React from 'react'
import Image from 'next/image'
export default function joblisting({ job }) {
  const Imagearray = [
    {
      id: 'Amazon',
      src: '/amazon.png',
    }, {
      id: 'Swiggy',
      src: '/swiggy.png',
    },
    {
      id: 'Tesla',
      src: '/tesla.png',
    }
  ];
  return (
    <div
      key={job.id}
      className="text-black bg-white border border-gray-200 shadow-md rounded-xl p-4 xl:w-[316px] w-full hover:shadow-lg transition flex  flex-col justify-center gap-2 "
    >
      <div className="flex justify-between items-start mb-2">
        {Imagearray.map((image) => {
          if (image.id == job.company) {
            return (
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
            );
          }
          return null;
        })}

        <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full">
          {job.timeAgo || "New"}
        </span>
      </div>
      <h3 className="font-bold text-lg text-gray-900">{job.title}</h3>

      <div className="flex items-center text-sm text-gray-600 mt-2 space-x-3">
        <span>🏢 {job.company}</span>
        <span>📍 {job.location}</span>
        <span className="text-sm font-semibold text-blue-600 bg-blue-50 px-2 py-1 rounded-full">
          ₹{(job.salary / 100000).toFixed(1)} LPA
        </span>
      </div>
      <div className="flex items-center justify-end mt-2"></div>
      <p className="text-gray-500 text-sm mt-4 leading-tight">
        {job.description}
      </p>
      <div className="flex items-center justify-center">
        <button className="font-satoshi   w-[284px] h-[46px] px-[10px] py-[12px] border rounded-[10px] bg-blue-500 text-white font-semibold text-[16px] leading-none text-center font-[Satoshi Variable] hover:bg-blue-600 transition">
          Apply Now
        </button>
      </div>
    </div>
  );
  
}



