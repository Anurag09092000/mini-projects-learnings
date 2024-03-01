import { useState } from "react";
import axios from "axios";
const FetchApi = () => {
  const [storedData, setStoredData] = useState([]);
  const [isLoding, setIsLoading] = useState(false);

  // async function getapi() {
  //   setIsLoading(true);
  //   const api = await fetch("https://jsonplaceholder.typicode.com/posts");
  //   const data = await api.json();
  //   setStoredData(data);
  //   setIsLoading(false);

  //   //console.log(data);
  // }

  async function getapi() {
    try {
      setIsLoading(true);
      const api = await axios.get("https://jsonplaceholder.typicode.com/posts");
      setStoredData(api.data);
      setIsLoading(false);
      console.log(api.data);
    } catch (error) {
      console.log(error);
    }
  }

  // getapi();
  return (
    <div>
      {isLoding ? (
        <h1>Loading...</h1>
      ) : (
        <div>
          <h1>Api Data</h1>
          <button onClick={getapi}> Click ME</button>
          {/* {storedData.length > 0 ? (
        storedData.map(function (item, index) {
          return (
            <h2>
              {index + 1} 👉 Title : {item.title}
            </h2>
          );
        })
      ) : (
        <h1>There is not data yet..please fetch from button</h1>
      )} */}
          {storedData.length > 0 &&
            storedData.map(function (item, index) {
              return (
                <h2>
                  {index + 1} 👉 Title : {item.title}
                </h2>
              );
            })}
          {storedData.length === 0 && (
            <h1>There is not data yet..please fetch from button</h1>
          )}
        </div>
      )}
    </div>
  );
};

export default FetchApi;
