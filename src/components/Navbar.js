
// Importerer React-biblioteket og nødvendige funktioner fra 'react-router-dom' og din egen 'apiSlice'.
import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import f1Logo from '../assets/download.png'; // Import the F1 logo
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS



// Definerer en React-komponent ved navn 'Navbar'.
const Navbar = () => {
  // Bruger 'useState' hook til at oprette en 'year' variabel, der gemmer værdien '2021'. Bruges til at holde styr på hvilket år, der vises data for.
  const [year, setYear] = useState('2021');
  // Bruger 'useNavigate' hook til at oprette en 'navigate' funktion, der kan bruges til at navigere til en anden URL.

  const navigate = useNavigate();

  // Definerer en funktion ved navn 'handleYearChange', der tager et 'event' som argument.
  const handleYearChange = (event) => {
    // Opdaterer 'year' variablen med den valgte værdi fra dropdown-menuen.
    setYear(event.target.value);
    // Navigerer til den valgte URL ved hjælp af 'navigate' funktionen.
    navigate(`/races/${event.target.value}`);  // Example to navigate to races, change as needed
  };

  // Declare the startYear variable
  const startYear = 1950; // Formula 1 start year

  // Return the JSX for the Navbar component with the F1 logo, links to Drivers and constructor listings, a select element for choosing race year, and a function to handle the year change
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <div className="container-fluid">
    <NavLink className="navbar-brand" to="/">
        <img src={f1Logo} alt="Formula 1 Logo" style={{ height: '50px' }} />
      </NavLink>
      <div className="collapse navbar-collapse">
        <div className="navbar-nav">
          <NavLink className="nav-item nav-link" to={`/drivers/${year}`}>Drivers</NavLink>
          <NavLink className="nav-item nav-link" to={`/races/${year}`}>Races</NavLink>
        </div>
        <select className="form-select w-auto" value={year} onChange={handleYearChange}>
          {Array.from({ length: 2021 - startYear + 1 }, (_, index) => (
            <option key={2021 - index} value={2021 - index}>
              {2021 - index}
            </option>
          ))}
        </select>
      </div>
    </div>
  </nav>
  );
};

// Eksporterer komponenten 'Navbar', så den kan importeres og bruges andre steder i applikationen.
export default Navbar;
