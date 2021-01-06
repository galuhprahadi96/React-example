import React,{ Component } from 'react'
import './Product.css'

class Product extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            stok: this.props.stok,
            sub: "beli",
            status: "Tersedia",
            disable: false
        }
    }

    clickBeli = () => {
        this.setState({
            stok: this.state.stok - 1
        })

        if (this.state.stok === 1) {
            this.setState({
                disable: true,
                status: "Habis"
            })
        }
    }
    

    render() {
        console.log(this.state.disable)
        return (
            <div className="product-container">
                <h2>{this.props.name}</h2>
                <img src="https://i.pcmag.com/imagery/reviews/03Eqb3t8m0hPNCRDZvuTzbh-6..1569476934.jpg" alt=""/>
                <p>Harga : Rp {this.props.harga}</p>
                <p>Stok : {this.state.stok}</p>
                <button className="button-click" onClick={this.clickBeli} disabled={this.state.disable}>Beli</button>
                <p>{this.state.status}</p>
            </div>
        );
    }
}

export default Product