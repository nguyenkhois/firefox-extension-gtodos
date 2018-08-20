import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { Lists } from './lists.component';
import { actions } from '../actions/todos.action';

const mapDispatchToProps = {
    addTask: actions.addTask,
    removeTask: actions.removeTask,
    checked: actions.checked,
    removeCompleted: actions.removeCompleted
};

const mapStateToProps = (state) => {
    return {
        todos: state.todosApp.todos || []
    }
}

class TodosClass extends Component {
    handleEnterKey = (e) => {
        const userInput = e.target.value.trim();
        if (e.keyCode === 13 && userInput.length > 0) {
            const newItem = {
                id: Date.now(),
                description: userInput,
                isDone: false,
                isDeleted: false
            };

            this.props.addTask(newItem);
            e.target.value = '';
        }
    }

    handleCheck = (itemId, e) => {
        e.preventDefault();
        const checkedItem = { id: itemId };
        this.props.checked(checkedItem);
    }

    handleRemove = (itemId, e) => {
        e.preventDefault();
        const removedItem = { id: itemId };
        this.props.removeTask(removedItem);
    }

    handleClearCompleted = (e) => {
        e.preventDefault();
        this.props.removeCompleted();
    }

    render() {
        let uncompletedTasks = this.props.todos.filter((item) => !item.isDone && !item.isDeleted);
        let completedTasks = this.props.todos.filter((item) => item.isDone && !item.isDeleted);

        const ButtonRemove = () => (
            <button className="button-big" type="button"
                onClick={(e) => this.handleClearCompleted(e)}>
                Delete completed
            </button>
        )

        return (
            <div>
                <p>To-Do list</p>
                <input ref={(input) => { this.textInput = input; }}
                    onKeyDown={(e) => this.handleEnterKey(e)}
                    type="text" minLength="1" maxLength="50" placeholder="Enter your task" autoFocus />

                <Lists items={uncompletedTasks}
                    titleStatus={0}
                    fnCheck={(itemId, e) => this.handleCheck(itemId, e)}
                    fnRemove={(itemId, e) => this.handleRemove(itemId, e)} />

                <Lists items={completedTasks}
                    titleStatus={1}
                    fnCheck={(itemId, e) => this.handleCheck(itemId, e)}
                    fnRemove={(itemId, e) => this.handleRemove(itemId, e)} />

                {completedTasks.length > 0 ? <ButtonRemove /> : null}
            </div>
        )
    }
};

TodosClass.propTypes = {
    todos: PropTypes.array
}

export const TodoX = connect(mapStateToProps, mapDispatchToProps)(TodosClass);
