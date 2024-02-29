export const student = [
  {
    name: "anurag",
    course: "MCA",
    age: "23",
  },
  {
    name: "siddhant",
    course: "MCA",
    age: "22",
  },
  {
    name: "nikhil",
    course: "MCA",
    age: "23",
  },
  {
    name: "sanjeeb",
    course: "MCA",
    age: "21",
  },
];

const Student = ({ entry }) => {
  return (
    <div
      style={{
        border: "1px solid black",
      }}
    >
      <h1>{entry.name}</h1>
      <h2>{entry.age}</h2>
    </div>
  );
};

export default Student;
