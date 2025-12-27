import Header from "./header" 
import User, { Profile, UserKey } from "./UserComponent";
// 02:00min
function App(){
  let x=10;
  let y=10;

  function operation(a,b,op){
    if(op=="+"){
      return a+b;
    }else if(op=="-")
      {
      return a-b;
    }else{
      return a*b;
    } 
  }

  const obj={
    name:"Mohan Kumar",
    email:"mohan332@gmail.com"
  }
  let imag_p = "./4960099.jpg";

  function fruite(){
    alert('welcome')
  }

  function bannana(name){
    alert(name);
  }
  return (
    <div>
      <Header/>
      <h1>Hello Chandigrh.......</h1>
      <Fruite></Fruite>
      <Colour></Colour> 
      <User></User> 
      <Profile></Profile>
      <h1>My user key is</h1>
      <h2>{UserKey}</h2>
      <button onClick={()=>alert("Hello alert ....")}>Click</button>
      <h3>{x*y}</h3>
      <h3>{operation(20,10,"-")}</h3>
      <h3>{obj.name}</h3>
      <h3>{obj.email}</h3>
      <h3>
       <img
          src={imag_p}
          alt="image"
          width="200"
          height="150"
        />

      </h3>
      <button onClick={fruite}>Click me here</button>
      <button onClick={()=>bannana('bannana')}>Click me</button>
    </div>
  )
}

function Fruite(){
  return(
    <div>
      <h1>Fruite works..</h1>
    </div>
  )
}

function Colour(){
  return(
    <div>
      <h1>Red Colur..</h1>
    </div>
  )
}
export default App
// Tutorial link: https://youtu.be/LuNPCSNr-nE