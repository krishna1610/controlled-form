import React, {useState} from "react";
import InputText from './InputText';
import TextAreaInput from './TextAreaInput';
import CheckBoxInput from './CheckBoxInput';
import RadioSelection from './RadioSelection';

const Form = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [message, setMessage] = useState('');
    const [checkedBox, setCheckedBox] = useState(false);
    const [genderSelection, setGenderSelection] = useState('');
    const [submission, setSubmission] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmission("Submission is done");
    }

    return(
    <div>
        <h1>Controlled Form</h1>
        <form onSubmit={handleSubmit}>
            <InputText label="FirstName: " value={firstName} onChange={setFirstName} />
            <InputText label="LastName: " value={lastName} onChange={setLastName} />
            <TextAreaInput value={message} onChange={setMessage}/>
            <CheckBoxInput checkedBox={checkedBox} setCheckedBox={setCheckedBox}/>
            <RadioSelection genderSelection={genderSelection} setGenderSelection={setGenderSelection}/>
            <button>Submit</button>
        </form>
        <div>FirstName: {firstName}</div>
        <div>LastName: {lastName}</div>
        <div>Message: {message}</div>
        <div>Is it checked? {checkedBox ? "Yes" : "No"}</div>
        <div>Gender {genderSelection}</div>
        <div>{submission}</div>
    </div>
    )
};

export default Form;
