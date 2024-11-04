type ButtonProp = {
    handleClick: () => void
}

export const Button = ({handleClick}: ButtonProp) =>{
    return <button onClick={handleClick}> Click me</button>
}