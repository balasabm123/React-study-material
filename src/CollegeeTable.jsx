const CollegeeTable = ({ college }) => {
  return (
    <div style={{ marginBottom: "30px" }}>
      <h2>{college.name}</h2>
      <p>
        City: {college.city} | Mobile: {college.mobile}
      </p>

      <table border="1" width="100%" cellPadding="8">
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {college.students.map(student => (
            <tr key={student.id}>
              <td>{student.name}</td>
              <td>{student.age}</td>
              <td>{student.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CollegeeTable;
