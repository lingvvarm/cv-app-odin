import { useState } from 'react';
import '../styles/Education.scss';
import '../styles/Experience.scss';
import isEqual from 'lodash/isEqual';
import capitalize from 'lodash/capitalize';
import ItemForm from './ItemForm';
import ItemsList from './ItemsList';

function DetailsBlock({ type, items, setItems }) {
    const [listExpanded, setListExpanded] = useState(false);
    const [showForm, setShowForm] = useState(false);
    // const [items, setItems] = useState(new Array());
    const initialState = (type === 'education' ? {school: '', degree: '', startDate: '', endDate: '', location: ''} :
    {companyName: '', positionTitle: '', startDate: '', endDate: '', location: '', description: ''});
    const [formFill, setFormFill] = useState(initialState)
    const mode = (isEqual(formFill, initialState)) ? 'add': 'edit';
    return (
        <>
        <div className={type} onClick={() => setListExpanded(!listExpanded)}>
            <h1>{capitalize(type)}</h1>
        </div>
        {(listExpanded && !showForm) ? (<ItemsList toggleShowForm={setShowForm} showForm={showForm} items={items} changeFormFill={setFormFill} initialState={initialState} type={type}/>): null}
        {(listExpanded && showForm) ? (<ItemForm toggleShowForm={setShowForm} showForm={showForm} items={items} changeItems={setItems} formFill={formFill} mode={mode} type={type}/>): null}
        </>
    );
}

export default DetailsBlock;