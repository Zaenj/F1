// Importerer React-biblioteket og nødvendige funktioner fra 'react-router-dom' og din egen 'apiSlice'.

import React from 'react';
import { useParams } from 'react-router-dom';
import { useGetDriverDetailsQuery } from '../features/api/apiSlice';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS


// Definerer en React-komponent ved navn 'DriverDetail'.
const DriverDetail = () => {

    // Henter 'driverId' fra URL-parameterne ved hjælp af 'useParams' hook. Dette 'driverId' bruges til at identificere hvilken kører, der skal hentes data for.
  const { driverId } = useParams();
  // Bruger hooken 'useGetDriverDetailsQuery' til at hente data for den valgte kører. Data, fejl og indlæsningsstatus gemmes i variablerne 'data', 'error' og 'isLoading'.
  const { data, error, isLoading } = useGetDriverDetailsQuery(driverId);

  // Hvis data indlæses, vises en besked om, at data indlæses.
  if (isLoading) return <div>Loading...</div>;
  // Hvis der opstår en fejl, vises en besked om, at der er opstået en fejl.
  if (error) return <div>Error loading details: {error.message}</div>;
  // Hvis der ikke er nogen data, vises en besked om, at der ikke er nogen data tilgængelig.
  if (!data) return <div>No driver data available</div>;

  // Hvis data er indlæst, vises detaljer om den valgte kører.
  return (
    <div className="container mt-4">
      <h1>Driver Details</h1>
      <div className="card">
        <div className="card-body">
          <h2>{data.givenName} {data.familyName}</h2>
          <p>Given Name: {data.MRData.DriverTable.Drivers[0].givenName}</p>
          <p>Family Name: {data.MRData.DriverTable.Drivers[0].familyName}</p>
          <p>Permanent Number: {data.MRData.DriverTable.Drivers[0].permanentNumber }</p>
          <p>Code: {data.MRData.DriverTable.Drivers[0].code}</p>
          <p>URL: {data.MRData.DriverTable.Drivers[0].url}</p>
          <p>Nationality: {data.MRData.DriverTable.Drivers[0].nationality}</p>
          <p>Date of Birth: {data.MRData.DriverTable.Drivers[0].dateOfBirth}</p>


        </div>
      </div>
    </div>
  );
};

// Eksporterer komponenten 'DriverDetail', så den kan importeres og bruges andre steder i applikationen.
export default DriverDetail;
