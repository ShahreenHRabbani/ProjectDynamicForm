import { useState } from "react";

import FormInput from "../Form/FormData";
import "./LoginData.css";

function Login()
 {
        const [formData, setformData] = useState({
            username: "",
            phonenumber : "",
            email: "",
            gender : "",
            birthday: "",
            password: "",
            confirmpassword: "",
        }); // an array of state variable
        const [isDisabled, setIsDisabled] = useState(true);

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
                name: "phonenumber",
                type: "text",
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
                name: "gender",
                type: "radio",
                options: ["Male", "Female", "Others"], // Add options for gender
                label: "Gender",
                required: true,
            },
            {
            id: 5,
            name: "birthday",
            type: "date",
            placeholder: "Birthday",
            label: "Birthday",
            },
            {
            id: 6,
            name: "password",
            type: "password",
            placeholder: "Password",
            label: "Password",
            required: true,
            pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
            errormsg: "Password should be 8-16 characters long and contain at least one uppercase letter, one lowercase letter, one number, and one special character"
            },
            {
            id: 7,
            name: "confirmpassword",
            type: "password",
            placeholder: "Confirm Password",
            label: "Confirm Password",
            required: true,
            }
        ];
        //----- Functions 
        const handleSubmit = (e) => {
                e.preventDefault(); // to prevent the page from getting refresh
                
                // Email validation
                if (!/\S+@\S+\.\S+/.test(formData.email)) {
                    alert("Please enter a valid email address");
                    return;
                }
                // Password validation
                if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,16}$/.test(formData.password)) {
                    alert("Password should be 8-16 characters long and contain at least one uppercase letter, one lowercase letter, one number, and one special character");
                    return;
                }
                // // Confirm password validation
                if (formData.password !== formData.confirmpassword) {
                    alert("Password and Confirm Password do not match");
                    return;
                }
                // Form is valid, proceed with submission
                console.log("Form submitted:", formData);
           
        };

        const handleOnChange = (e) => {
          const { name, value } = e.target;
          
            // Validate input based on the field name
            switch (name) {
              case "username":
                // Allow only alphabets and ensure length is less than or equal to 16
                if (/^[a-zA-Z]*$/.test(value) && value.length <= 16) {
                  setformData({ ...formData, [name]: value });
                }
                break;
               case "phonenumber":
                // Allow only digits and ensure length is less than or equal to 10
                if (/^\d*$/.test(value) && value.length <= 10) {
                  setformData({ ...formData, [name]: value });
                }
                break;
               default:
                // For other fields, simply update the formData state
                setformData({ ...formData, [name]: value });
                break;
            }
        };
  
     const onhandleChange = (e) =>
     { 
       const { name, value } = e.target;
       if (name === "confirmpassword") {
         setformData({ ...formData, [name]: value });
         if (formData.username && formData.phonenumber && formData.email && formData.password) {
             console.log(formData.username);
             setIsDisabled(!isDisabled);
           }   
       }
     }

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
                  onClick={onhandleChange}
                />
              ))}
              <button
                className={isDisabled ? "disabled" : ""}
                // onClick={() => setIsDisabled(!isDisabled)}
                style={{ pointerEvents: isDisabled ? "none" : "auto" }}
              >
                Submit
              </button>
            </form>
          </div>
        );
    }

export default Login;
