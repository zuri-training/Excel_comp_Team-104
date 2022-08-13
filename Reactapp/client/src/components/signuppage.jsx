import React, { Component } from 'react';
import './signuppage.css';
import Axios from 'axios';

class SignUpPage extends Component{
    state={

    }

    signup = () => {
        let name = document.getElementById('signupusername').value;
        let pass1  = document.getElementById('signuppassword1').value;
        let pass2  = document.getElementById('signuppassword2').value;
        let tel = document.getElementById('signuptel').value;
        let email  = document.getElementById('signupemail').value;

        if(pass1 === pass2){
            Axios.post('http://localhost:3001/signup', {
                name: name,
                pass: pass1,
                tel: tel,
                email: email
            }).then((response)=>{
                sessionStorage.setItem('name', response.data);
                this.props.changepage('Dashboard');
            });
        }else{
            alert('The passwords provided are not consistent');
        }
    }

    render(){
        return(
                <div id="signup-container" style={{display:this.props.page==="Signup"?"flex":"none"}}>
                    <div id="firstsignup-container">
                        <div id="signupstack" onClick={()=>{this.props.changepage('Landing');}}>CompareDiff</div>
                        <div id="signupseamless">
                            Seamlessly<br/>compare<br/>multiple<br/>Excel files in<br/>an instant.
                        </div>
                    </div>
                    <h1 id="signuph1">Sign up</h1>
                    <form id="signupform">
                        <table>
                            <tr>
                                <td>
                                    <label class="signupform-labels">Full name</label>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <input id="signupusername" type="text" placeholder="Jubril Chukwu" class="signuptext"/>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <label class="signupform-labels">Email</label>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <input id="signupemail" type="email" placeholder="this@example.com" class="signuptext"/>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <label class="signupform-labels">Password</label>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <input id="signuppassword1" type="password" placeholder="must be at least 6 characters long" minlength="6" class="signuptext"/>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <label class="signupform-labels">Confirm password</label>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <input id="signuppassword2" type="password" minlength="6" class="signuptext"/>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <label class="signupform-labels">Phone number</label>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <input id="signuptel" type="tel" placeholder=" 09037802357" class="signuptext"/>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <input type="checkbox"/>
                                    <label id="signcheckbox-label">I agree to the <a  id="signupa" href="termsofservices.html" >Terms of service</a> and <a  id="signupa" href="privacypolicy.html" >Privacy policy</a></label>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div id="signupbutton" onClick={()=>{this.signup()}}>Get started</div>
                                </td>
                            </tr>
                            <tr>
                                <td id="sign-in">
                                    Already have an account? <div id="signupa" onClick={()=>{this.props.changepage('Login');}}>Login</div><br/>
                                    <div onClick={()=>{this.props.changepage('Landing')}} style={{color:'red'}}>Back</div>
                                </td>
                            </tr>
                        </table>
                    </form>
                </div>
        );
    }
}

export default SignUpPage;