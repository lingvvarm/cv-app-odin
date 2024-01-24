function ControlledInput({ maxLength, name, currForm, changeCurrForm }) {
    return (
        <input maxLength={maxLength} type="text" id={name}
        value={currForm[name]}
        onChange={(e) => {
            e.stopPropagation();
            const updatedValue = e.target.value;
            changeCurrForm({...currForm, [name]: updatedValue});
        }}
        />
    )
}

function ControlledTextArea({ name, currForm, changeCurrForm }) {
    return (
        <textarea rows={6} id={name} value={currForm[name]} onChange={(e) => {
            e.stopPropagation();
            const updatedValue = e.target.value;
            changeCurrForm({...currForm, [name]: updatedValue});
        }}>
        </textarea>
    )
}

export { ControlledInput, ControlledTextArea };