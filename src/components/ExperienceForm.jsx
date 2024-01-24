import { ControlledInput, ControlledTextArea } from './ControlledInputs';
import '../styles/Forms.scss';

function ExperienceForm({ formFill, currForm, setCurrForm }) {
    return (
      <>
      <label htmlFor='companyName'>
        Company Name
      </label>
      <ControlledInput maxLength="40" name='companyName' currForm={currForm} changeCurrForm={setCurrForm} initValue={formFill.companyName}/>
      <label htmlFor='positionTitle'>
        Position Title
      </label>
      <ControlledInput maxLength="50" name='positionTitle' currForm={currForm} changeCurrForm={setCurrForm} initValue={formFill.positionTitle}/>
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
      <label htmlFor='description'>
        Description
      </label>
      <ControlledTextArea name='description' currForm={currForm} changeCurrForm={setCurrForm} initValue={formFill.description}/>
      </>
    )
}

export default ExperienceForm;