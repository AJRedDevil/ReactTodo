var React = require('react');
var TodoList = require('TodoList');

var TodoApp = React.createClass({
    getInitialState: function () {
        return {
            todos: [
                {
                    id: 1,
                    text: 'Make bed'
                }, {
                    id: 2,
                    text: 'Apply gel'
                }, {
                    id: 3,
                    text: 'Watch video'
                }, {
                    id: 4,
                    text: 'Play with April'
                }
            ]
        };
    },
    render: function () {
        var {todos} = this.state;
        
        return (
            <div>
                <TodoList todos={todos}/>
            </div>
        );
    }
});

module.exports = TodoApp;