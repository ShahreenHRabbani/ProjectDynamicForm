import { useState } from "react";
import "./FormData.css"


const FormData = (props)=>
{   
    const [focused, setFocused] = useState(false);
    const {label ,  onChange , ...inputprops} = props;




    const handleFocus = (e) => {
        setFocused(true);
    };

    return(
       <div className="form"> 
           <label>{label}</label>
           <input className="input" {...inputprops} onChange={onChange}
           onBlur={handleFocus}
           onFocus={() =>
             inputprops.name === "confirmPassword" && setFocused(true)
           }
           focused={focused.toString()}
            ></input>
            
           
       </div>
    )
}


export default FormData ;