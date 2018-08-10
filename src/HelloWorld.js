import React, { Component } from 'react';
import './HelloWorld.css';

class HelloWorld extends Component {
    constructor(props){
        super(props);
        this.state = { greeting: 'Hello' };
        this.frenchify = this.frenchify.bind(this);
        this.italianify = this.italianify.bind(this);
        this.germanify = this.germanify.bind(this);
        this.removeGreeting = this.removeGreeting.bind(this);
    }
    removeGreeting() {
        this.props.removeGreeting(this.props.name);
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
    render() {
    return (
        <div className='HelloWorld'>
            {this.state.greeting} {this.props.name}!
            <br/>
            <div className='buttons'>
                <button className='frenchify' onClick={this.frenchify}>Frenchify!</button>
                <br/>
                <button className='italianify' onClick={this.italianify}>Italianify!</button>
                <br/>
                <button className='germanify' onClick={this.germanify}>Germanify!</button>
                <br/>
                <button className='remove' onClick={this.removeGreeting}>Remove Me!</button>
            </div>    
        </div>
        );
    }
};

export default HelloWorld;