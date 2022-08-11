import React, { Component } from 'react';
import './featurespage.css';

class FeaturesPage extends Component{
    state={

    }

    render(){
        return(
            <div id="featuresBody" style={{display:this.props.page==="Features"?"flex":"none"}}>
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
                    <div>
                        <div class="firstContainer" id="features">
                            <div>
                                <h1 id="element" class="featuresH1">The top Excel and CSV file comparison tool</h1>
                                <button id="firstButton">Get started</button>
                            </div>
                            <img src="img/hero.png" class="featuresImg" alt=""/>
                        </div>
                    </div>

                    <section>
                        <h1 id="element2" class="featuresH1">Our Features</h1>
                    </section>

                    <section id="section1" style={{backgroundColor: 'red'}}>
                        <img src="img/Ellipse 22.png" id="compareFiles" alt=""/>
                        <div>
                            <a href="stuff.html">
                                <h2 id="compareText" class="featuresH2">Compare Files</h2>
                            </a>
                            <h4 id="compareText2" class="featuresH4">Display your files side by side or combine two spreadsheets
                                into one table to
                                show the differences
                                in each cell.</h4>
                            <div >
                                <img style={{left:'290px', width:'60px', height:'60px'}} src="img/csv1.svg" id="csv" alt=""/>
                                <img style={{left:'370px', width:'40px', height:'40px'}} src="img/arrow-right-arrow-left-solid.svg" id="arrow" alt=""/>
                                <img style={{left:'440px', width:'60px', height:'60px'}} src="img/excel.svg" class="excel" id="excel1" alt=""/>
                            </div>
                        </div>
                        <img src="img/Ellipse 22.png" id="merge" alt=""/>
                        <div>
                            <a href="stuff.html">
                                <h2 id="mergeText" class="featuresH2">Merge Files</h2>
                            </a>
                            <h4 id="mergeText2" class="featuresH4">CompareDiff helps you merge chunks of your files to eliminate
                                duplicates in with
                                just a few easy
                                steps.</h4>
                            <div>
                                <img style={{left:'940px', width:'60px', height:'60px'}} src="img/excel.svg" id="excel2" class="excel" alt=""/>
                                <img style={{left:'1020px', width:'50px', height:'50px'}} src="img/arrows-left-right-to-line-solid.svg" id="arrow2" alt=""/>
                                <img style={{left:'1090px', width:'60px', height:'60px'}} src="img/excel.svg" id="excel3" class="excel" alt=""/>
                            </div>
                        </div>
                    </section>

                    <section id="section2">
                        <img src="img/Ellipse 22.png" id="delete" alt=""/>
                        <div>
                            <a href="stuff.html">
                                <h2 id="deleteText" class="featuresH2">Delete Duplicates</h2>
                            </a>
                            <h4 id="deleteText2">By choosing the cells you want to erase and deleting them, you can remove
                                differences all at once.
                            </h4>
                            <div>
                                <img src="img/excel.svg" class="excel" id="excel4" alt=""/>
                                <img src="img/excel.svg" class="excel" id="excel5" alt=""/>
                            </div>
                        </div>
                        <img src="img/Ellipse 22.png" id="save" alt=""/>
                        <div>
                            <a href="stuff.html">
                                <h2 id="saveText" class="featuresH2">Save and Export Files</h2>
                            </a>
                            <h4 id="saveText2" class="featuresH4">Download and save your computed files as PDF files to your PC.
                            </h4>
                            <div>
                                <img style={{left:'1000px'}} src="img/pdf.svg" id="pdf" alt=""/>
                            </div>
                        </div>
                    </section>

                    <section id="section3">
                        <footer>
                            <ul>
                                <li><a href="#features" id="logo">CompareDiff</a></li>
                                <li><a href="stuff.html" id="policy">Privacy Policy</a></li>
                                <li><a href="stuff.html" id="services">Terms of Services</a></li>
                                <li><a href="stuff.html" id="docs">Documentation</a></li>
                                <li><a href="#features">
                                        <div id="backToTop"></div>
                                    </a></li>
                                <li><a href="#features">
                                        <img src="img/arrow-up-long-solid.svg" id="arrow3" alt=""/>
                                    </a></li>
                            </ul>

                        </footer>
                    </section>
            </div>
        );
    }
}

export default FeaturesPage;