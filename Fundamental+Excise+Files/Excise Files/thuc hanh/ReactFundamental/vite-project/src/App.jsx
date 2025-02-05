
import Hero from './component/Hero';




const App = () => {

  const itemObj = {
    name: "Ngô Trọng Liêm",
    age: 21,
    city: "Hồ Chí Minh"
  };


  return (
    <div>
      <h1>This is from App</h1>
      <Hero item={itemObj} />
    </div>
  )
}


export default App;
