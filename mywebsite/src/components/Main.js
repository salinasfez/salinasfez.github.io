import React from 'react';
import './Main.css';
import 'bootstrap/dist/css/bootstrap.min.css';




class Main extends React.Component{
    // componentDidMount () {
    //     const script = document.createElement("script");
    
    //     script.src = "https://platform.linkedin.com/badges/js/profile.js";
    //     script.async = true;
    
    //     document.body.appendChild(script);
    // }
    render(){
        return(
            <div>
              <div className='container'>
                    <img className='me item' id='main-image' src={require('../images/bg.jpg')} alt="background" />
                <div className='center-item'>
                    <h1 className='item who-i-am'>Federico Salinas || <span id='job-description'>Full-Stack Developer</span></h1>
                    <p id='technologies-main'>HTML 5 | MongoDB | jQuery | Javascript | React | Express | CSS3 | Bootstrap</p>
                <div className='icon-container'>
                    <img src={require('../images/linkedin.png')} alt={'linkedin'} className='icons'/>
                    <img src={require('../images/github-icon.png')} alt={'github'} className='icons'/>
                    <img src={require('../images/email-icon.svg')} alt={'github'} className='icons'/>
                    <img src={require('../images/phone-icon.png')} alt={'github'} className='icons'/>
                    <img src={require('../images/resume-icon.svg')} alt={'github'} className='icons'/>
                </div>
                </div>
            </div>
            </div>
        )
    }
}
export default Main;