import React from 'react';
import './style.css';

function UserInterests (props) {
  const { interests } = props;
  return (
    <ul>
      {interests.map((interests) => {
        return <li>{interests.title}</li>;
      })}
    </ul>
  );
}

function UserName(props) {
  const { name2 } = props;
  return (
    <h1 className={name2 === 'Username' ? 'error' : 'name'}>{props.name2}</h1>
  );
}

function UserProfile(props) {
  const { user } = props;
  return <UserName name2={user.name1} />;
}

export default function App() {
  const user = {
    name1: 'Username1',
    status: 'React Developer',
    online: true,
    avatar: 'http://cdn.onlinewebfonts.com/svg/img_176857.png',
    logosize: 100,
    interests: [
      {id: '1', title: 'JavaScript'}, 
      {id: '2', title: 'React'},
      {id: '3', title: 'Frontend'},
    ],
  };
  if (!user.online) {
    return null;
  }
  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
      <UserInterests interests={user.interests}/>
      <UserProfile user={user} />
      <img src={user.avatar} width={user.logosize} />
    </div>
  );
}
