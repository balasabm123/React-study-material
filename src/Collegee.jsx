import Student from "./Student";

const Collegee = ({ colleage }) => {
    return (
        <div style={{
            backgroundColor: "#3882c7ff", margin: "20px", padding: "20px", borderBottom: "2px solid #000", borderRadius: "10px"
        }}>
            <h2>{colleage.name}</h2>
            <ul>
                <li>
                    <h2>City: {colleage.city}</h2>
                </li>
                <li>
                    <h2>Mobile: {colleage.mobile}</h2>
                </li>
                <li>
                    <h2>Students</h2>
                    {
                        colleage.student.map((std, index) =>
                            <Student key={index} stud={std}></Student>
                        )
                    }

                </li>
            </ul>
        </div>
    )
}
export default Collegee;