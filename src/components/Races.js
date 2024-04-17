import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useGetRaceScheduleQuery } from '../features/api/apiSlice';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

const Races = () => {
  const { year } = useParams();
  const { data, error, isLoading } = useGetRaceScheduleQuery(year);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.toString()}</div>;

  return (
    <div className="container mt-4">
      <h1 className="mb-4 text-center">Race Schedule for {year}</h1>
      <ul className="list-group">
        {data?.MRData?.RaceTable?.Races.map((race) => (
          <li key={race.round} className="list-group-item d-flex justify-content-between align-items-center">
            {race.raceName} - {race.date}
            <Link className="btn btn-primary btn-sm" to={`/race/${year}/${race.round}`}>View Details</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Races;
