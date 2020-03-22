import React from 'react';
import 'bootstrap/dist/css/bootstrap.css'; 


function App() {
  return (
    <div className="container-fluid d-flex justify-content-center mt-5">
      <div className="row border">
      <h1 className="col-12 text-center">To-Do List:</h1>
      <div className="col-12 px-3">
      <input className="col-6 px-1" placeholder="To-Do"></input>
      <button className="btn btn-primary col-6 px-1">Submit</button>
      </div>
      <ul className="list-unstyled pl-3">
        <li><input type="checkbox"></input></li>
        <li><input type="checkbox"></input></li>
        <li><input type="checkbox"></input></li>
        <li><input type="checkbox"></input></li>
      </ul>
      </div>
    </div>
  );
}

export default App;
