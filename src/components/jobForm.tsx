"use client";

import React from "react";
import { useForm } from "react-hook-form";

export default function JobForm({ onSubmit, onCancel }) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const handleFormSubmit = (data) => {
    console.log("Form submitted with data:", data);
    onSubmit(data); // parent handles API + job fetch
    reset(); // reset form fields
  };

  return (
    <div className="text-black fixed inset-0 bg-white/1 backdrop-blur-[3px] flex justify-center items-center z-50">
      <form
        onSubmit={handleSubmit(handleFormSubmit)}
        className="bg-white rounded-xl shadow-xl p-6 w-full max-w-2xl max-h-[90vh] overflow-y-auto"
      >
        <h2 className="text-xl font-semibold mb-4 text-center text-[#222222]">
          Create Job Opening
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="mb-4">
            <label
              htmlFor="role"
              className="block text-sm font-semibold text-[#222222] mb-1"
            >
              Job Title
            </label>
            <input
              {...register("title", { required: true })}
              id="role"
              placeholder="Full Stack Developer"
              type="text"
              className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm  font-semibold text-[#222222]"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="company"
              className="block text-sm font-semibold text-[#222222] mb-1"
            >
              Company Name
            </label>
            <input
              {...register("company", { required: true })}
              id="company"
              placeholder="Company Name"
              className="border rounded px-3 py-2 w-full font-semibold text-[#222222]"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="location"
              className="block text-sm font-semibold text-[#636363] mb-1"
            >
              Location
            </label>
            <input
              {...register("location", { required: true })}
              placeholder="Location"
              id="location"
              className="border rounded px-3 py-2 w-full"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="type"
              className="block text-sm font-semibold text-[#636363] mb-1"
            >
              Job Type
            </label>
            <select
              id="type"
              {...register("type", { required: true })}
              className="border rounded px-3 py-2 w-full"
            >
              <option value="">Job Type</option>
              <option value="Internship">Internship</option>
              <option value="Full Time">Full Time</option>
              <option value="Part Time">Part Time</option>
              <option value="Contract">Contract</option>
            </select>
          </div>

          <div className="mb-4">
            <label
              htmlFor="salary"
              className="block text-sm font-semibold text-[#636363] mb-1"
            >
              Salary
            </label>
            <input
              {...register("salary", { required: true })}
              placeholder="Salary (in ₹)"
              id="salary"
              type="number"
              className="border rounded px-3 py-2 w-full"
            />
          </div>
        </div>

        <div className="mb-4">
          <label
            htmlFor="description"
            className="block text-sm font-semibold text-[#636363] mb-1"
          >
            Job Description
          </label>
          <textarea
            {...register("description", { required: true })}
            id="description"
            placeholder="Job Description"
            className="border rounded px-3 py-2 w-full h-24"
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="requirements"
            className="block text-sm font-semibold text-[#636363] mb-1"
          >
            Requirements
          </label>
          <textarea
            {...register("requirements", { required: true })}
            id="requirements"
            placeholder="Requirements"
            className="border rounded px-3 py-2 w-full h-24"
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="responsibilities"
            className="block text-sm font-semibold text-[#636363] mb-1"
          >
            Responsibilities
          </label>
          <textarea
            {...register("responsibilities", { required: true })}
            id="responsibilities"
            placeholder="Responsibilities"
            className="border rounded px-3 py-2 w-full h-24"
          />
        </div>

        <div className="mb-4">
          <label
            className="block text-sm font-semibold text-[#636363] mb-1"
            htmlFor="deadline"
          >
            Application Deadline
          </label>
          <input
            {...register("applicationDeadline", { required: true })}
            type="date"
            id="deadline"
            className="border rounded px-3 py-2 w-full"
          />
        </div>

        <div className="flex justify-between mt-4">
          <button
            type="button"
            onClick={onCancel}
            className="border px-4 py-2 rounded hover:bg-gray-100"
          >
            Save Draft
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
  );
}
