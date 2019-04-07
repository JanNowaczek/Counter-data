import React, { Component } from 'react';

class Counter extends Component {
    state = {
        number: JSON.parse(localStorage.getItem('counter')) || this.props.number
    }

    saveNumber(){
        localStorage.setItem('counter', JSON.stringify(this.state.number))
    }

    inc1 = () => {
        this.setState({number: this.state.number + 1})
    }

    dec1 = () => {
        this.setState({number: this.state.number - 1})
    }

    inc5 = () => {
        this.setState({number: this.state.number + 5})
    }

    dec5 = () => {
        this.setState({number: this.state.number - 5})
    }

    reset = () => {
        this.setState({number: this.props.number})
    }

    render() {
        this.saveNumber()

        return (
            <div>
                <h1>
                    {this.state.number}
                </h1>

                <button
                    onClick={this.inc1}
                >
                    + 1
                </button>
                <button
                    onClick={this.dec1}
                >
                    - 1
                </button>
                <button
                    onClick={this.inc5}
                >
                    + 5
                </button>
                <button
                    onClick={this.dec5}
                >
                    - 5
                </button>
                <button
                    onClick={this.reset}
                >
                    Reset
                </button>
            </div>
        )
    }
}

export default Counter