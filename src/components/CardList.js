import React from 'react';
import Card from './Card';

//instead of rendering 10's of 100's of cards from the index.js directly, what we can do is to render the parent element of those cards
// ie this CardList that can easily scale by looping through the robots array and creating a list of robot items/cards

// robots is the destructured props input
const CardList = ({robots}) => {
	// we need to return a card Array, where each element looks like this
	// <Card id = {robots[0].id} name = {robots[0].name} email = {robots[0].email}/>
	// So run a forEach or better yet, a map loop over the robots array and pick each item and index of it and do the computer.
	const cardArray = robots.map((user) => {
		// Note that key is not part of our given parameters, this is just a requirement of React to include a unique key prop in case of arrays
		// so that it track the elements easily in the virtual dom. Make the key something that is unique and won't change. Like the id.
		return (
				<Card key = {user.id}
				id = {user.id}
				name = {user.name}
				email = {user.email}/>
				);
	});
	return  (
		// return the single element to be rendered.
		<div>
			{
				//not that since we're essentially using these brackets to write JS statements, we can also replace the above CardArray loop code
				//directly in place of the below carArray Variable.
			}
			{cardArray}
		</div>
	);
}

export default CardList;