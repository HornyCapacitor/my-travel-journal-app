function Card(props) {
  return (
    <div className="card">
      <img src={`../${props.item.image}`} className="card-image"></img>
      <div className="card-information">
        <div className="card-section-one">
          <img src="../pin-location-icon.svg" className="card-pin-location-icon"></img>
          <span className="card-location-name">{props.item.location}</span>
          <span className="card-google-location"><a href={props.item.googleMapsLink} target="_blank">View on Google Maps</a></span>
        </div>
        <div className="card-attraction-name">
          {props.item.name}
        </div>
        <div className="card-date">
          {`${props.item.date.beginning} - ${props.item.date.expiration}`}
        </div>
        <div className="card-description">
          {props.item.description}
        </div>
      </div>
    </div>
  )
}

export default Card