import React, { useState } from 'react'
import Values from 'values.js'
import SingleColor from './SingleColor'


function Color() {

    const [color, setColor] = useState('');
    const [err, setErr] = useState(false);
    const [list, setList] = useState(new Values('#f15025').all(10));


    const handleChange = (e) => {
        e.preventDefault();
        try {
            let colors = new Values(color).all(10);
            setList(colors);
            //console.log(colors);
        }
        catch (error) {
            setErr(true)
            console.log(error);
        }
    }

    return (<>
        <section className='container'>
            <h3> Color Generator</h3>
            <form onSubmit={handleChange}>
                <input type="text"
                    placeholder='#f15025'
                    onChange={(e) => { setColor(e.target.value) }}
                    className={`${err ? 'error' : null}`}
                />
                <button type='submit' className='btn' >Find</button>
            </form>
        </section>

        <section className="colors">
            {list.map((color, index) => {
                return (<SingleColor
                    key={index}
                    {...color}
                    index={index}
                    hexColor={color.hex}
                />)
            })}
        </section>
    </>
    )
}

export default Color