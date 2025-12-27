function Profs({ userObject}) {

    return (
        <div>
            <h2>Name : {userObject.name}</h2>
            <h2>Email : {userObject.email}</h2>
            <h2>Age : {userObject.age}</h2>
        </div>
    )
}

export default Profs