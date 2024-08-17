type GreeProps = {
    name: string;
    age: number;
    isOnHoliday?: boolean
}

export const Greet = (props: GreeProps) => {
    return (
        <div>
            <h2>Hello Dear {props.name}, you are now {props.age}</h2>
        </div>
    )
}