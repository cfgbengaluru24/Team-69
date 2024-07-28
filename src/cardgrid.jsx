import React from 'react';
import Card from './card';

const CardGrid = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
      <Card title="Registered Users" number="23" link="#pending" />
      <Card title="Approved Applications" number="47" link="#approved" />
      <Card title="Awaiting Applications" number="5" link="#discrepancies" />
    </div>
  );
};

export default CardGrid;
