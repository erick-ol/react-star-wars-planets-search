import React, { useContext, useState, useEffect } from 'react';
import { GlobalContext } from '../context/GlobalStorage';

const Row = () => {
  const [filteredPlanets, setFilteredPlanets] = useState(null);
  const { filter, planets } = useContext(GlobalContext);
  const { name } = filter.filters.filterByName;

  useEffect(() => {
    if (planets) {
      const aux = planets.filter((planet) => planet.name.includes(name));
      setFilteredPlanets(aux);
    }
  }, [planets, name]);

  return (
    <>
      {}
      { filteredPlanets && filteredPlanets.map((planet, index) => {
        const {
          name: planetName,
          rotation_period: rotationPeriod,
          orbital_period: orbitalPeriod,
          diameter,
          climate,
          gravity,
          terrain,
          surface_water: surfaceWater,
          population,
          url,
        } = planet;
        return (
          <tr key={ index }>
            <td>{planetName}</td>
            <td>{rotationPeriod}</td>
            <td>{orbitalPeriod}</td>
            <td>{diameter}</td>
            <td>{climate}</td>
            <td>{gravity}</td>
            <td>{terrain}</td>
            <td>{surfaceWater}</td>
            <td>{population}</td>
            <td>films</td>
            <td>created</td>
            <td>edited</td>
            <td><a href={ url } target="_blank" rel="noreferrer">API</a></td>
          </tr>
        );
      })}
    </>
  );
};

export default Row;
