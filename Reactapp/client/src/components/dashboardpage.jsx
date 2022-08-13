import React, { Component } from 'react';
import MiniExcel from './miniexcel';
import './dashboardpage.css';

class DashboardPage extends Component{
    state = {
        active: false,
        filenames: [],
        fileinfo: [],
        activefile: "",
    }


    shit = () => {
        
    }

    fileopener = () => {
        document.getElementById('fileopener').click();
    }

    update = (files) => {
        let names = [files.name];
        let info = [files];

        this.setState({filenames: names, fileinfo: info, active:false});
    }

    analyze = () => {
        if(this.state.fileinfo.length<1){
            this.props.changepage("Error");
        }else{
            this.props.updatefiles(this.state.fileinfo);
            this.props.changepage("Onboarding");
        }

    }

    deletefile = (filename) => {
        let index = this.state.filenames.indexOf(filename);
        
        let names = this.state.filenames;
        let info = this.state.fileinfo;
        names.splice(index, 1);
        info.splice(index, 1);
        console.log(names);
        this.setState({fileinfo: info, filenames: names});
    }

    setactive = (name) => {
        this.setState({activefile: name});
    }

    render(){
        return(
                <div id="dashboardcont" style={{display:this.props.page==="Dashboard"?"flex":"none"}}>
                    <div id='uploadscont'>
                        {   
                            this.state.filenames.length>0?
                                this.state.filenames.map(filename=>{
                                    return(
                                        <MiniExcel
                                            key={filename}
                                            name={filename}
                                            active={this.state.activefile}
                                            deletefile={this.deletefile}
                                            setactive={this.setactive}
                                        />
                                    );
                                })
                            :""
                        }
                    </div>
                    <div id="analyzecont">
                        <button id="analyzebtn" onClick={()=>{this.analyze()}}>Analyze</button>
                    </div>
                    <div className="content-area">
                        <div className="drag-area" 
                            onDragOver={(e)=>{e.preventDefault(); this.setState({active:true});}} 
                            onDragLeave={(e)=>{e.preventDefault(); this.setState({active:false});}} 
                            onDrop={(e)=>{
                                e.preventDefault(); 
                                let files = e.dataTransfer.files[0];
                                let extcorr = true;
                                    if( !( ['.csv', '.xlsx'].includes(files.name.slice(files.name.lastIndexOf('.'))) ) ){
                                        extcorr = false
                                        alert(files.name+' is a file extension that is not allowed');
                                    }

                                if(extcorr){
                                    this.update(files); 
                                }
                            }}
                            style={{border: this.state.active===true?"2px green solid": "0px",}}>
                            <div className="icon">
                                <img id="drag-icon" src="img/export.svg" alt=""/>
                            </div>
                            <p className="mt-3">Drop files here (only .xlsx and .csv)</p>
                            <input id="fileopener" type="file" onChange={(e)=>{this.update(e.target.files[0]);}} hidden accept=".csv,.xlsx"/>
                        </div>

                        <button className="open-file" onClick={()=>{this.fileopener()}}>Click to upload from your device</button>
                    </div>
                </div>
        );
    }
}

export default DashboardPage;