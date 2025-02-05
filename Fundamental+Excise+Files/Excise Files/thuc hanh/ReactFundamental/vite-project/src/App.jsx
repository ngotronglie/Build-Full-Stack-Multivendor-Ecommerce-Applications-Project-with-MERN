
import Hero from './component/Hero';
import Contact from './component/Contact';


const App = () => {
  const status = false;
  return (
    <div>
      <h1>This is from App</h1>
      {
        (() => {
          if (status == true) {

            return <Hero />

          } else {
            return <Contact />
          }
        })()
      }
    </div>
  )
}

export default App;
