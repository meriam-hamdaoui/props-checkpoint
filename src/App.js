import React from 'react';
import './App.css';
import Profile from './profile/Profile';
import image1 from './maya.jpg'
import image2 from './webDev.jpg'



function App() {
  const fullName = "HAMDAOUI Mariem";
  const bio = <h3>Full Stack JS Developer</h3>;
  const description = <p>
                I'm a network engineer, I love to organize and designate so I decided                
                to learn the web developpement, I founded amusing and I enjoy it                
                This is my web site using react and I'm gonna list my skills and my certificates on it               
                You can consult and download my resume from <a 
                href="https://drive.google.com/file/d/1Pi3e7egOXiD9hlErDWEqARpfl3sOoaw_/view?usp=sharing" 
                id="resume-link">this link</a>
              </p>;
  
  const handleName =() => {
    alert(`Welcome to ${fullName} profile`)
  }
  return (
    <div className="App">
      <Profile fullName={fullName}
              bio={bio} 
              description={description} 
              handleName={handleName}>
        <img style={{width: 250, height: 250, borderRadius: 400/ 2}}  src={image1} alt='maya'/>
      </Profile>
      <Profile >
        <img style={{width: 250, height: 250, borderRadius: 400/ 2}}  src={image2} alt='photo'/>
      </Profile>
    </div>
  );
}

export default App;
