import React, { Fragment, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { Repos } from "../components/Repos";
import { GithubContext } from "../context/github/githubContext";

export const Profile = ({ match }) => {
  const { getUser, getRepos, loading, user, repos } = useContext(GithubContext);
  const urlName = match.params.name;

  useEffect(() => {
    getUser(urlName);
    getRepos(urlName);
    // eslint-disable-next-line
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  const {
    name,
    company,
    avatar_url,
    location,
    bio,
    blog,
    login,
    html_url,
    following,
    followers,
    public_repos,
    public_gists,
  } = user;

  return (
    <Fragment>
      <Link to="/" className="btn btn-link">
        Back to Home page
      </Link>

      <div className="card mb-4">
        <div className="card-body">
          <div className="row">
            <div className="col-sm-5 text-center">
              <img src={avatar_url} alt={name} style={{ width: "300px" }} />
              <h1>{name}</h1>
              {location && <p>Location: {location}</p>}
            </div>
            <div className="col">
              {bio && (
                <Fragment>
                  <h3>BIO:</h3>
                  <p>{bio}</p>
                </Fragment>
              )}
              <a
                href={html_url}
                target="blank"
                className="btn btn-dark mt-4 d-flex align-items-center justify-content-center"
              >
                Open profile
              </a>
              <ul>
                {login && (
                  <li className="m-4">
                    <strong>Username: </strong>
                    {login}
                  </li>
                )}
                {company && (
                  <li>
                    <strong>Company: </strong>
                    {company}
                  </li>
                )}
                {blog && (
                  <li>
                    <strong>Website: </strong>
                    {blog}
                  </li>
                )}
              </ul>
              <div className="badge badge-primary m-1">
                Followers: {followers}
              </div>
              <div className="badge badge-success m-1">
                Following: {following}
              </div>
              <div className="badge badge-info m-1">Repos: {public_repos}</div>
              <div className="badge badge-dark m-1">Gists: {public_gists}</div>
            </div>
          </div>
        </div>
      </div>
      <Repos repos={repos} />
    </Fragment>
  );
};
