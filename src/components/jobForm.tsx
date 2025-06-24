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
    onSubmit(data); // parent handles API + job fetch
    reset(); // reset form fields
  };

  return (
    <div className="text-black fixed inset-0 bg-white/1 backdrop-blur-[3px] flex justify-center items-center z-50">
      <form
        onSubmit={handleSubmit(handleFormSubmit)}
        className="bg-white rounded-xl shadow-xl p-6 w-full max-w-2xl"
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
            onClick={onCancel}
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
  );
}
