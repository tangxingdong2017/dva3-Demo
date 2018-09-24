import dva from 'dva';
import createHistory from 'history/createBrowserHistory';
import createLoading from 'dva-loading';
import TestModel from './models/index';
import './index.css';

// 1. Initialize
const app = dva({
	history: createHistory(),
	// onHmr,
});

// 2. Plugins
// app.use({});
app.use(createLoading({
	effects: true
}));

// 3. Model
app.model(require('./models/index').default);

// 4. Router
app.router(require('./router').default);

// 5. Start
app.start('#root');
