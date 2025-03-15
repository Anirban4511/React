import React from "react";

const User = ({ user }) => {
  const {
    avatar_url,
    followers,
    following,
    public_repos,
    url,
    name,
    login,
    html_url,
    created_at,
  } = user;
  const createdDate = new Date(created_at);

  return (
    <div className="flex flex-col justify-center items-center">
      <div className="flex flex-col justify-start">
        <img className="max-h-full rounded-full" src={avatar_url} alt="User" />
      
      <div className="flex flex-col ">
        <a href={`https://github.com/${login}`}></a>
        <div className="flex gap-2">
          <p className="font-bold">Username: </p>
          {name || login}
        </div>
        <div className="flex gap-2">
          <p className="font-bold">User joined :</p>
          <p>{`${createdDate.getDate()} ${createdDate.toLocaleString("en-us", {
            month: "short",
          })} ${createdDate.getFullYear()}`}</p>
        </div>
      </div>
      <div>
        <div className="flex gap-2">
          <p className="font-bold">Public Repos :</p>
          <p>{public_repos}</p>
        </div>
        <div className="flex gap-2"> 
          <p className="font-bold">Followers :</p>
          <p>{followers}</p>
        </div>
        <div className="flex gap-2">
          <p className="font-bold">Following :</p>
          <p>{following}</p>
        </div>
      </div>
      </div>
    </div>
  );
};
export default User;
