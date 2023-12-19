import React from "react";

const InputText = ({value, onChange, label}) => {
    return (<div className="input-text-div">
        <label htmlFor={label}>{label}</label>
        <input type="text" id={label} value={value} onChange={(e)=>onChange(e.target.value)}></input>
    </div>);
};

export default InputText;
