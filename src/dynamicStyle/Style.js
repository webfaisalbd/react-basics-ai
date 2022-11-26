function Style(){
    const error = false;
    return (
        <>
            <h1 style={{color: error ? "red" : "green", background: error ? "yellow" : "lightblue"}}>Welcome</h1>
        </>
    )
}
export default Style;