import React from 'react';
import './App.css';
import axios from 'axios';

function App() {
  return (
    <div className="App">
      <h1>Admin Login</h1>
      <form onSubmit={ (e) => login(e)} className="form-control-lg">
        <div className="form-group center-block">
          <label className="font-weight-bold">User ID</label>
          <input placeholder="Enter UserID" type="email" className="w-25 form-control mx-auto mb-3" id="exampleInputEmail1" aria-describedby="emailHelp"/>
        </div>
          <div className="form-group center-block">
            <label className="font-weight-bold">Password</label>
            <input placeholder="Enter Password" type="password" className="w-25 form-control mx-auto mb-3" id="exampleInputPassword1"/>
        </div>
              <button type="submit" className="btn btn-outline-primary">Submit</button>
        </form>
      </div>
     );
  }
 
  function login(e){
    e.preventDefault();
    let request = {
      userid: document.getElementById('exampleInputEmail1').value, 
      password: document.getElementById('exampleInputPassword1').value 
    }
    axios.post('http://localhost:3000/login', request)
      .then(
        resp => {
          alert(resp.data.message);
        }
      )
      .catch(err => {
        console.log(err);
      })
  }




export default App;
