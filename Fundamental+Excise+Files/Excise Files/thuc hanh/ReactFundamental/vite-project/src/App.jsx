
import { useRef } from "react";

const App = () => {
  let firstName , lastName  = useRef();
  // let firstName = useRef();
  // let lastName = useRef();

  const change = () => {
    // console.log(firstName.current.value);
    // console.log(lastName.current.value);
    let fName = firstName.current.value
    let lName = lastName.current.value
    alert(fName + " " + lName)
  }
  return (
    <div>
      <input ref={firstName} type="text" placeholder="First Name " /> <br />
      <input ref={lastName} type="text" placeholder="Last Name " /> <br />
      <button onClick={change}>click mel</button>
    </div>
  )
}

export default App;