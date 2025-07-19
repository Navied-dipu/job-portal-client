import React from "react";
import { useLoaderData } from "react-router-dom";

export default function ViewApplication() {
  const application = useLoaderData();
  const handleChangeStatus = (e, id) => {
    console.log(e.target.value, id);
    const data = {
      status: e.target.value,
    };
    fetch(`http://localhost:5000/job-applications/${id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  };

  return (
    <div>
      <h2 className="text-center text-3xl font-extrabold">
        View application: {application.length}
      </h2>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Email</th>
              <th>Job</th>
              <th>Favorite Color</th>
              <th>Update Status</th>
            </tr>
          </thead>
          <tbody>
            {application.map((apply, index) => (
              <tr key={index}>
                <th>{index + 1}</th>
                <td>{apply.applicante_email}</td>
                <td>Quality Control Specialist</td>
                <td>
                  {" "}
                  <select
                    onChange={(e) => {
                      handleChangeStatus(e, apply._id);
                    }}
                    name="status"
                    defaultValue="Change Status"
                    className="select select-sm "
                  >
                    <option disabled={true}>Change Status</option>
                    <option>Under review</option>
                    <option>Set interview</option>
                    <option>Hired</option>
                    <option>Rejected</option>
                  </select>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
