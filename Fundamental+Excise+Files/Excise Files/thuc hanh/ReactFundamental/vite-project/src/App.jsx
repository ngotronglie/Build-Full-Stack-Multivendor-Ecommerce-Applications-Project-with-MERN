
// import Hero from './component/Hero';




const App = () => {

  const PostFormData = (e) => {
    e.preventDefault();
    console.log('Form Submitted')
  }

  return (
    <div>
      <h1>This is from App</h1>
      <form onSubmit={PostFormData}>
        <input type="text" placeholder='Enter name: ' />
        <button type="submit">Submit</button>
      </form>

    </div>
  )
}


export default App;
