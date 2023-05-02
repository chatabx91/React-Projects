import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import { useState, useEffect } from "react";
// import Search from "./components/search/Search"
// import Card from "./components/card/Card";
// import Pagination from "./components/pagination/Pagination";
// import Filter from "./components/filter/Filter";
// import Navbar from "./components/navbar/Navbar";
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <h1 className="text-center mb-3">Characters</h1>
      <div className="container">
        <div className="row">
          filter component will be place here
          <div className="col-lg-8 col-12">
            <div className="row">
              card component will be placed here
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
