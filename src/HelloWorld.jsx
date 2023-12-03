import React, { Component } from 'react';

class HelloWorld extends Component { 
    render() {
        if (this.props.name) {
            return (
                <h1>Hello, {this.props.name}!</h1>
            );
        } else {
            return (
                <h1>Hello World!</h1>
            );
        }
    }
}
export default HelloWorld;
