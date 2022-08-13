import React, { Component } from 'react';
import './App.css';
import LandingPage from './components/landingpage';
import ContactPage from './components/contactpage';
import AboutUsPage from './components/aboutuspage';
import ErrorPage from './components/errorpage';
import FaqsPage from './components/faqspage';
import LoginPage from './components/loginpage';
import SignUpPage from './components/signuppage';
//import FeaturesPage from './components/featurespage';
import OnboardingPage from './components/onboardingpage';
import DashboardPage from './components/dashboardpage';
import FinalPage from './components/finalpage';
import Axios from 'axios';

class App extends Component{
    state = {
        page:"Landing",
        files: null,
        loading:1,
    }

    componentDidMount(){
        if(sessionStorage.getItem('available') !== null){
            this.setState({page: 'Landing'});
            
            if(sessionStorage.getItem('second')==='with'){
                let path = ('files/'+sessionStorage.getItem('file')).trim();
                document.getElementById('hereby2').setAttribute('href', path);
                alert(path);
                document.getElementById('hereby2').click();
            }

            sessionStorage.removeItem('file');
            
            
            if(sessionStorage.getItem('first') !== null){
                if(sessionStorage.getItem('first') === 'remove'){
                    document.getElementById('hereby').setAttribute('href', 'files/remove.xlsx');
                }else{
                    document.getElementById('hereby').setAttribute('href', 'files/highlight.xlsx');
                }
                
                document.getElementById('hereby').click();
            }

            sessionStorage.removeItem('first', null);
            sessionStorage.removeItem('second', null);
            sessionStorage.removeItem('available', null);

        }
        
        if(sessionStorage.getItem('file')!==null){
            sessionStorage.setItem('analyze', true);
            setInterval(this.loader, 1500);
            this.setState({page: 'Final'});
        }

    }
    

    changepage = (pagename) => {
        this.setState({page: pagename});
    }

    updatefiles = (files) => {
        this.setState({files: files});
    }

    loader=()=>{
        let num = this.state.loading;
        if((num+1)>3){num=1;}else{++num;}
        this.setState({loading:num});
    }

    action = (first, second) => {
        console.log(first+'+++++'+second);
        console.log(this.state.files);
        if(sessionStorage.getItem("name") !== null){
            sessionStorage.setItem("first", first);
            sessionStorage.setItem("second", second);
            sessionStorage.setItem("file", this.state.files[0].name);
            
            //Uploads the files and carries out task
            let form = new FormData();
            let arr = [];
            let files = this.state.files;
            for(let i=0; i<files.length; i++){
                form.append('file', files[i]);
                arr.push(files[i]);
            }
            form.append('fileArr', arr);
            console.log(arr);
            Axios.post('http://localhost:3001', form, { }).then((response)=>{
                console.log(response.data);
                console.log('done');
            });
        }
    }
    

    render(){
        return(
            <div style={{width:"100vw", height:"100vh", overflowX:"hidden"}}>
                <a id="hereby" href="stuff.html" style={{display: 'none'}} download>**</a>
                <a id="hereby2" href="stuff.html" style={{display: 'none'}} download>**</a>
                <LandingPage
                    page={this.state.page}
                    changepage={this.changepage}
                />
                <ContactPage
                    page={this.state.page}
                    changepage={this.changepage}
                />
                <FaqsPage
                    page={this.state.page}
                    changepage={this.changepage}
                />
                <OnboardingPage
                    page={this.state.page}
                    changepage={this.changepage}
                    action={this.action}
                />
                <DashboardPage
                    page={this.state.page}
                    changepage={this.changepage}
                    updatefiles={this.updatefiles}
                />
                <AboutUsPage
                    page={this.state.page}
                    changepage={this.changepage}
                />
                <ErrorPage
                    page={this.state.page}
                    changepage={this.changepage}
                />
                <LoginPage
                    page={this.state.page}
                    changepage={this.changepage}
                />
                <SignUpPage
                    page={this.state.page}
                    changepage={this.changepage}
                />
                <FinalPage
                    page={this.state.page}
                    changepage={this.changepage}
                    loading={this.state.loading}
                />
            </div>
        );
    }
}

export default App;
