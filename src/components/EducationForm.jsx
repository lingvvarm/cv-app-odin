import { ControlledInput } from './ControlledInputs';
import '../styles/Forms.scss';

function EducationForm({ formFill, currForm, setCurrForm }) {
    return (
      <>
      <label htmlFor='school'>
        School
      </label>
      <ControlledInput maxLength="45" name='school' currForm={currForm} changeCurrForm={setCurrForm} initValue={formFill.school}/>
      <label htmlFor='degree'>
        Degree
      </label>
      <ControlledInput maxLength="50" name='degree' currForm={currForm} changeCurrForm={setCurrForm} initValue={formFill.degree}/>
      <div className="date-blocks">
        <div className="date-block">
          <label htmlFor='startDate'>
            Start date
          </label>
          <p className='date-format-advice'>format: mm/yyyy</p>
          <ControlledInput maxLength="8" name='startDate' currForm={currForm} changeCurrForm={setCurrForm} initValue={formFill.startDate}/>
        </div>
        <div className="date-block">
          <label htmlFor='endDate'>
            End date
          </label>
          <p className='date-format-advice'>format: mm/yyyy</p>
          <ControlledInput maxLength="8" name='endDate' currForm={currForm} changeCurrForm={setCurrForm} initValue={formFill.endDate}/>
        </div>
      </div>
      <label htmlFor='location'>
        Location
      </label>
      <ControlledInput maxLength="20" name='location' currForm={currForm} changeCurrForm={setCurrForm} initValue={formFill.location}/>
      </>
    )
}

export default EducationForm;