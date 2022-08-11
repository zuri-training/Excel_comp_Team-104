import React, { Component } from 'react';
import './faqspage.css';

class FaqsPage extends Component{
    state={

    }

    render(){
        return(
            <div id="faq-body"  style={{display:this.props.page==="Faqs"?"flex":"none"}}>
                <header id="faq-header">
                    <h1 class=" faq-logo " onClick={()=>{this.props.changepage('Landing');}}>CompareDiff</h1>
                    <nav class="faq-nav">
                        <ul>
                            <li  onClick={()=>{this.props.changepage('Faqs');}}>Features</li>
                            <li  onClick={()=>{this.props.changepage('About');}}>About</li>
                            <li id=" faq-tiny-li-nav " onClick={()=>{this.props.changepage('Contact');}}>Contact</li>
                        </ul>
                    </nav>
                    <nav class="faq-nav">
                        <ul>
                            <li onClick={()=>{this.props.changepage('Login');}}>Log in</li>
                            <li id=" faq-signupborder " onClick={()=>{this.props.changepage('Signin');}}>Sign up</li>
                        </ul>
                    </nav>
                </header>

                <main class="faq-main ">
                    <section class="faq-first-section ">
                        <div>
                            <h1 class="faq-subhead ">HOW CAN WE HELP?</h1>
                        </div>
                        <div>
                            <p class="faq-below ">
                                Below you will find answers to the most common questions you may have
                                <br /> on CompareDiff. Also please feel free to check out our
                                <a href=" ">Explore</a>.
                            </p>
                        </div>
                        <div>
                            <img id="faq-main-img " src="img/undraw_questions_re_1fy7 1 (1).png " alt=" " />
                        </div>
                    </section>
                    <section class="faq-second-section ">
                        <div class="faq-second-items ">
                            <div class="faq-rectangle-151 ">
                                <div class="faq-rect-items ">
                                    <div>
                                        <p class="faq-bolder-p ">What is CompareDiff</p>
                                        <p class="faq-lesser-p ">
                                            CompareDiff helps examine, highlights and locate differences in your worksheets,<br />as well as merge worksheets automatically saving time and money.
                                        </p>
                                    </div>
                                    <div>
                                        <p class="faq-bolder-p ">How do I make payments on this site?</p>
                                        <p class="faq-lesser-p ">
                                            This platform is totally free. All you need to do is Sign Up and enjoy this great offer.
                                        </p>
                                    </div>
                                    <div>
                                        <p class="faq-bolder-p ">
                                            What Spreadsheet file format is this Excel Diff tool compatible with?
                                        </p>
                                        <p class="faq-lesser-p ">
                                            It supports Excel 2007, 2010, 2013, Excel with Microsoft 365, CSV Files.
                                        </p>
                                    </div>
                                    <div>
                                        <p class="faq-bolder-p ">
                                            How do I know my Excel files has been compared?
                                        </p>
                                        <p class="faq-lesser-p ">
                                            The usage of background colors are been provided for you to see the similarities and differences.
                                        </p>
                                    </div>
                                    <div>
                                        <p class="faq-bolder-p ">
                                            Will I be able to save my compared files?
                                        </p>
                                        <p class=" faq-lesser-p ">
                                            Definitely! Not only will you be able to save files, you'd be given an option to either<br /> export the file as a PDF or Export as an Excel file
                                        </p>
                                    </div>
                                    <div>
                                        <p class=" faq-bolder-p ">
                                            How can I compare two Excel Sheets in same file?
                                        </p>
                                        <p class=" faq-lesser-p ">
                                            Upload same file for both the original and modified section and select sheet accordingly<br />from the dropdown shown
                                        </p>
                                    </div>
                                    <div>
                                        <p class="faq-bolder-p ">Can I share my results?</p>
                                        <p class="faq-lesser-p ">
                                            You can share the results easily with others by sending them around links to specific cells or entire files
                                        </p>
                                    </div>
                                    <div>
                                        <p class="faq-bolder-p ">How do I view previously compared files?</p>
                                        <p class="faq-lesser-p ">
                                            Your history is well kept i.e next time you want the same comparison, its already there
                                        </p>
                                    </div>
                                    <div>
                                        <p class="faq-bolder-p ">What if I do not have Excel installed?</p>
                                        <p class="faq-lesser-p ">
                                            You don't need to have Excel installed on your system. You just need to have the files for comparison
                                        </p>
                                    </div>
                                    <div>
                                        <p class="faq-bolder-p ">
                                            Can I share files directly to email accounts?
                                        </p>
                                        <p class="faq-lesser-p ">
                                            No, only converted files can be directly shared
                                        </p>
                                    </div>
                                    <div>
                                        <p class="faq-bolder-p ">
                                            Is there a convert to PDF option on the site?
                                        </p>
                                        <p class="faq-lesser-p ">
                                            Sure, there is, together with an excel file convert option.
                                        </p>
                                    </div>
                                    <div>
                                        <p class="faq-bolder-p ">
                                            Can I save my edit as I go on the site, if yes, how long?
                                        </p>
                                        <p class="faq-lesser-p ">
                                            It erases after 72 hours of inactive edit
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <h2 class=" faq-h2 ">Still have questions?</h2>
                            <p>
                                If you still need clarity on some issues on ComparDiff, you can always
                                <br /><a href=" ">Contact Us</a> and we promise to get back to you immediately.
                            </p>
                        </div>
                    </section>
                </main>

                <footer id="faq-footer">
                    <div class="faq-footer-text">
                        <h1 class="faq-h1">CompareDiff</h1>
                        <p>
                            Privacy Policy <br />
                            <br /> Terms of Service <br /><br /> Documentation
                        </p>
                    </div>

                    <div class="faq-footer-image">
                        <button id="faq-arrow-button" type="button " onclick={()=>{this.topFunction();}} title="Go to top ">
                    <img src="img/Group 55.png " alt="Arrow up " />
                    </button>
                    </div>
                </footer>
            </div>

        );
    }
}

export default FaqsPage;