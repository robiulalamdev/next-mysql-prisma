import { useState } from "react";
import axios from "axios";

const AddUser = () => {
  // components/AddUserForm.js
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post("/api/addUser", { name, email });
      alert("User added successfully");
      // Optionally, reset form fields
      setName("");
      setEmail("");
    } catch (error) {
      console.error(error);
      alert("Error adding user");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button type="submit">Add User</button>
    </form>
  );
};

export default AddUser;
