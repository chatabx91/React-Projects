import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import './App.css';
import { useState, useEffect } from "react";
import Search from "./components/search/Search"
import Card from "./components/card/Card";
// import Pagination from "./components/pagination/Pagination";
// import Filter from "./components/filter/Filter";
// import Navbar from "./components/navbar/Navbar";

// Parent component
function App() {
  // State variables for App component
  const [fetchData, setFetchData] = useState([]);
  // State variables for Search component
  const [pageNumber, updatePageNumber] = useState(1);
  const [search, updateSearch] = useState("");
  
  // Destructure keys from fetchData
  const {info, results} = fetchData;

  // API endpoint
  let route = `${pageNumber}&name=${search}`;
  const endpoint = `https://rickandmortyapi.com/api/character/?page=${route}`;
  // Execute function on render once
  useEffect(()=> { 
    // API fetch, update state with converted JSON data
    fetch(endpoint)
      .then(response => response.json())
      .then(data => setFetchData(data))
      .catch(err => console.log(err.message)) 
  },[endpoint]);

  return (
    <div className="App">
      <h1 className="text-center mb-3">Characters</h1>
      {/* Search Bar */}
      <Search updateSearch= {updateSearch} updatePageNumber= {updatePageNumber}/>
      <div className="container">
        <div className="row">
          filter component will be place here
          <div className="col-lg-8 col-12">
            <div className="row">
              {/* Character Card */}
              <Card results ={results} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
