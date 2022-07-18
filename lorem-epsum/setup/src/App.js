import React, { useState, useEffect } from 'react';
//import data from './data';
function App() {


  const [count, setCount] = useState(0);
  const [para, setPara] = useState([]);
  const [data, setData] = useState([]);
  // randomPara = () => {
  //   console.log(para);
  // }
  const fetchdata = async () => {
    const response = await fetch("https://hipsum.co/api/?type=hipster-centric&paras=100");
    const data = await response.json();
    setData(data);
  }

  useEffect(() => {
    fetchdata();
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault();
    /**
     * The preventDefault() method cancels the event 
     * if it is cancelable, 
     * meaning that the default action that belongs to the event will not occur. */

    let amount = parseInt(count); // because count is string.
    if (count <= 0)
      amount = 1;
    if (count > data.length)
      amount = data.length;
    setPara(data.slice(0, amount)); //slice the data to only the numbered paragraph. 

  }
  return (

    <section className='section-center'>
      <h3>Tired of Boring Lorem Epsum?</h3>
      <form className="lorem-form" onSubmit={handleSubmit}>
        <label htmlFor='amount'>
          Paragraphs :
        </label>
        <input type="number" name="amount" id="amount"
          value={count}
          onChange={(e) => setCount(e.target.value)}
        >
        </input>
        <button type='submit' className='btn'>Generate</button>

      </form>
      <article className='lorem-text'>
        {para.map((item, index) => {
          return (<div key={index}>
            < p  >
              {index + 1}. {item}
            </p>
            <a>---------------------------------------------------------------------------------------------------</a>

          </div>);
        })
        }

      </article>

    </section >

  )
}

export default App;
