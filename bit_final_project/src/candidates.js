import './App.css';
import './reports';
import React, { useEffect, useState } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Link } from 'react-router-dom';

const UsingFetchCand = () => {
    const [candidates, setCandidates] = useState([])
    const [searchInput, setSearchInput] = useState("");

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

    const handleChange = (e) => {
        e.preventDefault();
        setSearchInput(e.target.value);
    };

    if (searchInput.length > 0) {
        candidates.filter((candidate) => {
            return candidate.name.match(searchInput);
        });
    }


    return (
        <div>
            <div id='search'>
                <span>
                    Candidates
                </span>
                <input
                    type="text"
                    placeholder="Search here"
                    onChange={handleChange}
                    value={searchInput}
                />
            </div>
            {candidates.map((candidate) => {

                <div>
                    
                        <p>{candidate.name}</p>
                        <p>{candidate.email}</p>
                    
                </div>

            })}
            <hr></hr>
            <div id="cards">
                {candidates.length > 0 && (
                    <div>
                        {candidates.map(candidate => (

                            <div className="col-lg-3 col-md-4 col-sm-6">
                                <div className="card">
                                    <div className="round-img">
                                        <Link to={`/reports/${candidate.id}`}>
                                            <img // on click on picture for getting id and sending via props.match... to component CandidateReport
                                                className="card-img-top"
                                                src={candidate.avatar}
                                                alt="Card cap"
                                                width={200}
                                            />
                                        </Link>
                                    </div>
                                    <div className="card-body">
                                        <h5 className="card-title">{candidate.name}</h5>
                                        <p className="card-text">{candidate.email}</p>
                                    </div>
                                </div>
                            </div>
                            // <Card key={candidate.id} border="secondary" style={{ width: '18rem' }}>
                            //     <Card.Img variant="top" src={candidate.avatar} width={200}/>
                            //     <Card.Body>
                            //         <Card.Title>{candidate.name}</Card.Title>
                            //         <Card.Text>
                            //         {candidate.email.toLowerCase()}
                            //         </Card.Text>
                            //     </Card.Body>
                            // </Card>


                        ))}
                    </div>
                )}
            </div>
        </div>
    )
}

export default UsingFetchCand;