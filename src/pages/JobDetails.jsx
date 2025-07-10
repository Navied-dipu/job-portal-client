import React from "react";
import { useLoaderData } from "react-router-dom";

export default function JobDetails() {
  const { title, company, applicationDeadline} = useLoaderData();
  // console.log(job);
  return (
    <div className="card bg-primary text-primary-content m-5 w-96">
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
       <h2>Company : {company}</h2>
       <h3>Deadline : {applicationDeadline}</h3>
        <div className="card-actions justify-end">
          <button className="btn">Apply</button>
        </div>
      </div>
    </div>
  );
}
