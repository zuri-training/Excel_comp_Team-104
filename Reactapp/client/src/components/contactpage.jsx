import React, { Component } from 'react';
import './contactpage.css';

class ContactPage extends Component{
    state={

    }

    // Function to go to the top of the page. Button at the end (Footer) arrow inside a circle
    topFunction = () => {
        document.getElementsByTagName('html')[0].scrollTop = 0;
    }

    render(){
        return(
            <div class="contact-body"  style={{display:this.props.page==="Contact"?"flex":"none"}}>
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
                <main>

                    <section class="contact-first-container-girl">
                        <div class="contact-first-container-text">
                            <h2 class="contact-first-container-girl-h2">We are here</h2>
                            <p class="contact-first-container-girl-p">Our door is open <strong>always</strong> and we will love for you to <br/> pay us a visit</p>
                        </div>

                        <div class="contact-girl-image">
                            <img id="girl-image-img" src="img/telephone operator girl.jpg" alt="telephone operator girl"/>
                        </div>

                    </section>

                    <div class="contact-star-image">
                        <img src="img/Star secondary red.png" alt=""/>

                    </div>


                    <section class="contact-second-container-SalesSupport">

                        <div class="Sales">
                            <h4 id="contact-second-containerSalesSupport-h4" class="Sales-h4">Sales</h4>
                            <p class="contact-second-container-SalesSupport-p">Not sure if CompareDiff works for you? <br/> Chat with our team to see we are a fit. </p>


                        </div>



                        <div class="Support">
                            <h4 id="contact-second-container-SalesSupport-h4" class="Support-h4">Support</h4>
                            <p class="contact-second-container-SalesSupport-p">Having a hard time navigating <br/> CompareDiff or managing your account? <br/> Chat or talk to a
                                costumer care <br/> representative using our help center</p>
                        </div>

                    </section>

                    <h3 id="contact-h3">Visit our office</h3>


                    <section class="contact-third-container-location">

                        <div class="google-location">

                            <img src="img/google position.png" alt="google location"/>

                        </div>
                        <div class="contact-text-location">
                            <h4 class="contact-text-location-h4">Drop in to say hi at</h4><br/><br/>
                            <p class="contact-text-location-p"> CompareDiff Headquarters, <br/>
                                Suite 105,<br/>
                                Ikeja City Mall,<br/>
                                Alausa, Ikeja, <br/>
                                Lagos state. <br/><br/>
                                <strong>Phone:</strong> +234 COMPAREDIFF <br/>
                                <strong>Fax:</strong> +234 12667343 <br/><br/>
                                <strong>Our working hours:</strong> 8:00am - 6pm WAT
                            </p>

                        </div>

                    </section>

                </main>

                <footer id="contactFooter">
                    <div class="contactFooter-text">
                        <h1 class="contactH1" id="contactFooter-h1">CompareDiff</h1>
                        <p id="contactFooter-p"> Privacy Policy <br/> <br/>
                            Terms of Service <br/><br/>
                            Documentation</p>
                    </div>

                    <div class="contactFooter-image">
                        <button id="contactArrow-button" type="button"  onClick={()=>{this.topFunction()}} title="Go to top"><img id="contactFooterImg"
                                src="img/button graypurple.png" alt="Arrow up"/></button>
                    </div>

                </footer>
            </div>
        );
    }
}

export default ContactPage;
