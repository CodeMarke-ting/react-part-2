import React, { useState } from "react";

function Form() {
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    age: 0,
  });

  //   console.log(user);

  function handleSubmit(e) {
    console.log(user);
    e.preventDefault();
  }

  function handleForm(e) {
    // (e) => setUser({ ...user, firstName: e.target.value }
    const name = e.target.name;
    const value = e.target.value;
    setUser({ ...user, [name]: value });
    // 1 1 2000
    // new Date()

    console.log(new Date().getFullYear());
  }

  return (
    <>
      <form>
        <h1>Sign up</h1>
        <input
          type="text"
          placeholder="enter firstName"
          name="firstName"
          value={user.firstName}
          onChange={handleForm}
        />
        <br></br>
        <input
          type="text"
          placeholder="enter lastName"
          value={user.lastName}
          name="lastName"
          onChange={handleForm}
        />
        <br></br>
        <input
          type="number"
          placeholder="age"
          min={0}
          max={120}
          value={user.age}
          name="age"
          onChange={handleForm}
        />
        <br></br>
        <button onClick={handleSubmit}>sign up</button>
      </form>
    </>
  );
}

export default Form;
