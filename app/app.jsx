var React = require('react');
var ReactDOM = require('react-dom');
var {Provider} = require('react-redux');
var {Route, Router, IndexRoute, hashHistory}  = require('react-router'); // Destructuring structure

var TodoApp = require('TodoApp');

var actions = require('actions');
var store = require('configureStore').configure();

store.subscribe(() => {
    console.log('New state', store.getState());
});

store.dispatch(actions.addTodo('Tiffin'));
store.dispatch(actions.setSearchText('ff'));
store.dispatch(actions.toggleShowCompleted());

// Load foundation
// require('style!css!foundation-sites/dist/foundation.min.css');
$(document).foundation();

// App css
require('style!css!sass!applicationStyles');

ReactDOM.render(
    <Provider store={store}>
        <TodoApp/>
    </Provider>,
    document.getElementById('app')
);