import { ControlledInput } from './ControlledInputs';
import '../styles/PersonalInfo.scss'

function PersonalInfo({ personalInfo, setPersonalInfo }) {
  return (
    <div className='personal-info'>
      <h1 className='personal-info-header'>Personal details</h1>
      <form className="personal-info-inputs">
      <label htmlFor='fullName'>
        Full Name
      </label>
      <ControlledInput maxLength="35" name='fullName' currForm={personalInfo} changeCurrForm={setPersonalInfo}/>
      <label htmlFor='email'>
        Email
      </label>
      <ControlledInput maxLength="30"  name='email' currForm={personalInfo} changeCurrForm={setPersonalInfo}/>
      <label htmlFor='phone'>
        Phone number
      </label>
      <ControlledInput maxLength="20"  name='phone' currForm={personalInfo} changeCurrForm={setPersonalInfo}/>
      <label htmlFor='address'>
        Address
      </label>
      <ControlledInput maxLength="25"  name='address' currForm={personalInfo} changeCurrForm={setPersonalInfo}/>
      </form>
    </div>
  )
}

export default PersonalInfo;