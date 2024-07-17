
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function HeroDetail() {
  const { id } = useParams();
  const [hero, setHero] = useState(null);

  useEffect(() => {
    fetch('/heroes.json')
      .then(response => response.json())
      .then(data => {
        const foundHero = data.find(hero => hero.id === parseInt(id));
        setHero(foundHero);
      })
      .catch(error => console.error('Error fetching hero:', error));
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setHero({ ...hero, [name]: value });
  };

  const handleSave = () => {
    fetch('/heroes.json', {
      method: 'POST', // or 'PUT'
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(hero),
    })
    .then(response => response.json())
    .then(data => {
      console.log('Success:', data);
    })
    .catch((error) => {
      console.error('Error:', error);
    });
  };

  if (!hero) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>{hero.name} Details</h2>
      <div>
        <label>
          Hero name:
          <input name="name" value={hero.name} onChange={handleChange} />
        </label>
      </div>
      <button onClick={handleSave}>Save</button>
    </div>
  );
}

export default HeroDetail;
