import React, { Component } from 'react';
import './aboutuspage.css';

class AboutUsPage extends Component{
    state={

    }

    topFunction = () => {
        document.getElementsByTagName('html')[0].scrollTop = 0;
    }

    render(){
        return(
            <div id="Aboutbody" style={{display:this.props.page==="About"?"flex":"none"}}>
                <section class="aboutsect1">
                    <table class="abouttable1">
                        <tr>
                            <td class="aboutlogo" style={{width:"15%"}} onClick={()=>{this.props.changepage('Landing')}}>CompareDiff</td>
                            <td id="abouttd" style={{width:"8%"}} onClick={()=>{sessionStorage.getItem('name')!==null?this.props.changepage("Dashboard"):this.props.changepage("Login")}}>Features</td>
                            <td id="abouttd" style={{width:"8%"}} onClick={()=>{this.props.changepage('About')}}>About</td>
                            <td id="abouttd" style={{width:"30%"}} onClick={()=>{this.props.changepage('Contact')}}>Contact</td>
                            <td id="abouttd" style={{width:"5%"}} onClick={()=>{this.props.changepage('Login')}}>Log in</td>
                            <td id="abouttd" style={{width:"5%"}} onClick={()=>{this.props.changepage('Signup')}}>Sign Up</td>
                        </tr>
                    </table>
                    <h1 id="abouth1">About Us</h1>
                    <p id="aboutp1"> 
                        Founded in 2022, CompareDiff is a platform developed to offer end users the ability to execute endless tasks on their datasets in a seamless way and easily accessible on any device through any browser of choice.
                    </p>
                </section>
                <section class="aboutsect2">
                        <h1 id="aboutmiss">Our Mission</h1>
                        <p id="aboutp2">
                            We aim to make our users of datasets (whether small or large) interact with a reliable platform that is functional and offers fast as well as error-free results which in turn, aids their productivity
                        </p>
                </section>
                <div class="aboutteam">
                    <h1 id="abouth2">Our Team</h1>
                </div>
                <section class="aboutrow">
                    <div class="aboutcolumn">
                        <img id="aboutimg" src="img/alex-starnes-PK_t0Lrh7MM-unsplash.jpg" alt="woman smiling"/>
                        <p id="aboutp">Designer</p>
                    </div>
                    <div class="aboutcolumn">
                        <img id="aboutimg" src="img/clive-surreal-9kQBQqY_xrk-unsplash.jpg" alt="shinning teeth woman"/>
                        <p id="aboutp">Developer</p>
                    </div>
                    <div class="aboutcolumn">
                        <img id="aboutimg" src="img/photo-1630208232589-e42b29428b19.jpg" alt="folding arms guy"/>
                        <p id="aboutp">Developer</p>
                    </div>
                </section>
                <br/>
                <br/>
                <section class="aboutrow">
                    <div class="aboutcolumn">
                        <img id="aboutimg"  src="img/elizeu-dias-2EGNqazbAMk-unsplash.jpg" alt="nice smile guy"/>
                        <p id="aboutp">Designer</p>
                    </div>
                    <div class="aboutcolumn">
                        <img id="aboutimg"  src="img/photo-1596529258120-29aec0ce4d63.jpg" alt="stoic man"/>
                        <p id="aboutp">Developer</p>
                    </div>
                    <div class="aboutcolumn">
                        <img id="aboutimg"  src="img/good-faces-QDRCvXpP18U-unsplash.jpg" alt="hijabi"/>
                        <p id="aboutp">Designer</p>
                    </div>
                </section>
                <br/>
                <section class="aboutlast">
                    <h3 id="abouth3">It is one thing to work HARD, it is another thing to work SMART. Choose SMARTNESS with CompareDiff</h3>
                    <button>Get Started</button>
                </section>

                <footer class="aboutfooter">
                    <div class="aboutrow2">
                        <div class="aboutcolumn2">
                            <h4 id="abouth4">CompareDiff</h4>
                            <br/>
                            <ul class="aboutul">
                                <li>Privacy Policy</li>
                                <br/>
                                <li>Terms of Service</li>
                                <br/>
                                <li>Documentation</li>
                                <br/>
                            </ul>
                        </div>
                        <div class="column3">
                            <div class="aboutimg">
                                <img id="image" src="img/Group 56.png" alt="arrow-up" onClick={()=>{this.topFunction()}}/>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        );
    }
}

export default AboutUsPage;