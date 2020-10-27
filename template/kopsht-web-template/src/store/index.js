import { routerMiddleware, connectRouter } from 'connected-react-router';
import { createBrowserHistory } from 'history';
import { init } from '@rematch/core';
import * as models from './models';

const history = createBrowserHistory();

const store = init({
	models,
	redux: {
		reducers: {
			router: connectRouter(createBrowserHistory()),
		},
		middlewares: [routerMiddleware(history)],
	},
	plugins: [],
});

export {
	store,
	history,
};
