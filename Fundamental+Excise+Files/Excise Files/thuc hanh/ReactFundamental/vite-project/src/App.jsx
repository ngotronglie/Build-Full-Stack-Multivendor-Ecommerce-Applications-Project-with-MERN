
import { useRef } from "react";

const App = () => {

  let myHeadLine = useRef();
  const change = () => {
    myHeadLine.current.classList.remove('text-success');
    myHeadLine.current.classList.add('text-danger');
  }
  return (
    <div>
      <h1 className="text-success" ref={myHeadLine}> this is head line</h1>

      <button onClick={change} className="btn btn-primary">click mel</button>
    </div>
  )
}

export default App;