import React, { Component } from 'react';
import './errorpage.css';

class ErrorPage extends Component{
    state={

    }

    render(){
        return(
            <div id="errorbody" style={{display:this.props.page==="Error"?"flex":"none"}}>
                <table class="errortable1">
                    <tr>
                        <td class="errorlogo" style={{width:"15%", fontWeight:"bold"}} onClick={()=>{this.props.changepage('Landing');}}>CompareDiff</td>
                        <td id="errortd" style={{width:"8%", fontWeight:"bold"}} onClick={()=>{this.props.changepage('Dashboard');}}>Features</td>
                        <td id="errortd" style={{width:"8%", fontWeight:"bold"}} onClick={()=>{this.props.changepage('About');}}>About</td>
                        <td id="errortd" style={{width:"30%", fontWeight:"bold"}} onClick={()=>{this.props.changepage('Contact');}}>Contact</td>
                        <td id="errortd" style={{width:"5%", fontWeight:"bold"}} onClick={()=>{this.props.changepage('Login');}}>Log in</td>
                        <td id="errortd" style={{width:"5%", fontWeight:"bold"}} onClick={()=>{this.props.changepage('Signup');}}>Sign Up</td>
                    </tr>
                </table>
                <img id="errorimg" src="img/OOPS 404- PG NT FOUND.png" alt="Error"/>
                <div class="errorp1">
                    <p>It seems you tried to analyze without uploading a file ...</p>
                </div>
                <br/>
                <div class="errorimg">
                    <img id="errorimg" src="img/emojione-monotone_thinking-face.png" alt="emojione-monotone_thinking-face"/>
                </div>
                <div class="errorp2">
                    <p>Don't worry, let's help you find your back home</p>
                </div>
                <div class="errorbtn">
                    <button id="errorbtn" onClick={()=>{this.props.changepage('Landing')}}>Back to home</button>
                </div>
        </div>
        );
    }
}

export default ErrorPage;