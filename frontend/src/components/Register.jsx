import React, { useState } from "react";

function Register() {

  // store form data
  const [formData, setFormData] = useState({
    name: "",
    college: ""
  });

  // handle input change
  const handleChange = (e) => {
    setFormData({
      ...formData, // keep old values
      [e.target.name]: e.target.value // update new value
    });
  };

  // handle submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:8080/api/students", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      console.log(data);
      alert("Saved to database ✅");

    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h2>Student Registration</h2>

      <form onSubmit={handleSubmit}>

        <input
          type="text"
          name="name"
          placeholder="Enter Name"
          onChange={handleChange}
        />
        <br /><br />

        <input
          type="text"
          name="college"
          placeholder="Enter College"
          onChange={handleChange}
        />
        <br /><br />

        <button type="submit">Register</button>

      </form>
    </div>
  );
}

export default Register;