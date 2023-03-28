
import './App.css';
import React, { useEffect, useState } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './layout';
import UsingFetchRep from './reports';
import UsingFetchCand from './candidates';
import UsingFetchComp from './companies';

function App() {

  return (
  <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="reports" element={<UsingFetchRep />} />
          <Route path="candidates" element={<UsingFetchCand />} />
          <Route path="companies" element={<UsingFetchComp />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
