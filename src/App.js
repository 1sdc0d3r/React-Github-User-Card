import React, { Component } from "react";
import "./App.css";
import axios from "axios";
import GithubCard from "./components/GithubCard";
import Search from "./components/Search";
import githubLogo from "./assets/githublogo.png";
import lambdaLogo from "./assets/lambdalogo.png";

class App extends Component {
  constructor() {
    super();
    this.state = {
      users: [],
      search: [],
      input: "",
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

  onChangeHandler = evt => {
    //todo fix state issue once get preventDefault() working
    this.state.input = evt.target.value.toLowerCase().trim();

    this.state.input
      ? this.setState({
          searching: true,
          search: this.state.users.filter(user => {
            console.log(user);
            return (
              user.name.toLowerCase().includes(this.state.input) ||
              user.login.toLowerCase().includes(this.state.input)
            );
          })
        })
      : this.setState({
          searching: false
        });
  };

  onSubmitHandler = evt => {
    evt.preventDefault();
    console.log("submit");

    this.state.input !== ""
      ? this.setState({
          searching: true,
          search: this.state.users.map(user => {
            console.log(user);
            return user.toLowerCase() === this.state.input;
          })
        })
      : console.log("empty");
  };

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
        <Search
          onSearch={this.onSubmitHandler}
          onChange={this.onChangeHandler}
        />
        <div className="user-cards">
          {this.state.searching === false
            ? this.state.users.map(e => <GithubCard key={e.id} user={e} />)
            : this.state.search.map(e => <GithubCard key={e.id} user={e} />)}
        </div>
      </div>
    );
  }
}

export default App;
