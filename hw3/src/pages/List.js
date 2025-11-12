import React, { useEffect, useState } from "react";
import getCountries from "../Api.js";

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
      <h1>List of South America countries</h1>
      <div className="country-list">
        {countries.map((c) => (
          <div key={c.cca3} className="country-card">
            <img src={c.flags?.svg || ""} alt={`${c.name.common} flag`} />
            <h2>{c.name.common}</h2>
            <p>
              <strong>Capital:</strong> {c.capital?.[0] || "N/A"}
            </p>
            <p>
              <strong>Population:</strong>{" "}
              {c.population?.toLocaleString() || "N/A"}
            </p>
            <p>
              <strong>Timezones:</strong> {c.timezones?.join(", ") || "N/A"}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
