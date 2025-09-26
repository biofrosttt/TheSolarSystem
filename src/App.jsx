import { useState } from "react";
import Button from "./components/Button";
import Card from "./components/Card";
import { planets } from "./data";

function App() {
  const [selectedPlanet, setSelectedPlanet] = useState(null);

  function handleClick(planetName) {
    const planet = planets.find((p) => p.name === planetName);
    setSelectedPlanet(planet);
  }

  return (
    <div className="container">
      <h1>Solar System</h1>
      {selectedPlanet && <Card planet={selectedPlanet} />}

      <div className="button-container">
        {planets.map((planet) => (
          <Button key={planet.name} onSelect={() => handleClick(planet.name)}>
            {planet.name}
          </Button>
        ))}
      </div>
    </div>
  );
}

export default App;
