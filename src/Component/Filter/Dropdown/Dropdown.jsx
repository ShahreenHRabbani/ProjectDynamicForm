import React, { useState, useEffect, useRef } from "react";
import "./Dropdown.css";  // Ensure to create this CSS file

const SearchableDropdown = ({ dropdownOptions, onChange, name, savedValue}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState(dropdownOptions);
  const [selectedItems, setSelectedItems] = useState([]);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    setFilter(
      dropdownOptions.filter(
        (item) =>
          item.toLowerCase().includes(search.toLowerCase()) &&
          !selectedItems.includes(item) // Exclude selected items from the filter
      )
    );
  }, [search, dropdownOptions, selectedItems]);

  const handleOptionClick = (item) => {
    setSelectedItems((prevItems) => [...prevItems, item]);
    setIsOpen(false);
    setSearch("");
    // Inform parent component about the change
    onChange({ target: { value: [...selectedItems, item], name: name } });
  };

  const handleKeyDown = (event) => {
    if (event.key === "Backspace") {
      setSelectedItems((prevItems) => prevItems.slice(0, prevItems.length - 1));
    }
  };

  return (
    <div className="dropdown" ref={dropdownRef}>
      <input
        type="text"
        placeholder="Search..."
        value={selectedItems.join(", ")}
        onChange={(e) => setSearch(e.target.value)}
        onKeyDown={handleKeyDown}
        className="search"
        onClick={() => setIsOpen(!isOpen)}
      />

      {isOpen && (
        <div className="menu">
          <ul className="list">
            {filter.map((item, index) => (
              <li
                key={index}
                className="item"
                onClick={() => handleOptionClick(item)}
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default SearchableDropdown;
