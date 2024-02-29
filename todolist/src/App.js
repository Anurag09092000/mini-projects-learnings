import { useState } from "react";

const ToDoList = () => {
  const [addItems, setAddItems] = useState("");
  const [items, setItems] = useState([]);

  const handleItems = () => {
    setItems([...items, addItems]);
    setAddItems("");
    console.log(items);
  };

  const handleDelete = (index) => {
    const updated = items.filter((item, i) => i !== index);
    setItems(updated);
  };
  return (
    <div>
      <h1>TO DO LIST</h1>
      <input
        type="text"
        placeholder="Enter the task"
        value={addItems}
        onChange={(e) => {
          setAddItems(e.target.value);
        }}
      />
      <button onClick={handleItems}>Add</button>
      <ul>
        {items.map(function (task, index) {
          return (
            <li key={index}>
              {task}
              <button onClick={() => handleDelete(index)}>Delete</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ToDoList;
