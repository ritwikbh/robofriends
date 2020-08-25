import React from 'react';

// This is a pure component too, just like Card
// Props don;t change, they are p0assed down from parent to child component

// Notice what is happening in the last line of input:
// onChange is simply a listener (JS part) which will look for changes in the SearchBox and whenever a change is detected
// It calls the callback method onSearchChange (which has been passed to this compnonent as a prop named searchChange)
// this will relay information back to our parent (App) to make the necessary changes to the state. 
const SearchBox = ({searchChange}) => {
	return (
		<div className = "pa2">
			<input
			className = "pa3 ba b--green bg-lightest-blue"
			type = 'search'
			placeholder = 'robots'
			onChange = {searchChange}/>
		</div>
	);
}

export default SearchBox;