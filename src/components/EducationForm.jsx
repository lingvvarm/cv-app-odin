import { ControlledInput } from './ControlledInputs';
import '../styles/EducationForm.scss';

function EducationForm({ formFill, currForm, setCurrForm }) {
    return (
      <>
      <label htmlFor='school'>
        School
      </label>
      <ControlledInput name='school' currForm={currForm} changeCurrForm={setCurrForm} initValue={formFill.school}/>
      <label htmlFor='degree'>
        Degree
      </label>
      <ControlledInput name='degree' currForm={currForm} changeCurrForm={setCurrForm} initValue={formFill.degree}/>
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
      </>
    )
}

export default EducationForm;