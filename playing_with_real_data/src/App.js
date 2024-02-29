import Countries from "./RenderData";
import { data } from "./data";

const RealData = () => {
  return (
    <div>
      {data.map(function (item, id) {
        return <Countries user={item} key={id} />;
      })}
    </div>
  );
};

export default RealData;
