import React from 'react';
import { connect } from 'react-redux';
import { startLoginWithGoogle, startLoginWithFacebook } from '../actions/auth';

export class LoginPage extends React.Component {
    render() {
        return (
            <div className="box-layout">
                <div className="box-layout__box">
                    <h1 className="box-layout__title">React Blog</h1>
                    <p>Just React!!!</p>
                    <button className="button" onClick={this.props.startLoginWithGoogle}>Login With Google</button>
                    <button className="button button--fb" onClick={this.props.startLoginWithFacebook}>Login With Facebook</button>
                </div>
            </div>
        );
    };
};

const mapDispatchToProps = (dispatch) => ({
    startLoginWithGoogle: () => dispatch(startLoginWithGoogle()),
    startLoginWithFacebook: () => dispatch(startLoginWithFacebook())
});

export default connect(undefined, mapDispatchToProps)(LoginPage);