// works with react 16 or higher
import React, { Component } from 'react';

class ErrorBoundary extends Component {
	constructor(props){
		super(props);
		this.state = {
			hasError : false
		}
	}
	// Method to change hasError state using a new React 16+ lifecycle method
	// if anything errors out, this method is called
	componentDidCatch(error, info){
		this.setState({hasError : true});
	}
	render(){
		// if error found then display the contingency. This is mostly not visible during development mode and mostly only in deployment mode.
		if(this.state.hasError){
			return <h1>Uh-Oh. That is not good.</h1>
		}
		// if no error caught then return the children of props/children of this component, which is CardList
		return this.props.children;
	}
}

export default ErrorBoundary;