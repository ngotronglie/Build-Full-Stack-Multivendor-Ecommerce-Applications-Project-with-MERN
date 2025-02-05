



const App = () => {
  const status = true;
  return (
    <div>
      <h1>This is from App</h1>
      {
        (() => {
          if (status == true) {
            return <h2>True</h2>
          } else {
            return <h2>False</h2>
          }
        })()
      }
    </div>
  )
}

export default App;
