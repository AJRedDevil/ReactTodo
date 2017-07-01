var React = require('react');
var TodoList = require('TodoList');
var AddTodo = require('AddTodo');

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
    handleAddTodo: function (text) {
        alert('new todo:' + text);
    },
    render: function () {
        var {todos} = this.state;
        
        return (
            <div>
                <TodoList todos={todos} />
                <AddTodo onAddTodo={this.handleAddTodo}/>
            </div>
        );
    }
});

module.exports = TodoApp;