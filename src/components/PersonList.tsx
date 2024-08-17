type PersonListProps = {
    names:{
        first: string;
        last: string;
    }[]
}

export const PersonList = (props: PersonListProps) => {
    return (<div>
        <h2>List : </h2>
        {props.names.map((name) => {
            return (
                <h3 key={name.first}>
                    {name.first} {name.last}
                </h3>
            )
        })}
    </div>
    )
}