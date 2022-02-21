import React from "react";
import "./style.css";

function UserName(props) {
  const {name} = props;
  return <h1 className = {name === "Ivan" ? 'name' : null}>{props.name2}</h1>;
}

function UserProfile(props) {
  return <UserName name2 = {props.data.name1}/>;
}



export default function App() {

  const user = { 
    name1:      'Ivan',
    status:     'React Developer',
    online:     true,
    avatar:     '/logo.svg',
    interests:  ['JavaScript','React','Frontend']
  };

  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
      <UserProfile data = {user}/>
    </div>
  );
}
