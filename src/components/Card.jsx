function Card({ planet }) {
  return (
    <div className="card">
      <h2>{planet.name}</h2>
      <h3> Distance from the sun: {planet.distance} Million kilometers </h3>
      <h3> Diameter: {planet.diameter} Kilometer</h3>
      <h3>Moons: {planet.moons}</h3>
      <h3>{planet.description}</h3>
    </div>
  );
}

export default Card;
