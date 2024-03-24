import "./ApartmentInfo.css";
import Dropdown from "../Filter/Dropdown/Dropdown";
import Checkbox from "../Filter/Checkbox/Checkbox";
import FileUpload from "../Filter/FileUpload/FileUpload.jsx";
import CalenderwithLib from "../Filter/Calender/Calenderwithlibrary/Calender.jsx";
import CalenderwithoutLib from "../Filter/Calender/CaldenderwithoutLibraray/CalenderwithoutLib.jsx"



const dropdownOptionList = [
  "Yoga",
  "Indoor Games",
  "Rooftop",
  "Outdoor Deck",
  "Gymnasium",
  "Swimming Pool",
  "Entryway",
];

 const checkboxOptionList = ["1BHK", "2BHK", "3BHK", "4BHK" ,"5BHK"];

const handleOnChange = (e) =>
{
  console.log(e)
  }

const ApartmentInfo = () => {
  return (
    <div className="apatmentInfo">
      <div className="apartmentInfoForm">
        <h1> </h1>
        <h1> </h1>
        {/* <div className="dropdown">
          <span className="label">{"Amenities"}</span>
          <Dropdown
            name="dropdown"
            dropdownOptions={dropdownOptionList}
            onChange={handleOnChange}
          />
        </div>
        <div className="checkbox">
          <span className="label">{"Select your preferred units"}</span>
          <Checkbox
            name="checkboxes"
            checkboxOptions={checkboxOptionList}
            onChange={handleOnChange}
          />
        </div>
        <div className="fileUpload">
          <span className="label">{"Upload Floor Plans"}</span>
          <FileUpload
            name="fileupload"
            onChange={handleOnChange}
          />
        </div> */}
        <div className="Calender">
          <CalenderwithoutLib />
        </div>
      </div>
    </div>
  );
};

export default ApartmentInfo;
