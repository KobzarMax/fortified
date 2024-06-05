import "./FormInput.css";

export const FormTextarea = ({
  required,
  disabled,
  name,
  type,
  label,
  placeholder,
  inputValue,
  onChange,
  error,
  isValid,
  isError,
}) => {
  return (
    <div className={`form-field`}>
      {label && (
        <label
          className={`form-label ${required ? "required" : ""}`}
          htmlFor={name}
        >
          {label}
        </label>
      )}
      <textarea
        className={`form-input ${isValid ? "valid" : ""} ${
          isError ? "error" : ""
        }`}
        value={inputValue}
        // onChange={(event) => onChange(event.target.value)}
        placeholder={placeholder}
        name={name}
        id={name}
        required={required}
        disabled={disabled}
      ></textarea>
      {isError && <p className={`error-message`}>{error}</p>}
    </div>
  );
};
