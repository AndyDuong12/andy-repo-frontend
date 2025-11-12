import React, { useEffect, useState } from 'react';
import getCountries from '../Api.js';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

export default function Population() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const data = await getCountries();
      setCountries(data);
    }
    fetchData();
  }, []);

  const labels = countries.map((c) => c.name.common);
  const data = {
    labels,
    datasets: [
      {
        label: 'Population',
        data: countries.map((c) => c.population),
        backgroundColor: '#00FF7F	',
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: 'Population per country in South America',
        color: 'white',
        font: {
          size: 24,
        },
        padding: {
          bottom: 20,
        },
      },
      legend: {
        display: false,
        labels: { color: 'white' },
      },
      tooltip: {
        enabled: true,
        titleColor: 'white',
        bodyColor: 'white',
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: 'Countries',
          color: 'white',
        },
        ticks: { color: 'white' },
        grid: { color: 'rgba(255,255,255,0.2)' },
      },
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: 'Population',
          color: 'white',
        },
        ticks: { color: 'white' },
        grid: { color: 'rgba(255,255,255,0.2)' },
      },
    },
  };

  return (
    <div className="population-chart">
      <h1>South America Population</h1>
      <br />
      <Bar data={data} options={options} />
    </div>
  );
}
