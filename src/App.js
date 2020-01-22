import React, { Component } from 'react';
import CatComponent from './CatComponent.js';
import EinsteinQuoteCompomemt from './EinsteinQuoteComponent.js'
import MouseComponent from './MouseComponent.js';

class App extends Component {
	render() {
		// your code in the return statement below!
		return (
			<div className="App">
				<CatComponent />
				<EinsteinQuoteCompomemt/>
				{/* one more component missing */}
				<MouseComponent />
			</div>
		);
	}
}

export default App;
