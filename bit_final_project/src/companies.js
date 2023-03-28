import './App.css';
import React, { useEffect, useState } from "react"

const UsingFetchComp = () => {
    const [companies, setCompanies] = useState([])
  
    const fetchData = () => {
      fetch("http://localhost:3333/api/companies")
        .then(response => {
          return response.json()
        })
        .then(data => {
          setCompanies(data)
        })
    }
  
    useEffect(() => {
      fetchData()
    }, [])
  
    return (
      <div>
        {companies.length > 0 && (
          <ul>
            {companies.map(company => (
              <li key={company.id}>
                {company.name}
                </li>
            ))}
          </ul>
        )}
      </div>
    )
  }

  export default UsingFetchComp;