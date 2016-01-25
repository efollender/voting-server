import makeStore from './src/store';
import startServer from './src/server';
import store from './src/store';

export const store = makeStore();
startServer(store);