




const App = () => {
  const status = false;
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

export default App;
