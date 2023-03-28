import './App.css';
import React, { useEffect, useState } from "react"

const UsingFetchCand = () => {
    const [candidates, setCandidates] = useState([])

    const fetchData = () => {
        fetch("http://localhost:3333/api/candidates")
            .then(response => {
                return response.json()
            })
            .then(data => {
                setCandidates(data)
            })
    }

    useEffect(() => {
        fetchData()
    }, [])

    return (
        <div id="cards">
            {candidates.length > 0 && (
                <div>
                    {candidates.map(candidate => (
                        <div id="kard" key={candidate.id} >
                            <div class="card"  >
                                <img src={candidate.avatar} class="card-img-top" alt="..." width={200}/>
                                <div class="card-body">
                                    <h5 class="card-title">{candidate.name}</h5>
                                    <p class="card-text">{candidate.email.toLowerCase()}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}

export default UsingFetchCand;