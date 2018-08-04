import React, { Component } from 'react';
import './HelloWorld.css';

class HelloWorld extends Component {
    constructor(props){
        super(props);
        this.state = { greeting: 'Hello' };
        this.removeGreeting = this.removeGreeting.bind(this);
    }
    removeGreeting() {
        this.props.removeGreeting(this.props.name);
    }
    render() {
    return (
        <div className='HelloWorld'>
            {this.state.greeting} {this.props.name}!
            <br/>
            <div className='buttons'>
                <button className='frenchify' onClick={this.frenchify.bind(this)}>Frenchify!</button>
                <br/>
                <button className='italianify' onClick={this.italianify.bind(this)}>Italianify!</button>
                <br/>
                <button className='germanify' onClick={this.germanify.bind(this)}>Germanify!</button>
                <br/>
                <button onClick={this.removeGreeting}>Remove Me!</button>
            </div>    
        </div>
        );
    }
    
    frenchify(){
        this.setState({ greeting: 'Bonjour' });
    }
    italianify(){
        this.setState({ greeting: 'Ciao' })
    }
    germanify(){
        this.setState({ greeting: 'Guten Tag' })
    }
};

export default HelloWorld;