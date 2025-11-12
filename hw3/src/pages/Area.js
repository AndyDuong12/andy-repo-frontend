import React, { useEffect, useState } from 'react';
import getCountries from '../Api.js';
import { Pie } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  Title,
  CategoryScale,
  Colors,
} from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend, Title, CategoryScale, Colors);

export default function Area() {
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
        label: 'Area (km²)',
        data: countries.map((c) => c.area),
        backgroundColor: [
          'rgba(255, 99, 132, 0.6)',
          'rgba(54, 162, 235, 0.6)',
          'rgba(255, 206, 86, 0.6)',
          'rgba(75, 192, 192, 0.6)',
          'rgba(153, 102, 255, 0.6)',
          'rgba(255, 159, 64, 0.6)',
          'rgba(199, 199, 199, 0.6)',
          'rgba(255, 99, 255, 0.6)',
          'rgba(99, 255, 132, 0.6)',
          'rgba(0, 128, 255, 0.6)',
          'rgba(255, 204, 0, 0.6)',
          'rgba(255, 102, 102, 0.6)',
          'rgba(102, 255, 255, 0.6)',
          'rgba(102, 0, 204, 0.6)',
        ],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        labels: { color: "white" },
      },
      title: {
        display: true,
        text: 'Areas of Countries in South America',
        color: "white",
        font: {
          size: 24,
        },
        tooltip: {
          enabled: true,
          titleColor: "white",
        bodyColor: "white",
        },
      },
    },
  };

  return (
    <div className="area-chart">
      <h1>Areas of Countries in South America</h1>
      <br />
      <Pie data={data} options={options} />
    </div>
  );
}
