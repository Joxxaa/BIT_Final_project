import './App.css';
import React, { useEffect, useState } from "react"

const UsingFetchRep = (props) => {
    const [reports, setReports] = useState([])
    const [candidateInfo, setCandidateInfo] = useState([]);
    let idCandidate = props.match.params.id;
    
  
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

    useEffect(() => {
        // getting single candidate via id
        fetch(`http://localhost:3333/api/candidates/${idCandidate }`)
        .then((result) => {
          return result.json();
        }).then((item) => {
          setCandidateInfo(item);
        });
       
      }, []);

    
  
    

    let singleReport = reports.filter((report) => {
        if (parseInt(idCandidate) === report.candidateId) {
          return report;
        }
      });

    return (
        <div>
        singleReport={singleReport}
        </div>
    //   <div>
    //     {reports.length > 0 && (
    //       <ul>
    //         {reports.map(report => (
    //           <li key={report.id}>
    //             {report.candidateName},
    //             {report.companyName},
    //             {report.status},
    //             {report.note}
    //             </li>
    //         ))}
    //       </ul>
    //     )}
    //   </div>
    
    )
  }

  export default UsingFetchRep ;