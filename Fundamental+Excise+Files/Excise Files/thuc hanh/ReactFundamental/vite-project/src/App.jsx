
  const loginStatusBtn = (status) =>{
    if (status) {
      return (
        <div>
          <h1>login status</h1>
          <button>login</button>
        </div>
      );
    } else {  
      return (
        <div>
          <h1>logout status</h1>
          <button>logout</button>
        </div>
      );
    }
  }



const App = () => {
  return (
    <div>
      <h1>App Component</h1>
      {loginStatusBtn(true)}
      {loginStatusBtn(false)}
    </div>
  )
}

export default App;
