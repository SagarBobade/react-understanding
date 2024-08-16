type headerProp = {
    children: string
}

export const Header = (props: headerProp) =>{
    return (
        <div>
            <h2>{props.children}</h2>
        </div>
    )
}