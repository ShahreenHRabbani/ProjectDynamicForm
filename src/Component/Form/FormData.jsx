import { useState } from "react";
import "./FormData.css"


const FormData = (props)=>
{   const [focused, setFocused] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const {label ,  onChange , ...inputprops} = props;


    const handleFocus = (e) => {
        setFocused(true);
    };

    const handleChange = (e) => {
        onChange(e);
    

          if (inputprops.name === "password") {
            
              setErrorMessage("Password should be 8-16 characters long and contain at least one uppercase letter, one lowercase letter, one number, and one special character");
            } 
          else if (inputprops.name === "confirmPassword") {
              setErrorMessage("Password and Confirm Password do not match");
            } 
          
          
        
      };

    return(
       <div className="form"> 
           <label>{label}</label>
           {inputprops.type === 'radio' ? (
           <div>
                {inputprops.options.map((option, index) => (
                    <div key={index}>
                    <input
                        className="input"
                        type="radio"
                        id={`${inputprops.name}-${index}`}
                        name={inputprops.name}
                        value={option}
                        onChange={onChange}
                        //) => onChange({ target: { value: option } })
                    />
                    <label>{option}</label>
                   </div>
                ))}
         </div>
       ) : (
        <input className="input" {...inputprops} onChange={onChange}
        onBlur={handleFocus}
        onFocus={() =>
          inputprops.name === "confirmPassword" && setFocused(true)
        }
        focused={focused.toString()}
         ></input>
       )}
     
        <span className="error">{inputprops.errormsg}</span>
        
     </div>
            
           
       
    )
}


export default FormData ;