import React from 'react';
import { useParams } from 'react-router-dom';
import { useGetRaceDetailQuery } from '../features/api/apiSlice';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS



// Definerer en React-komponent ved navn 'RaceDetail'.
const RaceDetail = () => {
  // Henter 'season' og 'round' fra URL-parameterne ved hjælp af 'useParams' hook. Disse bruges til at identificere hvilken sæson og runde, der skal hentes data for.
  const { season, round } = useParams();
  // Bruger hooken 'useGetRaceDetailQuery' til at hente data for den valgte runde i den valgte sæson. Data, fejl og indlæsningsstatus gemmes i variablerne 'data', 'error' og 'isLoading'.
  const { data, error, isLoading } = useGetRaceDetailQuery({ season, round });

  if (isLoading) return <div>Loading race details...</div>;
  if (error) return <div>Error loading details: {error.message}</div>;
  if (!data || !data.MRData.RaceTable.Races.length) return <div>No details available for this race.</div>;

  // Hvis data er indlæst, vises detaljer om den valgte runde i den valgte sæson.
  const race = data.MRData.RaceTable.Races[0];
  // Extract the circuit information from
  const circuit = race.Circuit;
  
// Return the JSX for the RaceDetail component. 
  return (
    <div className="container mt-4">
    <h1 className="mb-4 text-center">{race.raceName} Details</h1>
    <div className="card">
      <div className="card-body">
        <p>Date: {race.date}</p>
        <p>Circuit: {circuit.circuitName}</p>
        <p>Location: {circuit.Location.locality}, {circuit.Location.country}</p>
        <p>Circuit Length: {circuit.CircuitLength ? `${circuit.CircuitLength} km` : <span className="not-available">Not available</span>}</p>
        <p>Number of Laps: {race.laps ? race.laps : <span className="not-available">Not available</span>}</p>
        <p>Total Distance: {race.distance ? `${race.distance} km` : <span className="not-available">Not available</span>}</p>
        <p>Time of the Race: {race.time ? race.time : <span className="not-available">Not available</span>}</p>
        <p>Weather Conditions: {race.weather ? `${race.weather.status} - ${race.weather.temperature}°C` : <span className="not-available">Not available</span>}</p>
        
      </div>
    </div>
  </div>
  );
};

export default RaceDetail;
