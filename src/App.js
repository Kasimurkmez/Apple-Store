import React, { useState } from "react";
import "./App.css";
import Data from "./Data.json";

function App() {
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (e) => {
    e.preventDefault();
    setSearchTerm(e.target.value);
  };
  return (
    <div className="container">
      <h1>Apple Store</h1>
      <div className="inputContainer">
        <input
          className="search"
          type="text"
          placeholder="Search for Macbook, iPhone, iPad, Watch, AirPods, and more."
          onChange={handleChange}
        />
      </div>
      <div className="dataContainer">
        {Data.filter((apple) => {
          if (searchTerm === "") {
            return apple;
          } else if (
            apple.title
              .toLocaleLowerCase()
              .includes(searchTerm.toLocaleLowerCase())
          ) {
            return apple;
          }
          return false;
        }).map((apple) => {
          return (
            <div className="data" key={apple.id}>
              <img src={apple.image} alt="" />
              <h3>{apple.title}</h3>
              <p>${apple.Price}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
