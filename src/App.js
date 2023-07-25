import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import SearchBar from "./components/SearchBar";
import UserDisplay from "./components/UserDisplay";
import RepoList from "./components/RepoList";
import { Button } from "react-bootstrap";
import "./App.css";


function App() {
  const [username, setUsername] = useState("");
  const [user, setUser] = useState(null);
  const [repos, setRepos] = useState([]);
  const [error, setError] = useState(null);

  const searchUserAndRepos = () => {
    if (username) {
      fetch(`https://api.github.com/users/${username}`)
        .then((response) => {
          if (!response.ok) {
            throw new Error("User not found");
          }
          return response.json();
        })
        .then((data) => setUser(data))
        .catch((error) => {
          setError(error.message);
          setUser(null);
        });

      fetch(`https://api.github.com/users/${username}/repos`)
        .then((response) => {
          if (!response.ok) {
            throw new Error("Repositories not found");
          }
          return response.json();
        })
        .then((data) => {
          if (Array.isArray(data)) {
            setRepos(data);
          } else {
            setRepos([]);
          }
        })
        .catch((error) => {
          setError(error.message);
          setRepos([]);
        });
    }
  };

  const reset = () => {
    setUsername("");
    setUser(null);
    setRepos([]);
    setError(null);
  };

  return (
    <div className='container text-center mt-5'>
      <h1>Github user Finder</h1>

      <SearchBar
        setUsername={setUsername}
        search={searchUserAndRepos}
      />
      {error && <div className='alert alert-danger'>{error}</div>}
      <UserDisplay user={user} />

      <h4>Users repositories:</h4>
      <RepoList repos={repos} />
      {repos.length > 0 && <Button onClick={reset}>Reset</Button>}
    </div>
  );
}

export default App;
