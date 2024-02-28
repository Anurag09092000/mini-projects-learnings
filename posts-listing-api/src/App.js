import { data } from "./data";
import RenderUser from "./renderUser";

const PostListing = () => {
  const user = {
    title: "hello",
    id: 1,
  };

  return (
    <div>
      <h1>List</h1>
      <ul>
        {data.map(function (user) {
          if (user.id % 2 !== 0) {
            return null;
          }
          return <RenderUser user={user} />;
        })}
      </ul>
    </div>
  );
};

export default PostListing;
