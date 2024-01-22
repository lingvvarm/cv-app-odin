import { ControlledInput } from './ControlledInputs';
import '../styles/PersonalInfo.scss'

function PersonalInfo({ personalInfo, setPersonalInfo }) {
  const initValue = {fullName: '', email: '', phone: '', address: ''};
  return (
    <div className='personal-info'>
      <h1>Personal details</h1>
      <form className="personal-info-inputs">
      <label htmlFor='fullName'>
        Full Name
      </label>
      <ControlledInput name='fullName' currForm={personalInfo} changeCurrForm={setPersonalInfo} initValue={initValue.fullName}/>
      <label htmlFor='email'>
        Email
      </label>
      <ControlledInput name='email' currForm={personalInfo} changeCurrForm={setPersonalInfo} initValue={initValue.email}/>
      <label htmlFor='phone'>
        Phone number
      </label>
      <ControlledInput name='phone' currForm={personalInfo} changeCurrForm={setPersonalInfo} initValue={initValue.phone}/>
      <label htmlFor='address'>
        Address
      </label>
      <ControlledInput name='address' currForm={personalInfo} changeCurrForm={setPersonalInfo} initValue={initValue.address}/>
      </form>
    </div>
  )
}

export default PersonalInfo;