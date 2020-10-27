import React, {Component} from 'react';
import './index.less';

class Home extends Component {
	render() {
		return (
			<div>
				<button onClick={this.handleClick}>go portal</button>
			</div>
		);
	}

	handleClick = () => {
		const { history } = this.props;
		history.push('/portal')
	}
}

export default Home;
