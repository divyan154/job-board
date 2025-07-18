"use client";
import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import debounce from "lodash/debounce";
import Navbar from "../components/navbar";
import JobForm from "../components/job-form";
import Filter from "../components/filter";
import Joblisting from "../components/job-listing";
import { max } from "lodash";

export default function JobBoard() {
  const [showForm, setShowForm] = useState(false);
  const [jobs, setJobs] = useState([]);
  const { register, handleSubmit, reset } = useForm();
  const [titleFilter, setTitleFilter] = useState("");
  const [locationFilter, setLocationFilter] = useState("");
  const [typeFilter, setTypeFilter] = useState("");
  
  const [minSalary, setMinSalary] = useState(5000) // Minimum salary for the range slider
  const [maxSalary, setMaxSalary] = useState(20000) // Maximum salary for the range slider
  // Define the original fetch function
  const fetchJobs = async (filters) => {
    const params = new URLSearchParams({
      title: filters.title,
      location: filters.location,
      type: filters.type,
      salaryMin: filters.salaryMin.toString(),
      salaryMax: filters.salaryMax.toString()
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
    console.log("minSalary:", minSalary, "maxSalary:", maxSalary);
    debouncedFetch({
      title: titleFilter,
      location: locationFilter,
      type: typeFilter,
      salaryMin: minSalary,
      salaryMax:maxSalary
    });
  }, [titleFilter, locationFilter, typeFilter, minSalary,maxSalary]);

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
        salaryMax: maxSalary
      });

      reset();
      setShowForm(false);
    } catch (error) {
      console.error("Failed to create job:", error);
    }
  };
  

  return (
    <div className="min-h-screen  w-full">
      <Navbar setShowForm={setShowForm} />

      <div className="max-w-7xl mx-auto px-4">
        {showForm && (
          <JobForm onSubmit={onSubmit} onCancel={() => setShowForm(false)} />
        )}

        {/* Filters */}
        <Filter
          title={titleFilter}
          location={locationFilter}
          type={typeFilter}
          minSalary={minSalary}
          maxSalary={maxSalary}
          setTitle={setTitleFilter}
          setLocation={setLocationFilter}
          setType={setTypeFilter}
          setMinSalary={setMinSalary}
          setMaxSalary={setMaxSalary}
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-16">
          {jobs.length > 0 ? (
            jobs.map((job) => <Joblisting key={job.id} job={job} />)
          ) : (
            <div className="col-span-3 text-center text-gray-500">
              No jobs found
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

