import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-pretence-router';

const mapStateToProps = (state) => {
    return ({
        router: state.router
    })
};

class MenuClass extends Component {
    render() {
        const TopMenuHome = () => (
            <div className="top-menu-home">
                <table>
                    <tbody>
                        <tr>
                            <td>
                                <Link to={'/deleted'} name={'Deleted tasks'}/>
                            </td>
                            <td>
                                <svg aria-hidden="true" data-prefix="fas" data-icon="angle-right" className="svg-inline--fa fa-angle-right fa-w-8" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512"><path fill="currentColor" d="M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z"></path></svg>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )

        const TopMenuDeletedTasks = () => (
            <div className="top-menu-left">
                <table>
                    <tbody>
                        <tr>
                            <td>
                                <svg aria-hidden="true" data-prefix="fas" data-icon="angle-left" className="svg-inline--fa fa-angle-left fa-w-8" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512"><path fill="currentColor" d="M31.7 239l136-136c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9L127.9 256l96.4 96.4c9.4 9.4 9.4 24.6 0 33.9L201.7 409c-9.4 9.4-24.6 9.4-33.9 0l-136-136c-9.5-9.4-9.5-24.6-.1-34z"></path></svg>
                            </td>
                            <td>
                                <Link to={'/'} name={'Home'}/>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )

        return (
            <div align={this.props.router.activatedPath === '/' ? 'right' : 'left'}>
                {this.props.router.activatedPath === '/' ? <TopMenuHome /> : <TopMenuDeletedTasks />}
            </div>
        )
    }
}

export const MenuX = connect(mapStateToProps)(MenuClass);