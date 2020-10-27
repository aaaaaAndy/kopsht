import React from 'react';
import { render } from 'react-dom';
import { ConnectedRouter } from 'connected-react-router';
import { Provider } from 'react-redux';
import routers from '@/routers';
import { store, history } from '@/store';
import '@/styles/index.less';

render(
	<Provider store={store}>
		<ConnectedRouter history={history}>
			{ routers }
		</ConnectedRouter>
	</Provider>,
	document.getElementById('root')
)
