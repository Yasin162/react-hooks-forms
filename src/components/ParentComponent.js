import react, { useState } from "react";
import DisplayData from "./DisplayData";
import Form from "./Form";

const ParentComponent = () => {

    const [firstName, setFirstName] = useState("John");
    const [lastName, setLastName] = useState("Henry");

    const handleFirstNameChange = (e) => {
        setFirstName(e.target.value)
    }
  
    const handleLastNameChange = (e) => {
        setLastName(e.target.value)
    }

    return (
        <div>
        <Form
            firstName={firstName}
            lastName={lastName}
            handleFirstNameChange={handleFirstNameChange}
            handleLastNameChange={handleLastNameChange}
            />
        <DisplayData firstName={firstName} lastName={lastName} />
            </div>
    )
}

export default ParentComponent;