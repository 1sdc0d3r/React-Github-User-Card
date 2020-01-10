import React from "react";

function GithubCard({ user }) {
  //   console.log(user);

  return (
    <div className="card">
      <img src={user.avatar_url} alt={user.login} />
      <div className="card-info">
        <h3 className="name">
          {user.name} ({user.login})
        </h3>{" "}
        <p>
          Profile: <a href={user.html_url}>{user.html_url}</a>
        </p>
        {/* <p className="username">{user.login}</p> */}
        {user.location === null ? (
          <p className="location">Location: Not Specified</p>
        ) : (
          <p className="location">Location {user.location} </p>
        )}{" "}
        {user.bio === null ? (
          <p>Bio: {user.name} has a boring life...</p>
        ) : (
          <p>Bio: {user.bio}</p>
        )}
        {user.followers === 0 ? (
          <p>Followers: No Friends :_(</p>
        ) : (
          <p>Followers: {user.followers}</p>
        )}
        {user.following === 0 ? (
          <p>following: Lone Wolf</p>
        ) : (
          <p>following: {user.following}</p>
        )}
        {user.public_repos === 0 ? (
          <p>Repositories: None Public</p>
        ) : (
          <p>Repositories: {user.public_repos}</p>
        )}
      </div>
    </div>
  );
}

export default GithubCard;
