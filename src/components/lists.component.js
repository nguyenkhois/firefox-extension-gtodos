import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class Lists extends Component {
    render() {
        let arrTasks = this.props.items;
        let componentUI = {
            title: 'Uncompleted tasks',
            style: ''
        }

        this.props.titleStatus === 1 ?
            componentUI = {
                ...componentUI,
                title: 'Completed tasks',
                style: 'deleted-tasks'
            } :
            null

        if (arrTasks.length > 0)
            return (
                <div>
                    <p>{componentUI.title}</p>
                    <table className={componentUI.style}>
                        <tbody>
                            {arrTasks.map((item, key) => {
                                return (
                                    <tr key={key}>
                                        <td>
                                            <table>
                                                <tbody>
                                                    <tr>
                                                        <td>
                                                            {
                                                                item.isDone ?
                                                                    <input type="checkbox" onClick={e => this.props.fnCheck(item.id, e)} defaultChecked /> :
                                                                    <input type="checkbox" onClick={e => this.props.fnCheck(item.id, e)} />
                                                            }
                                                        </td>
                                                        <td>{item.description}</td>
                                                        <td className="icon">
                                                            <svg onClick={e => this.props.fnRemove(item.id, e)} aria-hidden="true" data-prefix="far" data-icon="trash-alt" className="svg-inline--fa fa-trash-alt fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M192 188v216c0 6.627-5.373 12-12 12h-24c-6.627 0-12-5.373-12-12V188c0-6.627 5.373-12 12-12h24c6.627 0 12 5.373 12 12zm100-12h-24c-6.627 0-12 5.373-12 12v216c0 6.627 5.373 12 12 12h24c6.627 0 12-5.373 12-12V188c0-6.627-5.373-12-12-12zm132-96c13.255 0 24 10.745 24 24v12c0 6.627-5.373 12-12 12h-20v336c0 26.51-21.49 48-48 48H80c-26.51 0-48-21.49-48-48V128H12c-6.627 0-12-5.373-12-12v-12c0-13.255 10.745-24 24-24h74.411l34.018-56.696A48 48 0 0 1 173.589 0h100.823a48 48 0 0 1 41.16 23.304L349.589 80H424zm-269.611 0h139.223L276.16 50.913A6 6 0 0 0 271.015 48h-94.028a6 6 0 0 0-5.145 2.913L154.389 80zM368 128H80v330a6 6 0 0 0 6 6h276a6 6 0 0 0 6-6V128z"></path></svg>
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
                </div>
            )
        return null
    }
};

Lists.propTypes = {
    items: PropTypes.array,
    fnCheck: PropTypes.func.isRequired,
    fnRemove: PropTypes.func.isRequired
}