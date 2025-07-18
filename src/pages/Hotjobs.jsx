import React, { useEffect, useState } from "react";
import HotjobCard from "./Home/HotjobCard";

export default function Hotjobs() {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/jobs")
      .then((res) => res.json())
      .then((data) => setJobs(data) );
  }, []);

  return (
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-3 gap-4 mt-5">
        {jobs.map((job) => 
          <HotjobCard key={job._id} job={job}></HotjobCard>
        )}
      </div>
    </div>
  );
}
