import React, { Component } from 'react';
import './loginpage.css';
import Axios from 'axios';

class LoginPage extends Component{
    state={

    }

    login = () => {
        let user = document.getElementById('loginusername').value;
        let pass = document.getElementById('loginpassword').value;

        Axios.post('http://localhost:3001/login', {
            name: user,
            pass: pass,
        }).then((response)=>{
            console.log(response.data);
            if(response.data !== 'Invalid'){
                sessionStorage.setItem('name', response.data);
                this.props.changepage('Dashboard');
            }else{
                alert('Invalid details inputted');
            }
        });
    }

    render(){
        return(
                <div id="login-container" style={{display:this.props.page==="Login"?"flex":"none"}}>
                    <p id="login-comparediff" onClick={()=>{this.props.changepage('Landing');}}>CompareDiff</p>
                    <h2 id="loginh2">Log in</h2>
                    <form id="loginform">
                        <table>
                            <tr>
                                <td>
                                    <label>Email</label>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <input id="loginusername" className="logininput" type="email" placeholder="jchukwu@example.com"/>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <label>Password</label>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <input id="loginpassword" className="logininput" type="password" min-length="6" placeholder="must be at least 6 characters long"/>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div id="loginbutton" onClick={()=>{this.login()}}>Log in</div>
                                </td>
                            </tr>
                            <tr>
                                <td id="signup">
                                    Don't have an account? <div id="logina"  onClick={()=>{this.props.changepage('Signup');}}>Sign up</div><br/><br/>
                                    <div onClick={()=>{this.props.changepage('Landing')}} style={{color:'red'}}>Back</div>
                                </td>
                            </tr>
                        </table>
                    </form>
                    <div id="second-container">
                        <h1 id="loginh1">Welcome Back!</h1>
                        <p id="first-p">Enter your personal details to keep</p>
                        <p id="second-p">connected with us</p>
                    </div>
                </div>
        );
    }
}

export default LoginPage;