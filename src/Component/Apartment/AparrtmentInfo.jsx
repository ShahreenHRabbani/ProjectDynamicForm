import "./ApartmentInfo.css";
import Dropdown from "../Filter/Dropdown/Dropdown";
import Checkbox from "../Filter/Checkbox/Checkbox";
import FileUpload from "../Filter/FileUpload/FileUpload.jsx"


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
      <form className="apartmentInfoForm">
        <h1>Apartment Details</h1>
        <div className="dropdown">
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
        </div>
      </form>
    </div>
  );
};

export default ApartmentInfo;
