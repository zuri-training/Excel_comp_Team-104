import React, {Component} from "react";
import Axios from 'axios';

class FinalPage extends Component{
    
    state={
        leave:false,
    }

    componentDidUpdate(){
        if(sessionStorage.getItem('analyze')!==null){
            sessionStorage.removeItem('analyze');
            this.analyze();
        }
    }

    analyze = () => {
            sessionStorage.setItem('available', true);
            
            if(sessionStorage.getItem('first')!==null){
                Axios.post('http://localhost:3001/analyze', {
                    first:sessionStorage.getItem('first'),
                    second:sessionStorage.getItem('second'),
                    filename:sessionStorage.getItem('file'),
                }).then((response)=>{
                    
                });
            }else{
                this.setState({leave: true});
                this.props.changepage('Landing');
            }
    }

    render(){
        return(
            <div id="finalpagecontainer" style={{display:this.props.page==="Final"?"flex":"none"}}>
                <div id="finalconth2">Your file is being processed...</div>
                <div id="finalminicont" style={{width:"100%", display: 'flex', justifyContent:'space-aroud', alignItems:'center', flexDirection:'row'}}>
                    <div className="finaldots" style={{maxWidth:this.props.loading===1?'40px':'20px',  maxHeight:this.props.loading===1?'40px':'20px', minWidth:this.props.loading===1?'40px':'20px', minHeight:this.props.loading===1?'40px':'20px'}}></div>
                    <div className="finaldots" style={{maxWidth:this.props.loading===2?'40px':'20px',  maxHeight:this.props.loading===2?'40px':'20px', minWidth:this.props.loading===2?'40px':'20px', minHeight:this.props.loading===2?'40px':'20px'}}></div>
                    <div className="finaldots" style={{maxWidth:this.props.loading===3?'40px':'20px',  maxHeight:this.props.loading===3?'40px':'20px', minWidth:this.props.loading===3?'40px':'20px', minHeight:this.props.loading===3?'40px':'20px'}}></div>
                </div>
            </div>
        );
    }
}

export default FinalPage