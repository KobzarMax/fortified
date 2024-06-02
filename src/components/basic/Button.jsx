export const Button = ({ size, btnStyle, children, ...props }) => {
    return (
        <button className={`btn ${btnStyle} ${size}`} {...props}>
            {children}
        </button>
    )
}

//size - md | lg
//btnStyle - primary | secondary | tertiary