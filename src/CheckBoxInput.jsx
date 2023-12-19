import React from "react";

const CheckBoxInput = ({checkedBox, setCheckedBox}) => {

    const handleCheckBox = (e) => {
        if(e.target.checked){
            setCheckedBox(true);
        }else{
            setCheckedBox(false);
        }
    };

    return (<div className="input-text-div">
    <input type="checkbox" id="cb" checked={checkedBox} onChange={handleCheckBox}></input>
    <label htmlFor="cb">Is it checked?</label>
    </div>)
};

export default CheckBoxInput;
