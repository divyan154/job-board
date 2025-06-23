import React from 'react'
import Image from 'next/image'

type Job = {
  id: string | number;
  companyLogo: string;
  timeAgo: string;
  title: string;
  experience: string;
  type: string;
  salary: string;
  description: string;
};

type JobListingProps = {
  job: Job;
};

export default function JobListing({ job }: JobListingProps) {
  return (
    <div
      key={job.id}
      className="bg-white border border-gray-200 shadow-md rounded-xl p-4 w-full hover:shadow-lg transition"
    >
      <div className="flex justify-between items-start mb-2">
        <Image src={job.companyLogo} alt="Hi" width={50} height={50} />
        <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full">
          {job.timeAgo}
        </span>
      </div>
      <h3 className="font-semibold text-lg text-gray-900">{job.title}</h3>
      <div className="flex items-center text-sm text-gray-600 mt-2 space-x-3">
        <span>🧑‍💻 {job.experience}</span>
        <span>📍 {job.type}</span>
        <span>💰 {job.salary}</span>
      </div>
      <p className="text-gray-500 text-sm mt-4 leading-tight">
        {job.description}
      </p>
      <button className="w-full mt-4 bg-blue-500 text-white font-medium py-2 px-4 rounded-lg hover:bg-blue-600">
        Apply Now
      </button>
    </div>
  );
}

    
  