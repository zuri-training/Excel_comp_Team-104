import React, { Component } from "react";
import "./landingpage.css"

class LandingPage extends Component{
    state = {

    }

    // Function to go to the top of the page. Button at the end (Footer) arrow inside a circle
    topFunction = () => {
        document.getElementsByTagName('html')[0].scrollTop = 0;
    }
    
    render(){
        return(
            <div id="landingBody" style={{display:this.props.page==="Landing"?"flex":"none"}}>
                <main class="landingMain">
                    <header class="landingHeader">
                        <div id="logo-halfnav">
                            <h1 class="landingH1" onClick={()=>{this.props.changepage('Landing');}}>CompareDiff</h1>
                            <nav class="landingNav">
                                <ul class="landingUl">
                                    <li class="landingLi" onClick={()=>{console.log(sessionStorage.getItem('name')); sessionStorage.getItem('name')!==null?this.props.changepage("Dashboard"):this.props.changepage("Login")}}>Features</li>
                                    <li class="landingLi" onClick={()=>{this.props.changepage('About');}}>About</li>
                                    <li class="landingLi" onClick={()=>{this.props.changepage('Contact');}}>Contact</li>
                                </ul>
                            </nav>
                        </div>
                        <nav class="landingNav">
                            <ul>

                                <li class="landingLi" onClick={()=>{this.props.changepage('Login');}}>Log in</li>
                                <li class="landingLi" id="signupborder" onClick={()=>{this.props.changepage('Signup');}}>Sign up</li>
                            </ul>
                        </nav>
                    </header>
                    <section class="landingFirst-container">

                        <div>
                            <p class="landingFirst-container-p"><span id="first-span"> Seamlessly compare <br/> multiple Excel files in <br/> an instant</span>
                                <br/><br/>
                                Check for differences, highlight, and merge your <br/> sheets intuitively with one-click. Say goodbye
                                to <br/> needless hassle today. <br/><br/><br/>

                                <span id="button-span" onClick={()=>{this.props.changepage("Login")}}>Get started &nbsp;<img src="img/arrow-right.svg" class="black-color-svg"
                                        alt="arrow-right"/></span>
                            </p>
                        </div>
                        <div class="worksheet-image">
                            <img src="img/worksheets.svg" alt="a of worksheets"/>

                        </div>

                    </section>

                    <section class="landingSecond-container">
                        <p>A million reasons </p>
                        <h2 class="landingSecond-container-h2">Companies the world over lose <br/> <span id="blury1"> millions yearly</span> due to errors in
                            <br/>their worksheets</h2>

                        <div class="sixGrayParagraph">

                            <div class="treeGrayParagraph">
                                <p class="landingSecond-container-p">In 2020 alone, companies that rely on and <br/> process big data reported an unprecedented <br/>
                                    loss due to errors from using tools that did <br/> not triple check for errors.</p>

                                <p class="landingSecond-container-p">Would you rather spend all day configuring <br/> formulas and tinkering with macros or speed <br/>
                                    up your workflow with only a few clicks? Your <br/>choice should be obvious.</p>

                                <p class="landingSecond-container-p">Have a large worksheet but have no idea <br/> where to start? CompareDiff makes quick work <br/> of
                                    large
                                    spreadsheets; sheets with millions of <br/> records are compared within seconds!!</p>
                            </div>

                            <div class="treeGrayParagraph">
                                <p class="landingSecond-container-p" id="bluish-background">CompareDiff utilises complex algorithms<br/> gleaned from years of test and
                                    research to give<br/> you
                                    accurately results quickly and consistently <br/> so you can focus on doing your best work.
                                </p>
                                <p class="landingSecond-container-p" id="bluish-background1">Our state-of-the-art merge control system is <br/> one of its kind in the
                                    market. It is virtually
                                    <br/> impossible to get the results we offer with <br/>other tools.</p>
                                <p class="landingSecond-container-p" id="bluish-background2">CompareDiff brings together in ana mazing range <br/> of functions
                                    everything you need to handle data
                                    <br/> files of any size and type. We offer enviable <br/> services across board.</p>
                            </div>
                        </div>

                        <div class="pictures-comments">
                            <div class="test">
                                <div class="photo-text">
                                    <img src="img/smiling guy.jpg" alt="a of a smiling guy wearing a gray t-shirt"/>

                                    <p> I discovered CompareDiff at a time where we losing money we didn't <br/> have. Everyone knows
                                        startups
                                        don't make money until hit a certain <br/> stage. We were broke, trying to get investors on
                                        board, and losing <br/> money! <br/><br/> <span>Abdullah Obasanjo</span></p>

                                </div>

                                <div class="white1"></div>
                                <div class="white2"></div>
                                <div class="text-photo">
                                    <p>CompareDiff has made my life easier. I absolutely cannot believe this tool <br/> is free. When
                                        a
                                        colleague recommended I check out this free tool that <br/> helps you compare files, I didn't
                                        expect much. I mean, who expects to <br/> find treasure in the land of free? I did not!
                                        <br/><br/>
                                        <span>Lillian Ogundele-Arnold</span></p>

                                    <img src="img/empowered woman.jpg"
                                        alt="a of a empowered woman wearing an orange coat"/>
                                </div>

                            </div>
                            <h4 id="landingh4">See more reasons why Stack is the best</h4>
                        </div>

                    </section>


                    <section class="landingThird-container">

                        <p class="landingThird-container-p ">One tool to rule them all</p> <br/><br/><br/>
                        <div class="text-funnyBoy-total">
                            <div just-text-funnyBoy>
                                <span id="landingspan-h2">Built with speed and <br/> <span id="blury">accuracy</span> in
                                    mind</span><br/><br/><br/><br/>
                                <p id="landingMain-p-fith-container">Since inception, CompareDiff has been the go-to tool for big data
                                    companies and startups looking for speed and accuracy in their process. We understand the
                                    importance of running a tight ship and the myriad of deadlines that fly over, which is why our
                                    team is positioned to make work
                                    easier and
                                    the future of data conceivable.</p>
                            </div>


                            <div class="funnyBoy-image">
                                <img src="img/funny boy.svg" alt=""/>
                            </div>

                        </div>

                        <div class="anotherTreepar">
                            <p class="anotherTreepar-p"> <span class="anotherTreepar-span">Upload</span> <br/> <br/>Using CompareDiff is as simple as <br/>uploading your files: CSV,
                                XML,<br/>XLS,
                                XLSB, SLK, supported.</p>
                            <p class="anotherTreepar-p"> <span class="anotherTreepar-span">Compare</span> <br/> <br/>The algorithm automatically runs <br/> the moment you upload files,
                                <br/>
                                saving you clicks.</p>
                            <p class="anotherTreepar-p"><span class="anotherTreepar-span">Operations </span> <br/><br/> Perform basic operations like <br/> highlight, differences, modify,
                                <br/>
                                batch edit.</p><br/>

                        </div>
                        <button id="getstarted" type="button" onClick={()=>{sessionStorage.getItem('name')!==undefined?this.props.changepage("Dashboard"):this.props.changepage("Login")}}>Start now <img src="img/arrow-right-long.svg"
                                alt="arrow-right"/></button>

                    </section>
                    <footer class="landingFooter">
                        <div class="landingfooter-text">
                            <h1 class="landingH1" id="landingFooter-h1">CompareDiff</h1>
                            <p class="landingFooter-p"> Privacy Policy <br/> <br/>
                                Terms of Service <br/><br/>
                                Documentation</p>
                        </div>

                        <div class="landingFooter-image">
                            <button id="landingArrow-button" type="button" onClick={()=>{this.topFunction();}} title="Go to top"><img
                                    src="img/arrowbutton.png" alt="Arrow up"/></button>
                        </div>

                    </footer>
                </main>
            </div>
        );
    }
}

export default LandingPage;