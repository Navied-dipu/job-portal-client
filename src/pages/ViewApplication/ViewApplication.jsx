import React from 'react'
import { useLoaderData } from 'react-router-dom'

export default function ViewApplication() {
    const application=useLoaderData()

  return (
    <div>
     <h2 className='text-center text-3xl font-extrabold'>View application: {application.length}</h2>
     <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>Email</th>
        <th>Job</th>
        <th>Favorite Color</th>
      </tr>
    </thead>
    <tbody>
    {
        application.map((apply , index) =>   <tr key={index}>
        <th>{index + 1}</th>
        <td>{apply.applicante_email}</td>
        <td>Quality Control Specialist</td>
        <td>Blue</td>
      </tr>)
    }
      
    </tbody>
  </table>
</div>
    </div>
  )
}
