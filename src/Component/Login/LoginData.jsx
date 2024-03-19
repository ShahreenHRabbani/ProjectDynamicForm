import { useState } from "react";

import FormInput from "../Form/FormData";
import "./LoginData.css";

function Login()
 {
        const [formData, setformData] = useState({
            username: "",
            number : "",
            email: "",
            birthday: "",
            password: "",
            confirmPassword: "",
        }); // an array of state variable

        const input = [
            {
            id: 1,
            name: "username",
            type: "text",
            placeholder: "Username",
            label: "Username",
            required: true,
            },
            {
                id: 2,
                name: "phone number",
                type: "number",
                placeholder: "Contact details",
                label: "Contact Number",
                required: true,
            },
            {
            id: 3,
            name: "email",
            type: "text",
            placeholder: "Email",
            label: "Email",
            required: true,
            },
            {
            id: 4,
            name: "birthday",
            type: "date",
            placeholder: "Birthday",
            label: "Birthday",
            },
            {
            id: 5,
            name: "password",
            type: "password",
            placeholder: "Password",
            label: "Password",
            required: true,
            },
            {
            id: 6,
            name: "confirmpassword",
            type: "password",
            placeholder: "Confirm Password",
            label: "Confirm Password",
            pattern: formData.password,
            required: true,
            },
        ];
        //----- Functions 
        const handleSubmit = (e) => {
            e.preventDefault(); // to prevent the page from getting refresh
            console.log(formData);
        };

            const handleOnChange = (e) => {
                setformData({ ...formData, [e.target.name]: e.target.value });
            };

        // console.log (`values`)
        return (
            <div className="login">
            <form onSubmit={handleSubmit}>
                <h1>Form</h1>
                {input.map((input) => (
                <FormInput
                    key={input.id}
                    {...input}
                    value={formData[input.name]}
                    onChange={handleOnChange}
                />
                ))}
                <button onChange={handleSubmit}>Submit</button>
            </form>
            </div>
        );
    }

export default Login;
