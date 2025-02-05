
import Hero from './component/Hero';




const App = () => {

  const BtnClick = () => {
    alert('btn click')
  }

  return (
    <div>
      <h1>This is from App</h1>
      <button onClick={() => {
        alert('click btn in app')
      }}>Click btn in app</button>
      <button onClick={BtnClick}>click btn in app 2</button>
      <Hero item={BtnClick} />
    </div>
  )
}


export default App;
