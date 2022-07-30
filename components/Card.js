const Card = ({ event }) => {
  return (
    <div className="card border-info h-100 text-body">
      {/* <img src={event.name} className="card-img-top" alt="character" /> */}
      <div className="card-body">
        <h6 className="card-subtitle text-muted mb-2">イベント名</h6>
        <h5 className="card-title, mb-4">{event.name}</h5>
        <h6 className="card-subtitle text-muted mb-2">順位</h6>
        {event.standings.nodes.map((item, idx) => (
          <p className="card-text" key={idx}>
            {item.standing} - {item.entrant.name}
          </p>
        ))}
      </div>
    </div>
  );
};

export default Card;
