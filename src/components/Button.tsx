type ButtonProp = {
    handleClick: () => void
}

export const Button = (props: ButtonProp) =>{
    return <button onClick={props.handleClick}> Click me</button>
}