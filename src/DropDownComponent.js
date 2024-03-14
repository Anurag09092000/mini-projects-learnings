import { useState } from "react";
import { Districts } from "./district";

const DropDownComponent = () => {
  const [selectState, setSelectState] = useState("");
  const [selectedDistrict, setSelectedDistrict] = useState("");
  const districtsOfStates = Districts;

  const handleChange = (e) => {
    setSelectState(e.target.value);
  };

  const handleDistrictChange = (e) => {
    setSelectedDistrict(e.target.value);
  };
  return (
    <div>
      <label>Select a State</label>
      <select value={selectState} onChange={handleChange}>
        {Object.keys(districtsOfStates).map((state, index) => (
          <option key={index}>{state}</option>
        ))}
      </select>
      <div>
        <label>Select District</label>
        <select value={selectedDistrict} onChange={handleDistrictChange}>
          <option value="">Select an Option</option>
          {selectState &&
            districtsOfStates[selectState].map((district, index) => {
              return <option key={index}>{district}</option>;
            })}
        </select>
      </div>
    </div>
  );
};

export default DropDownComponent;
