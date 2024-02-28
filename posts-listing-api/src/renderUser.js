function RenderUser({ user }) {
  return (
    <div
      style={{
        border: "1px solid black",
      }}
    >
      <h1>Title is {user.title}</h1>
      <h2>User Id: {user.id}</h2>
    </div>
  );
}
export default RenderUser;
