"use client"
import React, { useState } from "react";

const jobs = [
  {
    id: 1,
    companyLogo:
      "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
    title: "Full Stack Developer",
    timeAgo: "24h Ago",
    experience: "1-3 yr Exp",
    type: "Onsite",
    salary: "12LPA",
    description:
      "A user-friendly interface lets you browse stunning photos and videos\n      Filter destinations based on interests and travel style, and create personalized",
  },
];

export default function JobBoard() {
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    company: "",
    location: "",
    type: "",
    salaryMin: "",
    salaryMax: "",
    description: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4">
      <div className="max-w-7xl mx-auto">
        <button
          onClick={() => setShowForm(true)}
          className="mb-6 bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-700"
        >
          Create Job
        </button>

        {showForm && (
          <div className="text-black fixed inset-0 bg-black bg-opacity-30 flex justify-center items-center z-50">
            <div className="bg-white rounded-xl shadow-lg p-6 w-full max-w-3xl">
              <h2 className="text-xl font-semibold mb-4 text-center">
                Create Job Opening
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                  placeholder="Job Title"
                  className="border rounded px-3 py-2 w-full"
                />
                <input
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  placeholder="Company Name"
                  className="border rounded px-3 py-2 w-full"
                />
                <select
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  className="border rounded px-3 py-2 w-full"
                >
                  <option value="">Location</option>
                  <option value="Chennai">Chennai</option>
                  <option value="Delhi">Delhi</option>
                  <option value="Mumbai">Mumbai</option>
                </select>
                <select
                  name="type"
                  value={formData.type}
                  onChange={handleChange}
                  className="border rounded px-3 py-2 w-full"
                >
                  <option value="">Job Type</option>
                  <option value="Internship">Internship</option>
                  <option value="FullTime">Full Time</option>
                  <option value="PartTime">Part Time</option>
                  <option value="Contract">Contract</option>
                </select>
                <input
                  name="salaryMin"
                  value={formData.salaryMin}
                  onChange={handleChange}
                  placeholder="₹0"
                  type="number"
                  className="border rounded px-3 py-2 w-full"
                />
                <input
                  name="salaryMax"
                  value={formData.salaryMax}
                  onChange={handleChange}
                  placeholder="₹12,00,000"
                  type="number"
                  className="border rounded px-3 py-2 w-full"
                />
              </div>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                placeholder="Job Description"
                className="border rounded px-3 py-2 w-full mt-4 h-24"
              />
              <div className="flex justify-between mt-4">
                <button
                  onClick={() => setShowForm(false)}
                  className="border px-4 py-2 rounded hover:bg-gray-100"
                >
                  Save Draft
                </button>
                <button className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600">
                  Publish »
                </button>
              </div>
            </div>
          </div>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {jobs.map((job) => (
            <div
              key={job.id}
              className="bg-white border border-gray-200 shadow-md rounded-xl p-4 w-full hover:shadow-lg transition"
            >
              <div className="flex justify-between items-start mb-2">
                <img src={job.companyLogo} alt="Logo" className="w-10 h-10" />
                <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full">
                  {job.timeAgo}
                </span>
              </div>
              <h3 className="font-semibold text-lg text-gray-900">
                {job.title}
              </h3>
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
          ))}
        </div>
      </div>
    </div>
  );
}
