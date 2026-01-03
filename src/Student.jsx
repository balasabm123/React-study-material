const Student = ({stud}) => {
    return (
        <div>
            <h4>Inside student component</h4>
            <ul>
                <li>Name : {stud.name}</li>
                <li>Age : {stud.age}</li>
                <li>Email : {stud.email}</li>
            </ul>
        </div>
    )
}
export default Student;