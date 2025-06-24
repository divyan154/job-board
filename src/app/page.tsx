"use client";
import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import Image from "next/image";
import axios from "axios";
import debounce from "lodash/debounce";
import { useSearchParams } from "next/navigation";
import { min } from "lodash";
import { getHmrRefreshHash } from "next/dist/server/app-render/work-unit-async-storage.external";

export default function JobBoard() {
  const [showForm, setShowForm] = useState(false);
  const [jobs, setJobs] = useState([]);
  const { register, handleSubmit, reset } = useForm();
  const [titleFilter, setTitleFilter] = useState("");
  const [locationFilter, setLocationFilter] = useState("");
  const [typeFilter, setTypeFilter] = useState("");
  
const [minSalary,setMinSalary] = useState(5000) // Minimum salary for the range slider
  // Define the original fetch function
  const fetchJobs = async (filters) => {
    const params = new URLSearchParams({
      title: filters.title,
      location: filters.location,
      type: filters.type,
      salaryMin: filters.salaryMin.toString(),
    });

    const res = await fetch(`/api/jobs?${params.toString()}`);
    const data = await res.json();
    setJobs(data);
  };

  // Debounced version
  const debouncedFetch = React.useRef(
    debounce((filters) => fetchJobs(filters), 500)
  ).current;

  useEffect(() => {
    debouncedFetch({
      title: titleFilter,
      location: locationFilter,
      type: typeFilter,
      salaryMin: minSalary,
    });
  }, [titleFilter, locationFilter, typeFilter, minSalary]);

  const onSubmit = async (data) => {
    try {
      // Submit new job
      await axios.post("/api/jobs", data);

      // ✅ Immediately refetch jobs after submission
      debouncedFetch.cancel(); // cancel any pending debounce calls
      fetchJobs({
        title: titleFilter,
        location: locationFilter,
        type: typeFilter,
        salaryMin: minSalary,
      });

      reset();
      setShowForm(false);
    } catch (error) {
      console.error("Failed to create job:", error);
    }
  };
  

  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white shadow-md py-4 px-6 flex items-center justify-between rounded-xl mx-4 my-6">
        <div className="flex items-center space-x-10">
          <Image
            width={40}
            height={40}
            src="https://upload.wikimedia.org/wikipedia/commons/9/98/SmartBear_logo_2020.svg"
            alt="Logo"
          />
          <a href="#" className="text-gray-800 font-medium">
            Home
          </a>
          <a href="#" className="text-gray-800 font-medium">
            Find Jobs
          </a>
          <a href="#" className="text-gray-800 font-medium">
            Find Talents
          </a>
          <a href="#" className="text-gray-800 font-medium">
            About us
          </a>
          <a href="#" className="text-gray-800 font-medium">
            Testimonials
          </a>
        </div>
        <button
          onClick={() => setShowForm(true)}
          className="bg-gradient-to-r from-purple-500 to-indigo-500 text-white px-4 py-2 rounded-full font-semibold shadow-md hover:opacity-90"
        >
          Create Jobs
        </button>
      </nav>

      <div className="max-w-7xl mx-auto px-4">
        {showForm && (
          <div className=" text-black fixed inset-0 bg-black bg-opacity-30 flex justify-center items-center z-50">
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="bg-white rounded-xl shadow-lg p-6 w-full max-w-3xl"
            >
              <h2 className="text-xl font-semibold mb-4 text-center">
                Create Job Opening
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  {...register("title", { required: true })}
                  placeholder="Job Title"
                  className="border rounded px-3 py-2 w-full"
                />
                <input
                  {...register("company", { required: true })}
                  placeholder="Company Name"
                  className="border rounded px-3 py-2 w-full"
                />
                <input
                  {...register("location", { required: true })}
                  placeholder="Location"
                  className="border rounded px-3 py-2 w-full"
                />
                <select
                  {...register("type", { required: true })}
                  className="border rounded px-3 py-2 w-full"
                >
                  <option value="">Job Type</option>
                  <option value="Internship">Internship</option>
                  <option value="Full Time">Full Time</option>
                  <option value="Part Time">Part Time</option>
                  <option value="Contract">Contract</option>
                </select>
                <input
                  {...register("salary", { required: true })}
                  placeholder="Salary (in ₹)"
                  type="number"
                  className="border rounded px-3 py-2 w-full"
                />
               
              </div>
              <textarea
                {...register("description", { required: true })}
                placeholder="Job Description"
                className="border rounded px-3 py-2 w-full mt-4 h-24"
              />
              <textarea
                {...register("requirements", { required: true })}
                placeholder="Requirements"
                className="border rounded px-3 py-2 w-full mt-4 h-24"
              />
              <textarea
                {...register("responsibilities", { required: true })}
                placeholder="Responsibilities"
                className="border rounded px-3 py-2 w-full mt-4 h-24"
              />
              <input
                {...register("deadline", { required: true })}
                type="date"
                className="border rounded px-3 py-2 w-full mt-4"
              />
              <div className="flex justify-between mt-4">
                <button
                  type="button"
                  onClick={() => setShowForm(false)}
                  className="border px-4 py-2 rounded hover:bg-gray-100"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600"
                >
                  Publish »
                </button>
              </div>
            </form>
          </div>
        )}

        {/* Filters */}
        <div className="text-black bg-white rounded-xl shadow-sm p-4 mb-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <input
            placeholder="Search Job Title"
            className="border px-3 py-2 rounded"
            value={titleFilter}
            onChange={(e) => setTitleFilter(e.target.value)}
          />

          <input
            placeholder="Location"
            className="border px-3 py-2 rounded"
            value={locationFilter}
            onChange={(e) => setLocationFilter(e.target.value)}
          />
          <select
            className="border px-3 py-2 rounded"
            value={typeFilter}
            onChange={(e) => setTypeFilter(e.target.value)}
          >
            <option value="">Job Type</option>
            <option value="Full Time">Full Time</option>
            <option value="Part Time">Part Time</option>
            <option value="Contract">Contract</option>
            <option value="Internship">Internship</option>
          </select>
          <div>
            <label htmlFor="minSalary">
              Min Salary: ₹{(minSalary / 100000).toFixed(0)}L
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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {jobs.map((job) => (
            <div
              key={job.id}
              className="bg-white border border-gray-200 shadow-md rounded-xl p-4 w-full hover:shadow-lg transition"
            >
              <div className="flex justify-between items-start mb-2">
                <img src={job.companyLogo} alt="Logo" className="w-10 h-10" />
                <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full">
                  {job.timeAgo || "New"}
                </span>
              </div>
              <h3 className="font-semibold text-lg text-gray-900">
                {job.title}
              </h3>
              <div className="flex items-center text-sm text-gray-600 mt-2 space-x-3">
                <span>🏢 {job.company}</span>
                <span>📍 {job.location}</span>
                <span>💼 {job.type}</span>
              </div>
              <div className="flex items-center justify-end mt-2">
                <span className="text-sm font-semibold text-blue-600 bg-blue-50 px-2 py-1 rounded-full">
                  ₹{(job.salary / 100000).toFixed(1)} LPA
                </span>
              </div>
              <p className="text-gray-500 text-sm mt-4 leading-tight">
                {job.description}
              </p>
              <button className="w-full mt-4 bg-blue-500 text-white font-medium py-2 px-4 rounded-lg hover:bg-blue-600">
                Apply Now
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
