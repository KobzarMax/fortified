import {useEffect, useRef, useState} from "react";
import './FormSelect.css'
import {chevron} from "../../../static/images";

export const FormSelect = ({
  required,
  disabled,
  label,
  placeholder,
  inputValue,
  onChange,
  error,
  isValid,
  isError,
  options,
}) => {
  const [selectValue, setSelectValue] = useState(inputValue);
  const [isOpen, setIsOpen] = useState(false);
  const selectRef = useRef(null);

  const handleToggleDropdown = () => {
    if (!disabled) {
      setIsOpen(!isOpen);
    }
  };

  const handleSelectOption = (value) => {
    setSelectValue(value);
    setIsOpen(false);
    if (onChange) {
      onChange(value);
    }
  };

  const handleClickOutside = (event) => {
    if (selectRef.current && !selectRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className={`form-field`}>
      {label && (
        <p className={`form-label ${required ? "required" : ""}`}>{label}</p>
      )}
      <div
          ref={selectRef}
          className={`form-select-wrapper ${disabled ? "disabled" : ""} ${isValid ? "valid" : ""} ${isError ? "error" : ""} ${isOpen ? "open" : ""}`}
          onClick={handleToggleDropdown}
      >
        <div className="form-select-display">
          {selectValue ? options.find(option => option === selectValue) : placeholder} <img className={`form-select-arrow`} src={chevron} alt="chevron"/>
        </div>
        <div className={`form-select-dropdown`}>
          {options.map((option, index) => (
              <div
                  key={index}
                  className={`form-select-option subtitle md ${option === selectValue ? "selected" : ""}`}
                  onClick={() => handleSelectOption(option)}
              >
                {option}
              </div>
          ))}
        </div>
      </div>
      {isError && <p className={`error-message`}>{error}</p>}
    </div>
  );
};
