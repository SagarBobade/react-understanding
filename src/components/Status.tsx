type myProps = {
   status: 'NS' | 'IP' | 'FN';
}

export const Status = (props: myProps) => {
    let message
    if(props.status === "NS")
    {
        message = "not started"
    }else if(props.status === "IP"){
        message = "in progress"
    } else
        message = "finished"

    return(
        <div>
            <h2> {message}</h2>
        </div>
    )

}