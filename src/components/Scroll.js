import React from 'react';

// the purose of this component is to create a scrollable componenet, like a window, that does not hide the search box when we scroll down
// so instead of the browsr scroll, this becomes a fixed size window that does not hide the header.
// This can then be reused anywhere.

// TILL NOW WE'SE STUDIED ABOUT:
// 1. PROPS
// 2. STATE
// this is the 3rd concept, ie
// 3. CHILDREN
// Concept used to create components that can wrap other components. Earlier we could only wrap around the small case components like h1 or p in div
// now we'll be able to wrap uppercase custom components (Cards, CardList etc) using the children property,

const Scroll = (props) => {
	return (
		// Simple adding inline CSS, done here in order to learn the JSX syntax {{}}
		// CSS : overflow-y
		// JSX : overflowY (camelCase)
		<div style = {{overflowY : 'scroll', borderTop: 'solid 1px black', height : '550px'}}>
			{props.children}
		</div>
)};

export default Scroll;