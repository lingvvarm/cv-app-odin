import { useState } from 'react';
import isEqual from 'lodash/isEqual';
import EducationForm from './EducationForm';
import ExperienceForm from './ExperienceForm';

function ItemForm({ toggleShowForm, showForm, items, changeItems, formFill, mode, type }) {
    const [currForm, setCurrForm] = useState(formFill);
    const prevValues = formFill;
    return (
    <form className={`${type}-inputs`}>
      {type === "education" ? <EducationForm formFill={formFill} currForm={currForm} setCurrForm={setCurrForm}/> : 
      <ExperienceForm formFill={formFill} currForm={currForm} setCurrForm={setCurrForm}/>}
      <button type='button' onClick={(e) => {
        e.stopPropagation();
        if (mode === 'edit') {
            const edited = items.map((elem) => {
                if (isEqual(elem, prevValues)) {
                    return currForm;
                }
                else {
                    return elem;
                }
            })
            changeItems(edited);
        }
        else if (mode === 'add') {
            changeItems([...items, currForm]);
        }
        toggleShowForm(!showForm);
      }}>Save</button>
      <button type='button' onClick={() => {
        const edited = items.filter((elem) => !isEqual(elem, prevValues));
        changeItems(edited);
        toggleShowForm(!showForm);
      }}>Delete</button>
      <button type='button' onClick={() => toggleShowForm(!showForm)}>Cancel</button>
    </form>
    
    )
}

export default ItemForm;