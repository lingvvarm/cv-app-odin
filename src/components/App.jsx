import { useState } from 'react';
import PersonalInfo from './PersonalInfo';
import Resume from './Resume';
import DetailsBlock from './DetailsBlock';
import '../styles/App.scss';

const dummyPersonalInfo = {fullName: 'John Doe', email: 'bonanza@gmail.com', phone: '+1130284593', address: 'Wall St. 221b'}
const dummyEducationInfo = [{school: 'Dummy University', degree: 'Master in CS', startDate: '12/2022', endDate: '11/2023', location: 'London, UK'}];
const dummyExperienceInfo = [{companyName: 'Scientific Lab at Texas', positionTitle: 'C++ Game Developer', startDate: '12/2023', endDate: '08/2024', location: 'Whales, UK', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla malesuada nulla ac rhoncus laoreet. Morbi feugiat neque metus, quis ornare mauris molestie sit amet. Curabitur velit risus, euismod eu leo et, volutpat sodales massa. Sed aliquam luctus neque. Integer congue finibus varius. In at lacus sem.'}];

function App() {
  const [personalInfo, setPersonalInfo] = useState(dummyPersonalInfo);
  const [educationInfo, setEducationInfo] = useState(dummyEducationInfo);
  const [experienceInfo, setExperienceInfo] = useState(dummyExperienceInfo);
  return (
    <div className='app'>
      <div className="forms-block">
      <div className="app-btns-block">
        <button className='form-btn' type='button' onClick={() => {
          setPersonalInfo({fullName: '', email: '', phone: '', address: ''});
          setEducationInfo(new Array());
          setExperienceInfo(new Array());
        }}>Clear all</button>
        <button className='form-btn' type='button' onClick={() => {
          setPersonalInfo(dummyPersonalInfo);
          setEducationInfo(dummyEducationInfo);
          setExperienceInfo(dummyExperienceInfo);
        }}>Load example</button>
      </div>
        <div className="inputs-block">
          <PersonalInfo personalInfo={personalInfo} setPersonalInfo={setPersonalInfo}/>
          <div className="details-block">
            <DetailsBlock type="education" items={educationInfo} setItems={setEducationInfo}/>
          </div>
          <div className="details-block">
            <DetailsBlock type="experience" items={experienceInfo} setItems={setExperienceInfo}/>
          </div>
        </div>
      </div>
      <div className="resume-block">
        <Resume personalInfo={personalInfo} educationInfo={educationInfo} experienceInfo={experienceInfo}/>
      </div>
    </div>
  )
}

export default App;
