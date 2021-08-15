//import combine Reducer from redux
import {combineReducers} from 'redux';

import messengerReducer from './messengerReducer';
import messageListReducer from './messageListReducer';
import socketReducer from './socketReducer'

const allReducers = combineReducers({
    messenger: messengerReducer,
    messageList: messageListReducer,
    socketer: socketReducer
});

export default allReducers;