




const App = () => {
  let marks = 80; 
  return (
    <div>
      <h1 style={{ color: "red" }}>Heading 1</h1>
      <h2>{2 + 2}</h2>
      <h3>{Math.random()}</h3>
      <h3>{new Date().getTime()}</h3>
      <br />
      <input type="text" placeholder="Type something" />

      <button>Submit</button>
      {
        marks >= 80 ? <h1> lon hon hoac bang 80</h1> : <h1>nho hon 80</h1>
      }

    </div>
  );
}

export default App;
