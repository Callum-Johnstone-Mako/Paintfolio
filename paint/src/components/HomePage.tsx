import React from 'react';

const HomePage = () => {
  return (
    <div className="container mx-auto">
      <h1 className="text-4xl font-bold my-4">Welcome to Paintfolio</h1>
      <div>
        <button className="btn-blue">Start New Project</button>
      </div>
      <div>
        <button className="btn-blue">View Current Projects</button>
      </div>
      <div>
        <button className="btn-blue">View Completed Projects</button>
      </div>
    </div>
  );
};

export default HomePage;
