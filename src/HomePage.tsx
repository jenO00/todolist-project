import React from 'react';
import logo from './logo.svg';
import './HomePage.css';

function HomePage() {
  return (
    <div className="homepage-container">
        <div className = "grid1-home-page-header">
            <h1>TO DO LIST</h1>
        </div>

        <div className = "grid2-to-do-list">
            <h2> here display what to do</h2>
        </div>

        <div className = "grid3-add-list">
            <h3> here add to dos</h3>
        </div>
    </div>
  );
}

export default HomePage;
