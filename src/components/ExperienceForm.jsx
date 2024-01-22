import { ControlledInput, ControlledTextArea } from './ControlledInputs';
import '../styles/ExperienceForm.scss';

function ExperienceForm({ formFill, currForm, setCurrForm }) {
    return (
      <>
      <label htmlFor='companyName'>
        Company Name
      </label>
      <ControlledInput name='companyName' currForm={currForm} changeCurrForm={setCurrForm} initValue={formFill.companyName}/>
      <label htmlFor='positionTitle'>
        Position Title
      </label>
      <ControlledInput name='positionTitle' currForm={currForm} changeCurrForm={setCurrForm} initValue={formFill.positionTitle}/>
      <label htmlFor='startDate'>
        Start date
      </label>
      <ControlledInput name='startDate' currForm={currForm} changeCurrForm={setCurrForm} initValue={formFill.startDate}/>
      <label htmlFor='endDate'>
        End date
      </label>
      <ControlledInput name='endDate' currForm={currForm} changeCurrForm={setCurrForm} initValue={formFill.endDate}/>
      <label htmlFor='location'>
        Location
      </label>
      <ControlledInput name='location' currForm={currForm} changeCurrForm={setCurrForm} initValue={formFill.location}/>
      <label htmlFor='description'>
        Description
      </label>
      <ControlledTextArea name='description' currForm={currForm} changeCurrForm={setCurrForm} initValue={formFill.description}/>
      </>
    )
}

export default ExperienceForm;