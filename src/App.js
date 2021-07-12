import React from "react";
import "./style.scss";






class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = { isEnglishOpen: true, isHindiOpen: false };
    }

  

    showEnglishBox() {
        this.setState({ isEnglishOpen: true, isHindiOpen: false });
    }

    showHindiBox() {
        this.setState({ isHindiOpen: true, isEnglishOpen: false });
    }


    render() {


        return (
            <div className="root-controller">
                <div className="box-controller">
                    <div
                        className={"controller " + (this.state.isEnglishOpen
                            ? "selected-controller"
                            : "")}
                        onClick={this
                            .showEnglishBox
                            .bind(this)}>
                        English
                    </div>
                    <div
                        className={"controller " + (this.state.isHindiOpen
                            ? "selected-controller"
                            : "")}
                        onClick={this
                            .showHindiBox
                            .bind(this)}>
                        हिंदी
                    </div>


                </div>
                <div className="box-container">

                    {this.state.isEnglishOpen && <EnglishBox />}
                    {this.state.isHindiOpen && <HindiBox />}

                </div>


            </div>


        )
    }


}


class EnglishBox extends React.Component {


    constructor(props) {
        super(props);
        this.state = { isLoginOpen: true, isRegisterOpen: false };
    }

    submitEnglish(e) { }

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




class HindiBox extends React.Component {

    constructor(props) {
        super(props);
        this.state = { isLoginhOpen: true, isRegisterhOpen: false };
    }

    submitHindi(e) { }

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
                        लॉग इन करें
                    </div>
                    <div
                        className={"controller " + (this.state.isRegisterhOpen
                            ? "selected-controller"
                            : "")}
                        onClick={this
                            .showRegisterhBox
                            .bind(this)}>
                        रजिस्टर करें
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
                    
                  लॉग इन करें
                </div>
                <div className="box">

                    <div className="input-group">
                        <label htmlFor="username">उपयोगकर्ता नाम</label>
                        <input
                            type="text"
                            name="username"
                            className="login-input"
                            placeholder="उपयोगकर्ता नाम" />
                    </div>

                    <div className="input-group">
                        <label htmlFor="password">पासवर्ड </label>
                        <input
                            type="password"
                            name="password"
                            className="login-input"
                            placeholder="पासवर्ड" />
                    </div>

                    <button
                        type="button"
                        className="login-btn"
                        onClick={this
                            .submitLoginh
                            .bind(this)}>लॉग इन करें</button>
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
                रजिस्टर करें
                </div>
                <div className="box">

                    <div className="input-group">
                        <label htmlFor="username">उपयोगकर्ता नाम</label>
                        <input
                            type="text"
                            name="username"
                            className="login-input"
                            placeholder="Uउपयोगकर्ता नाम" />
                    </div>

                    <div className="input-group">
                        <label htmlFor="email">ईमेल आईडी</label>
                        <input type="text" name="email" className="login-input" placeholder="ईमेल आईडी" />
                    </div>

                    <div className="input-group">
                        <label htmlFor="password">पासवर्ड</label>
                        <input
                            type="password"
                            name="password"
                            className="login-input"
                            placeholder="पासवर्ड" />
                    </div>
                    <button
                        type="button"
                        className="login-btn"
                        onClick={this
                            .submitRegisterh
                            .bind(this)}>रजिस्टर करें</button>
                </div>
            </div>
        );
    }
}

export default App;