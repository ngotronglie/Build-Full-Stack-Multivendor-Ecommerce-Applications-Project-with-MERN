




const App = () => {
  let city = ['Dhaka', 'Chittagong', 'Khulna', 'Rajshahi', 'Sylhet', 'Barishal', 'Rangpur', 'Mymensingh'];
  return (
    <div>
     <ul>
      {city.map((item,i) => {
        return <li key={i.toString()}>{item}</li>
      })}
     </ul>
    </div>
  );
}

export default App;
