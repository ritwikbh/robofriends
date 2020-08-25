import React from 'react';

// This is destructuring. Look at how we split the props parameter into its components in the function arguments.
// And note how all JS expressions are wrapped around in {}

// NOTE : These are pure components (contain no class, only a function that returns something)
// Data flows from parent to children (ie from Containers with Class to Pure Components in the form of props which define the current state of the
// App. These Pure Components cannot alter the state of the App, only the Parent Containter can, but depending upon the state, these can render
// DOM in a deterministic manner.
// For interactive stuff we'll need to modify the state in the parent. And this is exactly what we do in <App/> which acts as a container
// ie has class, and can modify the state of the app. The state is define by 2 elements here remeber :
// 1. The searchBox
// 2. THe Robots (Cards)
const Card = ({id, name, email}) => {
	return (
		// predefined tachyon classes. grow is the animation.
		<div className = "tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
			<img alt = {`${name}.jpg`} src= {`https://robohash.org/${name}?200x200" alt="robots.jpg`}/>
			<div>
				<h2>{name}</h2>
				<p>{email}</p>
			</div>
		</div>
	);
}

export default Card;