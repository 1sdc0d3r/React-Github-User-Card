import React, { Component } from "react";
import "./App.css";
import axios from "axios";
import GithubCard from "./components/GithubCard";
import githubLogo from "./assets/githublogo.png";
import lambdaLogo from "./assets/lambdalogo.png";

class App extends Component {
  constructor() {
    super();
    this.state = {
      users: [],
      search: [],
      searching: false
    };
  }

  componentDidMount() {
    axios
      .get("https://api.github.com/users/1sdc0d3r")
      .then(res =>
        this.setState({
          users: [res.data]
        })
      )
      .then(
        axios
          .get("https://api.github.com/users/1sdc0d3r/followers")
          .then(res =>
            res.data.forEach(e => {
              axios
                .get(`https://api.github.com/users/${e.login}`)
                .then(res => {
                  this.setState({
                    users: [...this.state.users, res.data]
                  });
                })
                .catch(err => console.log(err));
            })
          )
          .catch(err => console.log(err))
      )
      .catch(err => console.log(err));
  }

  render() {
    // console.log("state", this.state);
    return (
      <div className="container">
        <div className="logos">
          {" "}
          <img className="logo-lambda" src={lambdaLogo} alt="Lambda Logo" />
          <p>❤️'s</p>
          <img className="logo-github" src={githubLogo} alt="Github Logo" />
        </div>
        <div className="user-cards">
          {this.state.users.map(e => (
            <GithubCard key={e.id} user={e} />
          ))}
        </div>
      </div>
    );
  }
}

export default App;
