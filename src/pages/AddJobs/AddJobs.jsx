import React from "react";

export default function AddJobs() {
    const handleAddJob=e=>{
        e.preventDefault()
    }
  return (
    <div className="mt-5">
      <h2 className="text-3xl font-extrabold text-center">Post a new job</h2>
      <div className="mt-5 mb-5 ml-10 mr-10 ">
        <form onSubmit={handleAddJob} action="">
          <fieldset className="fieldset space-y-2">
            {/* job title */}
            <label className="label">Job Title</label>
            <input
              type="text"
              name="title"
              className="input w-full"
              required
              placeholder="Job title"
            />
            {/* job location */}
            <label className="label">Location</label>
            <input
              type="text"
              name="location"
              className="input w-full"
              required
              placeholder="Location"
            />
            {/* job type */}
            <label className="label">Job Type</label>
            <select defaultValue="Job Role" name="Type" className="select">
              <option disabled={true}>Job Type</option>
              <option>Full Time</option>
              <option>Intren</option>
              <option>Per-time</option>
            </select>
            {/* job category */}
            <label className="label">Job Category</label>
            <select defaultValue="Job Role" name="category" className="select">
              <option disabled={true}>Job Type</option>
              <option>Enginier</option>
              <option>Finance</option>
              <option>BBA</option>
            </select>
            {/* job deadline */}
            <label className="label">Application Deadline</label>
            <input
              type="date"
              name="applicationDeadline"
              className="input w-full"
              placeholder="Deadline"
            />
            {/* job selary range */}
            <div className="grid  grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-4 items-end">
              <div>
                <label className="label mb-3">Selary Range</label>
                <input
                  type="text"
                  name="min"
                  className="input w-full"
                  placeholder="Min"
                />
              </div>
              <div>
                <input
                  type="text"
                  name="max"
                  className="input w-full"
                  placeholder="Max"
                />
              </div>
              <div>
                <select
                  defaultValue="Currency"
                  name="currency"
                  className="select"
                >
                  <option disabled={true}>Currency</option>
                  <option>bdt</option>
                  <option>usd</option>
                  <option>uad</option>
                </select>
              </div>
            </div>
            {/* job description */}
            <label className="label mb-3">Job Description</label>
            <textarea
              className="textarea w-full"
              name="description "
              placeholder="Description"
            ></textarea>
            {/* job company */}
            <label className="label mb-3">Company Name</label>
            <input
              type="text"
              name="company"
              className="input w-full"
              placeholder="Company Name"
            />
            {/* requierements */}
            <label className="label mb-3">Requierments</label>
            <textarea
              className="textarea w-full"
              name="requierements "
              placeholder="Please  put each requierements in a new line"
            ></textarea>
            {/* responsibilities */}
            <label className="label mb-3">Responsibilities</label>
            <textarea
              className="textarea w-full"
              name="responsibilities  "
              placeholder="Please  put each responsibilities  in a new line"
            ></textarea>
            {/* hr email */}
            <label className="label mb-3">HR Email</label>
            <input
              type="text"
              name="hr_email"
              className="input w-full"
              placeholder=""
            />
            {/* hr name */}
            <label className="label mb-3">HR Name</label>
            <input
              type="text"
              name="hr_name"
              className="input w-full"
              placeholder="Name"
            />
            {/* compnay logo url */}
            <label className="label mb-3">Compnay logo url</label>
            <input
              type="url"
              name="company_logo"
              className="input w-full"
              placeholder="Compnay logo url"
            />
            {/* submit button */}
            <button className="btn btn-neutral mt-4">Submit</button>
          </fieldset>
        </form>
      </div>
    </div>
  );
}
