function Image(props){
    return <img src={props.src} style={{
        width: "200px",
        height: "200px",
        objectFit: "cover"
    }} alt={props.alt}/>
}

export default Image