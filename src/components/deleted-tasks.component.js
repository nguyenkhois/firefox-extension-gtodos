import React, { Component } from 'react';
import { connect } from 'react-redux';

import { deletedTasksActions } from '../actions/deleted-tasks.action';

const mapDispatchToProps = {
    removeDeleted: deletedTasksActions.removeDeleted,
    restoreDeleted: deletedTasksActions.restoreDeleted
};

const mapStateToProps = (state) => {
    return {
        deleted: state.todosApp.todos.filter((item) => item.isDeleted) || []
    }
}

export class DeletedTasks extends Component {
    handleClick = (e) => {
        e.preventDefault();
        this.props.removeDeleted();
    }

    handleClickRestore = (itemId, e) => {
        e.preventDefault();
        this.props.restoreDeleted({ id: itemId });
    }

    render() {
        const ButtonDelete = () => (
            <button className="button-big"
                onClick={e => this.handleClick(e)}>
                Permanently delete
            </button>
        )

        return (
            <div className="deleted-tasks">
                <p>Deleted tasks</p>
                <p>{this.props.deleted.length} deleted task(s)</p>
                <table>
                    <tbody>
                        {this.props.deleted.map((item, key) => {
                            return (
                                <tr key={key}>
                                    <td>
                                        <table>
                                            <tbody>
                                                <tr>
                                                    <td>
                                                        {
                                                            item.isDone ?
                                                                <input type="checkbox" disabled defaultChecked /> :
                                                                <input type="checkbox" disabled />
                                                        }
                                                    </td>
                                                    <td>
                                                        {item.description}
                                                    </td>
                                                    <td className="icon">
                                                        <svg onClick={(e) => this.handleClickRestore(item.id, e)} aria-hidden="true" data-prefix="fas" data-icon="undo" className="svg-inline--fa fa-undo fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M212.333 224.333H12c-6.627 0-12-5.373-12-12V12C0 5.373 5.373 0 12 0h48c6.627 0 12 5.373 12 12v78.112C117.773 39.279 184.26 7.47 258.175 8.007c136.906.994 246.448 111.623 246.157 248.532C504.041 393.258 393.12 504 256.333 504c-64.089 0-122.496-24.313-166.51-64.215-5.099-4.622-5.334-12.554-.467-17.42l33.967-33.967c4.474-4.474 11.662-4.717 16.401-.525C170.76 415.336 211.58 432 256.333 432c97.268 0 176-78.716 176-176 0-97.267-78.716-176-176-176-58.496 0-110.28 28.476-142.274 72.333h98.274c6.627 0 12 5.373 12 12v48c0 6.627-5.373 12-12 12z"></path></svg>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>

                { this. props.deleted.length > 0 ? <ButtonDelete/> : null }
                
            </div>
        )
    }
}

export const DeletedTaskX = connect(mapStateToProps, mapDispatchToProps)(DeletedTasks);



