import React from 'react';
import './Main.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import resume from '../images/federico_salinas_resume.pdf'




class Main extends React.Component{
    linkedInTab = () => {
            window.open(
                'https://www.linkedin.com/in/federico-salinas-82b648195/',
                '_blank'
              );
    }
    gitHubTab = () => {
        window.open(
            'https://github.com/salinasfez?tab=repositories',
            '_blank'
        );
    }
    emailTab = () => {
        window.open(
            'mailto:federico.salinas0328@gmail.com?subject=hire federico',
            '_blank'
        )
    }
    callFederico = () => {
        window.open(
            'tel:815-909-7133',
            '_blank'
        )
    }

    render(){
        
        return(
            <div>
              <div className='container'>
                    <img className='me item' id='main-image' src={require('../images/bg.jpg')} alt="background" />
                <div className='center-item'>
                    <h1 className='item who-i-am'>Federico Salinas || <span id='job-description'>Full-Stack Developer</span></h1>
                    <p id='technologies-main'>HTML 5 | MongoDB | jQuery | Javascript | React | Express | CSS3 | Bootstrap</p>
                <div className='icon-container'>
                    <img src={require('../images/linkedin.png')} alt={'linkedin'} className='icons' onClick={() => this.linkedInTab()}/>
                    <img src={require('../images/github-icon.png')} alt={'github'} className='icons'onClick={() => this.gitHubTab()}/>
                    <img src={require('../images/email-icon.svg')} alt={'github'} className='icons'onClick={() => this.emailTab()}/>
                    <img src={require('../images/phone-icon.png')} alt={'github'} className='icons' onClick ={() => this.callFederico()}/>
                    {/* <img src={require('../images/resume-icon.svg')} alt={'github'} className='icons' onClick={() => this.downloadResume()}/> */}
                    <a id='resume-link' className='icons' download='federico_salinas_resume.pdf' href={resume}><img  width={'110%'} height={'100%'} src={require('../images/resume-icon.svg')} alt={'github'}/></a>
                </div>
                </div>
            </div>
            </div>
        )
    }
}
export default Main;