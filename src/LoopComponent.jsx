// function LoopComponent({data}) {


//     // console.log(userData);
//     return (
//         <div key={user.id}> 
//                 {data.map((user)=>( 
//                     <div>
//                     <h4>Name: {user.name}</h4>
//                     <h4>Name: {user.age}</h4>
//                     <h4>Name: {user.email}</h4>
//                     </div>
//                 ))} 

//         </div>
//     );
// }
// export default LoopComponent;

function LoopComponent({ data }) {
    return (
        <div style={{ padding: "20px" }}>
            <h2>Loop Component</h2>
            {data.map((user) => (
                <div
                    key={user.id}
                    style={{
                        border: "1px solid #ccc",
                        borderRadius: "8px",
                        padding: "10px",
                        marginBottom: "10px",
                        backgroundColor: "#f9f9f9",
                    }}
                >
                    <h4 style={{ margin: "5px 0", color: "#333" }}>
                        Name: {user.name}
                    </h4>
                    <h4 style={{ margin: "5px 0", color: "#555" }}>
                        Age: {user.age}
                    </h4>
                    <h4 style={{ margin: "5px 0", color: "#555" }}>
                        Email: {user.email}
                    </h4>
                </div>
            ))}
        </div>
    );
}

export default LoopComponent;
