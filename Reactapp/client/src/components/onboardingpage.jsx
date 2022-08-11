import React, { Component } from 'react';
import './onboardingpage.css';

class OnboardingPage extends Component{
    state={
        first: '',
        second: '',
    }

    updatesecond = (text) => {
        this.setState({second: text});
        this.props.action(this.state.first, text);
    }

    render(){
        return(
            <div id="onboarding" style={{display:this.props.page==="Onboarding"?"flex":"none"}}>
                <div className="onboardingcontent">
                    <div id='leftonboarding'>
                        <div className="onboardingheader">Available Features</div>
                        <div>
                            <div className="bottom-div"  style={{border: this.state.first==='highlight'?'2px #5869BD solid':'2px rgba(0,0,0,0) solid'}} onClick={()=>{this.setState({first: 'highlight'});}}>
                                <img src="img/carbon_license-global.png" alt="" />
                                <h4 style={{marginTop:'30px'}}>Highlight Single File Duplicates</h4>
                                <p style={{marginTop:'30px'}}>
                                    Finds duplicates in each single file uploaded 
                                    and highlights these rows
                                </p>
                            </div>

                            <div className="bottom-div"  style={{border: this.state.first==='remove'?'2px #5869BD solid':'2px rgba(0,0,0,0) solid'}} onClick={()=>{this.setState({first: 'remove'});}}>
                                <img src="img/icon-park-twotone_file-quality-one.png" alt="" />
                                <h4 style={{marginTop:'30px'}}>Remove Single File Duplicates</h4>
                                <p style={{marginTop:'30px'}}>
                                    Finds duplicates in each single file uploaded 
                                    and removes these rows
                                </p>
                            </div>
                        </div>
                    </div>
                    <div id='rightonboarding' style={{display: this.state.first!==''?'flex':'none'}}>
                        <div className="onboardingheader">How do you want your output?</div>
                        <div>
                            <div className="bottom-div"  style={{border: this.state.second==='with'?'2px #5869BD solid':'2px rgba(0,0,0,0) solid'}} onClick={()=>{this.updatesecond('with');}}>
                                <img src="img/carbon_license-global.png" alt="" />
                                <h4 style={{marginTop:'30px'}}>Return edited file with original file</h4>
                            </div>

                            <div className="bottom-div"  style={{border: this.state.second==='without'?'2px #5869BD solid':'2px rgba(0,0,0,0) solid'}} onClick={()=>{this.updatesecond('without');}}>
                                <img src="img/icon-park-twotone_file-quality-one.png" alt="" />
                                <h4 style={{marginTop:'30px'}}>Return edited file without the original file</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

export default OnboardingPage;