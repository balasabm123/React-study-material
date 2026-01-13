import { useState, useTransition } from "react";
import { Button } from "react-bootstrap";

const UsaformStatus = () => {
  /* 
// old approach transition
const [pending, setPending] = useState(false); 
  const handleButton = async () => {
    setPending(true);
    await new Promise((res) => setTimeout(res, 5000));
    setPending(false);
  }; 
  return (
    <div>
      <h4>UsformStatus</h4>
      <Button disabled={pending} onClick={handleButton}>
        Click
      </Button>
    </div>
  );*/

  //   New approach transition

  const [pending, startTransition] = useTransition();
  const imag_p = "./Loading_icon.gif";
  const handleButton = () => {
    startTransition(async () => {
      await new Promise((res) => setTimeout(res, 5000));
    });
  };

  return (
    <div>
      <h4>Use Transition Hook</h4>
      {pending ? (
        <img src={imag_p} alt="image" width="200" height="150" />
      ) : null}
      <Button disabled={pending} onClick={handleButton}>
        {pending ? "Loading..." : "Click"}{" "}
      </Button>
    </div>
  );
};
export default UsaformStatus;
