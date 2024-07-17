import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const EditHero = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [hero, setHero] = useState({ id: '', name: '' });

  useEffect(() => {
    // Simulating fetch from an API
    const fetchedHero = { id, name: `Hero ${id}` };
    setHero(fetchedHero);
  }, [id]);

  const handleChange = (e) => {
    setHero({ ...hero, name: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate saving data
    console.log('Saved hero:', hero);
    navigate('/heroes');
  };

  return (
    <div>
      <h2>Edit Hero</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" value={hero.name} onChange={handleChange} />
        </label>
        <button type="submit">Save</button>
      </form>
    </div>
  );
};

export default EditHero;
