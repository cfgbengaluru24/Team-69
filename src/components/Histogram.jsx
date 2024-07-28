import React from 'react';
import { Bar } from 'react-chartjs-2';
import 'chart.js/auto'; // Ensure Chart.js is loaded

const fwlData = [
  { id: 1, name: 'Aarti Sharma', age: 30, location: 'Delhi', division: 'North', pincode: '110001', language: 'Hindi', education: 'Masters in Social Work', yearsOfExperience: 5 },
  { id: 2, name: 'Ravi Kumar', age: 28, location: 'Mumbai', division: 'West', pincode: '400001', language: 'Marathi', education: 'Bachelor in Nursing', yearsOfExperience: 4 },
  { id: 3, name: 'Sita Patel', age: 35, location: 'Ahmedabad', division: 'West', pincode: '380001', language: 'Gujarati', education: 'PhD in Community Health', yearsOfExperience: 7 },
  { id: 4, name: 'Manoj Singh', age: 32, location: 'Lucknow', division: 'North', pincode: '226001', language: 'Hindi', education: 'Bachelor in Public Health', yearsOfExperience: 6 },
  { id: 5, name: 'Pooja Desai', age: 29, location: 'Chennai', division: 'South', pincode: '600001', language: 'Tamil', education: 'Masters in Public Administration', yearsOfExperience: 5 },
  { id: 6, name: 'Ajay Mehta', age: 34, location: 'Bangalore', division: 'South', pincode: '560001', language: 'Kannada', education: 'Bachelor in Social Work', yearsOfExperience: 6 },
  { id: 7, name: 'Neha Gupta', age: 40, location: 'Hyderabad', division: 'South', pincode: '500001', language: 'Telugu', education: 'Doctorate in Social Sciences', yearsOfExperience: 10 },
  { id: 8, name: 'Sunil Yadav', age: 26, location: 'Kolkata', division: 'East', pincode: '700001', language: 'Bengali', education: 'Bachelor in Health Administration', yearsOfExperience: 3 },
  { id: 9, name: 'Kavita Rani', age: 31, location: 'Pune', division: 'West', pincode: '411001', language: 'Marathi', education: 'Masters in Community Health', yearsOfExperience: 5 },
  { id: 10, name: 'Rajesh Rathi', age: 27, location: 'Jaipur', division: 'North', pincode: '302001', language: 'Hindi', education: 'Bachelor in Health Services', yearsOfExperience: 4 },
];

const aggregateData = (data) => {
  // Aggregate data by division
  const divisionCount = data.reduce((acc, item) => {
    acc[item.division] = (acc[item.division] || 0) + 1;
    return acc;
  }, {});

  // Aggregate data by language
  const languageCount = data.reduce((acc, item) => {
    acc[item.language] = (acc[item.language] || 0) + 1;
    return acc;
  }, {});

  // Aggregate data by age groups
  const ageGroups = { '20-30': 0, '31-40': 0, '41-50': 0, '51+': 0 };
  data.forEach(item => {
    if (item.age >= 20 && item.age <= 30) ageGroups['20-30']++;
    else if (item.age >= 31 && item.age <= 40) ageGroups['31-40']++;
    else if (item.age >= 41 && item.age <= 50) ageGroups['41-50']++;
    else if (item.age >= 51) ageGroups['51+']++;
  });

  return { divisionCount, languageCount, ageGroups };
};

const DivisionHistogram = () => {
  const { divisionCount, languageCount, ageGroups } = aggregateData(fwlData);

  const dataDivision = {
    labels: Object.keys(divisionCount),
    datasets: [
      {
        label: 'Number of FWLs by Division',
        data: Object.values(divisionCount),
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
    ],
  };

  const dataLanguage = {
    labels: Object.keys(languageCount),
    datasets: [
      {
        label: 'Number of FWLs by Language',
        data: Object.values(languageCount),
        backgroundColor: 'rgba(153, 102, 255, 0.2)',
        borderColor: 'rgba(153, 102, 255, 1)',
        borderWidth: 1,
      },
    ],
  };

  const dataAge = {
    labels: Object.keys(ageGroups),
    datasets: [
      {
        label: 'Number of FWLs by Age Group',
        data: Object.values(ageGroups),
        backgroundColor: 'rgba(255, 159, 64, 0.2)',
        borderColor: 'rgba(255, 159, 64, 1)',
        borderWidth: 1,
      },
    ],
  };

  const options = {
    maintainAspectRatio: false,
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      tooltip: {
        callbacks: {
          label: function (tooltipItem) {
            return tooltipItem.label + ': ' + tooltipItem.raw;
          },
        },
      },
    },
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow-lg mt-8">
      <h2 className="text-xl font-bold text-navy-700 mb-4">Histograms</h2>
      <div className="grid gap-6 md:grid-cols-3">
        <div className="h-96">
          <h3 className="text-lg font-bold mb-2">Division Distribution</h3>
          <Bar data={dataDivision} options={options} />
        </div>
        <div className="h-96">
          <h3 className="text-lg font-bold mb-2">Language Distribution</h3>
          <Bar data={dataLanguage} options={options} />
        </div>
        <div className="h-96">
          <h3 className="text-lg font-bold mb-2">Age Group Distribution</h3>
          <Bar data={dataAge} options={options} />
        </div>
      </div>
    </div>
  );
};

export default DivisionHistogram;
