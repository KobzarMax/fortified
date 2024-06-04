export const FormSelect = ({
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
                               isError, options
                           }) => {
    return (
        <div className={`form-field`}>
            <label
                className={`form-label ${required ? "required" : ""}`}
                htmlFor={name}
            >
                {label}
            </label>
            {isError && <p className={`error-message`}>{error}</p>}
        </div>
    )
}