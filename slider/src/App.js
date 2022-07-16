import React, { useState, useEffect } from 'react';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import { FaQuoteRight } from 'react-icons/fa';
import data from './data';
function App() {

  const [people, setPeople] = useState(data);
  const [index, setIndex] = useState(0);

  /**
   * this useEffect sets the index to lastIndex or 0 if the array of reviewss reaches an  end.
   */
  useEffect(() => {
    const lastIndex = people.length - 1;
    if (index < 0)
      setIndex(lastIndex);
    if (index > lastIndex) {
      setIndex(0);
    }
  }, [people, index]);

  /**
   * this useeffect is to make the slider /carousel for every 5 sec, and the clearInterval function is 
   * to clear the ongoing interval and restart it when a person click prev or next button.
   */
  useEffect(() => {
    let slider = setInterval(() => {
      setIndex(index + 1);
    }, 5000);
    return () => {
      clearInterval(slider);
    };
  }, [index]);

  return <section className='section'>
    <div className="title">
      <h2>Reviews</h2>
    </div>
    <div className="section-center">
      {/*
      here we map the people ahnd then set the active slideto the index chosen
      
      */people.map((person, personIndex) => {

        let p = 'nextSlide'
        if (personIndex === index) {
          p = 'activeSlide';
        }
        if (personIndex === index - 1 ||
          (index === 0 && personIndex === people.length - 1)
        ) {
          p = 'lastSlide';
        }
        return <article className={p} key={person.id}>

          <img className="person-img" src={person.image} alt={person.name} />
          <h4>{person.name}</h4>
          <div className="title">
            {person.title}
          </div>
          <div className="text">
            {person.quote}
          </div>
          <FaQuoteRight className='icon' />
        </article>
      })}
      <button className="prev" onClick={() => setIndex(index - 1)}>
        <FiChevronLeft />
      </button>
      <button className='next' onClick={() => setIndex(index + 1)} >
        <FiChevronRight />
      </button>

    </div>
  </section>
}

export default App;
