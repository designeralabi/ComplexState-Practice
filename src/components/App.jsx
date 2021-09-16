import React, { useState } from "react";

function App() {
  const [fullName, SetFullname] = useState({
    fName: "",
    lName: ""
  });

  function handleChange(evt) {
    const newValue = evt.target.value;
    const inputName = evt.target.name;

    SetFullname((prevValue) => {
      if (inputName === "fName") {
        return {
          fName: newValue,
          lName: prevValue.lName
        };
      } else if (inputName === "lName") {
        return {
          fName: prevValue.fName,
          lName: newValue
        };
      }
    });
  }

  function reloadStopper(event) {
    event.preventDefault();
  }

  return (
    <div className="container">
      <h1>
        Hello {fullName.fName} {fullName.lName}
      </h1>
      <form onSubmit={reloadStopper}>
        <input
          name="fName"
          onChange={handleChange}
          //value={fullName.fName}
          placeholder="First Name"
        />
        <input
          name="lName"
          onChange={handleChange}
          //value={fullName.lName}
          placeholder="Last Name"
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
