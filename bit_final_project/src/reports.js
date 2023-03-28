import './App.css';
import React, { useEffect, useState } from "react"

const UsingFetchRep = () => {
    const [reports, setReports] = useState([])
  
    const fetchData = () => {
      fetch("http://localhost:3333/api/reports")
        .then(response => {
          return response.json()
        })
        .then(data => {
          setReports(data)
        })
    }
  
    useEffect(() => {
      fetchData()
    }, [])
  
    return (
      <div>
        {reports.length > 0 && (
          <ul>
            {reports.map(report => (
              <li key={report.id}>
                {report.candidateName},
                {report.companyName},
                {report.status},
                {report.note}
                </li>
            ))}
          </ul>
        )}
      </div>
    )
  }

  export default UsingFetchRep;