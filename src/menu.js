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
            <div className="top-menu">
                <table>
                    <tbody>
                        <tr>
                            <td>
                                <Link to={'/deleted'} name={'Deleted tasks'}/>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )

        const TopMenuDeletedTasks = () => (
            <div className="top-menu">
                <table>
                    <tbody>
                        <tr>
                            <td>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 20.5"><path fill="currentColor" d="M9.537,20.083.292,10.946a.975.975,0,0,1,0-1.392L9.537.417a1.456,1.456,0,0,1,2.041,0,1.415,1.415,0,0,1,0,2.016L3.669,10.25l7.909,7.815a1.417,1.417,0,0,1,0,2.017,1.456,1.456,0,0,1-2.041,0"></path></svg>
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