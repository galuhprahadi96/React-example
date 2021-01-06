import React from 'react'
import GrandChild from './GrandChild'

const Child = (props) => {
    return (
        <div>
            <h2>Child component</h2>
            <p>Stok : {props.stok}</p>
            <button onClick={() => props.klik(1)}>Click</button>
            <hr/>
            <GrandChild stock={props.stok} />
        </div>
    )
}

export default Child
