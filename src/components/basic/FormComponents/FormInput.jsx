import "./FormInput.css";

export const FormInput = ({
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
      <label
        className={`form-label ${required ? "required" : ""}`}
        htmlFor={name}
      >
        {label}
      </label>
      <input
        className={`form-input ${isValid ? "valid" : ""} ${
          isError ? "error" : ""
        }`}
        value={inputValue}
        onChange={(event) => onChange(event.target.value)}
        placeholder={placeholder}
        name={name}
        id={name}
        required={required}
        disabled={disabled}
        type={type}
      />
      {isError && <p className={`error-message`}>{error}</p>}
    </div>
  );
};
