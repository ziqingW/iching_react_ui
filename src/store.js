import { createStore } from 'redux';
import guas from './reducers';

var store = createStore(guas);
export default store;