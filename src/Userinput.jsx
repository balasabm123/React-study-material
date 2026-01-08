import { useRef } from "react";
import UseriinputC from "./UseriinputC";
import { Button } from "react-bootstrap";

// FORWORD REF IN REACT 18 VERSION onwords

const Userinput = () => {
  const inputRef = useRef();
  const updatInput = () => {
    inputRef.current.focus();
    inputRef.current.style.color = "red";
  };

  return (
    <div>
      <UseriinputC ref={inputRef}></UseriinputC>
      <Button onClick={updatInput}>Update</Button>
    </div>
  );
};
export default Userinput;
