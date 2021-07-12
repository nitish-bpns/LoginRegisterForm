import React from "react";
import "./style.scss";






class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = { isenglishOpen: true, ishindiOpen: false };
    }



    showenglishBox() {
        this.setState({ isenglishOpen: true, ishindiOpen: false });
    }

    showhindiBox() {
        this.setState({ ishindiOpen: true, isenglishOpen: false });
    }


    render() {


        return (
            <div className="root-controller">
                <div className="box-controller">
                    <div
                        className={"controller " + (this.state.isenglishOpen
                            ? "selected-controller"
                            : "")}
                        onClick={this
                            .showenglishBox
                            .bind(this)}>
                        english
                    </div>
                    <div
                        className={"controller " + (this.state.ishindiOpen
                            ? "selected-controller"
                            : "")}
                        onClick={this
                            .showhindiBox
                            .bind(this)}>
                        hindi
                    </div>


                </div>
                <div className="box-container">

                    {this.state.isenglishOpen && <englishBox />}
                    {this.state.ishindiOpen && <hindiBox />}

                </div>


            </div>


        )
    }


}









class englishBox extends React.Component {


    constructor(props) {
        super(props);
        this.state = { isLoginOpen: true, isRegisterOpen: false };
    }



    showLoginBox() {
        this.setState({ isLoginOpen: true, isRegisterOpen: false });
    }

    showRegisterBox() {
        this.setState({ isRegisterOpen: true, isLoginOpen: false });
    }


    render() {


        return (
            <div className="root-controller">
                <div className="box-controller">
                    <div
                        className={"controller " + (this.state.isLoginOpen
                            ? "selected-controller"
                            : "")}
                        onClick={this
                            .showLoginBox
                            .bind(this)}>
                        Login
                    </div>
                    <div
                        className={"controller " + (this.state.isRegisterOpen
                            ? "selected-controller"
                            : "")}
                        onClick={this
                            .showRegisterBox
                            .bind(this)}>
                        Register
                    </div>


                </div>
                <div className="box-container">

                    {this.state.isLoginOpen && <LoginBox />}
                    {this.state.isRegisterOpen && <RegisterBox />}

                </div>


            </div>


        )
    }


}



class LoginBox extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    submitLogin(e) { }

    render() {
        return (
            <div className="inner-container">
                <div className="header">
                    Login
                </div>
                <div className="box">

                    <div className="input-group">
                        <label htmlFor="username">Username</label>
                        <input
                            type="text"
                            name="username"
                            className="login-input"
                            placeholder="Username" />
                    </div>

                    <div className="input-group">
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            name="password"
                            className="login-input"
                            placeholder="Password" />
                    </div>

                    <button
                        type="button"
                        className="login-btn"
                        onClick={this
                            .submitLogin
                            .bind(this)}>Login</button>
                </div>
            </div>
        );
    }

}




class RegisterBox extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    submitRegister(e) { }

    render() {
        return (
            <div className="inner-container">
                <div className="header">
                    Register
                </div>
                <div className="box">

                    <div className="input-group">
                        <label htmlFor="username">Username</label>
                        <input
                            type="text"
                            name="username"
                            className="login-input"
                            placeholder="Username" />
                    </div>

                    <div className="input-group">
                        <label htmlFor="email">Email</label>
                        <input type="text" name="email" className="login-input" placeholder="Email" />
                    </div>

                    <div className="input-group">
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            name="password"
                            className="login-input"
                            placeholder="Password" />
                    </div>
                    <button
                        type="button"
                        className="login-btn"
                        onClick={this
                            .submitRegister
                            .bind(this)}>Register</button>
                </div>
            </div>
        );
    }
}




class hindiBox extends React.Component {

    constructor(props) {
        super(props);
        this.state = { isLoginhOpen: true, isRegisterhOpen: false };
    }

  

    showLoginhBox() {
        this.setState({ isLoginhOpen: true, isRegisterhOpen: false });
    }

    showRegisterhBox() {
        this.setState({ isRegisterhOpen: true, isLoginhOpen: false });
    }


    render() {


        return (
            <div className="root-controller">
                <div className="box-controller">
                    <div
                        className={"controller " + (this.state.isLoginhOpen
                            ? "selected-controller"
                            : "")}
                        onClick={this
                            .showLoginhBox
                            .bind(this)}>
                        Login hindi
                    </div>
                    <div
                        className={"controller " + (this.state.isRegisterhOpen
                            ? "selected-controller"
                            : "")}
                        onClick={this
                            .showRegisterhBox
                            .bind(this)}>
                        Register hindi
                    </div>


                </div>
                <div className="box-container">

                    {this.state.isLoginhOpen && <LoginhBox />}
                    {this.state.isRegisterhOpen && <RegisterhBox />}

                </div>


            </div>


        )
    }


}



class LoginhBox extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    submitLoginh(e) { }

    render() {
        return (
            <div className="inner-container">
                <div className="header">
                    Login hindi
                </div>
                <div className="box">

                    <div className="input-group">
                        <label htmlFor="username">Username h</label>
                        <input
                            type="text"
                            name="username"
                            className="login-input"
                            placeholder="Username" />
                    </div>

                    <div className="input-group">
                        <label htmlFor="password">Password h</label>
                        <input
                            type="password"
                            name="password"
                            className="login-input"
                            placeholder="Password" />
                    </div>

                    <button
                        type="button"
                        className="login-btn"
                        onClick={this
                            .submitLoginh
                            .bind(this)}>Login h</button>
                </div>
            </div>
        );
    }

}




class RegisterhBox extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    submitRegisterh(e) { }

    render() {
        return (
            <div className="inner-container">
                <div className="header">
                    Register h
                </div>
                <div className="box">

                    <div className="input-group">
                        <label htmlFor="username">Username h</label>
                        <input
                            type="text"
                            name="username"
                            className="login-input"
                            placeholder="Username" />
                    </div>

                    <div className="input-group">
                        <label htmlFor="email">Email h</label>
                        <input type="text" name="email" className="login-input" placeholder="Email" />
                    </div>

                    <div className="input-group">
                        <label htmlFor="password">Password h</label>
                        <input
                            type="password"
                            name="password"
                            className="login-input"
                            placeholder="Password" />
                    </div>
                    <button
                        type="button"
                        className="login-btn"
                        onClick={this
                            .submitRegisterh
                            .bind(this)}>Register h</button>
                </div>
            </div>
        );
    }
}

export default App;