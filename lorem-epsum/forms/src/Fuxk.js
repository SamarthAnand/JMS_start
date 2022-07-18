import React, { useState, useEffect } from 'react'

function Comp() {
    // const [first, setFirst] = useState("");
    // const [last, setLast] = useState("");
    // const [fullName, setFullName] = useState("");

    const [person, setPerson] = useState({
        firstName: '', lastName: '', fullName: '', email: '', age: ''
    });
    const [people, setPeople] = useState([]);

    const handleChange = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        setPerson({ ...person, [name]: value });

    }

    const handleSubmit = (e) => {
        e.preventDefault();

        const newPerson = { ...person, id: new Date().getTime().toString() }
        setPeople([...people, newPerson]);
        setPerson({
            firstName: '', lastName: '', fullName: '', email: '', age: ''
        });
    }


    return (
        <article>
            <form className="form" onSubmit={handleSubmit}>
                <div>
                    <label htmlFor='firstName'>FirstName : </label>
                    <input type='text' id="firstName" name='firstName' value={person.firstName} onChange={handleChange}></input>
                </div>
                <div>
                    <label htmlFor='lastName'>LastName : </label>
                    <input type='text' id="lastName" name='lastName' value={person.lastName} onChange={handleChange}></input>
                </div>
                <div>
                    <label htmlFor='fullName'>Full Name : </label>
                    <input type='text' id="fullName" name='fullName' value={person.fullName = person.firstName + " " + person.lastName} onChange={handleChange} disabled={true}></input>
                </div>
                <div>
                    <label htmlFor='email'> Email : </label>
                    <input type='text' id="email" name='email' value={person.email} onChange={handleChange}></input>
                </div>
                <div>
                    <label htmlFor='age'>Age : </label>
                    <input type='text' id="age" name='age' value={person.age} onChange={handleChange} ></input>
                </div>
                <button disabled={!person.firstName || !person.lastName}>Submit</button>

            </form>
            <ul>
                {people.map((person, index) => {
                    const { id, first, last, fullName, email, age } = person;
                    return <div key={index}>
                        <li>
                            <h3>{fullName}</h3>
                            <h4>{age}</h4>
                            <h4>{email}</h4>
                        </li>
                    </div>
                })
                }
            </ul>
        </article >
    )
}

export default Comp