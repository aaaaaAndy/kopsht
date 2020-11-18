import React, {Component} from 'react';

class Index extends Component {
	render() {
		const { children } = this.props;

		return (
			<div>
				{ children }
			</div>
		);
	}
}

export default Index;
