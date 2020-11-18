import React from 'react';
import {
	Route,
	Redirect,
	BrowserRouter as Router,
} from 'react-router-dom';

import Index from '@/pages';
import Home from '@/pages/home';
import Portal from '@/pages/portal'

const routers = (
	// 根据需求修改basename
	<Router basename="/kopsht-demo">
		<Index>
			<Redirect to="/home" from="/" />
			<Route path="/home" component={Home} />
			<Route path="/portal" component={Portal} />
		</Index>
	</Router>
)

export default routers;
