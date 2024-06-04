import './FormWrapper.css'

export const FormWrapper = ({ title, size,  children }) => {
    return (
        <div className={`form-wrapper ${size}`}>
            <div className="form-inner">
                <h2 className={`form-wrapper-title gradient-title`}>{title}</h2>
                {children}
            </div>
        </div>
    )
}

//size - lg | md