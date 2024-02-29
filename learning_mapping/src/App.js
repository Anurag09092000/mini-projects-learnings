import Student from "./Student";
import { student } from "./Student";

const mapping = () => {
  return (
    <div>
      {student.map(function (data, index) {
        //data: This represents the current element being processed in the array, which in this case is an object containing information about a student (e.g., name, course, age).
        // When you use <Student entry={data} key={index} /> inside the map() method, you are creating a new Student component for each element in the student array. The entry prop is set to the current data object, which represents a single student in the array.
        // For example, if data is { name: "anurag", course: "MCA", age: "23" }, then entry in the Student component will be { name: "anurag", course: "MCA", age: "23" }. Inside the Student component, you can access the student's name using entry.name, course using entry.course, and age using entry.age.
        if (parseInt(data.age) === 23)
          return <Student entry={data} key={index} />;
        else {
          return null;
        }
      })}
    </div>
  );
};

export default mapping;
