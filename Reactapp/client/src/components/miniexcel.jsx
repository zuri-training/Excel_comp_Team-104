import React, { Component } from 'react';
import './dashboardpage.css';

class MiniExcel extends Component{
    render(){
        return(
            <div className="miniXLcont" onClick={()=>{this.props.setactive(this.props.name);}}>
                <div className="miniXL">
                    <img className="miniXLImg" src="img/images.png" alt="not found"/>
                </div>
                <div className="miniXLname">{this.props.name}</div>
                <img className="deleteminiXLImg" alt="not found" src="img/close.png" 
                    style={{display:this.props.active===this.props.name?"flex":"none"}} 
                    onClick={()=>{this.props.deletefile(this.props.name);}}/>
            </div>
        );
    }
}

export default MiniExcel;