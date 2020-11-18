import React, {Component} from 'react';

class Portal extends Component {
	render() {
		return (
			<div>
				<button onClick={this.handleClick}>go Home</button>
			</div>
		);
	}

	handleClick = () => {
		const { history } = this.props;
		history.push('/home');
	}
}

export default Portal;
