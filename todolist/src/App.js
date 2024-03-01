import { useState } from "react";
import { RiCloseCircleLine } from "react-icons/ri";

const ToDoList = () => {
  const [addItems, setAddItems] = useState("");
  const [items, setItems] = useState([]);

  const handleItems = () => {
    if (addItems.trim() !== "") {
      setItems([...items, addItems]);
      setAddItems("");
    }
    //console.log(items);
    else {
      alert("Enter the task");
    }
  };

  const handleDelete = (index) => {
    const updated = items.filter((item, i) => i !== index);
    setItems(updated);
  };

  return (
    <div className="p-4 text-center bg-slate-200">
      <div>
        <h1 className="text-5xl p-8">TO DO LIST</h1>
        <input
          className="border border-gray-300 p-2 rounded mr-2"
          type="text"
          placeholder="Enter the task"
          value={addItems}
          onChange={(e) => {
            setAddItems(e.target.value);
          }}
        />
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={handleItems}
        >
          Add
        </button>
      </div>
      <ul className="mt-4">
        {items.map(function (task, index) {
          return (
            <li
              key={index}
              className=" items-center justify-between flex-initial border-b py-2"
            >
              <span className="mr-2">👉</span>
              <span className=" ">{task}</span>
              <button
                className="bg-emerald-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded ml-4"
                onClick={() => handleDelete(index)}
              >
                <RiCloseCircleLine />
              </button>

              {/* <button className=" hover:bg-red-700 text-white font-bold py-1 px-2 rounded ml-4">
                ✅
              </button> */}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ToDoList;
