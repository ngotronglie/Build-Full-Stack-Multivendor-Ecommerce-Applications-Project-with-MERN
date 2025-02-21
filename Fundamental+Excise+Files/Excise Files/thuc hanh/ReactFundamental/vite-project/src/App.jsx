// import { useState } from 'react';

const App = () => {

  

  return (
    <div className='container'>
      <form action="">
        <input type="text" placeholder="First name" />
        <input type="text" placeholder="Last name" />
        <select name="" id="">
          <option value="">choose city</option>
          <option value="">ho chi minh</option>
          <option value="">hanoi</option>
          <option value="">da nang</option>
        </select>
        <input type="radio" name="gender" id="" />male
        <input type="radio" name="gender" id="" />female <br />
        <button type="submit">submit</button>
      </form>
    </div>
  )
}

export default App;
