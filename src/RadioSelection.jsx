import React from "react";

const RadioSelection = ({setGenderSelection, genderSelection}) => {
    return(<div className="input-text-div">
        <label htmlFor="male">Male</label>
        <input type="radio" id="male" name="gender" checked={genderSelection === "male"} value="male" onChange={(e)=>setGenderSelection(e.target.value)}></input>
        <label htmlFor="female">Female</label>
        <input type="radio" id="female" name="gender" checked={genderSelection === "female"} value="female" onChange={(e)=>setGenderSelection(e.target.value)}></input>
    </div>)
}
export default RadioSelection;
