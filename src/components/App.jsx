import { useState } from 'react';
import PersonalInfo from './PersonalInfo';
import Resume from './Resume';
import DetailsBlock from './DetailsBlock';
import '../styles/App.scss';


function App() {
  const [personalInfo, setPersonalInfo] = useState({fullName: '', email: '', phone: '', address: ''});
  const [educationInfo, setEducationInfo] = useState(new Array());
  const [experienceInfo, setExperienceInfo] = useState(new Array());
  return (
    <div className='app'>
      <div className="inputs-block">
        <PersonalInfo personalInfo={personalInfo} setPersonalInfo={setPersonalInfo}/>
        <DetailsBlock type="education" items={educationInfo} setItems={setEducationInfo}/>
        <DetailsBlock type="experience" items={experienceInfo} setItems={setExperienceInfo}/>
      </div>
      <div className="resume-block">
        <Resume personalInfo={personalInfo} educationInfo={educationInfo} experienceInfo={experienceInfo}/>
      </div>
    </div>
  )
}

export default App;
