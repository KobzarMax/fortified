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
  error,
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
            value={inputValue}
            // onChange={(event) => onChange(event.target.value)}
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
