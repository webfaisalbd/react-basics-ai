
function Card(props) {
    // console.log(props);
    const { title, desc} = props;

    return (
      <div className="mainCard">
        <div className='card'>
          <div className="cardTitle">{title}</div>
          <div className="cardDesignation">{desc}</div>
        </div>
      </div>
    );
  }

  export default Card;