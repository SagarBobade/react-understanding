type ContainerProps = {
    styles: React.CSSProperties
}


export const Container = ({styles}: ContainerProps) => { // we can directly write properties, ex. instead of props.styles
    return(
        <div style={styles}>Text content goes here</div>
    )
}