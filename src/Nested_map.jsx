import Collegee from "./Collegee";

const Nested = () => {

    let college = [
        {
            'name': "JAIN College of Engineering",
            'city': "Belgaum",
            'mobile': "9590961744",
            'student': [
                {
                    'name': "Sagar patil",
                    'age': "35",
                    'email': "sagar222@gmail.com",
                },
                {
                    'name': "Sushant patil",
                    'age': "35",
                    'email': "sushant333@gmail.com",
                },
                {
                    'name': "Vinod patil",
                    'age': "35",
                    'email': "vinod444@gmail.com",
                }
            ]
        },
        {
            'name': "GIT College of engineering",
            'city': "Belgaum",
            'mobile': "9590961744",
            'student': [
                {
                    'name': "Abhishek patil",
                    'age': "35",
                    'email': "Abhishek222@gmail.com",
                },
                {
                    'name': "prashant patil",
                    'age': "35",
                    'email': "prashant333@gmail.com",
                },
                {
                    'name': "karthik patil",
                    'age': "35",
                    'email': "karthik444@gmail.com",
                }
            ]
        },
        ,
        {
            'name': "KLE College of engineering",
            'city': "Belgaum",
            'mobile': "9590961744",
            'student': [
                {
                    'name': "ABC patil",
                    'age': "35",
                    'email': "abc222@gmail.com",
                },
                {
                    'name': "prashant patil",
                    'age': "35",
                    'email': "prashant333@gmail.com",
                },
                {
                    'name': "karthik patil",
                    'age': "35",
                    'email': "karthik444@gmail.com",
                }
            ]
        }
    ]

    return (
        <div>
            <u><h1>Nested looping with component</h1></u>
            {
                college.map((colege, index) => (
                    <div key={index}>
                        <Collegee colleage={colege}></Collegee>
                    </div>

                ))
            }

        </div>
    )
}
export default Nested;