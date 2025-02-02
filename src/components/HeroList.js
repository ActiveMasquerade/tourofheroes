
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function HeroList() {
  const [heroes, setHeroes] = useState([]);

  useEffect(() => {
    fetch('/heroes.json')
      .then(response => response.json())
      .then(data => setHeroes(data))
      .catch(error => console.error('Error fetching heroes:', error));
  }, []);

  return (
    <div>
      <h2>My Heroes</h2>
      <ul>
        {heroes.map(hero => (
          <li key={hero.id}>
            <Link to={`/heroes/${hero.id}`}>{hero.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default HeroList;
