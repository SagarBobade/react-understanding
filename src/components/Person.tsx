import { PersonProps } from "./Person.types"


export const Person = (props: PersonProps) => {
    return <div><h2>{props.first} {props.last}</h2></div>
}