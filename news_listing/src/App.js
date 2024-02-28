import RenderingData from "./RenderingData";
import { newsData } from "./data";

const NewsPosting = () => {
  return (
    <div>
      <ul>
        {newsData.map(function (myNewsItemData) {
          // const props = {
          //   data: myNewsItemData,
          // };
          // {...props}
          // propKey={propValue} ==> data={nData}
          // return <RenderingData {...props} />;
          return <RenderingData data={myNewsItemData} />;
        })}
      </ul>
    </div>
  );
};

export default NewsPosting;
