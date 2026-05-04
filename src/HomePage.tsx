import React from 'react';
import './HomePage.css';
import ListItem from './components/ListItem';

function HomePage() {
  return (
    <div className="homepage-container">
        <div className = "grid1-home-page-header">
            <p id="welcome-text" >TO DO LIST</p>
        </div>

        <div className = "grid2-to-do-list">
            <div id="paper">
                <p>Here is the to do list</p>
            </div>
        </div>

        <div className = "grid3-add-list">
            <p id="add-text"> Lägg till nåt nytt att göra! </p>
            <div id ="add-container">
                <input type="text" id="add-input" placeholder="Laga matlådor"></input>
                
            </div>

        </div>
    </div>
  );
}

export default HomePage;
