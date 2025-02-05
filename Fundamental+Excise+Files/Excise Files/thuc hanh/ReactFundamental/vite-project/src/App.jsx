
import Hero from './component/Hero';




const App = () => {

  const BtnClick = () => {
    alert('btn click')
  }

  return (
    <div>
      <h1>This is from App</h1>
      <Hero item={BtnClick} />
    </div>
  )
}


export default App;
