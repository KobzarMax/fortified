import "./FormCustombox.css";

export const FormCustombox = ({
  required,
  disabled,
  type,
  name,
  id,
  label,
  inputValue,
  onChange,
  isValid,
  isError,
}) => {
  return (
    <div className={`form-field-custombox`}>
      {label && (
        <label
          className={`form-label ${required ? "required" : ""}`}
          htmlFor={id}
        >
          <input
            className={`form-input ${isValid ? "valid" : ""} ${
              isError ? "error" : ""
            }`}
            checked={inputValue}
            onChange={(event) => onChange(event)}
            name={name}
            id={id}
            required={required}
            disabled={disabled}
            type={type}
          />
          {label}
        </label>
      )}
    </div>
  );
};
