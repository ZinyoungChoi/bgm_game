import React from 'react';
import { useState } from 'react';

function Counting(props) {
    const data = props.data;

    const [score, setScore] = useState(Number(data.score));
  
    function Minus () {
        const current = score - props.point;
        setScore(current)  
    }
    function Plus () {
        const current = score + props.point;
        setScore(current)
    }

    return (
        <div>
            <div className="imgs">
                <img src={data.img} />
            </div>
            <p>{data.name}</p>
            <div className='scores'>
                <button onClick={Minus}>-</button>
                <span>{score}</span>
                <button onClick={Plus}>+</button>
            </div>
        </div>
    );
}

export default Counting;