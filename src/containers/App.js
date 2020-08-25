import React from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import './App.css';
import Scroll from '../components/Scroll'
import ErrorBoundary from '../components/ErrorBoundary';
// we didn't create a new component for h1 obviously but should create one for the search box
// IMP
// This is a Container or a Parent that is capable of modifying the state of the app defined by the entry in SearchBox and the Robots array
// Since this is a container and not a pure component, it cannot be a function, has to be a class with constructor initializing the state of the
// App. State is defined by the items that can change and affect our app. Change in searchField or in the robot array will change our app. So
// these are chosen as state items and passed down to the children in a fixed manner as PROPS (ONE WAY DATA FLOW)

// How to change the state? That we'll do here with the help of our own function named 'onSearchChange'
// We'll look for change in the search field through SearchBox
// and use that event (change in search field as communicated by the SearchBox component's return value) to filter out our Robots list
// and change the state.

// Look how the filtering is done: we iterate all the robots one by one and keep only those whose names have the current value of searchField
// as a substring. we return this into a new array and this is assigned to the now modified robots array, thus changing the stete.
class App extends React.Component {
	// This has state and is therefore a smart component 
	constructor(){
		super();
		this.state = {
			robots: [],
			searchField: ''
		};
	}

	// this is a lifecycle method, pretty easy stuff but refer to documentation and lecture 214 (part 4)
	// App is a smart container, contains life cycle HOOKS, state, is a class and not a pure component (method)
	componentDidMount(){
		// if this component has finished mounting to its parent component (root) then run this method.
		// fetch our users list from the api, and convert the response into json. then use this json to update state, set robots to users (json)
		// fetch is part of the window object ...
		fetch('https://jsonplaceholder.typicode.com/users')
		.then(response => response.json())
		.then(users => this.setState({robots : users}));
	}
	onSearchChange = (event) => {
		// changing state by changing searchField state of the App based on infor recieved from SeachBox child.
		this.setState({searchField : event.target.value});
	}
	// Note. Remember that for line 60
	// if we need to pass use 'this' of a child, then we need to use arrow function for that functions definition line above in line 40. IMP.
	render(){
		const {robots , searchField} = this.state;
		// changing state. Not literally changing the original varaibale but still each time the searchField changes, we fileter the original
		// array depending on its value to create a new array called filterRobots. Now this is the final array passed to the child called
		// CardList to finally render.
		const filterRobots = robots.filter(robot => {
			return robot.name.toLowerCase().includes(searchField.toLowerCase());
		});

		// adding a loading bar (capability only, this is not an actual bar just a simple h1 placeholder)
		// this is used in case the API call takes too much time
		return !robots.length ?
		<h1 className = 'tc h2'>Loading</h1> :
		(
			<div className = 'tc'>
				<h1 className = 'f2'>ROBOFRIENDS</h1>
				<SearchBox searchChange = {this.onSearchChange} />
				<Scroll>
					<ErrorBoundary>
						<CardList robots = {filterRobots}/>
					</ErrorBoundary>
				</Scroll>
	  		</div>
		);
	}
}

export default App;