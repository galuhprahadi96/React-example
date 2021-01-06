import React, { Component } from 'react'
import Child from '../../Fungsional/Child/Child'

export default class Parent extends Component {
    constructor(props) {
        super(props)

        this.state= {
            stok : 10
        }
    }

    onKlik = (data) => {
        this.setState({
            stok: this.state.stok - data
        })
    }
    
    render() {
        return (
            <div>
                <h1>Parent Component</h1>
                <span>Stok Product : {this.state.stok}</span>
                <hr/>
                <Child stok={this.state.stok} klik={this.onKlik.bind(this)}/>
            </div>
        )
    }
}
