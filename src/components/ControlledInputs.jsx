import { useState } from "react";

function ControlledInput({ name, currForm, changeCurrForm, initValue }) {
    const [value, setValue] = useState(initValue);
    return (
        <input type="text" id={name}
        value={value}
        onChange={(e) => {
            e.stopPropagation();
            const updatedValue = e.target.value;
            setValue(updatedValue);
            changeCurrForm({...currForm, [name]: updatedValue});
        }}
        />
    )
}

function ControlledTextArea({ name, currForm, changeCurrForm, initValue }) {
    const [value, setValue] = useState(initValue);
    return (
        <textarea id={name} value={value} onChange={(e) => {
            e.stopPropagation();
            const updatedValue = e.target.value;
            setValue(updatedValue);
            changeCurrForm({...currForm, [name]: initValue});
        }}>
        </textarea>
    )
}

export { ControlledInput, ControlledTextArea };