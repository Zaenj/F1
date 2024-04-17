import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';


export const apiSlice = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://ergast.com/api/f1/' }),
    endpoints: (builder) => ({
      getDriversBySeason: builder.query({
        query: (season) => `${season}/drivers.json`,
      }),
      getRaceSchedule: builder.query({
        query: (year) => `${year}/races.json`,
      }),
      getDriverDetails: builder.query({
        query: (driverId) => `drivers/${driverId}.json`
      }),
      getRaceDetail: builder.query({
        query: ({ season, round }) => `${season}/${round}.json`,
        getDriverSeasonDetails: builder.query({
            query: ({ driverId, season }) => `/${season}/drivers/${driverId}/driverStandings.json`
        }),
        
        
    }),
    
      // Add more queries as needed
    }),
  });
  
  export const { 
    useGetDriversBySeasonQuery,
    useGetRaceScheduleQuery,
    useGetRaceDetailQuery,
    useGetDriverDetailsQuery,
    useGetDriverSeasonDetailsQuery
    // export other hooks here
  } = apiSlice;
  