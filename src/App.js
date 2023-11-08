import "./styles.css";
import CustomInputField from "./CustomInputField";
import { useState } from "react";
import CustomButton from "./CustomButton";

export default function App() {
  const [data, setData] = useState({ name: "", password: "", email: "" });
  const [toggleUser, setToggleUser] = useState(true);

  const handleChange = (e) => {
    let name = e.target.name;
    setData({ ...data, [name]: e.target.value });
  };

  const handleToggle = (e) => {
    setData({ name: "", password: "", email: "" });
    setToggleUser(!toggleUser);
  };

  const handleSubmit = () => {};

  return (
    <div
      className="App"
      style={{ display: "flex", flexDirection: "column", gap: "10px" }}
    >
      <CustomInputField
        inputProps={{
          placeholder: "Name",
          value: data.name,
          name: "name",
          required: true
        }}
        onChange={handleChange}
      />
      <CustomInputField
        inputProps={{
          placeholder: "Password",
          value: data.password,
          name: "password"
        }}
        onChange={handleChange}
      />
      <CustomInputField
        inputProps={{
          placeholder: "Email",
          type: "email",
          value: data.email,
          name: "email"
        }}
        onChange={handleChange}
      />
      <CustomInputField
        inputProps={{ type: "checkbox", onClick: handleToggle }}
      />
      {toggleUser && "User"}
      {!toggleUser && "Manegar"}
      <CustomButton buttonProps={{ type: "submit", onClick: handleSubmit }}>
        Log In
      </CustomButton>
    </div>
  );
}
