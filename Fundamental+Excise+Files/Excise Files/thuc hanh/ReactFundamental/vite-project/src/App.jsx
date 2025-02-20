import { useState } from 'react';

const App = () => {

  const [list, setList] = useState([]);
  const [item, setItem] = useState('');
  const addToList = () => {
    list.push(item);
    setList([...list]);
  }

  const RemoveItem = (index) => {
    if (window.confirm('Are you sure you want to delete this item?'))  // Ask for confirmation before deleting item.
    {
      list.splice(index, 1);
      setList([...list]);
    }
  }

  return (
    <div>
      <p>item: {item.length}</p>
      <p>list: {list.length}</p>
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>Item</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {list.length !== 0 ? (
            list.map((item, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td> {item}</td>
                <td><button className='btn btn-danger' onClick={() => { RemoveItem(index) }}>delete</button></td>
              </tr>
            ))
          )
            :
            (<tr><td>no data</td></tr>)
          }
        </tbody>
      </table>
      <input type="text" placeholder='item' onChange={(e) => setItem(e.target.value)} />
      <button onClick={addToList} className='btn btn-primary'>Add</button>
    </div>
  )
}

export default App;
