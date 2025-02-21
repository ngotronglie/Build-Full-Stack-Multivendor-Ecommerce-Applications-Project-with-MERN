import { useState } from 'react';

const App = () => {
  let [formObj, setFormObj] = useState({ fName: '', lName: '', city: '', gender: '' });

  const inputOnChange = (property, value) => {
    setFormObj(prevObj => ({
      ...prevObj,
      [property]: value
    }));
  };

  const FormSubmit = (e) => {
    e.preventDefault();
    console.log(formObj);
  };

  return (
    <div className='container'>
      <form action="" onSubmit={FormSubmit}>
        <h1>Form</h1>
        <input onChange={(e) => inputOnChange('fName', e.target.value)} value={formObj.fName} type="text" placeholder="First name" />
        <input onChange={(e) => inputOnChange('lName', e.target.value)} value={formObj.lName} type="text" placeholder="Last name" />

        <select onChange={(e) => inputOnChange('city', e.target.value)} value={formObj.city} name="city">
          <option value="">Choose city</option>
          <option value="ho chi minh">Ho Chi Minh</option>
          <option value="hanoi">Hanoi</option>
          <option value="da nang">Da Nang</option>
        </select>

        <input onChange={(e) => inputOnChange('gender', e.target.value)} checked={formObj.gender === 'male'} type="radio" name="gender" value="male" />Male
        <input onChange={(e) => inputOnChange('gender', e.target.value)} checked={formObj.gender === 'female'} type="radio" name="gender" value="female" />Female <br />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default App;
