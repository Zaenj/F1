// Importerer React-biblioteket og nødvendige funktioner fra 'react-router-dom' og din egen 'apiSlice'.

import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useGetDriversBySeasonQuery } from '../features/api/apiSlice';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS


// Definerer en React-komponent ved navn 'Drivers'.
const Drivers = () => {
  
      // Henter 'season' fra URL-parameterne ved hjælp af 'useParams' hook. Dette 'season' bruges til at identificere hvilken sæson, der skal hentes data for.
  const { season } = useParams();
  // Bruger hooken 'useGetDriversBySeasonQuery' til at hente data for de kørere, der deltog i den valgte sæson. Data, fejl og indlæsningsstatus gemmes i variablerne 'data', 'error' og 'isLoading'.
  const { data, error, isLoading } = useGetDriversBySeasonQuery(season);

  // Hvis data indlæses, vises en besked om, at data indlæses.
  if (isLoading) return <div>Loading...</div>;
  // Hvis der opstår en fejl, vises en besked om, at der er opstået en fejl.
  if (error) return <div>Error: {error.message}</div>;
  // Hvis der ikke er nogen data, vises en besked om, at der ikke er nogen data tilgængelig.
  if (!data) return <div>No data available</div>;

  // Hvis data er indlæst, vises en liste over de kørere, der deltog i den valgte sæson.
  return (
    <div className="container mt-4">
      <h1>Drivers in {season}</h1>
      <ul className="list-group">
        {data.MRData.DriverTable.Drivers.map(driver => (
          <li key={driver.driverId} className="list-group-item d-flex justify-content-between align-items-center">
            {driver.givenName} {driver.familyName}
            <Link to={`/driver-details/${driver.driverId}`} className="btn btn-primary">View Details</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

// Eksporterer komponenten 'Drivers', så den kan importeres og bruges andre steder i applikationen.
export default Drivers;
