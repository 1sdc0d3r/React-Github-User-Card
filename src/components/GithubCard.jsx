import React from "react";

function GithubCard({ user }) {
  return (
    <div className="card">
      <img src={user.avatar_url} alt={user.login} />
      <div className="card-info">
        <h3 className="name">
          {user.name} ({user.login})
        </h3>{" "}
        <p className="profile">
          Profile: <a href={user.html_url}>{user.html_url}</a>
        </p>
        {/* <p className="username">{user.login}</p> */}
        {user.location === null ? (
          <p className="location">Location: Not Specified</p>
        ) : (
          <p className="location">Location {user.location} </p>
        )}{" "}
        {user.bio === null ? (
          <p className="bio">Bio: {user.name} has a boring life...</p>
        ) : (
          <p className="bio">Bio: {user.bio}</p>
        )}
        {user.followers === 0 ? (
          <p className="followers">Followers: No Friends :_(</p>
        ) : (
          <p className="followers">Followers: {user.followers}</p>
        )}
        {user.following === 0 ? (
          <p className="following">Following: Lone Wolf</p>
        ) : (
          <p className="following">Following: {user.following}</p>
        )}
        {user.public_repos === 0 ? (
          <p className="repos">Repositories: None Public</p>
        ) : (
          <p className="repos">Repositories: {user.public_repos}</p>
        )}
      </div>
    </div>
  );
}

export default GithubCard;
