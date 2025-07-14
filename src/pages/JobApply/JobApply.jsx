import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";

export default function JobApply() {
  const { id } = useParams();
  console.log(id);
  const { user } = useAuth();
  const neviget=useNavigate()
  const handleJobApply = (e) => {
    e.preventDefault();
    const form = e.target;
    const linkdin = form.linkdin.value;
    const github = form.github.value;
    const resume = form.resume.value;
    console.log(user, linkdin, github, resume);
    const jobApplication = {
      job_id: id,
      applicante_email: user.email,
      linkdin,
      github,
      resume,
    };
    fetch("http://localhost:5000/job-applications", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(jobApplication),
    })
      .then((res) => res.json())
      .then((data) => {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "You apply succesfuly",
          showConfirmButton: false,
          timer: 1500,
        });
        neviget('/')
      });
  };
  return (
    <div className="hero bg-base-200  min-h-screen">
      <div className="card-body ">
        <h1 className="text-3xl font-extrabold text-center">
          Apply now, Good Luck !!
        </h1>
        <form onSubmit={handleJobApply} action="">
          <fieldset className="fieldset ">
            <label className="label">Linkdin</label>
            <input
              type="url"
              name="linkdin"
              className="input w-full"
              placeholder="Linkdin URL"
            />
            <label className="label">Github</label>
            <input
              type="url"
              name="github"
              className="input  w-full"
              placeholder="Github URL"
            />
            <label className="label">Resume</label>
            <input
              type="url"
              name="resume"
              className="input  w-full"
              placeholder="Resume URL"
            />
            <button className="btn w-full block btn-neutral mt-4">
              Submit
            </button>
          </fieldset>
        </form>
      </div>
    </div>
  );
}
