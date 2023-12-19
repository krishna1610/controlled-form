import React from "react";

const TextAreaInput = ({message, onChange}) => {
    return (<div className="input-text-div">
        <label htmlFor="msg">Message: </label>
        <textarea
        id="msg"
        name="msg"
        rows="3" cols="20"
        value={message}
        onChange={(e)=>onChange(e.target.value)}></textarea>
    </div>)
};

export default TextAreaInput;
