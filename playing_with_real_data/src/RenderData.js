import { data } from "./data";

function Countries({ user }) {
  return (
    <div
      style={{
        border: "10px solid black",
        textAlign: "center",
      }}
    >
      <h1>{user.name}</h1>
      <h2>{user.city}</h2>
      <h3>{user.age}</h3>
    </div>
  );
}

export default Countries;
