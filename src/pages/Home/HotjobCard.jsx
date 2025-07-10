import React from "react";
import { IoLocationOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
export default function HotjobCard({ job }) {
  const {
    _id,
    title,
    company,
    company_logo,
    description,
    requirements,
    location,
    salaryRange,
  } = job;
  return (
    <div className="card bg-base-100  shadow-sm">
      <div className="flex gap-2 p-2">
        <figure>
        <img
        className="w-16"
          src={company_logo}
          alt="Shoes"
        />
      </figure>
      <div>
        <h4>{company}</h4>
        <div className="flex gap-2 items-center">
             <IoLocationOutline />
            <p>{location}</p>
           
        </div>
      </div>
      </div>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>
         {description}
        </p>
        <div className="flex flex-wrap">
            {
                requirements.map((skill , index) =><p key={index} className="border- rounded-2xl text-center p-1 hover:bg-gray-700">{skill}</p>)
            }
        </div>
        <div className="card-actions justify-end">
          <Link to={`/jobs/${_id}`}><button className="btn btn-primary">Details</button></Link>
        </div>
      </div>
    </div>
  );
}
