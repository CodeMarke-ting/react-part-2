import React, { useState } from "react";
import Card from "./Card";
import Example from "./Example";
import Form from "./Form";

function App() {
  // hook
  const [count, setCount] = useState(0);

  const colors = ["red", "green", "magenta"];

  const list = colors.map((color, index) => <li key={index}>{color}</li>);

  console.log(list);

  const user = {
    name: "Abraham",
    lastName: "Mammadov",
    age: 27,
    occupation: "back end developer",
    salary: 350,
  };
  // props
  //   console.log(data);

  function handleIncrement() {
    setCount(count + 1);
  }

  function handleDecerement() {
    setCount(count - 1);
  }

  function incrementByFive() {
    setCount(count + 5);
  }

  return (
    <>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas,
        quos?` 1000
      </p>
      <ul>{list}</ul>
      <Card user={user} theme="light" isSubscribed={false} />
      {/*  */}
      <Example>{/* <h1>Example</h1> */}</Example>
      {/*  */}
      <p>Count: {count}</p>
      <button onClick={handleIncrement}>increment</button>
      <button onClick={incrementByFive}>increment by five</button>

      <button onClick={handleDecerement}>decrement</button>
      <button onClick={() => setCount(0)}>Reset</button>
      <br />
      <br />

      <Form />
    </>
  );
}

export default App;
