import React, { useEffect, useState } from "react";
import useAuth from "../hooks/useAuth";
import { Link } from "react-router-dom";

export default function MyPostedJob() {
  const [jobs, setJobs] = useState([]);
  const { user } = useAuth();
  useEffect(() => {
    fetch(`http://localhost:5000/jobs?email=${user.email}`)
      .then((res) => res.json())
      .then((data) => setJobs(data));
  }, [user.email]);
  return (
    <div>
      <h2 className="text-3xl font-extrabold text-center">
        My posted jobs : {jobs.length}
      </h2>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Job Title</th>
              <th>Deadline</th>
              <th>View Application</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {jobs.map((job, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{job.title}</td>
                <td>{job.applicationDeadline}</td>
                <Link to={`/viewapplication/${job._id}`}>
                  {" "}
                  <td>
                    <button className="btn btn-link"> View Application</button>
                  </td>
                </Link>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
