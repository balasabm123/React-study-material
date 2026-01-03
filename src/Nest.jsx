import { useEffect, useState } from "react";
import CollegeeTable from "./CollegeeTable";

const Nest = () => {
  const [colleges, setColleges] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/college")
      .then(res => res.json())
      .then(data => setColleges(data));
  }, []);

  return (
    <div>
      <h1>College & Students List</h1>
      {colleges.map(college => (
        <CollegeeTable key={college.id} college={college} />
      ))}
    </div>
  );
};

export default Nest;
