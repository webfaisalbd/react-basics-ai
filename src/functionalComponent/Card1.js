function Card1(props) {
    const {name, dept} = props;
    return (
        <>
        <div>Hello Functional Component</div>
        <h1>{name}</h1>
        <h3>{dept}</h3>
        </>
    )
}

export default Card1;