import React, { useState, useEffect } from 'react'

function Comp() {
  const [first, setFirst] = useState("");
  const [last, setLast] = useState("");
  const [fullName, setFullName] = useState("");
  const [people, setPeople] = useState([]);
  useEffect(() => {

    setFullName(`${first + ' ' + last} `);

  }, [fullName, first, last])

  const handleSubmit = (e) => {
    e.preventDefault();
    const person = { first, last, fullName };
    setPeople((people) => {
      return [...people, person];
    });
    setFirst('');
    setLast('');
    setFullName('');
    console.log(people);
    //alert("Your form is submitted");
  }

  return (
    <article>
      <form className="form" onSubmit={handleSubmit}>
        <div>
          <label htmlFor='firstName'>FirstName : </label>
          <input type='text' id="firstName" name='firstName' value={first} onChange={(e) => setFirst(e.target.value)} ></input>
        </div>
        <div>
          <label htmlFor='lastName'>LastName : </label>
          <input type='text' id="lastName" name='lastName' value={last} onChange={(e) => setLast(e.target.value)}></input>
        </div>
        <div>
          <label htmlFor='fullName'>Full Name : </label>
          <input type='text' id="fullName" name='fullName' value={fullName} disabled={true}></input>
        </div>
        <button disabled={!first || !last}>Submit</button>
        <ul>
          {people.map((person, index) => {
            const { first, last, fullName } = person;
            return <div key={index}>
              <li>
                {first}
                {last}
                {fullName}

              </li>
            </div>
          })
          }
        </ul>
      </form>
    </article >
  )
}

export default Comp