import React from 'react';
import './Main.css';
import 'bootstrap/dist/css/bootstrap.min.css';




class Main extends React.Component{
    render(){
        return(
            <div>
              
              <div className='container'>
                    <img className='me item' id='main-image' src="https://lh3.googleusercontent.com/D99nSgB9ssZinHq6q5cX9oegT-D-34_VZ2U2cey1ghtynXWeQ3KJhT1jW11ejO7UBNqx6YLc3mqqahO2LBI9rRIWgqOMvrCtE3glogCT6m9bkIaVYP729Ro8DqN_wEJ439cOUOgCiKerBiURQvTl3U5VedyUQsL8S43r52HHBAlmIfC3UOrHhxDSdbgUSWie88ZphatNTMyw3ahAzunTo1UM5j-pNLqnpZlfA9yk2O2tfy5Z4TnniG_m8XfHPoR7cQqXL8Jlo9FR1QG2_U40qvN3_wMO61H80eaNT_EIl0duYW0WK-0mwWoc4Hp7B-cCm1qNbJxFrzEjd-Yji8YTcdjDjr2SAPY2iD8aMYK_Kcup3r8mCd4LWv2GgO7JPiJcneJ8XSUide2iow5IuuE385p2TJQws3OWXvdrA9S65hfClsEqBufzU4-azSJ9MM7locp7FsNTfyofUaCWSpQrOfQig25N1sHKjUEhYwz787jDYKywtHSlzcJgaP99atzltkYS_6eSTYTTy5D5Czrex1diKw8pctVIMSl2vFoKQM1F0DeVAX6RbtStRNX3xjMq5a10WM4CMMXjar70goo01safVyYKb3vJg7HSbKo-7ZZJ6jigFCh_s82Bn1e0UWy9BQhmiCnMHgbV56anQrrlgP4nHeg-7Gm88EU8EaYjdxt74u6UnUn_Iw=s745-no" alt="background" />
                <div className='center-item'>
                    <h1 className='item who-i-am'>Federico Salinas || <span id='job-description'>Full-Stack Developer</span></h1>
                </div>
            </div>
            
                <div className='flex-item' id='technologies'>
                    HTML 5 | MongoDB | jQuery | Javascript | React | Express | CSS3 | Bootstrap
                </div>
            </div>
        )
    }
}
export default Main;