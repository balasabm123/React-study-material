import { useRef } from "react";
import { Button } from "react-bootstrap";

const Userefer = () => {
  const inputRef = useRef(null);
  const inputHandler = () => {
    console.log(inputRef);
    inputRef.current.focus();
    inputRef.current.style.color="red";
  };
  return (
    <div>
      <h2>UseRef</h2>
      <input ref={inputRef} type="text" placeholder="Enter name" />
      &nbsp; <Button onClick={inputHandler} variant="success">Focus on input field</Button>
    </div>
  );
};
export default Userefer;
