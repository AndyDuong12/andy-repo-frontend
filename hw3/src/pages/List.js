import React, { useEffect, useState } from 'react';
import getCountries from '../Api.js';

export default function List() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const data = await getCountries();
      setCountries(data);
    }
    fetchData();
  }, []);

  return (
    <div className="country-list">
      {countries.map((c) => (
        <div key={c.cca3} className="country-card">
          <img src={c.flags?.svg || ''} />
          <h3>{c.name.common}</h3>
          <p>
            <strong>Capital:</strong> {c.capital?.[0] || 'N/A'}
          </p>
          <p>
            <strong>Population:</strong>{' '}
            {c.population?.toLocaleString() || 'N/A'}
          </p>
          <p>
            <strong>Timezones:</strong> {c.timezones?.join(', ') || 'N/A'}
          </p>
        </div>
      ))}
    </div>
  );
}
