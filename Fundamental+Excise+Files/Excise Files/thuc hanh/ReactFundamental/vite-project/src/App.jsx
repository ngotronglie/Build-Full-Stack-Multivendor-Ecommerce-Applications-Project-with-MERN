



const App = () => {
  const status = true;
  return (
    <div>
      {
        status ? <button>true</button>
          :
          <button>false</button>
      }
    </div>
  )

}

export default App;
