function Loop() {

    const userData = [
        {
            id: "1",
            name: "Balasab",
            age: "35",
            email: "Balasab333@gmail.com",
        },
        {
            id: "2",
            name: "Mohank",
            age: "25",
            email: "mohsnk333@gmail.com",
        },
        {
            id: "3",
            name: "Mohan",
            age: "45",
            email: "mohan333@gmail.com",
        },
        {
            id: "4",
            name: "Mayur",
            age: "35",
            email: "mayur333@gmail.com",
        },
    ];
    // console.log(userData);
    return (
        <div>
            <h1>Loop</h1>
            <table border="1">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Age</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        userData.map((user) => (
                            <tr key={user.id}>
                                <td>{user.id}</td>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.age}</td>
                            </tr>
                        ))
                    }

                </tbody>
            </table>
        </div>
    );
}
export default Loop;