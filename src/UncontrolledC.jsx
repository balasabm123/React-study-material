import { Button } from "react-bootstrap";

// UNCONTROLLED COMPONENTS.......

const UncontrolledC = () => {
  const handleForm = (e) => {
    e.preventDefault();
    const uname = document.querySelector("#name").value;
    const upass = document.querySelector("#password").value;
    alert(uname);
    alert(upass);
  };
  return (
    <div>
      <form action="" method="post" onSubmit={handleForm}>
        <input type="text" id="name" placeholder="Enter name" />
        <br></br>
        <br></br>
        <input type="password" id="password" placeholder="Enter password" />
        <br></br>
        <br></br>
        <Button type="submit" variant="success">
          Submit
        </Button>
      </form>
    </div>
  );
};
export default UncontrolledC;
