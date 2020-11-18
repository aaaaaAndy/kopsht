import React, {Component} from 'react';
import classnames from 'classnames';
import jollychic from 'jollychic';
import './index.less';

class Home extends Component {
	render() {
		const jc = jollychic('home-container', '-')
		const contentClass = classnames(
			jc('content'),
			{ 'expand': true }
		);

		return (
			<div className={jc()}>
				<div className={contentClass}>content</div>
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
