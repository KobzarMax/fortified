export const Tag = ({text, type}) => {
    return (
        <span className={`tag ${type}`}>
            {text}
        </span>
    )
}

//type - containered | text