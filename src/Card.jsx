import React from "react";

function Card(props) {
  //   console.log(props);
  console.log(props);

  if (props.theme) {
    // props.user.name = "John";
    // props.isSubscribed = true;
  }

  console.log(props.isSubscribed);

  return (
    <div>
      <h1>Name: {props.user.name}</h1>
      {props.user.lastName && <h2>LastName: {props.user.lastName}</h2>}
      <p>Age: {props.user.age}</p>
      <p>Occupation: {props.user.occupation}</p>
      <p>Salary: {props.user.salary}</p>
    </div>
  );
}

export default Card;
