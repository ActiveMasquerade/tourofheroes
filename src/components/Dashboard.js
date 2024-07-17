
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Dashboard() {
  const [heroes, setHeroes] = useState([]);

  useEffect(() => {
    fetch('/heroes.json')
      .then(response => response.json())
      .then(data => setHeroes(data))
      .catch(error => console.error('Error fetching heroes:', error));
  }, []);

  return (
    <div>
      <h2>Top Heroes</h2>
      <div className="heroes-menu">
        {heroes.slice(0, 4).map(hero => (
          <Link key={hero.id} to={`/heroes/${hero.id}`}>{hero.name}</Link>
        ))}
      </div>
    </div>
  );
}

export default Dashboard;
