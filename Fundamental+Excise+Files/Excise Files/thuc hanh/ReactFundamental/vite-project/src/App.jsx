



const App = () => {
  const status = true;
  return (
    <div>
      <h1>This is from App</h1>
      {status ?? <button>logout</button>}
    </div>
  )
}

export default App;
