




const App = () => {
  let marks = 81; 
  return (
    <div>
     {(
      () => {
        if (marks >= 80 && marks <= 100) {
          return <h1>A+</h1>;
        }
        else if (marks >= 60 && marks <= 79) {
          return <h1>A</h1>;
        }
        else if (marks >= 40 && marks <= 59) {
          return <h1>B</h1>;
        }
        else {
          return <h1>F</h1>;
        }
      }
     )()}

    </div>
  );
}

export default App;
