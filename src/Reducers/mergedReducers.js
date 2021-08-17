//import combine Reducer from redux
import {combineReducers} from 'redux';

import messengerReducer from './messengerReducer';
import messageListReducer from './messageListReducer';
import socketReducer from './socketReducer';
import chatReferenceReducer from './chatReferenceReducer';

const allReducers = combineReducers({
    messenger: messengerReducer,
    messageList: messageListReducer,
    socketer: socketReducer,
    chatRef : chatReferenceReducer
});

export default allReducers;