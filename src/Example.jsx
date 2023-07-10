import React, { useState } from "react";

function Example(props) {
  //   return <>{props.children}</>;
  const [data, setMessage] = useState({ message: "", id: 1, age: 23 });

  function handleMessage(e) {
    // console.log(e.target.value);
    setMessage({ ...data, message: e.target.value });
  }
  console.log(data);
  return (
    <>
      <input type="text" value={data.message} onChange={handleMessage} />
      <h1>Message: {data.message}</h1>
      <p>ID: {data.id}</p>
    </>
  );
}

export default Example;
